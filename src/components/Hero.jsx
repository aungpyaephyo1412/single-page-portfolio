import Heropic from '../img/Untitled design.png'
import {BiMouse} from 'react-icons/bi'
import {BsGithub,BsStackOverflow} from 'react-icons/bs'
import {TbBrandCodepen} from 'react-icons/tb';
import {AiFillInstagram} from 'react-icons/ai'
const Hero = () => {
    return (
        <section className='pt-[55px] lg:pt-0' id='home' >
            <div className='container mx-auto relative'>
                <div className="min-h-screen flex flex-col justify-start md:justify-center items-center flex-wrap">
                    <div className='w-full flex justify-center items-center flex-wrap'>
                        <div className="w-full lg:w-2/4 px-5 pt-3">
                            <div className='flex justify-start items-start mx-auto gap-x-[0.1rem] md:gap-x-4'>
                                <div className='flex flex-col justify-center items-center'>
                                    <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
                                    <div className='w-1 h-80 violet-gradient' />
                                </div>
                                <div className='mt-5'>
                                    <h1 className='text-text text-4xl font-bold tracking-wide mb-5'>Hi, I'm <span className='text-blue-500'>Typle</span> </h1>
                                    <p className='text-text text-2xl tracking-wide leading-9 mb-7'>I am a website developer.<br/> I develop my portfolio , user <br className='hidden lg:block'/>
                                        interfaces and web applications</p>
                                    <a href='#contact' className='text-white bg-blue-500 px-6 py-2 rounded text-center hover:bg-blue-900'>Hire Me</a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full lg:w-2/4 flex flex-col lg:flex-row justify-center items-center gap-5 p-5">
                            <div className='flex flex-row items-center lg:flex-col gap-x-5 lg:gap-x-0 lg:gap-y-5'>
                                <a href="https://github.com/typle445" target='_blank'>
                                    <BsGithub className='text-3xl'/>
                                </a>
                                <a href="https://codepen.io/typle" target='_blank'>
                                    <TbBrandCodepen className='text-3xl text-white'/>
                                </a>
                                <a href="https://stackoverflow.com/users/20815687/typle" target='_blank'>
                                    <BsStackOverflow className='text-3xl text-red-500'/>
                                </a>
                                <a href="https://www.instagram.com/typle_x_x/" target='_blank'>
                                    <AiFillInstagram className='text-3xl text-[#060047]'/>
                                </a>
                            </div>
                            <div>
                                <img src={Heropic} className='block mx-auto h-auto lg:h-96 rounded-xl' alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className='h-3 text-center absolute bottom-20'>
                        <a href="#about" className='text-text animate-bounce hidden lg:block'>
                            <div className='flex flex-col justify-center items-center gap-y-2'>
                                <p>Scroll Down</p>
                                <BiMouse className='text-3xl'/>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero