import copy from "../assets/svg/elements/copy.svg"
import send from "../assets/svg/elements/send.svg"

function Contact(){

    const copyToClipboard = () => {
        navigator.clipboard.writeText("alvarez.majuan@hotmail.com")
    }

    return (
        <>
        <section className="max-w-[1200px] mx-auto text-center px-2">

            <div className="mb-6">
                <h1 className="text-8xl font-bold">Contact<span className="text-accent">.</span></h1>
                <p className="text-lg max-w-[570px] mx-auto">Have an idea or question? Feel free to contact me via email or connect with me on <a href="https://linkedin.com/in/alvarezmajuan" target="_blank" className="text-accent hover:underline">LinkedIn</a>. I'm always open to new opportunities!</p>
            </div>

            <div className="flex gap-2 items-center justify-center">
                <div className="bg-[#E5E5E5] text-[#AFAFAF] p-3 rounded-md max-w-96 w-full">
                    <h2 className="text-start">alvarez.majuan@hotmail.com</h2>
                </div>
                <a href="" className="bg-primary text-background p-3 rounded-md hover:scale-105 transition-all">
                    <img src={send} alt="Send icon to send a new email" width="20px"/>
                </a>
                
                <button onClick={copyToClipboard} className="bg-primary text-background p-3 rounded-md hover:scale-105 transition-all">
                    <img src={copy} alt="Copy icon to copy Juan Carlos's email to clipboard" width="20px"/>
                </button>
            </div>


        </section>
        </>
    )
}

export default Contact;