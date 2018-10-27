import styled, { css } from "styled-components";
import theme from "../../theme";

interface Props {
  disabled: boolean | null;
}

export const StyledLabel = styled.label<Props>`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 12px;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: -0.4px;
  color: ${theme.text.default};
  position: relative;

  a {
    text-decoration: underline;
  }

  &:hover > input,
  &:hover > textarea {
    border-color: ${props =>
      props.disabled ? props.theme.bg.border : props.theme.text.alt};
  }

  &:hover > input:focus,
  &:hover > textarea:focus {
    border-color: ${props =>
      props.disabled ? props.theme.bg.inactive : props.theme.brand.alt};
  }
`;

export const StyledPrefixLabel = styled.label<Props>`
  display: flex;
  width: 100%;
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
  color: ${theme.text.placeholder};
  white-space: nowrap;
  text-overflow: ellipsis;

  > input {
    margin-left: 2px;
  }

  &:hover > input {
    border-color: ${props =>
      props.disabled ? props.theme.bg.inactive : props.theme.text.alt};
  }
`;

export const StyledInput = styled.input`
  flex: 1 0 auto;
  background: ${props =>
    props.disabled ? props.theme.bg.wash : props.theme.bg.default};
  font-weight: 500;
  width: 100%;
  font-size: 14px;
  border: 2px solid
    ${props =>
      props.disabled ? props.theme.bg.border : props.theme.bg.inactive};
  border-radius: 4px;
  padding: 8px 12px;
  margin-top: 2px;
  box-shadow: none;

  ${props =>
    props.type === "checkbox" &&
    css`
      flex: initial;
      width: initial;
      margin-right: 0.5em;
    `} &::placeholder {
    color: ${theme.text.placeholder};
  }
  &::-webkit-input-placeholder {
    color: ${theme.text.placeholder};
  }
  &:-moz-placeholder {
    color: ${theme.text.placeholder};
  }
  &:-ms-input-placeholder {
    color: ${theme.text.placeholder};
  }

  &[type="file"] {
    position: absolute;
    left: -9999px;
    top: -9999px;
    visibility: hidden;
  }
`;

interface InputOverlayProps {
  type?: string;
  size?: string;
  visible: boolean;
  children: any;
}

export const InputOverlay = styled.div<InputOverlayProps>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${theme.text.reverse};
  padding: 8px;
  border-radius: ${props =>
    props.type === "user" ? `${props.size}px` : "8px"};
  opacity: ${props => (props.visible ? "1" : "0")};
  &:hover {
    opacity: 1;
    + img,
    + div {
      opacity: 0.25;
    }
  }
`;

export const StyledHiddenInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const CoverInputLabel = styled.label`
  position: relative;
  height: 96px;
  width: 100%;
  margin-top: 8px;
  border-radius: 8px;
  background-color: ${theme.bg.reverse};
`;

interface CoverImageProps {
  src: string;
}

export const CoverImage = styled.div<CoverImageProps>`
  background-color: ${theme.brand.default};
  background-image: url('${props => props.src}');
  background-position: center;
  background-size: cover;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 96px;
  border-radius: 8px;
`;
