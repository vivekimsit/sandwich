import * as React from "react";

export const FauxOutlineButton = (props: any) => (
  <StyledFauxOutlineButton
    disabled={props.loading}
    data-cy={props.dataCy}
    {...props}
  >
    {props.icon ? (
      props.loading ? (
        <SpinnerContainer>
          <Spinner color="brand.alt" size={props.large ? "18" : "14"} />
        </SpinnerContainer>
      ) : (
        <Icon glyph={props.icon} />
      )
    ) : (
      ""
    )}
    {props.loading &&
      !props.icon && (
        <Spinner color="brand.alt" size={props.large ? "18" : "14"} />
      )}
    <Label loading={props.loading} hasIcon={props.icon}>
      {props.children}
    </Label>
  </StyledFauxOutlineButton>
);
