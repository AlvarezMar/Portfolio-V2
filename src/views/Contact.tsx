import { useState } from "react"
import { Tooltip } from "react-tooltip"
import { useTranslation } from "react-i18next"

import copy from "../assets/svg/elements/copy.svg"
import send from "../assets/svg/elements/send.svg"

function Contact(){

    const { t } = useTranslation();

    const [copiedToClipboard, setCopiedToClipboard] = useState(t('contact.copyTooltip'))

    const copyToClipboard = () => {
        navigator.clipboard.writeText("alvarez.majuan@hotmail.com")
        setCopiedToClipboard(t('contact.copiedTooltip'))
    }

    return (
        <>
        <section className="max-w-[1200px] mx-auto text-center px-4 my-52 lg:my-64" id="Contact">

            <div className="mb-6">
                <h1 className="text-[70px] lg:text-8xl font-bold">{t('contact.heading')}<span className="text-accent">.</span></h1>
                <p className="text-base lg:text-lg max-w-[570px] mx-auto text-secondary dark:text-secondary_dark">{t('contact.subheadingOne')}<a href="https://linkedin.com/in/alvarezmajuan" target="_blank" className="text-accent hover:underline">LinkedIn</a>{t('contact.subheadingTwo')}</p>
            </div>

            <div className="flex gap-2 items-center justify-center">
                <div className="text-sm lg:text-base bg-[#E5E5E5] text-[#AFAFAF] p-3 rounded-md max-w-96 w-3/4 lg:w-full">
                    <h2 translate="no" className="text-start">alvarez.majuan@hotmail.com</h2>
                </div>
                <a href="mailto:alvarez.majuan@hotmail.com" target="_blank" data-tooltip-id="sendEmail" className="bg-primary text-background p-3.5 rounded-lg hover:scale-110 transition-all">
                    <img src={send} alt="Send icon to send a new email" width="20px"/>
                </a>
                
                <button onClick={copyToClipboard} data-tooltip-id="copyEmail" className="bg-primary text-background p-3.5 rounded-lg hover:scale-110 transition-all">
                    <img src={copy} alt="Copy icon to copy Juan Carlos's email to clipboard" width="20px"/>
                </button>
            </div>
        </section>

        <Tooltip id="sendEmail" content={t('contact.sendTooltip')} opacity="1"place="top" style={{fontFamily: 'monospace', padding: '.3rem .8rem', backgroundColor: '#323232', color: 'white', borderRadius: '1rem'}}/>
        <Tooltip id="copyEmail" content={copiedToClipboard} opacity="1" place="top-end" style={{fontFamily: 'monospace', padding: '.3rem .8rem', backgroundColor: '#323232', color: 'white', borderRadius: '1rem'}}/>
        </>
    )
}

export default Contact;