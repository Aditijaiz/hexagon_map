import React from "react";

const sizeClasses = {
  txtRobotoRegular14GreenA700: "font-normal font-roboto",
  txtRobotoRegular161WhiteA700: "font-normal font-roboto",
  txtRobotoRegular14GreenA400: "font-normal font-roboto",
  txtPoppinsSemiBold184WhiteA700: "font-poppins font-semibold",
  txtPoppinsLight16: "font-light font-poppins",
  txtRobotoRegular14Bluegray300: "font-normal font-roboto",
  txtPoppinsMedium72: "font-medium font-poppins",
  txtRobotoBold10Bluegray600: "font-bold font-roboto",
  txtPoppinsLight16Indigo80090: "font-light font-poppins",
  txtRobotoRegular12WhiteA70090: "font-normal font-roboto",
  txtPoppinsRegular34: "font-normal font-poppins",
  txtRobotoRegular14Black900: "font-normal font-roboto",
  txtPoppinsLight16WhiteA700: "font-light font-poppins",
  txtRobotoRegular12Indigo80090: "font-normal font-roboto",
  txtRobotoRegular20: "font-normal font-roboto",
  txtPoppinsLight24: "font-light font-poppins",
  txtRobotoRegular14Indigo300: "font-normal font-roboto",
  txtPoppinsLight16Indigo800: "font-light font-poppins",
  txtRobotoRegular14Indigo50: "font-normal font-roboto",
  txtPoppinsRegular34WhiteA700: "font-normal font-poppins",
  txtPoppinsLight16Black900: "font-light font-poppins",
  txtPoppinsLight60: "font-light font-poppins",
  txtPoppinsSemiBold20WhiteA700: "font-poppins font-semibold",
  txtOpenSansBold10: "font-bold font-opensans",
  txtRobotoRegular12: "font-normal font-roboto",
  txtRobotoRegular14: "font-normal font-roboto",
  txtPoppinsSemiBold20: "font-poppins font-semibold",
  txtPoppinsSemiBold22: "font-poppins font-semibold",
  txtPoppinsSemiBold184: "font-poppins font-semibold",
  txtRobotoRegular161: "font-normal font-roboto",
  txtRobotoRegular14Indigo80090: "font-normal font-roboto",
  txtArchivoVFBetaRegular2051: "font-archivo font-normal",
  txtRobotoBold10: "font-bold font-roboto",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
