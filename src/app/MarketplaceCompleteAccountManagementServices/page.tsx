'use client'
import Image from "next/image";
import Link from "next/link";
import Header from '../../components/header';
import Footer from '../../components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import WhatshapIcon from "../../components/watsap";
export default function Home() {

  return (
    <>
      <Header />

      <section className="sm:px-20 px-[10px]  sm:py-28  py-6 bg-[#FCFCFF]">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10">
              <div className="">
                <h1 className="sm:text-[75px] uppercase  sm:leading-[70px] text-[#000000] ff-syne font-[600] text-[30px] leading-[30px]"
                >Marketplace
                </h1>
                <h1 className="sm:text-[75px] uppercase  sm:leading-[70px] text-[#000000] ff-syne font-[600] text-[30px] leading-[30px]"
                >Complete Account
                </h1>
                <h1 className="sm:text-[75px] uppercase  sm:leading-[70px] text-[#000000] ff-syne font-[600] text-[30px] leading-[30px]"
                >Management Services:
                </h1>
                

              </div>
              <div className="col-md-10 sm:pt-[15px]">
                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                >An Amazon Complete Account Management Service is an end-to-end solution designed to handle all aspects of an Amazon seller&lsquo;s account, enabling them to focus on scaling their business without dealing with the complexities of the platform. This service encompasses everything from account setup and product listing optimization to inventory management, advertising, and customer service.</p>

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
                src="/assets/retail/12.png"
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
            <div className="col-md-8">
              <div className="">
              
                <p className=" Syne-Regular text-[#686868] sm:text-[18px] text-[14px] leading-[25px] sm:pt-[10px]">
                A Complete Account Management Service gives sellers a turnkey solution for managing and growing their Amazon business. It allows them to benefit from expert guidance and dedicated resources, enhancing their chances of sustained growth and success on Amazon.</p>


              </div>

              <div>
             
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000] Syne-SB  sm:text-[18px] text-[15px] leading-[16px]">1. Account Setup & Onboarding</p>
                  <ul className=" list-disc">
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Creation of a new seller account or optimization of an existing one..</li>
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Assistance with Amazon Brand Registry application and setup for trademarked brands.</li>
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Initial setup of tax information, payment details, and compliance with Amazon&lsquo;s account requirements.</li>
                            
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">2. Product Listing Creation & Optimization</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Creation of optimized product listings, including keyword research, titles, bullet points, descriptions, and backend search terms.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">High-quality image support, including lifestyle and infographic images, to enhance product appeal.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Enhanced Brand Content (A+ Content) creation for Brand Registered sellers to improve listings and drive conversions.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">3. Amazon Storefront Creation & Management</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Design and management of an Amazon Brand Store, showcasing the entire product catalog in an engaging and brand-aligned way.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Regular updates to the Brand Store layout, banners, and product categories to reflect promotions, new products, or seasonal trends.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Monitoring of store performance metrics to drive improvements.</li>                                    
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">4. Inventory & Order Management</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Forecasting demand and planning inventory to avoid stockouts and overstock situations.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Management of FBA (Fulfilled by Amazon) and FBM (Fulfilled by Merchant) inventory.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Multi-Channel Fulfillment (MCF) integration for inventory across different sales channels.</li>                 
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Handling order processing, shipment tracking, and returns.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">5. Advertising and PPC Campaign Management</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Creation, setup, and management of Sponsored Products, Sponsored Brands, and Sponsored Display ads.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Strategy development for maximizing return on ad spend (ROAS) with targeted keyword and audience research.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ongoing campaign optimization to increase visibility, lower ACoS, and improve ad performance.</li>                 
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Monthly performance reporting on ad campaigns to assess ROI and identify areas for improvement.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">6. Product Launch & Promotions</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Product launch strategy development, including listing audits, promotion planning, and targeted advertising.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Setup and management of Amazon Vine Program (for product reviews) and other early review programs.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Planning of deals, discounts, and coupons to boost visibility and sales.</li>                 
                             
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">7. Customer Service & Review Management</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Management of customer inquiries, messages, and reviews to maintain high customer satisfaction.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Monitoring of feedback and reviews, responding to customer concerns, and addressing any negative reviews.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Implementation of follow-up email campaigns and proactive outreach for review generation.</li>                
                           
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">8. Account Health Monitoring & Compliance</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Regular monitoring of account health metrics, such as order defect rate, late shipment rate, and policy compliance.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Proactive identification and resolution of potential account issues to prevent suspension.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Support with account suspension appeals and reinstatement, if necessary.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">9. Data Analytics & Reporting</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Regular tracking of key performance indicators (KPIs), such as sales, conversion rate, and customer acquisition cost.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Comprehensive reports that include insights into sales trends, customer behavior, and advertising effectiveness.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Recommendations for improvements based on data-driven analysis and market trends.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">10. International Expansion & Compliance</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Assistance with expanding into international Amazon marketplaces, including Europe, Canada, Asia, and Australia.</li>                                   
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Guidance on tax compliance, shipping requirements, and international marketing strategies.</li>                                         
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Support with global inventory management and localization of product listings for new markets.</li>              
                                  
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">11. Brand Protection & Intellectual Property Management</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Monitoring for unauthorized sellers and counterfeit products that could harm brand reputation.</li>                                                   
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use of Amazon Brand Registry tools to remove infringing listings.</li>                                                  
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Setting up and enforcing Minimum Advertised Price (MAP) policies, where applicable.
                      </li>                                                                                     
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">12. Ongoing Strategy & Consultation</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Regular strategy sessions to align on goals, assess performance, and adjust tactics as needed.</li>                                                   
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">
                    Competitive analysis to stay ahead in the marketplace and identify new growth opportunities.</li>                                                  
                                                                                                       
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">
                    Monthly and quarterly reviews to ensure all strategies align with business goals and deliver desired results.</li>                                                  
                                                                                                       
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
