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

export const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const Heading = styled.h1`
  margin-left: 16px;
  font-size: 32px;
  color: ${theme.text.default};
  font-weight: 600;
  line-height: 1;
`;

export const StyledHeader = styled.div`
  display: flex;
  padding: 32px;
  border-bottom: 1px solid ${theme.bg.border};
  background: ${theme.bg.default};
  width: 100%;
  align-items: center;
  flex: none;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  padding: 8px;
  justify-content: center;
  align-items: flex-start;
  @media (max-width: 768px) {
    padding: 8px 0;
  }
`;

export const SectionCard = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(223, 231, 239);
  border-image: initial;
  background: rgb(255, 255, 255);
  padding: 16px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  flex: 1 0 33%;
  max-width: 600px;
  @media (max-width: 768px) {
    flex: 1 0 100%;
    padding: 0;
    max-width: 100%;
    &:first-of-type {
      padding-top: 8px;
    }
  }
`;
