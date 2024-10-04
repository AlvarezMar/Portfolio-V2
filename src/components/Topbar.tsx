import cv from "../assets/svg/elements/cv.svg"
import settings from "../assets/svg/elements/settings.svg"
function Topbar(){

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

                <img src={settings} alt="" width="35px"/>

            </div>
        </section>
        </>
    )
}

export default Topbar;