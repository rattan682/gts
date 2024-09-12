import Image from "next/image"
import Link from "next/link";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md"
import { GoDotFill } from "react-icons/go";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa6";


export default function Contactus() {
    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="sm:px-24 px-9 py-20 bg-[url('https://kaiz-in.com/wp-content/uploads/elementor/thumbs/Customer-Support_-Client-Servicing-LinkedIn-Cover-Banner-1-qm7pspq21lt9c48h2b3ulczjk0ftpqmnkplvye33p4.png')] bg-cover bg-center">
                <h1 className="text-5xl font-semibold text-blue-800">CONTACT US</h1>
                <h5 className="text-sm text-gray-500">OUR TEAM OF CUSTOMER CARE IS READY TO HEAR FROM YOU.</h5>
            </div>
            <div className="md:px-20 lg:px-24 px-12">
                <div className="grid md:grid-cols-2 md:gap-7 py-8">
                    <div className="sm:p-6 p-2">
                        <h3 className="text-xl font-semibold text-primary">Reach out to us!</h3>
                        <form className="mt-6">
                            <div className="flex flex-col">
                                <label htmlFor="name" className="text-gray-500 text-base font-semibold">Name</label>
                                <input type="text" id="name" placeholder="Enter your name" className="px-3 py-2 my-2 text-sm rounded-lg bg-inputs outline-none" />
                            </div>
                            <div className="flex flex-col my-2">
                                <label htmlFor="email" className="text-gray-500 text-base font-semibold">Email</label>
                                <input type="email" id="email" placeholder="Enter your email" className="px-3 py-2 my-2 text-sm rounded-lg bg-inputs outline-none" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="number" className="text-gray-500 text-base font-semibold">Phone</label>
                                <input type="number" id="number" placeholder="Enter your phone number" className="px-3 py-2 my-2 text-sm rounded-lg bg-inputs outline-none" />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="message" className="text-gray-500 text-base font-semibold mt-2">Message</label>
                                <textarea type="text" id="message" placeholder="Go ahead, we are listening. . ." className="px-3 py-2 my-2 h-[120px] text-sm rounded-lg bg-inputs outline-none" />
                            </div>
                            <button type="submit" className="px-6 my-4 py-2 bg-primary text-white rounded-xl">Submit</button>
                        </form>
                    </div>
                    <div className="sm:p-6 p-2">
                        <h1 className="font-semibold text-xl">Customer care</h1>
                        <p className="text-sm my-2 text-gray-400">Not sure where to start? Need help adding that extra mojo to your landing page? contact here with us.</p>
                        <div className="flex my-5 gap-x-6 items-center">
                            <div className="rounded-full overflow-hidden">
                                <Image src={'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid'} alt="..." height={60} width={60} />
                            </div>
                            <div>
                                <h4 className="text-base font-semibold">John Doe</h4>
                                <p className="text-sm text-gray-400">Assisstent manager</p>
                            </div>
                        </div>
                        <div className="flex my-5 gap-x-6 items-center">
                            <div className="rounded-full overflow-hidden">
                                <Image src={'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1725926400&semt=ais_hybrid'} alt="..." height={60} width={60} />
                            </div>
                            <div>
                                <h4 className="text-base font-semibold">John Doe</h4>
                                <p className="text-sm text-gray-400">Assisstent manager</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid lg:grid-cols-3 lg:gap-6 pb-12">
                    <div className="lg:col-span-2">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d428.7915417951316!2d76.70262814187001!3d30.709056304842377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef5bd5b30135%3A0xa1f557ec08a05ca1!2sWeb%20Integrity%20Solutions%20-%20WiSol.In!5e0!3m2!1sen!2sin!4v1726039656805!5m2!1sen!2sin" className="border-0 w-full h-[359px] rounded-xl" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className="lg:mt-0 mt-12">
                        <h3 className="font-bold text-xl">You can also reach to use on the following address</h3>
                        <div className="my-3">
                            <p className="text-[17px] text-gray-600 w-[55%]">Empire State Building, 350 5th Ave,</p>
                            <p className="text-[17px] text-gray-600">New York, NY 10118</p>
                        </div>
                        <h5 className="bg-inputs flex items-center text-gray-500 my-3 py-1 px-2 rounded-lg text-[17px] font-semibold"><span><FaPhoneSquareAlt className="me-2" /></span>7050461000</h5>
                        <h5 className="bg-inputs flex items-center text-gray-500 my-3 py-1 px-2 rounded-lg text-[17px] font-semibold text-wrap"><span><MdOutlineAlternateEmail className="me-2" /></span>contact@company.com</h5>
                    </div>
                </div>
            </div>
            <div className="bg-secondary md:px-12 px-14 pt-14 pb-7">
                <div className="grid lg:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-5">
                    <div className="lg:col-span-2">
                        <div className="flex  mb-8 gap-5 items-center">
                            <div className="bg-white p-0 rounded-full overflow-hidden shadow-[rgba(_90,_159,_200,_0.8)_0px_30px_90px]" ><Image src={'/img/logo_gts__1_-removebg-preview 1.png'} alt="..." width={70} height={70}/></div>
                            <div>
                                <h2 className="text-primary text-2xl font-semibold">Global Tech</h2>
                                <h2 className="text-texts tracking-[4px]">SOLUTIONS</h2>
                            </div>
                        </div>
                        <p className="text-texts text-sm my-3">Our activities in the oil and petrochemical sector, engineering, construction, and production of lubricants date back to 25 years ago An activity that continues to grow and develop through the design and implementation of various projects</p>
                        <hr className="mt-8 opacity-[0.3]"/>
                        <div className="grid sm:grid-cols-5 grid-cols-4 gap-4 mt-8 text-white">
                            <div className="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-lg"><FaFacebook className="text-2xl"/></div>
                            <div className="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-lg"><FaInstagram className="text-2xl"/></div>
                            <div className="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-lg"><FaWhatsapp  className="text-2xl"/></div>
                            <div className="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-lg"><FaTelegram  className="text-2xl"/></div>
                            <div className="w-[50px] h-[50px] flex items-center justify-center border border-white rounded-lg"><BsTwitterX  className="text-2xl"/></div>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="h-[5px] w-[16px] rounded-lg bg-primary"></div>
                            <h2 className="text-white font-semibold ms-3">Product Category</h2>
                        </div>
                        <div className="text-texts text-sm">
                            <Link href={'/'} className="flex items-center my-3"><span className="me-3"><FaChevronRight /></span> Multi-Function Printers</Link>
                            <Link href={'/'} className="flex items-center my-3"><span className="me-3"><FaChevronRight /></span> Lasers Printers</Link>
                            <Link href={'/'} className="flex items-center my-3"><span className="me-3"><FaChevronRight /></span> Production Printers</Link>
                            <Link href={'/'} className="flex items-center my-3"><span className="me-3"><FaChevronRight /></span> Wide Format MFPs</Link>
                            <Link href={'/'} className="flex items-center my-3"><span className="me-3"><FaChevronRight /></span> More ...</Link>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="h-[5px] w-[16px] rounded-lg bg-primary"></div>
                            <h2 className="text-white font-semibold ms-3">Usefull Links</h2>
                        </div>
                        <div className="text-texts text-sm">
                            <Link href={'/'} className="flex items-center my-3"><span className="me-3"><FaChevronRight /></span> Support</Link>
                            <Link href={'/'} className="flex items-center my-3"><span className="me-3"><FaChevronRight /></span> About Us</Link>
                            <Link href={'/'} className="flex items-center my-3"><span className="me-3"><FaChevronRight /></span> Contact Us</Link>
                            <Link href={'/'} className="flex items-center my-3"><span className="me-3"><FaChevronRight /></span> Terms & Conditions</Link>
                            <Link href={'/'} className="flex items-center my-3"><span className="me-3"><FaChevronRight /></span> Privacy Policy</Link>
                            </div>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="h-[5px] w-[16px] rounded-lg bg-primary"></div>
                            <h2 className="text-white font-semibold ms-3">Contact Us</h2>
                        </div>
                        <div className="text-texts text-sm my-5">
                            <h3 className="text-white flex items-center"><span className="text-primary me-2"><GoDotFill /></span>Address</h3>
                            <div className="my-3">
                                <p className="text-sm px-4 border-l border-white ">Empire State Building, 350 5th Ave, New York, NY 10118</p>
                            </div>
                        </div>
                        <div className="text-texts text-sm my-5">
                            <h3 className="text-white flex items-center"><span className="text-primary me-2"><GoDotFill /></span>Contact</h3>
                            <div className="mt-3 mb-2">
                                <p className="text-sm px-4 border-l border-white ">70504617000</p>
                            </div>
                            <div className="my-1">
                                <p className="text-sm px-4 border-l border-white ">contact@company.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mt-12 bg-red-100">
                    <div>
                        <hr className="w-[100%] text-gray-50 sm:block hidden"/>
                    </div>
                    <div className="absolute bg-secondary text-center sm:top-[-10px] top-[-40px] left-[50%] translate-x-[-50%] lg:w-[45%] md:w-[80%] sm:w-[90%] w-[100%]">
                        <p className="text-texts text-sm lg:text-base">© 2024 | All Rights Reserved | Powered by Global Tech Solutions</p>
                    </div>
                </div>
            </div>
        </div>
    )
}