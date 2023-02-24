import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import myPhoto from "./images/myphoto.jpg";
import { GrMail, GrTwitter, GrGithub } from "react-icons/gr";
import { MdPageview } from "react-icons/md";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { useState } from "react";
import cv from "./images/cv.pdf";
import ReactIcon from "./images/reacticon.png";
import NextIcon from "./images/next-js.svg";
import NodeIcon from "./images/nodejs.png";
import BootstrapIcon from "./images/bootstrap.svg";
import TailwindIcon from "./images/tailwindcss.png";
import MysqlIcon from "./images/mysql.svg";
import FirebaseIcon from "./images/firebase.png";
import RestapiIcon from "./images/restapi.png";
import TypescriptIcon from "./images/typescript.png";
import TrpcIcon from "./images/trpc.png";
import PrismaIcon from "./images/prisma.svg";
import NextauthIcon from "./images/nextauth.png";
import StripeIcon from "./images/stripe.png";

function App() {
  return (
    <div className="App text-white bg-[#18122B]">
      <div className="flex justify-center">
        <Navbar />
      </div>

      {/* Giriş */}
      <div className="bg-[#18122B] text-white pt-32 pb-8 lg:px-32 px-10 sm:flex  items-center sm:justify-between justify-center sm:text-left text-center">
        <div className="rounded-full sm:hidden flex items-center justify-center mb-6">
          <img
            className="rounded-full lg:w-[400px] w-[200px] shadow-lg"
            src={myPhoto}
            alt="myPhoto"
          />
        </div>
        <div>
          <h2 className="lg:text-7xl text-5xl font-bold text-[#FAD6A5]">
            Azimet Kerem Ersoy
          </h2>
          <p className="lg:mt-6 mt-3 lg:text-5xl text-3xl">Web Developer</p>
          <p className="lg:mt-6 mt-3 lg:text-3xl text-xl">Ankara, Turkey</p>
          <div className="lg:mt-6 mt-3 flex items-center gap-x-5 justify-center sm:justify-start">
            <a href="https://github.com/keremeersoy" target="_blank">
              <GrGithub className="lg:text-3xl text-xl hover:scale-110 duration-300 hover:text-[#161B22]" />
            </a>
            <a href="https://twitter.com/keremeersoy" target="_blank">
              <GrTwitter className="lg:text-3xl text-xl hover:scale-110 duration-300 hover:text-[#1D9BF0]" />
            </a>
            <button
              onClick={() => {
                window.location = "mailto:azimetkeremersoy@gmail.com";
                // navigator.clipboard.writeText("azimetkeremersoy@gmail.com");
              }}
            >
              <GrMail className="lg:text-3xl text-xl hover:scale-110 duration-300 hover:text-[#C5221F]" />
            </button>
          </div>
        </div>
        <div className="border-2 shadow-xl border-[#7B8FA1] rounded-full hidden sm:block">
          <img
            className="rounded-full lg:w-[400px] w-[200px] shadow-lg"
            src={myPhoto}
            alt="myPhoto"
          />
        </div>
      </div>

      {/* About */}
      <div
        className="bg-gradient-to-t from-[#393053] to-[#18122B] lg:py-32 lg:px-32 p-10"
        id="about"
      >
        <h2 className="text-4xl font-bold text-[#EAE0DA]">
          ABOUT
          <div className="h-[1px] mt-2 bg-[#EAE0DA]"></div>
        </h2>
        <div className="text-lg mt-6">
          Much of my life has been spent on computing. I've been interested in
          all areas of technology since my childhood and I've been following it
          closely. My interest in technology continued through high school, so I
          chose the university's computer engineering department. I am currently
          in my 2nd year and I am still improving. I concentrated on web
          development and I continue to learn and do projects in this area,
          especially front-end. React, Next.js, Node.js, Bootstrap, TailwindCSS,
          MySQL, Firebase, Rest API's are just a few technologies I've used in
          my previous projects.
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl text-[#EAE0DA]">University</h2>
            <p className="text-lg mt-6">Kırıkkale University, Turkey</p>
            <p className="text-lg">Computer Engineering, Bachelor's degree</p>
          </div>

          <a
            href={cv}
            download="cv.pdf"
            className="border-2 px-12 py-4 border-[#CFB997] text-[#CFB997] hover:scale-110 duration-300 sm:block hidden"
          >
            Download CV
            {/* <a href={cv} target="_blank" rel="noopener noreferrer">
              Download CV
            </a> */}
          </a>
        </div>
        <a
          href={cv}
          download="cv.pdf"
          className="border-2 px-12 py-4 mt-6 flex items-center justify-center border-[#CFB997] text-[#CFB997] hover:scale-110 duration-300  sm:hidden"
        >
          Download CV
          {/* <a href={cv} target="_blank" rel="noopener noreferrer">
              Download CV
            </a> */}
        </a>
      </div>

      {/* Skills */}
      <div
        className="bg-gradient-to-t from-[#18122B] to-[#393053] lg:py-32 lg:px-32 p-10"
        id="skills"
      >
        <h2 className="text-4xl font-bold text-[#EAE0DA]">
          SKILLS
          <div className="h-[1px] mt-2 bg-[#EAE0DA]"></div>
        </h2>
        <div className="xl:text-lg mt-6">
          {/* React */}
          <div className="lg:m-4 my-2 lg:flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={ReactIcon} alt="react" className="lg:h-10 h-4" />
              <h2 className="ml-4 lg:text-xl">React</h2>
            </div>
            <div className="lg:h-5 h-3 lg:ml-10 lg:mt-0 mt-2 bg-[#EAE0DA]  w-4/5"></div>
          </div>

          {/* Next.js */}
          <div className="lg:m-4 my-2 lg:flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={NextIcon} alt="react" className="lg:h-10 h-4" />
              <h2 className="ml-4 lg:text-xl">Next.js</h2>
            </div>
            <div className="lg:h-5 h-3 lg:ml-10 lg:mt-0 mt-2 bg-[#EAE0DA]  w-4/6"></div>
          </div>

          {/* Typescript */}
          <div className="lg:m-4 my-2 lg:flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={TypescriptIcon} alt="react" className="lg:h-10 h-4" />
              <h2 className="ml-4 lg:text-xl">Typescript</h2>
            </div>
            <div className="lg:h-5 h-3 lg:ml-10 lg:mt-0 mt-2 bg-[#EAE0DA]  w-3/5"></div>
          </div>

          {/* Node.js */}
          <div className="lg:m-4 my-2 lg:flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={NodeIcon} alt="react" className="lg:h-10 h-4" />
              <h2 className="ml-4 lg:text-xl">Node.js</h2>
            </div>
            <div className="lg:h-5 h-3 lg:ml-10 lg:mt-0 mt-2 bg-[#EAE0DA]  w-1/5"></div>
          </div>

          {/* Bootstrap */}
          <div className="lg:m-4 my-2 lg:flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={BootstrapIcon} alt="react" className="lg:h-10 h-4" />
              <h2 className="ml-4 lg:text-xl">Bootstrap</h2>
            </div>
            <div className="lg:h-5 h-3 lg:ml-10 lg:mt-0 mt-2 bg-[#EAE0DA]  w-2/5"></div>
          </div>

          {/* TailwindCSS */}
          <div className="lg:m-4 my-2 lg:flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={TailwindIcon} alt="react" className="lg:h-10 h-4" />
              <h2 className="ml-4 lg:text-xl">TailwindCSS</h2>
            </div>
            <div className="lg:h-5 h-3 lg:ml-10 lg:mt-0 mt-2 bg-[#EAE0DA]  w-4/6"></div>
          </div>

          {/* MySQL */}
          <div className="lg:m-4 my-2 lg:flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={MysqlIcon} alt="react" className="lg:h-10 h-4" />
              <h2 className="ml-4 lg:text-xl">MySQL</h2>
            </div>
            <div className="lg:h-5 h-3 lg:ml-10 lg:mt-0 mt-2 bg-[#EAE0DA]  w-1/3"></div>
          </div>

          {/* Firebase */}
          <div className="lg:m-4 my-2 lg:flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={FirebaseIcon} alt="react" className="lg:h-10 h-4" />
              <h2 className="ml-4 lg:text-xl">Firebase</h2>
            </div>
            <div className="lg:h-5 h-3 lg:ml-10 lg:mt-0 mt-2 bg-[#EAE0DA]  w-1/4"></div>
          </div>

          {/* Rest API's */}
          <div className="lg:m-4 my-2 lg:flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={RestapiIcon} alt="react" className="lg:h-10 h-4" />
              <h2 className="ml-4 lg:text-xl">Rest API's</h2>
            </div>
            <div className="lg:h-5 h-3 lg:ml-10 lg:mt-0 mt-2 bg-[#EAE0DA]  w-5/12"></div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div
        className="bg-gradient-to-t from-[#393053] to-[#18122B] lg:py-32 lg:px-32 p-10"
        id="projects"
      >
        <h2 className="text-4xl font-bold text-[#EAE0DA]">
          PROJECTS
          <div className="h-[1px] mt-2 bg-[#EAE0DA]"></div>
        </h2>
        <div className="grid lg:grid-cols-2 grid-cols-1 mt-6">
          {/* Setcrews */}
          <div className="bg-[#18122B] lg:m-6 my-2 mx-0 p-6 shadow-xl">
            <a
              href="https://setcrews.com"
              target="_blank"
              className="text-2xl flex items-center"
            >
              <div className="hover:scale-110 duration-300">SetCrews</div>{" "}
              <BsBoxArrowUpRight className="ml-4" />
            </a>
            <div className="mt-6">
              SetCrews is a platform developed for people working in various
              sectors, especially the cinema industry, and people who need new
              people in their projects to find themselves.
            </div>
            <div className="mt-12 grid gap-4 md:grid-cols-6 grid-cols-4 xl:grid-cols-12 items-center">
              <img src={NextIcon} className="h-10" alt="" />
              <img src={TailwindIcon} className="h-10" alt="" />
              <img src={MysqlIcon} className="h-10" alt="" />
              <img src={TypescriptIcon} className="h-10" alt="" />
              <img src={TrpcIcon} className="h-10" alt="" />
              <img src={PrismaIcon} className="h-10" alt="" />
              <img src={NextauthIcon} className="h-9" alt="" />
            </div>
          </div>
          {/* disney-plus-clone */}
          <div className="bg-[#18122B] lg:m-6 my-2 mx-0 p-6 shadow-xl">
            <a
              href="https://disney-plus-clone-reactapp.netlify.app"
              target="_blank"
              className="text-2xl flex items-center"
            >
              <div className="hover:scale-110 duration-300">
                disney-plus-clone
              </div>{" "}
              <BsBoxArrowUpRight className="ml-4" />
            </a>
            <div className="mt-6">
              I cloned the Disney plus movie viewing platform. I created the
              login and search pages by editing their design. I edited it so
              that Authentication can be done with FirebaseAuth. I pulled the
              movie data from TMDB API.
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-6 grid-cols-4 xl:grid-cols-12 items-center">
              <img src={ReactIcon} className="h-10" alt="" />
              <img src={TailwindIcon} className="h-10" alt="" />
              <img src={RestapiIcon} className="h-9" alt="" />
              <img src={FirebaseIcon} className="h-10" alt="" />
            </div>
          </div>
          {/* Amazon-clone */}
          <div className="bg-[#18122B] lg:m-6 my-2 mx-0 p-6 shadow-xl">
            <a
              href="https://amazon-clone-woad-eight.vercel.app"
              target="_blank"
              className="text-2xl flex items-center"
            >
              <div className="hover:scale-110 duration-300">amazon-clone</div>{" "}
              <BsBoxArrowUpRight className="ml-4" />
            </a>
            <div className="mt-6">
              I cloned the amazon platform using Next.js. I finalized it by
              adding functions such as authentication, adding products to the
              basket, getting paid with Stripe.
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-6 grid-cols-4 xl:grid-cols-12 items-center">
              <img src={NextIcon} className="h-10" alt="" />
              <img src={TailwindIcon} className="h-10" alt="" />
              <img src={RestapiIcon} className="h-9" alt="" />
              <img src={FirebaseIcon} className="h-10" alt="" />
              <img src={NextauthIcon} className="h-9" alt="" />
              <img src={StripeIcon} className="h-5 " alt="" />
            </div>
          </div>
          {/* react-nodejs-mysql-crud */}
          <div className="bg-[#18122B] lg:m-6 my-2 mx-0 p-6 shadow-xl">
            <div className="text-2xl flex items-center">
              react-nodejs-mysql-crud{" "}
            </div>{" "}
            <div className="mt-6">
              Simple project with React, Node.js, MySQL.
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-6 grid-cols-4 xl:grid-cols-12 items-center">
              <img src={ReactIcon} className="h-10" alt="" />
              <img src={TailwindIcon} className="h-10" alt="" />
              <img src={NodeIcon} className="h-9" alt="" />
              <img src={MysqlIcon} className="h-10" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <Contact />
    </div>
  );
}

export default App;
