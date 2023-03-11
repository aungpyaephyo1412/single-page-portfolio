import Design from '../img/icon/S_02.png'
import Develop from  '../img/icon/S_03.png'
import Grapic from  '../img/icon/S_01.png'
import HTMl from '../img/icon/html.png'
import CSS from '../img/icon/css.png'
import JS from '../img/icon/javascript.png'
import BT from '../img/icon/bootstrap-logo.png'
import TAW from '../img/icon/tailwind.png'
import REACT from '../img/icon/reactjs.png'
import REDUX from '../img/icon/redux.png'
import Git from '../img/icon/git.png'
import Github from '../img/icon/icons8-github-120.png'
import Figma from '../img/icon/figma.png'




const Services = () => {
    return (
        <section id='services' className={`pt-[55px] lg:pt-0`}>
            <div className='min-h-screen container mx-auto flex justify-center items-center'>
                <div className='w-full flex gap-3 p-5 flex-wrap'>
                    <div  className='text-center w-full pb-5'>
                        <h1 className='text-text text-3xl font-bold uppercase'>Services</h1>
                    </div>
                    <div className='w-full  md:w-3/4 md:mx-auto lg:w-[32%] bg-secondary p-5 rounded-lg shadow-lg'>
                        <img src={Design} className='w-[100px] mx-auto mb-5' alt=""/>
                        <h1 className='text-white font-bold text-2xl mb-3'>Web Design</h1>
                        <p className='py-2 leading-6 tracking-wider text-gray-400 mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis consequatur.</p>
                        <a href='#contact' className='text-danger px-4 py-2 border border-blue-500 rounded hover:bg-blue-900 hover:border-blue-900'>Hire me!</a>
                    </div>
                    <div className='w-full md:w-3/4 md:mx-auto lg:w-[32%] bg-secondary p-5 rounded-lg shadow-lg'>
                        <img src={Develop} className='w-[100px] mx-auto mb-5' alt=""/>
                        <h1 className='text-white font-bold text-2xl mb-3'>Web Deployment</h1>
                        <p className='py-2 leading-6 tracking-wider text-gray-400 mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis consequatur.</p>
                        <a href='#contact' className='text-danger px-4 py-2 border border-blue-500 rounded hover:bg-blue-900 hover:border-blue-900'>Hire me!</a>
                    </div>
                    <div className='w-full  md:w-3/4 md:mx-auto lg:w-[32%] bg-secondary p-5 rounded-lg shadow-lg'>
                        <img src={Grapic} className='w-[100px] mx-auto mb-5' alt=""/>
                        <h1 className='text-white font-bold text-2xl mb-3'>Web Services</h1>
                        <p className='py-2 leading-6 tracking-wider text-gray-400 mb-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet atque blanditiis consequatur.</p>
                        <a href='#contact' className='text-danger px-4 py-2 border border-blue-500 rounded hover:bg-blue-900 hover:border-blue-900'>Hire me!</a>
                    </div>
                    <div   className='w-full flex justify-center items-center flex-wrap mt-5'>
                        <div  className='text-center w-full pb-5'>
                            <h1 className='text-text text-3xl font-bold uppercase'>My Skills</h1>
                        </div>
                        <div className='flex items-center flex-wrap gap-3'>
                            <img src={Github} className='w-[50px] h-[50px] object-contain' alt="logo"/>
                            <img src={HTMl} className='w-[50px] h-[50px] object-contain' alt="logo"/>
                            <img src={CSS} className='w-[50px] h-[50px] object-contain' alt="logo"/>
                            <img src={JS} className='w-[50px] h-[50px] object-contain' alt="logo"/>
                            <img src={BT} className='w-[50px] h-[45px] object-contain' alt="logo"/>
                            <img src={TAW} className='w-[50px] h-[50px] object-contain' alt="logo"/>
                            <img src={REACT} className='w-[50px] h-[50px] object-contain' alt="logo"/>
                            <img src={REDUX} className='w-[50px] h-[50px] object-contain' alt="logo"/>
                            <img src={Git} className='w-[50px] h-[50px] object-contain' alt="logo"/>
                            <img src={Figma} className='w-[50px] h-[50px] object-contain' alt="logo"/>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Services