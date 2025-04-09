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
                        <div className="col-md-11">
                            <div className="">
                                <h1 className="sm:text-[75px] uppercase  sm:leading-[70px] text-[#000000] ff-syne font-[600] text-[30px] leading-[30px]"
                                >Seller Central Training & Certification
                                </h1>
                            </div>
                            <div className="col-md-10 sm:pt-[15px]">
                                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                                >To run the business smoothly, the business owner should have understanding about the business and few technical parts which is important to understand the business growth and planning.</p>
                                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px] sm:pt-[10px]"
                                >We trained sellers on how to effectively use the Marketplace Seller Central Platform effectively. Out Training service covers all aspects of managing Amazon and Flipkart business, from protect listing to inventory management, advertising and customer support.</p>
                                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px] sm:pt-[10px]"
                                >aspects of managing an Amazon business, from product listing to inventory management, advertising, and customer support. Whether you&lsquo;re a new seller or looking to scale, these training programs can help you navigate the complexities of the platform. </p>
                               
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
                                src="/assets/retail/15.png"
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

                            <div className="">
                              
                                <p className=" Syne-Regular text-[#686868] sm:text-[18px] text-[14px] leading-[25px] sm:pt-[20px]">
                                Our seller central training is design from basic so that any sellers from any business or educational background would understand easily. Our Main training module is as follows-</p>

                            </div>

                            <div>

                                <div className="sm:pt-[30px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">1. Introduction to Amazon Seller Central</p>
                                    <ul className=" list-disc sm:pt-[10px]">                              
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Overview of the platform&lsquo;s features and interface.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Understanding account types: Individual vs. Professional.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Setting up and managing your Seller Central account.</li>                               
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">1. Product Listing and Optimization</p>
                                    <ul className=" list-disc sm:pt-[10px]">                              
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">How to create high-quality product listings.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Importance of product titles, bullet points, descriptions, and images.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Using SEO strategies to improve search rankings.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Creating variations for products (size, color, etc.).</li>                               
                                                                    
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">3. Inventory Management</p>
                                    <ul className=" list-disc sm:pt-[10px]">                              
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Adding and managing inventory in Seller Central.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Understanding FBA (Fulfilment by Amazon) vs. FBM (Fulfilled by Merchant).</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Restocking alerts and inventory performance index (IPI) optimization.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Managing stranded and suppressed inventory.</li>                               
                                                                    
                                    </ul>
                                </div>
                        
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">4. Pricing Strategies</p>
                                    <ul className=" list-disc sm:pt-[10px]">                              
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Setting competitive pricing using Amazon&lsquo;s tools like the Automate Pricing feature.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Monitoring competitors and adjusting prices to win the Buy Box.</li>                                                 
                                  </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">5. Amazon Advertising</p>
                                    <ul className=" list-disc sm:pt-[10px]">                              
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Introduction to PPC campaigns (Sponsored Products, Sponsored Brands, and Sponsored Display).</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">How to set up and manage ad campaigns.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Analyzing advertising performance and optimizing for ACoS and ROAS.</li>                               
                                                               
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">6. Order Fulfillment</p>
                                    <ul className=" list-disc sm:pt-[10px]">                              
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Introduction to PPC campaigns (Sponsored Products, Sponsored Brands, and Sponsored Display).</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">How to set up and manage ad campaigns.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Analyzing advertising performance and optimizing for ACoS and ROAS.</li>                               
                                                  
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">7. Customer Support</p>
                                    <ul className=" list-disc sm:pt-[10px]">                              
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Responding to customer inquiries and reviews.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Handling negative feedback and maintaining high seller ratings.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Best practices for ensuring customer satisfaction.</li>                               
                                                          
                                                                    
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">8. Reports and Analytics</p>
                                    <ul className=" list-disc sm:pt-[10px]">                              
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Understanding Seller Central reports (sales, inventory, advertising, etc.).</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Analyzing performance metrics like sales velocity and conversion rates.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Leveraging data to make informed business decisions.</li>                               
                                                            
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">9. Compliance and Policies</p>
                                    <ul className=" list-disc sm:pt-[10px]">                              
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Understanding Amazon&lsquo;s rules and guidelines to avoid account suspension.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">How to handle policy violations and reinstate suspended accounts.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Managing intellectual property and brand registry.</li>                               
                                                                
                                                                    
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">10. Advanced Strategies</p>
                                    <ul className=" list-disc sm:pt-[10px]">                              
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Expanding internationally with Amazon Global Selling.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Using Amazon&lsquo;s tools like Brand Analytics and A+ Content.</li>                               
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Strategies for scaling and automating your business.</li>                               
                                                             
                                    </ul>
                                </div>

                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Training Formats</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">One-on-One Coaching:</span> Personalized guidance tailored to your business.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Group Workshops:</span>  Interactive sessions with other sellers.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Online Courses: </span> Flexible, self-paced learning with video tutorials and resources.</li>
                                      
                                    </ul>
                                </div>

                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Benefits of Seller Central Training</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Faster Learning Curve:</span> Gain insights and tips from experts.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Error Prevention:</span> Avoid costly mistakes with guidance on compliance and best practices</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Improved Efficiency: </span> Learn how to use tools and features effectively.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Scalable Knowledge: </span> Build a strong foundation to grow your Amazon business.</li>
                                      
                                    </ul>
                                </div>

                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Who Should Use Optimization Services?</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">New Sellers:</span> To learn the basics and set up for success.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Existing Sellers:</span>  To optimize operations and stay updated on Amazon&lsquo;s changes.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Teams: </span>  For businesses with multiple team members managing the Seller Central account.</li>
                                        
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
