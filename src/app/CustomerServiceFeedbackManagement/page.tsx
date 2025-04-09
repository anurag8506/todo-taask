'use client'
import Link from "next/link";
import WhatshapIcon from "../../components/watsap";
import Image from "next/image";
import Header from '../../components/header';
import Footer from '../../components/footer';
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {

    return (
        <>
            <Header />

            <section className="sm:px-20 px-[10px]  sm:py-28 sm:pb-14  py-6 bg-[#FCFCFF]">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="">
                                <h1 className="sm:text-[75px] uppercase  sm:leading-[70px] text-[#000000] ff-syne font-[600] text-[30px] leading-[30px]"
                                >customer service & FEEDBACK management
                                </h1>
                            </div>
                            <div className="col-md-12 sm:pt-[15px]">
                                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                                > <span className="text-[#000] Syne-SB"> Amazon Customer Service & Feedback Management Services </span> are essential tools for sellers to enhance customer satisfaction, maintain a strong reputation, and optimize account health. These services focus on managing buyer interactions, addressing complaints, and improving seller ratings, which can lead to better sales performance and brand trust.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-[#FCFCFF]">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12 p-0">
                            <Image
                                src="/assets/retail/19.png"
                                className="w-full"
                                width={1080}
                                height={1080}
                                alt="no-img"
                            />
                        </div>

                    </div>


                </div>
            </section >

            <section className="sm:px-20 px-[10px] py-8 sm:py-16 bg-[#FCFCFF]">
                <div className="container-fluid">
                    <div className="row justify-between">
                        <div className="col-md-9">
                            <div>
                            <p className=" text-[#000]  Syne-SB sm:text-[20px] text-[15px] leading-[16px]">Key Components of Customer Service & Feedback Management</p>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">1. Customer Service Management</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Query Handling:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Respond promptly to buyer questions about products, orders, or policies.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Provide accurate and helpful information to resolve inquiries.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Complaint Resolution:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Address issues such as delayed shipments, defective products, or incorrect orders.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Offer resolutions that comply with Amazon&lsquo;s policies, such as refunds, replacements, or compensation.</li>
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Proactive Communication:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Send order confirmation, shipping updates, and follow-up emails to keep customers informed.</li>
                                      
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Conflict Mediation:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Resolve disputes between customers and sellers, reducing the likelihood of negative reviews or claims.</li>
                                      
                                        </ul>
                                     
                                    </ul>
                                </div>


                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">2. Feedback Management</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Review Monitoring:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Track product reviews and seller feedback on Amazon.
                                           </li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2"> Identify trends, such as recurring product issues or complaints.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Feedback Solicitation:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use Amazon-compliant methods to request feedback and reviews from satisfied customers.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Avoid practices that violate Amazon&lsquo;s review manipulation policies.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Negative Feedback Removal:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identify and request removal of unfair or inappropriate negative feedback (e.g., if it violates Amazon&lsquo;s guidelines).</li>
                                       
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Improvement Strategies:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Analyze feedback to make product or service improvements.</li>
                                       
                                        </ul>
                                      
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">3. Managing Account Health Metrics</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Performance Monitoring:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Regularly check metrics like Order Defect Rate (ODR), Late Shipment Rate (LSR), and Pre-Fulfillment Cancel Rate.</li>
                                            
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Policy Compliance:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ensure communication practices align with Amazon&lsquo;s customer service guidelines.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Handling A-to-Z Claims:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Resolve A-to-Z Guarantee claims effectively to maintain account health.</li>

                                        </ul>
                                      

                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">4. Enhanced Customer Experience</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Personalized Support:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Personalized Support:</li>
                                            
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Multichannel Support:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Offer customer service across Amazon&lsquo;s messaging platform and external channels (if applicable).</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Automation Tools:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use chatbots or templates for faster response times while maintaining personalization.</li>

                                        </ul>
                                     
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">5. Reporting and Analytics</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Customer Sentiment Analysis:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Customer Sentiment Analysis:</li>
                                           
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Customer Sentiment Analysis:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Provide insights into customer service efficiency and areas for improvement.</li>

                                        </ul>
                                     
                                    </ul>
                                </div>
                              




                                <div className="sm:pt-[80px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Benefits of Customer Service & Feedback Management</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Enhanced Reputation: </span> Positive interactions and proactive feedback management improve ratings and reviews.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Increased Sales: </span> High ratings and better reviews attract more customers and boost conversions.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Reduced Negative Feedback: </span> Prompt resolution of issues minimizes complaints and disputes.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Stronger Brand Loyalty: </span> Exceptional customer service encourages repeat purchases.</li>

                                    </ul>
                                </div>
                                <div className="sm:pt-[40px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Who Should Use These Services?</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">New Sellers :</span> To establish a positive reputation and gain early reviews.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        High-Volume Sellers:</span>  To manage a large number of customer interactions efficiently.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        International Sellers: </span> To provide multilingual support for customers in different regions.</li>                                    
                                    </ul>
                                </div>
                               

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-[#fff] overflow-hidden sm:px-20 sm:py-20 py-14 px-[20px]">
        <div className="container-fluid p-0">
          <div className="row justify-between">
            <div className="col-md-6">
              <div className="text-start">
                <p className="Syne-SB text-[#000] sm:text-[14px] text-[15px]  mb-2">Request A Quote</p>
                <p className="sm:text-[40px] Syne-BB text-[#000] sm:leading-[45px] leading-[25px]   text-[25px]"
                >Get in touch today!
                </p>

              </div>
              <div>
                <form className="">
                  <div className="sm:py-[10px] py-[20px]">
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
            <div className="col-md-5">
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
      <WhatshapIcon/>
            <Footer />

        </>
    );
}
