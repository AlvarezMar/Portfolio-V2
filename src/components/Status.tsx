import availability from "../assets/svg/status/availability.svg"
import location from "../assets/svg/status/location.svg"

function Status(){

    return (
        <>
        <div className='absolute pl-[3px] py-1 bottom-0 mb-[4.1rem]'>
            <div className='flex flex-col'>
                <div className='group flex place-items-center'>
                    <img className="z-20" src={availability} alt="" width='60px'/>
                    <div className='opacity-0 absolute z-10 bg-background dark:bg-background_dark py-3 px-5 rounded-r-full translate-x-3 group-hover:translate-x-[35%] group-hover:opacity-100 transition-all duration-300'>
                        <p className="whitespace-nowrap">Available to work</p>
                    </div>

                </div>
                <div className='group flex place-items-center'>
                    <img className="z-20" src={location} alt="" width='60px'/>
                    <div className='opacity-0 absolute z-10 bg-background dark:bg-background_dark py-3 px-5 rounded-r-full translate-x-3 group-hover:translate-x-[35%] group-hover:opacity-100 transition-all duration-300'>
                        <p className="whitespace-nowrap">Open to relocate</p>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default Status;