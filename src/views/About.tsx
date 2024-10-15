import { useTranslation } from "react-i18next";
import TechStack from "../components/TechStack";

function About(){

    const { t } = useTranslation();

    return (
        <>
        <section className="max-w-[1200px] mx-auto px-4 sm:px-10" id="About">
            <div className="flex flex-col gap-4">
                <div className="flex place-items-center mb-4">
                    <h1 className="text-[55px] font-extrabold text-nowrap">{t('about.heading')}<span className="text-accent">.</span></h1>
                    <hr  className="w-full mx-5 border-t-2 dark:border-hr_dark"/>
                </div>

                <div className="flex flex-col gap-4 lg:mx-8">
                    <h2 className="text-2xl">{t('about.greeting')}<span className="text-accent">Juan Carlos Alvarez Martínez</span>...</h2>

                    <div className="flex flex-col gap-4 text-secondary dark:text-secondary_dark">
                        <p>{t('about.first_paragraph')}</p>

                        <p>{t('about.second_paragraph')}</p>
                    </div>
                    
                    <span className="font-bold m-5">{t('about.stack')}</span>

                    <TechStack/>
                </div>
            </div>
        </section>
        </>
    )
}

export default About;