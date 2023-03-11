import {Link, useParams} from "react-router-dom";
import {AiOutlineEye} from 'react-icons/ai'
import sushi from '../img/Screenshot (114)_edited.jpg'
import foodie from '../img/Screenshot (116)_edited.jpg'
import medium from '../img/Screenshot (115)_edited.jpg'
import facebook from '../img/Screenshot (117)_edited.jpg'
import flyo from '../img/Screenshot (119)_edited.jpg'
import foodieMenu from '../img/Screenshot (120)_edited.jpg'
import Onlineshop from '../img/Screenshot (121)_edited.jpg'
import {motion} from "framer-motion";
import {easeIn} from "framer-motion/dom";

const Projects = () => {
    return (
        <>
            <section id='projects' className='min-h-screen pt-[55px]'>
            <div className='container mx-auto flex flex-wrap gap-y-4 '>
                <div className='text-center w-full pb-5'>
                    <h1 className='text-text text-3xl font-bold uppercase'>My projects</h1>
                </div>
                <motion.div initial={{ opacity: 0,y:200}}
                                    transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                    whileInView={{ opacity: 1,y:0  }}
                                    className=" w-full md:w-2/4 px-4">
                    <div className="bg-info border border-black p-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-lg w-full h-[290px]" src={sushi} alt="" />
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-white dark:text-white">
                                Sushi Project
                            </h5>
                            <div className="mb-3 flex flex-wrap whitespace-nowrap gap-y-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Bootstrap
                    </span>
                            </div>
                            <Link
                                target="_blank"
                                to="https://spiffy-daffodil-000d2e.netlify.app"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Live Demo
                                <AiOutlineEye className="text-xl ml-1" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0,y:200}}
                                    transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                    whileInView={{ opacity: 1,y:0  }}
                                    className=" w-full md:w-2/4 px-4">
                    <div className="bg-info border border-black p-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-lg w-full h-[290px]" src={medium} alt="" />
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-white dark:text-white">
                                Medium Project
                            </h5>
                            <div className="mb-3 flex flex-wrap whitespace-nowrap gap-y-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Bootstrap
                    </span>
                            </div>
                            <Link
                                target="_blank"
                                to="https://mediun-clone.netlify.app"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Live Demo
                                <AiOutlineEye className="text-xl ml-1" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0,y:200}}
                                    transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                    whileInView={{ opacity: 1,y:0  }}
                                    className=" w-full md:w-2/4 px-4">
                    <div className="bg-info border border-black rounded-lg p-5 shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-lg w-full h-[290px]" src={flyo} alt="" />
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-white dark:text-white">
                                Flyo Project
                            </h5>
                            <div className="mb-3 flex flex-wrap whitespace-nowrap gap-y-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Bootstrap
                    </span>
                            </div>
                            <Link
                                target="_blank"
                                to="https://typle-flyo.netlify.app"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Live Demo
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0,y:200}}
                                    transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                    whileInView={{ opacity: 1,y:0  }}
                                    className="w-full md:w-2/4 px-4 ">
                    <div className="bg-info border border-black p-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-lg w-full h-[290px]" src={foodie} alt="" />
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-white dark:text-white">
                                Foodie Clone Project
                            </h5>
                            <div className="mb-3 flex flex-wrap whitespace-nowrap gap-y-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Bootstrap
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Js-Library
                    </span>
                            </div>
                            <Link
                                target="_blank"
                                to="https://typle-foodie.netlify.app/"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Live Demo
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0,y:200}}
                                    transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                    whileInView={{ opacity: 1,y:0  }}
                                    className="w-full md:w-2/4 px-4 ">
                    <div className="bg-info border border-black p-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-lg w-full h-[290px]" src={facebook} alt="" />
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-white dark:text-white">
                                Facebook Clone Project
                            </h5>
                            <div className="mb-3 flex flex-wrap whitespace-nowrap gap-y-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Bootstrap
                    </span>
                            </div>
                            <Link
                                target="_blank"
                                to="https://typle-facebook.netlify.app/"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Live Demo
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0,y:200}}
                                    transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                    whileInView={{ opacity: 1,y:0  }}
                                    className="w-full md:w-2/4 px-4 ">
                    <div className="bg-info border border-black p-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-lg w-full h-[290px]" src={foodieMenu} alt="" />
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-white dark:text-white">
                                Foodie List Project
                            </h5>
                            <div className="mb-3 flex flex-wrap gap-y-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Tailwindcss
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      React
                    </span>
                            </div>
                            <Link
                                target="_blank"
                                to="https://react-foodie-clone.netlify.app"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Live Demo
                            </Link>
                        </div>
                    </div>
                </motion.div>
                <motion.div initial={{ opacity: 0,y:200}}
                                    transition={{ duration: 0.5 ,delay:0.2,velocity:easeIn}}
                                    whileInView={{ opacity: 1,y:0  }}
                                    className="w-full md:w-2/4 px-4 ">
                    <div className="bg-info border border-black p-5 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <img className="rounded-lg w-full h-[290px]" src={Onlineshop} alt="" />
                        <div className="p-5">
                            <h5 className="mb-4 text-2xl font-bold tracking-tight text-white dark:text-white">
                                Online Shop Project
                            </h5>
                            <div className="mb-3 flex flex-wrap gap-y-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      HTML{" "}
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      CSS
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Javascript
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      Tailwindcss
                    </span>
                                <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      React
                    </span>
                            </div>
                            <Link
                                target="_blank"
                                to="https://lively-kashata-5878f6.netlify.app/"
                                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                Live Demo
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
        </>
    )
}
export default Projects