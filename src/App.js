import React from "react";
// import "./App.css";
import Svg from "./images/sprite.svg";
import Doctor from "./images/doctor-touching.png";
import Team from "./images/working-team.png";
import Devon from "./images/devon-lane.png";
import Kristin from "./images/kristin-watson.png";
import Jacob from "./images/jacob-jones.png";
import Esther from "./images/esther-howard.png";

export default function App() {
  return (
    <div className="bg-[#EEFFFC]">
      <div className="hero bg-cover bg-no-repeat w-full min-h-screen flex items-center lg:justify-end px-16">
        <div className="inline-block whitespace-wrap max-w-xl mt-16">
          <h1 className="leading-[72px] text-[64px] text-white font-medium font-sans w-full">
            Come work with our talented Medical Experts
          </h1>

          <p className="text-[16px] text-white font-normal leading-[32px] w-full">
            We provide African healthcare facilities with cutting-edge medical
            equipment to provide the best quality of care to their patients -
            with financing, maintenance and support.
          </p>

          <button className="btn">Know More</button>
        </div>
      </div>

      <div className="bg-white flex flex-column xl:flex-row pt-[124px] pb-[84px] justify-center items-center gap-[96px]">
        <div className="flex flex-col gap-[48px]">
          <div className="gap-[24px] flex flex-col">
            <h2 className="text-gray-900 text-[56px] font-bold leading-[60px] tracking-tight leading-[60px]">
              Why Work with us
            </h2>

            <p className="text-[16px] font-medium leading-[24px] text-gray-700 w-[536px]">
              Cras at pellentesque eros. Nullam vitae sapien et felis eleifend
              luctus. Nam ac dui cursus, efficitur ante sed, tempor sapien.
              Praesent nec mattis enim. Mauris a laoreet purus.
            </p>
          </div>

          <ul class="flex flex-col gap-[32px] p-[32px] rounded-2xl bg-[#F6F9FD]">
            <li class="flex gap-5">
              <div class="flex-shrink-0 gap-[20px]">
                <svg className="h-[40px] w-[40px]">
                  <use xlinkHref={`${Svg}#Stack`}></use>
                </svg>
              </div>

              <div className="flex flex-col gap[8px]">
                <h4 className="text-gray-900 leading-[28px] font-normal text-[20px]">
                  User Experience Design Team.
                </h4>
                <p className="font-medium text-[16px] leading-[24px] w-[412px]">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{" "}
                </p>
              </div>
            </li>

            <li class="flex gap-5">
              <div class="flex-shrink-0 gap-[20px]">
                <svg className="h-[40px] w-[40px]">
                  <use xlinkHref={`${Svg}#Cpu`}></use>
                </svg>
              </div>

              <div className="flex flex-col gap[8px]">
                <h4 className="text-gray-900 leading-[28px] font-normal text-[20px]">
                  User Experience Design Team.
                </h4>
                <p className="font-medium text-[16px] leading-[24px] w-[412px]">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{" "}
                </p>
              </div>
            </li>

            <li class="flex gap-5">
              <div class="flex-shrink-0 gap-[20px]">
                <svg className="h-[40px] w-[40px]">
                  <use xlinkHref={`${Svg}#Cpu`}></use>
                </svg>
              </div>

              <div className="flex flex-col gap[8px]">
                <h4 className="text-gray-900 leading-[28px] font-normal text-[20px]">
                  User Experience Design Team.
                </h4>
                <p className="font-medium text-[16px] leading-[24px] w-[412px]">
                  Etiam sed vulputate nisl, eu elementum arcu. Vivamus dignissim
                  tortor in tellus dictum pellentesque.{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div>
          <img src={Doctor} alt="scientist" className="w-[540px] h-[540px]" />
        </div>
      </div>

      <div className="flex flex-col pt-[30px] justify-center items-center bg-gray-50">
        <div className="flex w-[1920px] px-[300px] py-[96px] justify-between items-center text-gray-900">
          <h2 className="w-[760px] flex-shrink-0 text-[72px] font-bold leadng-[80px] tracking-tight">
            The easiest way to operate{" "}
          </h2>
          <p className="flex-shrink-0 w-[424px] text-[20px] font-medium leading-[28px]">
            Bootstrap code with a well-organized Figma file to design & develop
            your next websites in minutes.
          </p>
        </div>
        <div>
          <img
            src={Team}
            alt="working team"
            className="bg[linear-gradient(0deg, rgba(2, 13, 11, 0.20) 0%, rgba(2, 13, 11, 0.20) 100%), url(<path-to-image>), lightgray 50% / cover no-repeat]"
          />
        </div>
      </div>

      <div className="py-[124px] px-[300px] flex flex-col gap-[72px] justify-center items-center bg-white">
        <div className="flex flex-col justify-center items-center gap-[24px] text-gray-900">
          <h2 className="w-[1320px] text-[56px] text-center font-bold leading-[60px] tracking-tight">
            Say hello to our team members
          </h2>

          <p className="text-[18px] font-medium leading-[26px] text-center w-[648px]">
            Praesent sagittis eros in convallis rutrum. Donec auctor nibh justo.
            Vestibu tincidunt, libero sit amet vestibulum euismod, ex nisl
            imperdiet leo.
          </p>
        </div>

        <div className="flex gap-[24px]">
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
          <div></div>
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

      <div className="flex flex-col gap-[60px] py-[100px] px-[160px] w-[1920px] justify-center items-center">
        <div className="flex flex-col gap-[24px]  border border-solid border-white">
          <div className="flex justify-center items-center text-center gap-[16px]">
            <p>
              {" "}
              <svg className="w-[50px] h-[10px] fill-[#0B63E5]">
                <use xlinkHref={`${Svg}#long-arrow`}></use>
              </svg>
            </p>
            <p className="text-[#0B63E5] text-[24px] font-medium leading-[24px]">
              Our Client
            </p>
          </div>

          <div className="text-[54px] font-bold leading-[62px] text-[#000F2D]">
            Testimonial
          </div>
        </div>

        <div className="flex flex-col gap-[32px]">
          <p className="w-[1152px] flex flex-col justify-center items-center px-[32px] pb-[60px] border border-solid border-[#AAC3F5]">
            When applied to building block a website or similar work product,
            a Visual Guide can be an intermediate step toward the end goal of
            a complete website. By creating a visual guide along the way,
            the designer or developer can get input from the other people
            involved in the website such as the customer, their manager, and
            other members of the team.
          </p>
        </div>
      </div>
    </div>
  );
}
