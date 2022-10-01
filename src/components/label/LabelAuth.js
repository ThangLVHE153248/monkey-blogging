import React from "react";
import Label from "components/label/Label";

const LabelAuth = ({ children, ...props }) => {
  return (
    <>
      <Label className="block text-dark_1 font-semibold mb-3" {...props}>
        {children}
      </Label>
    </>
  );
};

export default LabelAuth;
