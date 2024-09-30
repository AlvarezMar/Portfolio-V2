import js from "../assets/svg/tech/js.svg"
import ts from "../assets/svg/tech/ts.svg"
import html from "../assets/svg/tech/html.svg"
import css from "../assets/svg/tech/css.svg"
import react from "../assets/svg/tech/react.svg"
import tailwind from "../assets/svg/tech/tailwind.svg"
import redux from "../assets/svg/tech/redux.svg"

import nodejs from "../assets/svg/tech/nodejs.svg"
import nestjs from "../assets/svg/tech/nestjs.svg"
import express from "../assets/svg/tech/express.svg"
import mongo from "../assets/svg/tech/mongo.svg"
import postgres from "../assets/svg/tech/postgres.svg"

import docker from "../assets/svg/tech/docker.svg"
import jest from "../assets/svg/tech/jest.svg"

import vsc from "../assets/svg/tech/vsc.svg"
import git from "../assets/svg/tech/git.svg"
import github from "../assets/svg/tech/github.svg"
import insomnia from "../assets/svg/tech/insomnia.svg"
import npm from "../assets/svg/tech/npm.svg"

import java from "../assets/svg/tech/java.svg"
import spring from "../assets/svg/tech/spring.svg"
import nextjs from "../assets/svg/tech/nextjs.svg"
import figma from "../assets/svg/tech/figma.svg"


function TechStack(){
    const techStack = [
        {
            section: "Frontend",
            sectionTech: [
                {
                    tech: js,
                    name: "JavaScript"
                },
                {
                    tech: ts,
                    name: "TypeScript"
                },
                {
                    tech: html,
                    name: "HTML5"
                },
                {
                    tech: css,
                    name: "CSS3"
                },
                {
                    tech: react,
                    name: "React"
                },
                {
                    tech: tailwind,
                    name: "TailwindCSS"
                },
                {
                    tech: redux,
                    name: "Redux"
                },
            ],
        },
        {
            section: "Backend",
            sectionTech: [
                {
                    tech: nodejs,
                    name: "Node.js"
                },
                {
                    tech: nestjs,
                    name: "NestJS"
                },
                {
                    tech: express,
                    name: "Express"
                },
                {
                    tech: mongo,
                    name: "MongoDB"
                },
                {
                    tech: postgres,
                    name: "PostgreSQL"
                },
            ],
        },
        {
            section: "DevOps",
            sectionTech: [
                {
                    tech: docker,
                    name: "Docker"
                },
                {
                    tech: jest,
                    name: "Jest"
                },
            ],
        },
        {
            section: "Tools",
            sectionTech: [
                {
                    tech: vsc,
                    name: "Visual Studio Code"
                },
                {
                    tech: git,
                    name: "Git"
                },
                {
                    tech: github,
                    name: "GitHub"
                },
                {
                    tech: insomnia,
                    name: "Insomnia"
                },
                {
                    tech: npm,
                    name: "NPM"
                },
            ],
        },
        {
            section: "Learning",
            sectionTech: [
                {
                    tech: java,
                    name: "Java"
                },
                {
                    tech: spring,
                    name: "Spring Boot"
                },
                {
                    tech: nextjs,
                    name: "Next.js"
                },
                {
                    tech: figma,
                    name: "Figma"
                },
            ],
        }
    ]

    return (
        <>
        <section className="flex flex-wrap justify-center gap-5 mx-10">

            {techStack.map((tech) => (
                <div key={tech.section}>
                    <h2 className="font-bold text-lg text-center">{tech.section}</h2>

                    <div className="grid grid-cols-3 grid-rows-3 gap-2 border-[#EEEEEE] border-[3px] rounded-3xl p-4 w-48 mx-auto">
                        {tech.sectionTech.map((section) => (
                            <img src={section.tech} alt={`${section.name} logo`} key={section.name}/>
                        ))}

                    </div>
                </div>
            ))}
        </section>
        </>
    )
}

export default TechStack;