import React from "react";

import { Line, List, Text } from "components";

const WorldHexagonMapOneWidgetlsize = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row gap-6 items-start justify-start">
          <Text
            className="text-[18.4px] text-gray-900 tracking-[0.11px] w-auto"
            size="txtPoppinsSemiBold184"
          >
            {props?.title}
          </Text>
          <List
            className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 grid-cols-4 w-[54%] md:w-full"
            orientation="horizontal"
          >
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <div className="bg-deep_purple-300 h-3 rounded-[50%] w-3"></div>
              <Text
                className="text-[16.1px] text-blue_gray-800 tracking-[0.11px] w-auto"
                size="txtRobotoRegular161"
              >
                {props?.marketingsales1}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <div className="bg-yellow-500 h-3 rounded-[50%] w-3"></div>
              <Text
                className="text-[16.1px] text-blue_gray-800 tracking-[0.11px] w-auto"
                size="txtRobotoRegular161"
              >
                {props?.marketingsales2}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <div className="bg-red-300 h-3 rounded-[50%] w-3"></div>
              <Text
                className="text-[16.1px] text-blue_gray-800 tracking-[0.11px] w-auto"
                size="txtRobotoRegular161"
              >
                {props?.marketingsales3}
              </Text>
            </div>
            <div className="flex flex-row gap-1 items-center justify-start w-auto">
              <div className="bg-deep_purple-A200_01 h-3 rounded-[50%] w-3"></div>
              <Text
                className="text-[16.1px] text-blue_gray-800 tracking-[0.11px] w-auto"
                size="txtRobotoRegular161"
              >
                {props?.marketingsales4}
              </Text>
            </div>
          </List>
        </div>
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex md:flex-col flex-row gap-[19px] items-start justify-between w-full">
            <div className="flex md:flex-1 flex-col gap-[47px] items-center justify-start w-[4%] md:w-full">
              <Text
                className="text-base text-indigo-800_90 tracking-[0.44px]"
                size="txtPoppinsLight16Indigo80090"
              >
                {props?.p1k}
              </Text>
              <div className="flex flex-col gap-[46px] items-start justify-start w-full">
                <Text
                  className="text-base text-indigo-800_90 tracking-[0.44px]"
                  size="txtPoppinsLight16Indigo80090"
                >
                  {props?.eighthundred}
                </Text>
                <Text
                  className="text-base text-indigo-800_90 tracking-[0.44px]"
                  size="txtPoppinsLight16Indigo80090"
                >
                  {props?.sixhundred}
                </Text>
                <Text
                  className="text-base text-indigo-800_90 tracking-[0.44px]"
                  size="txtPoppinsLight16Indigo80090"
                >
                  {props?.fourhundred}
                </Text>
                <Text
                  className="text-base text-indigo-800_90 tracking-[0.44px]"
                  size="txtPoppinsLight16Indigo80090"
                >
                  {props?.twohundred}
                </Text>
                <Text
                  className="md:ml-[0] ml-[18px] text-base text-indigo-800_90 tracking-[0.44px]"
                  size="txtPoppinsLight16Indigo80090"
                >
                  {props?.zero}
                </Text>
              </div>
            </div>
            <div className="flex md:flex-1 md:flex-col flex-row gap-[18px] items-center justify-between w-[95%] md:w-full">
              <div className="flex flex-col gap-[13px] items-center justify-start w-[3%] md:w-full">
                <Line className="bg-gray-100 h-96 w-px" />
                <Text
                  className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                  size="txtPoppinsLight16Indigo80090"
                >
                  {props?.nameone}
                </Text>
              </div>
              <div className="h-[423px] md:h-[568px] relative w-[96%] md:w-full">
                <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-[96%]">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-col gap-3 items-center justify-start pb-0.5 w-[4%]">
                      <Line className="bg-gray-100 h-96 w-px" />
                      <Text
                        className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                        size="txtPoppinsLight16Indigo80090"
                      >
                        {props?.nametwo}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-center justify-start w-[4%]">
                      <Line className="bg-gray-100 h-96 w-px" />
                      <Text
                        className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                        size="txtPoppinsLight16Indigo80090"
                      >
                        {props?.namethree}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start w-[4%]">
                      <Line className="bg-gray-100 h-96 w-px" />
                      <Text
                        className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                        size="txtPoppinsLight16Indigo80090"
                      >
                        {props?.namefour}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start w-[4%]">
                      <Line className="bg-gray-100 h-96 w-px" />
                      <Text
                        className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                        size="txtPoppinsLight16Indigo80090"
                      >
                        {props?.namefive}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-center justify-start w-[4%]">
                      <Line className="bg-gray-100 h-96 w-px" />
                      <Text
                        className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                        size="txtPoppinsLight16Indigo80090"
                      >
                        {props?.namesix}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-3 items-center justify-start pb-0.5 w-[3%]">
                      <Line className="bg-gray-100 h-96 w-px" />
                      <Text
                        className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                        size="txtPoppinsLight16Indigo80090"
                      >
                        {props?.nameseven}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start w-[4%]">
                      <Line className="bg-gray-100 h-96 w-px" />
                      <Text
                        className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                        size="txtPoppinsLight16Indigo80090"
                      >
                        {props?.nameeight}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[15px] items-center justify-start w-[4%]">
                      <Line className="bg-gray-100 h-96 w-px" />
                      <Text
                        className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                        size="txtPoppinsLight16Indigo80090"
                      >
                        {props?.namenine}
                      </Text>
                    </div>
                    <div className="flex flex-col gap-[13px] items-center justify-start w-[3%]">
                      <Line className="bg-gray-100 h-96 w-px" />
                      <Text
                        className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                        size="txtPoppinsLight16Indigo80090"
                      >
                        {props?.nameten}
                      </Text>
                    </div>
                    <List
                      className="sm:flex-col flex-row gap-14 grid grid-cols-2 w-[14%]"
                      orientation="horizontal"
                    >
                      <div className="flex flex-col gap-[13px] items-center justify-start sm:ml-[0] w-full">
                        <Line className="bg-gray-100 h-96 w-px" />
                        <Text
                          className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                          size="txtPoppinsLight16Indigo80090"
                        >
                          {props?.namenov}
                        </Text>
                      </div>
                      <div className="flex flex-col gap-[13px] items-center justify-start sm:ml-[0] w-full">
                        <Line className="bg-gray-100 h-96 w-px" />
                        <Text
                          className="text-base text-center text-indigo-800_90 tracking-[0.44px]"
                          size="txtPoppinsLight16Indigo80090"
                        >
                          {props?.namedec}
                        </Text>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="absolute flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-end mx-auto top-[6%] w-[98%]">
                  <div className="bg-deep_purple-A200_cc h-11 mb-7 md:mt-0 mt-[214px] rounded-[50%] shadow-bs1 w-11"></div>
                  <div className="bg-deep_purple-A200_02 h-4 mb-[109px] md:ml-[0] ml-[33px] md:mt-0 mt-[161px] rounded-[50%] w-4"></div>
                  <div className="md:h-[244px] h-[286px] md:ml-[0] ml-[9px] relative w-[83%] md:w-full">
                    <div className="absolute bottom-[4%] flex flex-col gap-9 justify-start right-[0] w-[54%]">
                      <div className="bg-deep_purple-A200_02 h-4 md:ml-[0] ml-[381px] rounded-[50%] w-4"></div>
                      <div className="bg-deep_purple-A200_02 h-[25px] mr-[372px] rounded-[12px] w-[25px]"></div>
                    </div>
                    <div className="absolute bg-deep_purple-A200_02 h-4 right-[31%] rounded-[50%] top-[42%] w-4"></div>
                    <div className="absolute bottom-[8%] h-[168px] right-[4%] w-[26%]">
                      <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start my-auto right-[0] w-3/5">
                        <div className="flex flex-col gap-[23px] justify-start w-full">
                          <div className="bg-deep_purple-A200_cc_01 h-[68px] mr-[46px] rounded-[50%] shadow-bs1 w-[68px]"></div>
                          <div className="bg-red-A100_01 h-[77px] md:ml-[0] ml-[37px] rounded-[38px] shadow-bs2 w-[77px]"></div>
                        </div>
                      </div>
                      <div className="absolute bg-yellow-500 bottom-[0] flex flex-col h-[129px] items-center justify-center left-[0] p-[31px] sm:px-5 rounded-[64px] w-[129px]">
                        <Text
                          className="my-[19px] text-[18.4px] text-center text-white-A700 tracking-[0.11px]"
                          size="txtPoppinsSemiBold184WhiteA700"
                        >
                          {props?.price}
                        </Text>
                      </div>
                    </div>
                    <div className="absolute md:h-[244px] h-[286px] inset-y-[0] left-[0] my-auto w-[49%]">
                      <div className="absolute bottom-[0] md:h-[168px] h-[194px] left-[0] w-[57%]">
                        <div className="flex flex-col md:gap-10 gap-[66px] h-full justify-start m-auto w-full">
                          <div className="bg-yellow-500 h-[34px] mr-[172px] rounded-[50%] w-[34px]"></div>
                          <div className="bg-yellow-A400_a2 h-[94px] ml-28 md:ml-[0] rounded-[50%] w-[94px]"></div>
                        </div>
                        <div className="absolute bg-red-A200_a2 flex flex-col h-[146px] items-center justify-start left-[8%] p-[39px] sm:px-5 rounded-[50%] shadow-bs3 top-[9%] w-[146px]">
                          <Text
                            className="my-[19px] text-[18.4px] text-center text-white-A700 tracking-[0.11px]"
                            size="txtPoppinsSemiBold184WhiteA700"
                          >
                            {props?.priceone}
                          </Text>
                        </div>
                      </div>
                      <div className="absolute bg-deep_purple-A200_01 flex flex-col h-[247px] items-center justify-center p-[90px] md:px-10 sm:px-5 right-[0] rounded-[123px] shadow-bs1 top-[0] w-[247px]">
                        <Text
                          className="mt-[15px] text-[18.4px] text-center text-white-A700 tracking-[0.11px]"
                          size="txtPoppinsSemiBold184WhiteA700"
                        >
                          {props?.pricetwo}
                        </Text>
                        <Text
                          className="mb-1 text-[16.1px] text-center text-white-A700 tracking-[0.11px]"
                          size="txtRobotoRegular161WhiteA700"
                        >
                          {props?.text}
                        </Text>
                      </div>
                    </div>
                    <div className="absolute bg-deep_purple-A200_01 bottom-[32%] h-[25px] right-[35%] rounded-[12px] w-[25px]"></div>
                  </div>
                  <div className="bg-deep_purple-A200_02 h-11 mb-[23px] md:ml-[0] ml-[5px] md:mt-0 mt-[219px] rounded-[50%] w-11"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

WorldHexagonMapOneWidgetlsize.defaultProps = {
  title: "Sales Figures",
  marketingsales1: "Sales",
  marketingsales2: "Users",
  marketingsales3: "Product",
  marketingsales4: "Team",
  p1k: "1k",
  eighthundred: "800",
  sixhundred: "600",
  fourhundred: "400",
  twohundred: "200",
  zero: "0",
  nameone: "Jan",
  nametwo: "Feb",
  namethree: "Mar",
  namefour: "Apr",
  namefive: "May",
  namesix: "Jun",
  nameseven: "Jul",
  nameeight: "Aug",
  namenine: "Sep",
  nameten: "Oct",
  namenov: "Nov",
  namedec: "Dec",
  price: "$27632",
  priceone: "$27632",
  pricetwo: "$27632",
  text: "August",
};

export default WorldHexagonMapOneWidgetlsize;
