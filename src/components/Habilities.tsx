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
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <FaReact className="inline-block text-blue-500" /> React Js
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiFlutter className="inline-block text-blue-600" /> Flutter
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiTailwindcss className="inline-block text-blue-400" /> Tailwind
                CSS
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiHtml5 className="inline-block text-orange-500" /> HTML
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiCss3 className="inline-block text-blue-600" /> CSS
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiJavascript className="inline-block text-yellow-500" /> JavaScript
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiBootstrap className="inline-block text-purple-700" /> Bootstrap
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="p-6 border card__content rounded-xl border-purple">
            <h3 className="mb-4 text-2xl font-semibold text-center">
              Backend
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <FaNodeJs className="inline-block text-green-500" /> Node Js
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiExpress className="inline-block text-gray-500" /> Express Js
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiPython className="inline-block text-yellow-400" /> Python
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiMysql className="inline-block text-blue-500" /> MySQL
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiMongodb className="inline-block text-green-500" /> MongoDB
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiFirebase className="inline-block text-yellow-500" /> Firebase
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiSpringboot className="inline-block text-green-500" /> Spring Boot
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="p-6 border card__content rounded-xl border-purple">
            <h3 className="mb-4 text-2xl font-semibold text-center">
              Others
            </h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <FaGithub className="inline-block text-white" /> GitHub
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiCanva className="inline-block text-blue-500" /> Canva
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiNetlify className="inline-block text-blue-500" /> Netlify
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiVisualstudiocode className="inline-block text-blue-600" /> VS Code
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiPostman className="inline-block text-orange-500" /> Postman
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiIntellijidea className="inline-block text-white" /> IntelliJ Idea
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiFigma className="inline-block text-red-500" /> Figma
              </div>
              <div className="bg-[#1f1f1f] p-3 rounded text-center">
                <SiAndroidstudio className="inline-block text-green-500" /> Android Studio
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
