import React from "react";
import { IoArrowForward } from "react-icons/io5";


export default function Home() {
  return (
    <section className="pt-[50px] pb-[20px] relative">
      <div className="container text-center md:text-left">
        <p className="text-xl mb-3 text-[#7b7b7b] font-Roboto-Medium">
          Revolutionize Your
        </p>

        <h3 className="text-gray-900 font-Roboto-Medium text-[34px] xxs:text-[42px] sm:text-[64px] leading-[1.2]">
          <span> Creative Projects with</span>{" "}
          <br className="hidden md:block" />
          <span>the Ultimate AI-Powered</span>{" "}
          <br className="hidden md:block" />
          <span className="md:flex items-center gap-x-[2rem]">
            Pattern{" "}
            <div className="hidden md:block mx-auto my-[1rem] md:mx-0 cursor-pointer w-fit h-fit uppercase py-[15px] px-[20px] rounded-full bg-gray-900 text-white text-sm font-Roboto-Regular flex-shrink-0">
              Start Generating
            </div>
            <div className="my-[1rem] text-lg leading-[1.3]">
              <span className="text-gray-400 font-Roboto-Regular">
                {" "}
                The Next-generation
              </span>
              <br />
              Production{" "}
              <span className="text-gray-400 font-Roboto-Regular">
                {" "}
                for Designers
              </span>
            </div>
            <div className="block md:hidden mx-auto my-[1rem] md:mx-0 cursor-pointer w-fit h-fit uppercase py-[15px] px-[20px] rounded-full bg-gray-900 text-white text-sm font-Roboto-Regular flex-shrink-0">
              Start Generating
            </div>
          </span>
        </h3>
      </div>
      <div className="pt-[70px] relative">
        <div className="flex relative z-20 flex-col md:flex-row gap-[10px]">
          <div className="w-full md:w-[25%] background background1">
            <div className="label">01</div>

            <div className="flex flex-col gap-y-[0.5rem]">
              <div className="flex">
                <img
                  className="w-[50px] rounded-full border-[2px]"
                  src="/assets/avatar.jpg"
                />
                <img
                  className="w-[50px] ml-[-15px] rounded-full border-[2px]"
                  src="/assets/avatar.jpg"
                />
                <img
                  className="w-[50px] ml-[-15px] rounded-full border-[2px]"
                  src="/assets/avatar.jpg"
                />
              </div>
              <p className="text-lg">Learn from best mentors</p>
              <button className="backdrop-blur-lg text-left whitespace-nowrap uppercase flex items-center text-[14px] font-Roboto-Medium w-fit border-[1px] rounded-full py-[8px] px-[12px]">
                Start Learning <IoArrowForward className="ml-[8px] text-lg rotate-45"/>
              </button>
            </div>
          </div>
          <div className="w-full md:w-[25%] background background2">
            <div className="label">02</div>
            <div className="flex flex-col gap-y-[0.5rem]">

              <a href="#" className="text-lg flex justify-between items-center">Free Edit <IoArrowForward className="ml-[8px] text-xl rotate-45"/></a>
              <a href="#" className="text-lg flex justify-between items-center">Interactive <IoArrowForward className="ml-[8px] text-xl rotate-45"/></a>
              <a href="#" className="text-lg flex justify-between items-center">Easy interface <IoArrowForward className="ml-[8px] text-xl rotate-45"/></a>
              <a href="#" className="text-lg flex justify-between items-center">Compare to other <IoArrowForward className="ml-[8px] text-xl rotate-45"/></a>
            </div>
          </div>
          <div className="w-full md:w-[50%] background background3 ">
            <div className="label">03</div>
            <div className="flex flex-wrap lg:flex-nowrap lg:items-center gap-x-[2rem] font-Roboto-Regular justify-evenly">
              <p className=" w-full lg:w-fit text-[42px] md:text-[62px] flex-3 lg:flex-auto">+20K</p>
              <p className="w-full lg:w-fit text-lg flex-1 lg:flex-auto leading-[1.3]">
                Glass Pattern generated this week in the first release.
              </p>
              <div className="flex-0 min-w-fit lg:w-fit lg:flex-auto">
                <img
                  className="w-[30px] h-[30px] bright"
                  src="/assets/bird.png"
                />
              </div>
            </div>
          </div>
        </div>
        <img
        className="absolute z-10 top-[-50%] md:top-[-80%] flip-x opacity-5 top-[0%] right-[0%]  rotate-180"
        src="/assets/line-clipart.png"
      />
      </div>

      <img
        className="hidden md:block absolute rotate-45 opacity-5 top-[25%] right-[25%] w-[70px]"
        src="/assets/star.png"
      />
      <img
        className=" absolute opacity-5 top-[0%] left-[20%] w-[50px]"
        src="/assets/star.png"
      />
    </section>
  );
}
