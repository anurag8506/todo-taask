
import Image from "next/image";
import Header from '../../components/header';
import Footer from '../../components/footer';
import "bootstrap/dist/css/bootstrap.min.css"
import Link from "next/link";
export default function Home() {
    return (
        <>
            <Header />


            <section className="bg-[#fff] overflow-hidden sm:px-20 sm:py-10 px-[20px]">
                <div className="container-fluid p-0">

                    <div className="row justify-center sm:pt-[30px]">
                        <div className="col-md-12   border-b-[1px] border-[#A9A9A9]  pb-10">
                            <div className="text-start pt-6">
                                <p className='ff-syne sm:text-[40px] text-[30px] font-[700]'>Contact us</p>
                            </div>
                            <div>
                                <ul className="list-disc">
                                    <li className="Syne-SB  sm:text-[16px] text-[14px] text-[#000000]  py-[5px]">Case studies  <span className="text-[#636363] Syne-Regular "> on how we have helped companies similar to you who archived their business goal by engaging us</span></li>
                                    <li className="Syne-SB sm:text-[16px] text-[14px] text-[#000000]  py-[5px]">Schedule Free Consultation <span className="text-[#636363] sm:text-[16px] text-[14px] Syne-Regular">to leverage on our 4000+ man hour experience to find the solutions for your Amazon store needs</span></li>
                                    <li className="Syne-SB sm:text-[16px] text-[14px] text-[#000000]  py-[5px]"><span className="text-[#636363] sm:text-[16px] text-[14px] Syne-Regular">Setup a </span> Schedule Free Consultation <span className="text-[#636363] sm:text-[16px] text-[14px] Syne-Regular">to leverage on our 4000+ man hour experience to find the solutions for your Amazon store needs</span></li>
                                    


                                </ul>
                                <p className="Syne-SB  sm:text-[14px] text-[12px] text-[#636363]  py-[5px]">In case you prefer to mail us please send an email to <Link href="mailto:info@E-Retail Solutions.me " className="text-[#000000] no-underline Syne-SB font-[600]">info@E-Retail Solutions.me </Link></p>
                            </div>
                        </div>

                    </div>
                    <div className="row justify-start text-center">
                        <div className="col-md-4">
                            <div className="text-center sm:pt-16 pt-10">
                                <div className="text-start  relative ">
                                    <p className='Syne-SB sm:text-[32px] text-[20px] text-[#000] font-[900] mb-0'>Drop Us a Line</p>
                                    <span className="absolute left-[0px] bottom-[-5px]">
                                        <Image
                                            src="/assets/images/Line.svg"
                                            className="w-full"
                                            width={1080}
                                            height={1080}
                                            alt="no-img"
                                        />
                                    </span>
                                </div>
                            </div>


                        </div>



                    </div>

                    <div className="row justify-between">
                        <div className="col-md-7">
                            <div>
                                <form className="">
                                    <div className="sm:py-16 py-10">
                                        <div className="">
                                            <div className="mt-10 row">
                                                <div className="col-md-12">
                                                    <div className="py-[15px]">
                                                        <label className="Syne-Regular text-[15px] text-[#000000] mb-0">Name</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="border-[1px] w-[100%] border-[#000000] rounded-[8px] py-[8px]" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-md-12">
                                                    <div className="py-[15px]">
                                                        <label className="Syne-Regular text-[15px] text-[#000000] mb-0">Email</label>
                                                        <div className="mt-2">
                                                            <input type="text" name="first-name" id="first-name" autoComplete="given-name" className="border-[1px] w-[100%] border-[#000000] rounded-[8px] py-[8px]" />
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="col-md-12">
                                                    <div className="py-[15px]">
                                                        <label className="Syne-Regular text-[15px] text-[#000000] mb-0">Message</label>
                                                        <div className="mt-2">
                                                            <textarea className="border-[1px] w-[100%] px-[10px] border-[#000000] rounded-[8px] py-[8px] Syne-MD text-[15px]" name="" rows={4} id=""></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="py-[15px]">
                                                        <input
                                                            type="checkbox"
                                                            className="sm:pt-[20px]"
                                                            name="subscribe"
                                                            value="newsletter" />
                                                        <label className="Syne-Regular text-[14px] text-[#4C4C4C] ps-[5px] ">I accept the <Link href="TermsConditions" className="text-[#000] Syne-SB">Terms & Conditions</Link></label>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="sm:pt-[20px]">
                                                        <Link href="1/2272b3floorramnagarshahdara"><button className="Syne-Regular text-[12px] bg-[#000000] text-[#FFFFFF]  rounded-[5px] px-10 py-[10px]" type="button">Submit</button></Link>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                          <div className="col-md-4">
                                    <div className="sm:pt-[0px] pt-[10px]">
                                      <Image
                                        src="/assets/images/drop.jpg"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                      />
                                    </div>
                                    <div className="flex mt-4 justify-end gap-4">
                                    <div className="col-md-5">
                                      <p className="p-0 m-0 mt-4 lg:text-[1vw] Syne-Regular text-[3vw] lg:leading-[1.5vw] leading-[3.5vw]">You can’t wait and want to quick response. Just Scan the QR and Ping us on <span className="font-bold text-black underline">Whatsapp</span></p>
                                              </div>
                                      <div className="col-md-3">
                                      <Image
                                        src="/assets/retail/image 791.png"
                                        className="w-full"
                                        width={1080}
                                        height={1080}
                                        alt="no-img"
                                      />
                              
                      
                                    </div>
                                  </div>
                                </div>
                    </div>

                </div>
            </section>

            <section className="sm:pt-[0px] pt-[40px]">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <div>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6188383730387!2d77.30821637528936!3d28.64118377566006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb37ca2164ad%3A0xbdcfae66ac57eb0a!2sb%2C%2018%2C%20Patparganj%20Industrial%20Area%2C%20Patparganj%2C%20New%20Delhi%2C%20Delhi%2C%20110092!5e0!3m2!1sen!2sin!4v1730788154456!5m2!1sen!2sin" width="600" height="450" className="w-[100%]" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                            </div>
                        </div>
                    </div>

                </div>
            </section>


            <Footer />

        </>
    );
}
