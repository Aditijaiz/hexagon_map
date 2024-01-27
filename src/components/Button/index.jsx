import React from "react";
import PropTypes from "prop-types";

const shapes = { round: "rounded-[12px]" };
const variants = {
  fill: {
    indigo_A700_02: "bg-indigo-A700_02",
    deep_purple_A200: "bg-deep_purple-A200",
    gray_50_01: "bg-gray-50_01",
    green_A200: "bg-green-A200",
    blue_300: "bg-blue-300",
    red_A100: "bg-red-A100",
    purple_100: "bg-purple-100",
    orange_A200: "bg-orange-A200",
    blue_300_01: "bg-blue-300_01",
    white_A700: "bg-white-A700 shadow-bs",
  },
};
const sizes = { xs: "p-[7px]", sm: "p-[11px]", md: "p-[18px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill"]),
  color: PropTypes.oneOf([
    "indigo_A700_02",
    "deep_purple_A200",
    "gray_50_01",
    "green_A200",
    "blue_300",
    "red_A100",
    "purple_100",
    "orange_A200",
    "blue_300_01",
    "white_A700",
  ]),
};

export { Button };
