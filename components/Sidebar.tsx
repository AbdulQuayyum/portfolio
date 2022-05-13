import { AiFillGithub, AiFillLinkedin, AiOutlineTwitter } from "react-icons/ai";
import { GiTie } from "react-icons/gi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
import Image from "next/image";
import mypic from "../public/images/mypic.jpg"

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      {/* <img src="https://media-exp1.licdn.com/dms/image/C5603AQHguWnYXDlslw/profile-displayphoto-shrink_200_200/0/1642283387726?e=1653523200&v=beta&t=kA2cVZ-Xen0atx13F-obbXROG13UYLtz1weul9Xsrbc" 
    alt="avatar"
    className="mx-auto border rounded-full "
    height="128px"
    width="128px"
    layout="intrinsic"
    quality="100" /> */}
      <Image
        src={mypic}
        alt="avatar"
        className="mx-auto border rounded-full "
        height="128px"
        width="128px"
        layout="intrinsic"
        quality="100"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="from-slate-400 to-slate-900 ">Alao</span> Abdul-Quayyum
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500">
        Software Developer
      </p>
      {/* Resume */}
      <a
        href="/resume/Alao Abdul-Quayyum .pdf"
        download="Alao Abdul-Quayyum.pdf"
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500 hover:scale-105"
      >
        <GiTie className="w-6 h-6" />
        <span>Download Resume</span>
      </a>

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 from-slate-400 to-slate-900 md:w-full ">
        <a href="https://twitter.com/AlaoQuayyum" aria-label="Twitter">
          <AiOutlineTwitter className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/alao-abdul-quayyum-982492218/?originalSubdomain=ng " aria-label="LinkedIn">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://github.com/AbdulQuayyum" aria-label="GitHub">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center">
          <GoLocation className="mr-2" /> <span>Nigeria </span>
        </div>
        <p className="my-2 "> alaoabdulquayyumm@gmail.com </p>
        <p className="my-2"> 08078595073 / 08105861814 </p>
      </div>

      {/* Email Button */}

      <button
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-slate-400 to-slate-900 hover:scale-105 focus:outline-none"
        onClick={() => window.open("mailto:alaoabdulquayyumm@gmail.com")}
      >
        Email me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-slate-400 to-slate-900 focus:outline-none hover:scale-105 "
      >
        {/* //TODO remove bg black */}
        Toggle Theme
      </button>
    </>
  );
};

export default Sidebar;
