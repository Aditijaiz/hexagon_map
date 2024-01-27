import React from "react";

import { CircularProgressbar } from "react-circular-progressbar";

import { Button, Img, Line, List, Text } from "components";
import Footer from "components/Footer";
import WorldHexagonMapInformerinfo from "components/WorldHexagonMapInformerinfo";

import "react-circular-progressbar/dist/styles.css";

const WorldhexagonmapPage = () => {
  const worldHexagonMapInformerinfoPropList = [
    {},
    { valuetext: "1,205,677", titletext: "Sales" },
    { valuetext: "48,430,039", titletext: "Purchase" },
  ];

  return (
    <>
      <div className="bg-blue_gray-50 flex flex-col font-archivo items-center justify-start mx-auto w-full">
        <div className="flex flex-col gap-[22px] justify-start w-full">
          <header className="bg-white-A700 flex flex-col items-center justify-center md:px-5 w-full">
            <div className="flex flex-col gap-[7px] items-center justify-center ml-12 md:ml-[0] mr-[60px] mt-2.5 w-[95%]">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <div className="h-10 md:h-[39px] relative w-[12%] md:w-full">
                  <div className="absolute flex flex-col h-max inset-y-[0] items-end justify-start my-auto p-1 right-[0]">
                    <Text
                      className="sm:text-[16.51px] md:text-[18.51px] text-[20.51px] text-black-900"
                      size="txtArchivoVFBetaRegular2051"
                    >
                      WASSERSTOFF
                    </Text>
                  </div>
                  <div className="absolute flex flex-col h-full inset-y-[0] items-center justify-start left-[0] my-auto w-10">
                    <div
                      className="bg-cover bg-no-repeat flex flex-col h-[39px] items-center justify-start shadow-bs4 w-[39px]"
                      style={{ backgroundImage: "url('images/img_group.svg')" }}
                    >
                      <Img
                        className="h-[39px] md:h-auto object-cover w-[39px]"
                        src="images/img_vector.png"
                        alt="vector"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-blue_gray-50 flex md:flex-1 flex-col items-end justify-start md:ml-[0] ml-[142px] md:mt-0 my-1 p-1 rounded-lg w-[29%] md:w-full">
                  <Img
                    className="h-6 mr-[3px] w-6"
                    src="images/img_search.svg"
                    alt="search"
                  />
                </div>
                <ul className="flex sm:flex-1 sm:flex-col flex-row font-poppins gap-[84px] sm:hidden items-center justify-start md:ml-[0] ml-[107px] w-auto sm:w-full common-row-list">
                  <li>
                    <a
                      href="javascript:"
                      className="text-base hover:text-black-900 text-blue_gray-400 tracking-[0.44px]"
                    >
                      <Text size="txtPoppinsLight16">Statistics</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base text-black-900 tracking-[0.44px]"
                    >
                      <Text size="txtPoppinsLight16Black900">Overview</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base hover:text-black-900 text-blue_gray-400 tracking-[0.44px]"
                    >
                      <Text size="txtPoppinsLight16">Dashboard</Text>
                    </a>
                  </li>
                  <li>
                    <a
                      href="javascript:"
                      className="text-base hover:text-black-900 text-blue_gray-400 tracking-[0.44px]"
                    >
                      <Text size="txtPoppinsLight16">Analytics</Text>
                    </a>
                  </li>
                </ul>
                <Img
                  className="h-6 md:ml-[0] ml-[188px] w-6"
                  src="images/img_profile.svg"
                  alt="profile"
                />
                <Img
                  className="h-6 md:ml-[0] ml-[26px] w-6"
                  src="images/img_option.svg"
                  alt="option"
                />
              </div>
              <Line className="bg-indigo-500 h-[3px] md:ml-[0] ml-[1121px] mr-[585px] w-[6%]" />
            </div>
          </header>
          <Text
            className="ml-14 md:ml-[0] sm:text-[16.51px] md:text-[18.51px] text-[20.51px] text-black-900"
            size="txtArchivoVFBetaRegular2051"
          >
            WSTF FRONT-END HACKATHON
          </Text>
        </div>
        <div className="flex font-roboto sm:h-[734px] h-[763px] md:h-[973px] justify-end max-w-[1747px] mt-[3px] mx-auto md:px-5 relative w-full">
          <List
            className="absolute bottom-[26%] flex flex-col gap-[30px] items-start left-[0] w-auto"
            orientation="vertical"
          >
            {worldHexagonMapInformerinfoPropList.map((props, index) => (
              <React.Fragment key={`WorldHexagonMapInformerinfo${index}`}>
                <WorldHexagonMapInformerinfo
                  className="flex flex-row gap-[26px] items-center justify-start w-auto"
                  {...props}
                />
              </React.Fragment>
            ))}
          </List>
          <div className="flex flex-row font-poppins gap-[18px] h-full items-center justify-between mt-auto rounded-[10px] w-[220px]">
            <div className="h-[88px] relative w-[88px]">
              <Text
                className="m-auto text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[0.11px]"
                size="txtPoppinsLight24"
              >
                <span className="text-gray-900 font-poppins font-light">
                  27
                </span>
                <span className="text-gray-900 font-poppins font-light">%</span>
              </Text>
              <div className="!w-[88px] absolute border-solid h-[88px] inset-[0] justify-center m-auto overflow-visible">
                <CircularProgressbar
                  className="!w-[88px] absolute border-solid h-[88px] inset-[0] justify-center m-auto overflow-visible"
                  value={26}
                  strokeWidth={2}
                  styles={{
                    trail: { strokeWidth: 50, stroke: "" },
                    path: {
                      strokeLinecap: "square",
                      height: "100%",
                      transformOrigin: "center",
                      transform: "rotate(0deg)",
                    },
                  }}
                ></CircularProgressbar>
              </div>
            </div>
            <div className="flex flex-col gap-px items-start justify-start w-auto">
              <Text
                className="text-indigo-800 text-xl tracking-[0.44px] w-[62px]"
                size="txtRobotoRegular20"
              >
                92,980
              </Text>
              <Text
                className="text-base text-indigo-800 tracking-[0.44px] w-[99px]"
                size="txtPoppinsLight16Indigo800"
              >
                Active users
              </Text>
            </div>
          </div>
          <div className="absolute font-poppins sm:h-[731px] h-[763px] md:h-[970px] inset-[0] justify-center m-auto w-full">
            <div className="sm:h-[731px] h-[763px] md:h-[970px] m-auto w-full">
              <div className="absolute sm:h-[731px] h-[763px] md:h-[970px] inset-y-[0] my-auto right-[1%] w-[84%] md:w-full">
                <div className="absolute bottom-[0] flex flex-row gap-[18px] items-center justify-between left-[0] rounded-[10px] w-[220px]">
                  <div className="h-[88px] relative w-[88px]">
                    <Text
                      className="m-auto text-2xl md:text-[22px] text-center text-gray-900 sm:text-xl tracking-[0.11px]"
                      size="txtPoppinsLight24"
                    >
                      <span className="text-gray-900 font-poppins font-light">
                        6
                      </span>
                      <span className="text-gray-900 font-poppins font-light">
                        7
                      </span>
                      <span className="text-gray-900 font-poppins font-light">
                        %
                      </span>
                    </Text>
                    <div className="!w-[88px] absolute border-solid h-[88px] inset-[0] justify-center m-auto overflow-visible">
                      <CircularProgressbar
                        className="!w-[88px] absolute border-solid h-[88px] inset-[0] justify-center m-auto overflow-visible"
                        value={71}
                        strokeWidth={2}
                        styles={{
                          trail: { strokeWidth: 50, stroke: "" },
                          path: {
                            strokeLinecap: "square",
                            height: "100%",
                            transformOrigin: "center",
                            transform: "rotate(0deg)",
                          },
                        }}
                      ></CircularProgressbar>
                    </div>
                  </div>
                  <div className="flex flex-col gap-px items-start justify-start w-auto">
                    <Text
                      className="text-indigo-800 text-xl tracking-[0.44px] w-[62px]"
                      size="txtRobotoRegular20"
                    >
                      22,652
                    </Text>
                    <Text
                      className="text-base text-indigo-800 tracking-[0.44px] w-[84px]"
                      size="txtPoppinsLight16Indigo800"
                    >
                      New users
                    </Text>
                  </div>
                </div>
                <div
                  className="absolute bg-cover bg-no-repeat flex flex-col h-max inset-y-[0] items-end justify-start my-auto p-[83px] md:px-10 sm:px-5 right-[0] w-[93%]"
                  style={{ backgroundImage: "url('images/img_group5.svg')" }}
                >
                  <div className="flex flex-col justify-start mb-[172px] mt-4 w-[95%] md:w-full">
                    <div className="flex flex-col md:ml-[0] ml-[455px] pr-1.5 relative shadow-bs5 w-[17%]">
                      <div className="bg-white-A700 flex flex-row gap-3 items-center justify-evenly mx-auto px-2.5 py-1.5 rounded-[16px] w-auto">
                        <Button
                          className="flex h-10 items-center justify-center w-10"
                          shape="round"
                          color="green_A200"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_france.svg"
                            alt="france"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-indigo-800 tracking-[0.44px] w-auto"
                            size="txtPoppinsLight16Indigo800"
                          >
                            Berlin
                          </Text>
                          <Text
                            className="text-indigo-800 text-xl tracking-[0.15px] w-auto"
                            size="txtPoppinsSemiBold20"
                          >
                            76,541,106
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[18px] mt-[-6px] mx-auto z-[1]"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown"
                      />
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mt-2.5 w-full">
                      <div className="md:h-[206px] h-[72px] mb-[134px] relative w-[17%] md:w-full">
                        <div className="h-[72px] m-auto w-full">
                          <div className="absolute h-[72px] inset-[0] justify-center m-auto shadow-bs5 w-[98%]"></div>
                          <div className="absolute bg-white-A700 flex flex-row gap-3 inset-x-[0] items-center justify-evenly mx-auto px-2.5 py-1.5 rounded-[16px] top-[0] w-auto">
                            <Button
                              className="flex h-10 items-center justify-center w-10"
                              shape="round"
                              color="blue_300"
                              size="xs"
                              variant="fill"
                            >
                              <Img
                                className="h-6"
                                src="images/img_thumbsup.svg"
                                alt="thumbsup"
                              />
                            </Button>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-base text-indigo-800 tracking-[0.44px] w-auto"
                                size="txtPoppinsLight16Indigo800"
                              >
                                Chicago
                              </Text>
                              <Text
                                className="text-indigo-800 text-xl tracking-[0.15px] w-auto"
                                size="txtPoppinsSemiBold20"
                              >
                                98,320,300
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[0] h-[18px] inset-x-[0] mx-auto"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_One"
                        />
                      </div>
                      <div className="flex flex-col md:ml-[0] ml-[358px] md:mt-0 mt-[134px] relative shadow-bs5 w-[17%] md:w-full">
                        <div className="bg-white-A700 flex flex-row gap-3 items-center justify-evenly mx-auto px-2.5 py-1.5 rounded-[16px] w-auto">
                          <Button
                            className="flex h-10 items-center justify-center w-10"
                            shape="round"
                            color="red_A100"
                            size="xs"
                            variant="fill"
                          >
                            <Img
                              className="h-6"
                              src="images/img_russia.svg"
                              alt="russia"
                            />
                          </Button>
                          <div className="flex flex-col items-start justify-start w-auto">
                            <Text
                              className="text-base text-indigo-800 tracking-[0.44px] w-auto"
                              size="txtPoppinsLight16Indigo800"
                            >
                              Giza
                            </Text>
                            <Text
                              className="text-indigo-800 text-xl tracking-[0.15px] w-auto"
                              size="txtPoppinsSemiBold20"
                            >
                              10,547,980
                            </Text>
                          </div>
                        </div>
                        <Img
                          className="h-[18px] mt-[-6px] mx-auto z-[1]"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_Two"
                        />
                      </div>
                      <div className="md:h-[139px] h-[72px] md:ml-[0] ml-[201px] md:mt-0 my-[67px] relative w-[17%] md:w-full">
                        <div className="h-[72px] m-auto w-full">
                          <div className="absolute h-[72px] inset-[0] justify-center m-auto shadow-bs5 w-[98%]"></div>
                          <div className="absolute bg-white-A700 flex flex-row gap-3 inset-x-[0] items-center justify-evenly mx-auto px-2.5 py-1.5 rounded-[16px] top-[0] w-auto">
                            <Button
                              className="flex h-10 items-center justify-center w-10"
                              shape="round"
                              color="purple_100"
                              size="xs"
                              variant="fill"
                            >
                              <Img
                                className="h-6"
                                src="images/img_china.svg"
                                alt="china"
                              />
                            </Button>
                            <div className="flex flex-col items-start justify-start w-auto">
                              <Text
                                className="text-base text-indigo-800 tracking-[0.44px] w-auto"
                                size="txtPoppinsLight16Indigo800"
                              >
                                Shanghai
                              </Text>
                              <Text
                                className="text-indigo-800 text-xl tracking-[0.15px] w-auto"
                                size="txtPoppinsSemiBold20"
                              >
                                239,570,110
                              </Text>
                            </div>
                          </div>
                        </div>
                        <Img
                          className="absolute bottom-[0] h-[18px] inset-x-[0] mx-auto"
                          src="images/img_arrowdown.svg"
                          alt="arrowdown_Three"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col md:ml-[0] ml-[123px] mt-[41px] pr-[3px] relative shadow-bs5 w-[17%]">
                      <div className="bg-white-A700 flex flex-row gap-3 items-center justify-evenly mx-auto px-2.5 py-1.5 rounded-[16px] w-auto">
                        <Button
                          className="flex h-10 items-center justify-center w-10"
                          shape="round"
                          color="orange_A200"
                          size="xs"
                          variant="fill"
                        >
                          <Img
                            className="h-6"
                            src="images/img_australia.svg"
                            alt="australia"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start w-auto">
                          <Text
                            className="text-base text-indigo-800 tracking-[0.44px] w-auto"
                            size="txtPoppinsLight16Indigo800"
                          >
                            Manaus
                          </Text>
                          <Text
                            className="text-indigo-800 text-xl tracking-[0.15px] w-auto"
                            size="txtPoppinsSemiBold20"
                          >
                            12,320,300
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-[18px] mt-[-6px] mx-auto z-[1]"
                        src="images/img_arrowdown.svg"
                        alt="arrowdown_Four"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-[19%] flex flex-col pr-[7px] right-[0] shadow-bs5 w-[11%]">
                <div className="bg-white-A700 flex flex-row gap-3 items-center justify-evenly mx-auto px-2.5 py-1.5 rounded-[16px] w-auto">
                  <Button
                    className="flex h-10 items-center justify-center w-10"
                    shape="round"
                    color="blue_300_01"
                    size="xs"
                    variant="fill"
                  >
                    <Img
                      className="h-6"
                      src="images/img_india.svg"
                      alt="india"
                    />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-auto">
                    <Text
                      className="text-base text-indigo-800 tracking-[0.44px] w-auto"
                      size="txtPoppinsLight16Indigo800"
                    >
                      Queensland
                    </Text>
                    <Text
                      className="text-indigo-800 text-xl tracking-[0.15px] w-auto"
                      size="txtPoppinsSemiBold20"
                    >
                      6,097,321
                    </Text>
                  </div>
                </div>
                <Img
                  className="h-[18px] mt-[-6px] mx-auto z-[1]"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown_Five"
                />
              </div>
              <Text
                className="absolute left-[0] md:text-5xl text-7xl text-indigo-800 top-[13%] tracking-[-1.75px]"
                size="txtPoppinsMedium72"
              >
                2,431,340
              </Text>
            </div>
            <div className="absolute flex flex-row gap-6 items-end justify-between left-[0] top-[10%] w-auto">
              <Text
                className="text-indigo-800 text-xl tracking-[0.15px] w-auto"
                size="txtPoppinsSemiBold20"
              >
                All users
              </Text>
              <div className="flex flex-row font-roboto gap-px items-center justify-start w-auto">
                <Text
                  className="text-[10px] text-indigo-800 tracking-[1.50px] uppercase w-auto"
                  size="txtRobotoBold10"
                >
                  Detail
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowright.svg"
                  alt="arrowright"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-roboto gap-7 items-center justify-start mt-14 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row gap-[17px] items-center justify-start max-w-[1800px] mx-auto md:px-5 rounded-[10px] shadow-bs w-full">
            <div className="bg-white-A700 flex flex-col items-center justify-start sm:px-5 px-8 rounded-[10px] w-[132px]">
              <div className="flex flex-col items-center justify-start w-auto">
                <div className="flex flex-col gap-0.5 items-start justify-start w-auto">
                  <Text
                    className="text-indigo-800 text-sm tracking-[0.44px] w-auto"
                    size="txtRobotoRegular14"
                  >
                    Sales Figures
                  </Text>
                  <Text
                    className="text-[22px] text-indigo-800 sm:text-lg md:text-xl w-auto"
                    size="txtPoppinsSemiBold22"
                  >
                    $10,430
                  </Text>
                </div>
              </div>
            </div>
            <Img
              className="h-[86px] rounded-[10px] w-[1651px]"
              src="images/img_graph_white_a700.svg"
              alt="graph"
            />
          </div>
          <Footer className="bg-white-A700 flex items-center justify-center md:px-5 w-full" />
        </div>
      </div>
    </>
  );
};

export default WorldhexagonmapPage;
