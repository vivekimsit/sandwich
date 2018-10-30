import * as React from "react";
import { FieldProps } from "formik";
import Dropzone from "react-dropzone";
import { Button } from "antd";

export const DropzoneField: React.SFC<FieldProps<any>> = ({
  field: { name, value },
  form: { setFieldValue, values, setValues }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => {
  const pUrl = (value ? value.preview : null) || values.pictureUrl || value;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {!pUrl && (
        <Dropzone
          accept="image/jpeg, image/png"
          multiple={false}
          onDrop={([file]) => {
            setFieldValue(name, file);
          }}
          {...props}
        >
          <p>
            Try dropping some files here, or click to select files to upload.
          </p>
        </Dropzone>
      )}
      {pUrl && (
        <img
          src={pUrl}
          style={{
            maxHeight: 200,
            marginBottom: 10,
            marginTop: 10
          }}
        />
      )}
      <Button
        onClick={() =>
          setValues({
            ...values,
            pictureUrl: null,
            picture: null
          })
        }
      >
        Remove
      </Button>
    </div>
  );
};
