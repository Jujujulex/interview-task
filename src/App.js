import React from "react";
// import "./App.css";
import Svg from "./images/sprite.svg";
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

      <div className="py-36">
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
            <div className="bg-[#F6F9FD] mx-12 rounded-xl p-5">
              <h2 className="text-[#002966] text-[18px] font-medium leading-[24px] mb-2">
                Enter your e-mail address and get started for free
              </h2>

              <p className="text-[12px] text-[#002966]/9 font-medium">
                Stay up to date with the most relevant information, our new
                collections, news and special offers!
              </p>
              <div className="flex gap-[8px] mt-5">
                <input
                  type="text"
                  placeholder="Your email address"
                  className="border rounded-xl bg-white p-3"
                />

                <button className="btn py-[5px] px-[8px]">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
