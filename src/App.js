import React from "react";
// import "./App.css";
import Svg from "./images/sprite.svg";
import Logo from "./images/logo-icon.svg";
import Logo2 from "./images/logo-icon2.svg";
import Doctor from "./images/doctor-touching.png";
import Team from "./images/working-team.png";
import Devon from "./images/devon-lane.png";
import Kristin from "./images/kristin-watson.png";
import Jacob from "./images/jacob-jones.png";
import Esther from "./images/esther-howard.png";
import Hero from "./images/hero.png";
import Itondo from "./images/itondo.svg";
import Cha from "./images/ji-hun.svg";
import Bran from "./images/brannan.svg";
import Hexa from "./images/Hexa Logo.svg";
import Techhouse from "./images/Tech Logo.svg";
import Realestate from "./images/Real Estate Logo.svg";
import Realestatewhite from "./images/Real Estatewhite Logo.svg";
import Realestatepointed from "./images/Real Estatepointed Logo.svg";

export default function App() {
  return (
    <div className="bg-[#EEFFFC]/7">
      <div className="max-w-full relative">
        <img src={Hero} alt="hero img" className="object-cover" />
        <div className="absolute inset-0 container mx-auto flex items-center py-10 lg:justify-end w-full z-[2]">
          <div className="whitespace-wrap max-w-lg p-5">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] text-white font-medium font-sans">
              Come work with our talented Medical Experts
            </h1>

            <p className="text-[14px] lg:text-[16px] text-white font-normal leading-[20px] w-full my-5">
              We provide African healthcare facilities with cutting-edge medical
              equipment to provide the best quality of care to their patients -
              with financing, maintenance and support.
            </p>

            <button className="btn max-sm:!text-[14px] max-sm:!tracking-none max-sm:!px-2.5 max-sm:!py-1.5">
              Know More
            </button>
          </div>
        </div>

        {/* nav */}

        <div className="hidden md:flex fixed max-w-[90%] md:max-w-[80%] left-1/2 -translate-x-1/2 top-4 gap-5 justify-between whitespace-nowrap items-center bg-white px-5 rounded-xl z-20">
          <div className="flex gap-2 justify-center items-center ">
            <img src={Logo2} alt="logo" className="w-5 h-5" />
            <p className="text-gray-700 text-sm capitalize font-medium">
              golio
            </p>
          </div>

          <div>
            <ul className="flex gap-5 justify-center items-center capitalize text-xs font-medium">
              <li className="text-[#0b63e5] border-b border-[#0b63e5] py-4">
                home
              </li>
              <li className="text-[#838E9E] py-4">portfolio</li>
              <li className="text-[#838E9E] py-4">service</li>
              <li className="text-[#838E9E] py-4">testimonial</li>
              <li className="text-[#838E9E] py-4">pricing plan</li>
              <li className="text-[#838E9E] py-4">FAQs</li>
            </ul>
          </div>
          <div>
            <button className="btn !py-1 !font-medium !tracking-normal">
              contact us
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="container p-5 py-10 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
            <div className="flex-shrink-0 lg:w-2/4 flex gap-5 flex-col">
              <div className="gap-4 flex flex-col">
                <h2 className="text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold">
                  Why Work with us
                </h2>

                <p className="text-[14px] md:text-[16px] text-gray-700">
                  Cras at pellentesque eros. Nullam vitae sapien et felis
                  eleifend luctus. Nam ac dui cursus, efficitur ante sed, tempor
                  sapien. Praesent nec mattis enim. Mauris a laoreet purus.
                </p>
              </div>

              <ul className="flex flex-col gap-8 p-8 rounded-2xl bg-[#F6F9FD]">
                <li className="flex gap-5">
                  <div className="flex-shrink-0 gap-5">
                    <svg className="h-[40px] w-[40px]">
                      <use xlinkHref={`${Svg}#Stack`}></use>
                    </svg>
                  </div>

                  <div className="flex flex-col gap[8px]">
                    <h4 className="text-gray-800 font-normal text-lg">
                      User Experience Design Team.
                    </h4>
                    <p className="break-all text-[14px] text-gray-600">
                      Etiam sed vulputate nisl, eu elementum arcu. Vivamus
                      dignissim tortor in tellus dictum pellentesque.
                    </p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="flex-shrink-0 gap-[20px]">
                    <svg className="h-[40px] w-[40px]">
                      <use xlinkHref={`${Svg}#Cpu`}></use>
                    </svg>
                  </div>

                  <div className="flex flex-col gap[8px]">
                    <h4 className="text-gray-800 font-normal text-lg">
                      Simple & Clean Line of Code.
                    </h4>
                    <p className="break-all text-[14px] text-gray-600">
                      Vivamus dignissim tortor in tellus dictum pellentesque.
                      Praesent mauris metus, dictum quis velit non.
                    </p>
                  </div>
                </li>

                <li className="flex gap-5">
                  <div className="flex-shrink-0 gap-[20px]">
                    <svg className="h-[40px] w-[40px]">
                      <use xlinkHref={`${Svg}#Cpu`}></use>
                    </svg>
                  </div>

                  <div className="flex flex-col gap[8px]">
                    <h4 className="text-gray-800 font-normal text-lg">
                      Simple & Clean Line of Code.
                    </h4>
                    <p className="break-all text-[14px] text-gray-600">
                      Vivamus dignissim tortor in tellus dictum pellentesque.
                      Praesent mauris metus, dictum quis velit non.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="flex-shrink-0 lg:w-1/3">
              <img
                src={Doctor}
                alt="scientist"
                className="w-[400px] h-[400px]"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="pt-20 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col gap-3 lg:flex-row justify-between items-center text-gray-600 mb-12">
            <h2 className="flex-shrink-0 text-[25px] lg:text-[45px] font-semibold">
              The easiest way to operate
            </h2>
            <p className="flex-shrink-0 lg:text-lg font-medium text-gray-600 max-w-sm">
              Bootstrap code with a well-organized Figma file to design &
              develop your next websites in minutes.
            </p>
          </div>
          <div className="relative before:absolute before:h-16 before:z-[1] before:w-full before:-right-12 before:-bottom-16 before:bg-gradient-to-r before:from-transparent before:to-[#CFEBD1]">
            <img src={Team} alt="working team" className="relative z-[2]" />
          </div>
        </div>
      </div>

      <div className="py-40 bg-white">
        <div className="container mx-auto p-5">
          <h2 className="flex-shrink-0 text-[25px] lg:text-[45px] font-semibold text-gray-700 text-center">
            Say hello to our team members
          </h2>

          <p className="flex-shrink-0 lg:text-lg font-medium text-gray-600 max-w-lg mx-auto text-center mb-8">
            Praesent sagittis eros in convallis rutrum. Donec auctor nibh justo.
            Vestibu tincidunt, libero sit amet vestibulum euismod, ex nisl
            imperdiet leo.
          </p>

          <div class="flex gap-5 overflow-y-auto">
            <div className="flex flex-col gap-[24px]">
              <img
                src={Devon}
                alt="devon lane"
                className="h-[424px] w-[312px] bg-[#CFEBD1]"
              />

              <div className="flex flex-col gap-[8px]">
                <p className="font-semibold text-20px leading-[28px] tracking-tight w-[312px] text-gray-900">
                  Devon Lane
                </p>
                <p className="text-[16px] leading-[24px] font-medium text-gray-600">
                  CEO & Founder of Gilio
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <img
                src={Kristin}
                alt="devon lane"
                className="h-[424px] w-[312px] bg-[#E3D6FF]"
              />

              <div className="flex flex-col gap-[8px]">
                <p className="font-semibold text-20px leading-[28px] tracking-tight w-[312px] text-gray-900">
                  Kristin Watson
                </p>
                <p className="text-[16px] leading-[24px] font-medium text-gray-600">
                  UI Designer
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <img
                src={Jacob}
                alt="devon lane"
                className="h-[424px] w-[312px] bg-[#EEFFFC]"
              />

              <div className="flex flex-col gap-[8px]">
                <p className="font-semibold text-20px leading-[28px] tracking-tight w-[312px] text-gray-900">
                  Jacob Jones
                </p>
                <p className="text-[16px] leading-[24px] font-medium text-gray-600">
                  Product Designer
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <img
                src={Esther}
                alt="devon lane"
                className="h-[424px] w-[312px] bg-[#CEE0FA]"
              />

              <div className="flex flex-col gap-[8px]">
                <p className="font-semibold text-20px leading-[28px] tracking-tight w-[312px] text-gray-900">
                  Esther Howard
                </p>
                <p className="text-[16px] leading-[24px] font-medium text-gray-600">
                  Front-end Developer
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-[24px]">
              <img
                src={Devon}
                alt="devon lane"
                className="h-[424px] w-[312px] bg-[#CFEBD1]"
              />

              <div className="flex flex-col gap-[8px]">
                <p className="font-semibold text-20px leading-[28px] tracking-tight w-[312px] text-gray-900">
                  Devon Lane
                </p>
                <p className="text-[16px] leading-[24px] font-medium text-gray-600">
                  CEO & Founder of Gilio
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-[10px] justify-center items-center">
          <div className="bg-[#F0F5FF] p-[16px] rounded-full flex item-start">
            <svg className="w-[32px] h-[32px] flex justify-center items-center">
              <use xlinkHref={`${Svg}#ArrowLeft`}></use>
            </svg>
          </div>
          <div className="bg-[#F0F5FF] p-[16px] rounded-full flex item-start">
            <svg className="w-[32px] h-[32px] flex justify-center items-center">
              <use xlinkHref={`${Svg}#ArrowRight`}></use>
            </svg>
          </div>
        </div>
      </div>

      <div className="pt-36">
        <div className="container mx-auto p-5">
          <div className="flex justify-center items-center text-center gap-[16px] mb-5">
            <svg className="w-[50px] h-[10px] fill-[#0B63E5]">
              <use xlinkHref={`${Svg}#long-arrow`}></use>
            </svg>
            <p className="text-[#0B63E5] text-[24px] font-medium leading-[24px]">
              Our Client
            </p>
          </div>
          <div className="text-[25px] lg:text-[45px] font-semibold text-[#000F2D] text-center mb-8">
            Testimonial
          </div>

          <div className="p-12 text-center text-lg max-w-3xl mx-auto">
            When applied to building block a website or similar work product, a
            Visual Guide can be an intermediate step toward the end goal of a
            complete website. By creating a visual guide along the way, the
            designer or developer can get input from the other people involved
            in the website such as the customer, their manager, and other
            members of the team.
          </div>

          <ul className="flex items-center md:justify-center border-t gap-6 max-md:overflow-x-auto">
            <li className="flex-shrink-0 flex border-t-2 border-transparent p-4 gap-2">
              <img src={Cha} alt="ju-hun" className="w-12 h-12" />
              <div className="flex-shrink-0">
                <div className="font-semibold text-[#00194B]">Cha Ji-Hun</div>
                <div className="text-[#0B63E5]">Co-founder of Forpeople</div>
              </div>
            </li>
            <li className="flex-shrink-0 flex border-t-2 border-blue-500 p-4 gap-2">
              <img src={Bran} alt="brannan" className="w-12 h-12" />
              <div className="flex-shrink-0">
                <div className="font-semibold text-[#00194B]">
                  Rutherford Brannan
                </div>
                <div className="text-[#0B63E5]">
                  Design director of Perfect Illustration
                </div>
              </div>
            </li>
            <li className="flex-shrink-0 flex border-t-2 border-transparent p-4 gap-2">
              <img src={Itondo} alt="itondo" className="w-12 h-12" />
              <div className="flex-shrink-0">
                <div className="font-semibold text-[#00194B]">Henry Itondo</div>
                <div className="text-[#0B63E5]">Co-founder of Source DS</div>
              </div>
            </li>
          </ul>
        </div>

        <div className="bg-white py-6 mx-12 mt-11 mb-10">
          <div className="container mx-auto">
            <div className="overflow-hidden bg-[#F6F9FD] lg:mx-12 rounded-xl p-5 relative after:hidden md:after:block after:absolute after:-right-[230px] after:inset-y-0 after:w-2/4 after:z-[1] after:bg-[repeating-linear-gradient(#1975FF80_0px,_gray_2px,_transparent_2px,_transparent_15px)] after:-rotate-[60deg]">
              <h2 className="text-[#002966] text-[18px] font-medium leading-[24px] mb-2 max-w-sm">
                Enter your e-mail address and get started for free
              </h2>

              <p className="text-[12px] text-[#002966]/9 font-medium max-w-sm">
                Stay up to date with the most relevant information, our new
                collections, news and special offers!
              </p>
              <div className="flex flex-wrap gap-2 mt-5">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="border rounded-xl bg-white px-2 py-1.5 text-[14px] outline-none flex-1 max-w-[260px]"
                />

                <button className="btn !py-1 text-[11px] !tracking-normal">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-[150px] px-5">
        <div class="flex gap-10 mx-auto max-md:overflow-x-auto">
          <img
            src={Hexa}
            alt="hexa"
            className="w-32 align-text-bottom h-[70px]"
          />
          <img
            src={Techhouse}
            alt="hexa"
            className="w-32 align-text-bottom h-[70px]"
          />
          <img
            src={Realestate}
            alt="hexa"
            className="w-32 align-text-bottom h-[70px]"
          />
          <img
            src={Realestatewhite}
            alt="hexa"
            className="w-32 align-text-bottom h-[70px]"
          />
          <img
            src={Realestatepointed}
            alt="hexa"
            className="w-32 align-text-bottom h-[70px]"
          />
        </div>
      </div>

      {/* footer */}

      <div className="flex justify-between items-center  min-h-[100px] bg-white pt-14">
        <div className="flex mx-0 w-full flex-col lg:flex-row">
          <div className="py-11 pl-5 lg:pl-20 pr-9 bg-[#FFD27A] lg:w-[45%] order-last lg:order-first">
            <h4 className="tracking-tight text-[#061C3D] max-w-[55%] text-2xl font-bold mb-2">
              Have a project idea! Let work together.
            </h4>
            <p className="text-sm max-w-[85%] font-medium text-gray-900 mb-2">
              Nunc vel metus cursus, tempor ipsum sit amet, rutrum justo.
              Maecenas tincidunt imperdiet magna, et porta libero eleifend vel.{" "}
            </p>
            <button className="btn !tracking-normal !bg-[#031939] !text-[#FFC759] !text-sm capitalize mb-4 !py-1">
              get a quote
            </button>
            <hr className="border-slate-600 mx-auto" />

            <h4 className="mt-4 text-base font-bold text-[#061C3D] mb-2 max-w-[55%] pt-9">
              Join our team. We're open to hire creative people!
            </h4>
            <button className="py-1 px-4 rounded-md bg-transparent outline-none text-xs font-bold border border-gray-900 capitalize text-[#061C3D]">
              view open position
            </button>
          </div>

          <div className="pl-9 pr-20 py-11 bg-[#031939] lg:w-[55%] order-first lg:order-last">
            <div className="flex justify-between items-center border-b border-gray-600 mb-5 pb-7">
              <div className="flex gap-2 justify-center items-center ">
                <img src={Logo} alt="logo" className="w-5 h-5" />
                <p className="text-white text-sm capitalize font-medium">
                  golio
                </p>
              </div>
              <div>
                <ul className="flex flex-wrap gap-3 justify-center items-center">
                  <li className="p-1 rounded-sm bg-gray-600">
                    <svg className="w-[10px] h-[10px] flex justify-center items-center">
                      <use xlinkHref={`${Svg}#facebook`}></use>
                    </svg>
                  </li>
                  <li className="p-1 rounded-sm bg-gray-600">
                    <svg className="w-[10px] h-[10px] flex justify-center items-center">
                      <use xlinkHref={`${Svg}#twitter`}></use>
                    </svg>
                  </li>
                  <li className="p-1 rounded-sm bg-gray-600">
                    <svg className="w-[10px] h-[10px] flex justify-center items-center">
                      <use xlinkHref={`${Svg}#linkedIn`}></use>
                    </svg>
                  </li>
                  <li className="p-1 rounded-sm bg-gray-600">
                    <svg className="w-[10px] h-[10px] flex justify-center items-center">
                      <use xlinkHref={`${Svg}#instagram`}></use>
                    </svg>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-3 flex flex-start flex-wrap gap-24 border-b border-gray-600 pb-5">
              <div className="flex-shrink-0">
                <h4 className="uppercase text-xs font-normal text-white mb-3">
                  quick links
                </h4>
                <ul className="capitalize text-xs font-sm">
                  <li className="text-white mb-2">
                    <span>&mdash;</span> portfolio
                  </li>
                  <li className="text-[#838E9E] mb-2">about</li>
                  <li className="text-[#838E9E] mb-2">services</li>
                  <li className="text-[#838E9E] mb-2">pricing plans</li>
                  <li className="text-[#838E9E]">contact</li>
                </ul>
              </div>

              <div className="flex-shrink-0">
                <h4 className="uppercase text-xs font-normal text-white mb-3">
                  services
                </h4>
                <ul className="capitalize text-xs font-sm">
                  <li className="text-[#838E9E] mb-2">UI/UX Design</li>
                  <li className="text-[#838E9E] mb-2">branding</li>
                  <li className="text-[#838E9E] mb-2">ilustration</li>
                  <li className="text-[#838E9E] mb-2">design concept</li>
                  <li className="text-[#838E9E]">app design</li>
                </ul>
              </div>

              <div className="flex-shrink-0">
                <h4 className="uppercase text-xs font-normal text-white mb-3">
                  product
                </h4>
                <ul className="capitalize text-xs font-sm">
                  <li className="text-[#838E9E] mb-2">figma</li>
                  <li className="text-[#838E9E] mb-2">adobe</li>
                  <li className="text-[#838E9E] mb-2">dribble</li>
                  <li className="text-[#838E9E] mb-2">behance</li>
                  <li className="text-[#838E9E]">themeforest</li>
                </ul>
              </div>
            </div>

            <p className="text-[#838E9E] text-xs text-center mt-2">
              © 2021 &ndash; Golio UI Kit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
