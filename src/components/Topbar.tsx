import cv from "../assets/svg/elements/cv.svg"
import light from "../assets/svg/elements/light.svg"
import dark from "../assets/svg/elements/dark.svg"
import { useState } from "react"
function Topbar(){

    const [darkMode, setDarkMode] = useState(true);

    const toggleTheme = () => {
        const isDark = document.documentElement.classList.contains('dark');
        if(isDark){
            document.documentElement.classList.remove('dark');
            setDarkMode(false);
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            setDarkMode(true);
            localStorage.setItem('theme', 'dark');
        }
    }

    const savedTheme = localStorage.getItem('theme');
    if(savedTheme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');

    return (
        <>
        <section className="flex place-items-center justify-between p-5 sticky top-0 backdrop-blur-md z-50" id="topbar">
            <h2 className="text-[1.2rem] font-bold">Juan Carlos Alvarez</h2>

            <div className="flex gap-3">
                <a href="https://docs.google.com/document/d/1UHZOjRkxEIEBW9Y9de9hTC_9kTX0YRyYtyTjBs69r3k/edit?usp=sharing" target="_blank" 
                className="flex place-items-center gap-2 bg-primary text-background p-2.5 rounded-md hover:scale-105 transition-all">
                    Download CV
                    <img src={cv} alt="Curriculum vitae icon to open Juan Carlos's resume" width="20px"/>
                </a>

                <img onClick={toggleTheme} src={darkMode ? light : dark} alt="Theme icon to change between themes" width="35px" className="cursor-pointer"/>
 
            </div>
        </section>
        </>
    )
}

export default Topbar;