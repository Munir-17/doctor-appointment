import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            sunt distinctio beatae voluptatem, debitis qui voluptates autem
            nihil mollitia ullam fuga tenetur modi rem cum blanditiis quae ea!
            Consectetur, autem?{" "}
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            aut earum ducimus reiciendis ex asperiores, quisquam saepe
            repudiandae dolorem, autem rerum quia cumque aspernatur facilis
            eaque doloribus in, officia quasi!
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            voluptatum sunt aliquam est exercitationem esse similique, odio
            suscipit obcaecati dignissimos corrupti quas assumenda accusamus, at
            praesentium molestias dolor culpa fuga?
          </p>
        </div>
      </div>
      <div className="text-xl my-4">
        <p>
          WHY <span className="text-gray-700 font-semibold">CHOOSE US</span>
        </p>
      </div>
      <div className=" flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px16 py8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b> Efficiency</b>
          <p>
            Streamlined appointment scheduling that fits into your busy lifesty
          </p>
        </div>
        <div className="border px-10 md:px16 py8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience</b>
          <p>
            Access to a network of trusted healthcare professionals in your area
          </p>
        </div>
        <div className="border px-10 md:px16 py8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Pesonalization</b>
          <p>
            Tailored recommentationdations and remainders to help you stay on
            top of your health
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
