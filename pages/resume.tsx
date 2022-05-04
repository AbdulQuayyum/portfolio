import Bar from "../components/Bar";
import { languages, tools } from "../data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimation } from "../styles/animation";
import Head from "next/head"

const Resume = () => {


  return (
    <motion.div className="px-6 py-2"
      variants={routeAnimation}
      initial="initial"
      animate="animate"
      exit="exit" 
    >

<Head>
      <title>
          Web Developer | portfolio | Alao Abdul-Quayyum | Quayyum | MERN Stack
      </title>
    </Head>

      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Computer Science 
            </h5>
            <p className="font-semibold">University Of Ilorin (2021-2024)</p>
            <p className="my-3">
              I am currently pursuing B.Sc in Computer Science in University Of Ilorin
            </p>
            <p className="font-semibold">Junior Front-End Developer @ D'Accubin Technology</p>
          </div>
        </motion.div>
        <motion.div variants={fadeInUp} initial="initial" animate="animate">
          <h5 className="my-3 text-2xl font-bold">Soft Skills</h5>
          <div className="">
            <p className="font-semibold">-Creative </p>
            <p className="my-3">Able to implement visual appealing and
                               functional design elements</p>
            <p className="font-semibold">-Debugging</p>
            <p className="my-3">-Proficient user of chrome dev tools to identify
                                 errors and proficient use of google </p>
          </div>
        </motion.div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Languages & Frameworks</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Resume;
