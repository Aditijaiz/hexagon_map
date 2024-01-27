import React from "react";

import { Text } from "components";

const Footer = (props) => {
  return (
    <>
      <footer className={props.className}>
        <div className="h-[38px] relative w-full">
          <div className="flex flex-row md:gap-10 h-full items-center justify-between m-auto w-[94%]">
            <Text
              className="text-[10px] text-blue_gray-600 tracking-[1.50px] uppercase"
              size="txtRobotoBold10Bluegray600"
            >
              Orion data visualisation
            </Text>
            <Text
              className="text-[10px] text-blue_gray-600 text-right tracking-[1.50px] uppercase"
              size="txtRobotoBold10Bluegray600"
            >
              2019
            </Text>
          </div>
          <div className="absolute bg-white-A700 flex flex-row md:gap-10 h-full inset-[0] items-center justify-between m-auto p-3 w-full">
            <Text
              className="ml-[54px] text-[10px] text-blue_gray-600 tracking-[1.50px] uppercase"
              size="txtRobotoBold10Bluegray600"
            >
              Orion data visualisation
            </Text>
            <Text
              className="mr-[54px] text-[10px] text-blue_gray-600 text-right tracking-[1.50px] uppercase"
              size="txtRobotoBold10Bluegray600"
            >
              2022
            </Text>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.defaultProps = {};

export default Footer;
