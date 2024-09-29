import cv from "../assets/svg/elements/cv.svg"

function Topbar(){

    return (
        <>
        <section className="flex place-items-center justify-between p-5 sticky">
            <h2 className="text-[1.2rem] font-bold">Juan Carlos Alvarez</h2>

            <a href="https://docs.google.com/document/d/1UHZOjRkxEIEBW9Y9de9hTC_9kTX0YRyYtyTjBs69r3k/edit?usp=sharing" target="_blank" 
            className="flex gap-2 bg-primary text-background p-2.5 rounded-md hover:scale-105 transition-all">
                <img src={cv} alt="Curriculum vitae icon linking to Juan Carlos's resume" width="20px"/>
            </a>
        </section>
        </>
    )
}

export default Topbar;