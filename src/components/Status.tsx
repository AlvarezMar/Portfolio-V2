import { useTranslation } from "react-i18next";
import Availability from "../assets/svg/status/availability.svg?react"
import Location from "../assets/svg/status/location.svg?react"

function Status(){

    const { t } = useTranslation();

    return (
        <>
        <div className='absolute lg:pl-[3px] py-1 bottom-0 mb-[1.5rem] lg:mb-[4.1rem]'>
            <div className='flex flex-col gap-1 lg:gap-0'>
                <div className='group flex place-items-center w-[43px] lg:w-[60px]'>
                    <Availability className="z-20"/>
                    <div className='text-sm lg:text-base opacity-0 absolute z-10 bg-background dark:bg-background_dark py-3 px-5 rounded-r-full translate-x-3 group-hover:translate-x-[22%] lg:group-hover:translate-x-[35%] group-hover:opacity-100 transition-all duration-300'>
                        <p className="whitespace-nowrap">{t('menusAndHome.availability_tooltip')}</p>
                    </div>

                </div>
                <div className='group flex place-items-center'>
                    <Location className="z-20"/>
                    <div className='text-sm lg:text-base opacity-0 absolute z-10 bg-background dark:bg-background_dark py-3 px-5 rounded-r-full translate-x-3 group-hover:translate-x-[22%] lg:group-hover:translate-x-[35%] group-hover:opacity-100 transition-all duration-300'>
                        <p className="whitespace-nowrap">{t('menusAndHome.relocation_tooltip')}</p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Status;