import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import myPhoto from "./images/myphoto.jpg";
import { GrMail, GrTwitter, GrGithub } from "react-icons/gr";
import { MdPageview } from "react-icons/md";
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
      <div className="bg-[#18122B] text-white pt-32 pb-8 px-32 flex  items-center justify-between">
        <div>
          <h2 className="text-7xl font-bold text-[#FAD6A5]">
            Azimet Kerem Ersoy
          </h2>
          <p className="mt-6 text-5xl">Web Developer</p>
          <div className="mt-6 flex items-center gap-x-5">
            <a href="https://github.com/keremeersoy" target="_blank">
              <GrGithub className="text-3xl hover:scale-110 duration-300 hover:text-[#161B22]" />
            </a>
            <a href="https://twitter.com/keremeersoy" target="_blank">
              <GrTwitter className="text-3xl hover:scale-110 duration-300 hover:text-[#1D9BF0]" />
            </a>
            <button
              onClick={() => {
                window.location = "mailto:azimetkeremersoy@gmail.com";
                // navigator.clipboard.writeText("azimetkeremersoy@gmail.com");
              }}
            >
              <GrMail className="text-3xl hover:scale-110 duration-300 hover:text-[#C5221F]" />
            </button>
          </div>
        </div>
        <div className="border-2 shadow-xl border-[#7B8FA1] rounded-full">
          <img
            className="rounded-full w-[400px] shadow-lg"
            src={myPhoto}
            alt="myPhoto"
          />
        </div>
      </div>

      {/* About */}
      <div
        className="bg-gradient-to-t from-[#393053] to-[#18122B] py-32 px-32"
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
            className="border-2 px-12 py-4 border-[#CFB997] text-[#CFB997] hover:scale-110 duration-300"
          >
            Download CV
            {/* <a href={cv} target="_blank" rel="noopener noreferrer">
              Download CV
            </a> */}
          </a>
        </div>
      </div>

      {/* Skills */}
      <div
        className="bg-gradient-to-t from-[#18122B] to-[#393053] py-32 px-32"
        id="skills"
      >
        <h2 className="text-4xl font-bold text-[#EAE0DA]">
          SKILLS
          <div className="h-[1px] mt-2 bg-[#EAE0DA]"></div>
        </h2>
        <div className="text-lg mt-6">
          <div className="m-4 flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={ReactIcon} alt="react" className="h-10" />
              <h2 className="ml-4 text-xl">React</h2>
            </div>
            <div className="h-5 ml-10 bg-[#EAE0DA] w-[900px]"></div>
          </div>

          <div className="m-4 flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={NextIcon} alt="react" className="h-10" />
              <h2 className="ml-4 text-xl">Next.js</h2>
            </div>
            <div className="h-5 ml-10 bg-[#EAE0DA] w-[650px]"></div>
          </div>

          <div className="m-4 flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={TypescriptIcon} alt="react" className="h-10" />
              <h2 className="ml-4 text-xl">Typescript</h2>
            </div>
            <div className="h-5 ml-10 bg-[#EAE0DA] w-[550px]"></div>
          </div>

          <div className="m-4 flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={NodeIcon} alt="react" className="h-10" />
              <h2 className="ml-4 text-xl">Node.js</h2>
            </div>
            <div className="h-5 ml-10 bg-[#EAE0DA] w-[150px]"></div>
          </div>

          <div className="m-4 flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={BootstrapIcon} alt="react" className="h-10" />
              <h2 className="ml-4 text-xl">Bootstrap</h2>
            </div>
            <div className="h-5 ml-10 bg-[#EAE0DA] w-[450px]"></div>
          </div>

          <div className="m-4 flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={TailwindIcon} alt="react" className="h-10" />
              <h2 className="ml-4 text-xl">TailwindCSS</h2>
            </div>
            <div className="h-5 ml-10 bg-[#EAE0DA] w-[650px]"></div>
          </div>

          <div className="m-4 flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={MysqlIcon} alt="react" className="h-10" />
              <h2 className="ml-4 text-xl">MySQL</h2>
            </div>
            <div className="h-5 ml-10 bg-[#EAE0DA] w-[300px]"></div>
          </div>

          <div className="m-4 flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={FirebaseIcon} alt="react" className="h-10" />
              <h2 className="ml-4 text-xl">Firebase</h2>
            </div>
            <div className="h-5 ml-10 bg-[#EAE0DA] w-[250px]"></div>
          </div>

          <div className="m-4 flex items-center p-4 bg-[#18122B] shadow-xl">
            <div className="w-40 flex items-center">
              <img src={RestapiIcon} alt="react" className="h-10" />
              <h2 className="ml-4 text-xl">Rest API's</h2>
            </div>
            <div className="h-5 ml-10 bg-[#EAE0DA] w-[350px]"></div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div
        className="bg-gradient-to-t from-[#393053] to-[#18122B] py-32 px-32"
        id="projects"
      >
        <h2 className="text-4xl font-bold text-[#EAE0DA]">
          PROJECTS
          <div className="h-[1px] mt-2 bg-[#EAE0DA]"></div>
        </h2>
        <div className="grid grid-cols-2 mt-6">
          {/* Setcrews */}
          <div className="bg-[#18122B] m-6 p-6 shadow-xl">
            <a
              href="https://setcrews.com"
              target="_blank"
              className="text-2xl flex items-center"
            >
              <div className="hover:scale-110 duration-300">SetCrews</div>{" "}
              <MdPageview className="ml-4" />
            </a>
            <div className="mt-6">
              SetCrews is a platform developed for people working in various
              sectors, especially the cinema industry, and people who need new
              people in their projects to find themselves.
            </div>
            <div className="mt-12 grid gap-4 grid-cols-6 xl:grid-cols-12 items-center">
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
          <div className="bg-[#18122B] m-6 p-6 shadow-xl">
            <a
              href="https://disney-plus-clone-reactapp.netlify.app"
              target="_blank"
              className="text-2xl flex items-center"
            >
              <div className="hover:scale-110 duration-300">
                disney-plus-clone
              </div>{" "}
              <MdPageview className="ml-4" />
            </a>
            <div className="mt-6">
              I cloned the Disney plus movie viewing platform. I created the
              login and search pages by editing their design. I edited it so
              that Authentication can be done with FirebaseAuth. I pulled the
              movie data from TMDB API.
            </div>
            <div className="mt-6 grid gap-4 grid-cols-6 xl:grid-cols-12 items-center">
              <img src={ReactIcon} className="h-10" alt="" />
              <img src={TailwindIcon} className="h-10" alt="" />
              <img src={RestapiIcon} className="h-9" alt="" />
              <img src={FirebaseIcon} className="h-10" alt="" />
            </div>
          </div>
          {/* Amazon-clone */}
          <div className="bg-[#18122B] m-6 p-6 shadow-xl">
            <a
              href="https://amazon-clone-woad-eight.vercel.app"
              target="_blank"
              className="text-2xl flex items-center"
            >
              <div className="hover:scale-110 duration-300">amazon-clone</div>{" "}
              <MdPageview className="ml-4" />
            </a>
            <div className="mt-6">
              I cloned the amazon platform using Next.js. I finalized it by
              adding functions such as authentication, adding products to the
              basket, getting paid with Stripe.
            </div>
            <div className="mt-6 grid gap-4 grid-cols-6 xl:grid-cols-12 items-center">
              <img src={NextIcon} className="h-10" alt="" />
              <img src={TailwindIcon} className="h-10" alt="" />
              <img src={RestapiIcon} className="h-9" alt="" />
              <img src={FirebaseIcon} className="h-10" alt="" />
              <img src={NextauthIcon} className="h-9" alt="" />
              <img src={StripeIcon} className="" alt="" />
            </div>
          </div>
          {/* react-nodejs-mysql-crud */}
          <div className="bg-[#18122B] m-6 p-6 shadow-xl">
            <div className="text-2xl flex items-center">
              react-nodejs-mysql-crud{" "}
            </div>{" "}
            <div className="mt-6">
              Simple project with React, Node.js, MySQL.
            </div>
            <div className="mt-10 grid gap-4 grid-cols-6 xl:grid-cols-12 items-center">
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
