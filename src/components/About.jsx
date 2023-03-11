import {motion} from "framer-motion";
import AboutPic from '../img/about_me.png'
import {easeIn, easeInOut} from "framer-motion/dom";
const About = () => {
    return (
        <>
            <section id='about' className={`pt-[55px] lg:pt-0`}>
                <div className='min-h-screen container mx-auto flex justify-center items-center flex-wrap flex-col-reverse lg:flex-row'>
                    <motion.div initial={{ opacity: 0,y:-200}}
                                transition={{ duration: 0.5,delay:0.2,velocity:easeInOut }}
                                whileInView={{ opacity: 1,y:0  }}
                                className='w-full lg:w-2/4 text-white'>
                        <img src={AboutPic} className='h-auto w-full p-5 rounded-xl lg:h-[550px] mx-auto lg:w-[500px] object-cover obj-po' alt=""/>
                    </motion.div>
                    <motion.div initial={{ opacity: 0,y:-200}}
                                transition={{ duration: 0.5,delay:0.2,velocity:easeInOut }}
                                whileInView={{ opacity: 1,y:0  }}
                                className='w-full lg:w-2/4 text-text'>
                        <h1 className='text-center text-4xl font-semibold pb-5 uppercase'>About me</h1>
                        <p className='text-2xl  leading-8 tracking-wide p-5'>I'm a junior website developer with experience in
                            JavaScript, and expertise in framework like React. I'm a quick learner and collaborate closely with clients to
                            create efficient, scalable, and user-friendly solutions that solve
                            real-world problems. Let's work together to bring your ideas to life! I can provide clean code and pixel perfect design. I also make the website more & more interactive with web animations. A responsive design make your website accessible to all users, regardless of their device.</p>
                    </motion.div>
                </div>
            </section>
        </>
    )
}
export default About