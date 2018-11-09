import * as React from "react";

import {
  CoverInputLabel,
  CoverImage,
  InputOverlay,
  StyledHiddenInput
} from "./style";

interface Props {
  defaultValue: string;
  onChange: (e: any) => any;
  preview?: boolean;
}

export const CoverInput: React.SFC<Props> = props => {
  return (
    <CoverInputLabel>
      <InputOverlay
        visible={!props.defaultValue || props.defaultValue.length === 1}
      >
        <span>Add Cover Photo</span>
      </InputOverlay>
      <CoverImage
        src={
          props.defaultValue
            ? `${props.defaultValue}${props.preview ? "" : "?w=320&dpr=2"}`
            : ""
        }
        role="presentation"
      />
      <StyledHiddenInput
        type="file"
        id="file"
        name="file"
        accept={".png, .jpg, .jpeg"}
        multiple={false}
        onChange={props.onChange}
      />
    </CoverInputLabel>
  );
};
