import React from "react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import {
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiExpress,
  SiPython,
  SiMysql,
  SiMongodb,
  SiSpringboot,
  SiFirebase,
  SiNetlify,
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiCanva,
  SiAndroidstudio,
  SiFlutter,
  SiIntellijidea,
} from "react-icons/si";
import "./css/Skills.css"

const Skills: React.FC = () => {
  return (
    <div className="py-12 text-white"
      style={{
        background: `linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(124, 9, 112, 0) 50%), 
                    linear-gradient(141.27deg, rgba(2, 65, 190, 0) 50%, rgba(0, 70, 209, 0.15) 100%)`
      }}>
      <h2 className="mb-6 text-4xl font-bold text-center">Skills</h2>
      <p className="mb-12 text-center">
        Here are some of my skills that I have been working on over the past few years as a developer.
      </p>
      <div className="flex flex-wrap items-start justify-center gap-12">
        <div className="card">
          <div className="p-6 border card__content rounded-xl border-purple">
            <h3 className="mb-4 text-2xl font-semibold text-center">
              Frontend
            </h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <FaReact className="block mx-auto text-4xl text-blue-500" />
                <span className="block text-sm sm:text-base lg:text-lg">React Js</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiFlutter className="block mx-auto text-4xl text-blue-600" />
                <span className="block text-sm sm:text-base lg:text-lg">Flutter</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiTailwindcss className="block mx-auto text-4xl text-blue-400" />
                <span className="block text-sm sm:text-base lg:text-lg">Tailwind CSS</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiHtml5 className="block mx-auto text-4xl text-orange-500" />
                <span className="block text-sm sm:text-base lg:text-lg">HTML</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiCss3 className="block mx-auto text-4xl text-blue-600" />
                <span className="block text-sm sm:text-base lg:text-lg">CSS</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiJavascript className="block mx-auto text-4xl text-yellow-500" />
                <span className="block text-sm sm:text-base lg:text-lg">JavaScript</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiBootstrap className="block mx-auto text-4xl text-purple-700" />
                <span className="block text-sm sm:text-base lg:text-lg">Bootstrap</span>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Section */}
        <div className="card">
          <div className="p-6 border card__content rounded-xl border-purple">
            <h3 className="mb-4 text-2xl font-semibold text-center">
              Backend
            </h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <FaNodeJs className="block mx-auto text-4xl text-green-500" />
                <span className="block text-sm sm:text-base lg:text-lg">Node Js</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiExpress className="block mx-auto text-4xl text-gray-500" />
                <span className="block text-sm sm:text-base lg:text-lg">Express Js</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiPython className="block mx-auto text-4xl text-yellow-400" />
                <span className="block text-sm sm:text-base lg:text-lg">Python</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiMysql className="block mx-auto text-4xl text-blue-500" />
                <span className="block text-sm sm:text-base lg:text-lg">MySQL</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiMongodb className="block mx-auto text-4xl text-green-500" />
                <span className="block text-sm sm:text-base lg:text-lg">MongoDB</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiFirebase className="block mx-auto text-4xl text-yellow-500" />
                <span className="block text-sm sm:text-base lg:text-lg">Firebase</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiSpringboot className="block mx-auto text-4xl text-green-500" />
                <span className="block text-sm sm:text-base lg:text-lg">Spring Boot</span>
              </div>
            </div>
          </div>
        </div>

        {/* Others Section */}
        <div className="card">
          <div className="p-6 border card__content rounded-xl border-purple">
            <h3 className="mb-4 text-2xl font-semibold text-center">
              Others
            </h3>
            <div className="grid grid-cols-3 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <FaGithub className="block mx-auto text-4xl text-white" />
                <span className="block text-sm sm:text-base lg:text-lg">GitHub</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiCanva className="block mx-auto text-4xl text-blue-500" />
                <span className="block text-sm sm:text-base lg:text-lg">Canva</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiNetlify className="block mx-auto text-4xl text-blue-500" />
                <span className="block text-sm sm:text-base lg:text-lg">Netlify</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiVisualstudiocode className="block mx-auto text-4xl text-blue-600" />
                <span className="block text-sm sm:text-base lg:text-lg">VS Code</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiPostman className="block mx-auto text-4xl text-orange-500" />
                <span className="block text-sm sm:text-base lg:text-lg">Postman</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiIntellijidea className="block mx-auto text-4xl text-white" />
                <span className="block text-sm sm:text-base lg:text-lg">IntelliJ Idea</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiFigma className="block mx-auto text-4xl text-red-500" />
                <span className="block text-sm sm:text-base lg:text-lg">Figma</span>
              </div>
              <div className="max-w-xs p-2 mx-auto text-center rounded puff-in-center">
                <SiAndroidstudio className="block mx-auto text-4xl text-green-500" />
                <span className="block text-sm sm:text-base lg:text-lg">Android Studio</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
