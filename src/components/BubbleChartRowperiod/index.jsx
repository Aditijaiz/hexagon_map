import React from "react";

import { Button, Text } from "components";

const BubbleChartRowperiod = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col items-center justify-end p-[5px]">
          <Text
            className="mt-[3px] text-black-900 text-center text-sm tracking-[0.44px]"
            size="txtRobotoRegular14Black900"
          >
            {props?.period}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-end p-[5px]">
          <Text
            className="mt-[3px] text-black-900 text-center text-sm tracking-[0.44px]"
            size="txtRobotoRegular14Black900"
          >
            {props?.distance}
          </Text>
        </div>
        <Button
          className="!text-white-A700 cursor-pointer font-bold font-mulish leading-[normal] min-w-[53px] rounded-[16px] text-[13px] text-center tracking-[0.02px]"
          color="indigo_A700_02"
          size="xs"
          variant="fill"
        >
          {props?.onclick}
        </Button>
        <div className="flex flex-col items-center justify-end p-[5px]">
          <Text
            className="h-[17px] mt-[3px] text-black-900 text-center text-sm tracking-[0.44px]"
            size="txtRobotoRegular14Black900"
          >
            {props?.periodOne}
          </Text>
        </div>
        <div className="flex flex-col items-center justify-end p-[5px]">
          <Text
            className="mt-1 text-black-900 text-center text-sm tracking-[0.44px]"
            size="txtRobotoRegular14Black900"
          >
            {props?.priceSeven}
          </Text>
        </div>
      </div>
    </>
  );
};

BubbleChartRowperiod.defaultProps = {
  period: "1W",
  distance: "1M",
  onclick: "3M",
  periodOne: "1Y",
  priceSeven: "ALL",
};

export default BubbleChartRowperiod;
