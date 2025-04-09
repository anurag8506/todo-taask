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
                                >BRAND PROTECTION MANAGEMENT
                                </h1>
                            </div>
                            <div className="col-md-12 sm:pt-[15px]">
                                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                                > <span className="text-[#000] Syne-SB">Amazon Brand Protection Management Services </span>help sellers safeguard their intellectual property, maintain brand integrity, and prevent counterfeit or unauthorized use of their products on the platform. These services leverage tools and strategies to protect against infringements, maintain customer trust, and ensure compliance with Amazon&lsquo;s policies.</p>

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
                                src="/assets/retail/21.png"
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
                            <p className=" text-[#000]  Syne-SB sm:text-[20px] text-[15px] leading-[16px]">Core Services for Brand Protection</p>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">1. Brand Registry Enrollment and Management</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Amazon Brand Registry Setup:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Assist in enrolling your brand in Amazon&lsquo;s Brand Registry program.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ensure trademarks and intellectual property are properly registered.</li>                                     
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Enhanced Brand Tools:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Access features like A+ Content, Amazon Transparency, and Sponsored Brand Ads.</li>

                                        </ul>
                                     
                                     
                                    </ul>
                                </div>


                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">2. Intellectual Property (IP) Protection</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Trademark Monitoring:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Prevent unauthorized sellers from using your brand name, logos, or designs.
                                           </li>
                                         
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Copyright Enforcement:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ensure product images, descriptions, and other copyrighted material are not misused.</li>
                                          
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Patent Violation Prevention:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identify and address instances of patent infringement on Amazon.</li>
                                       
                                        </ul>
                                    
                                      
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">3. Counterfeit and Unauthorized Seller Detection</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Product Authenticity Monitoring:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use tools like Amazon Transparency to track product authenticity.</li>
                                            
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Unauthorized Seller Removal:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identify and report unauthorized resellers listing counterfeit or gray-market goods.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Listing Hijacking Prevention:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Monitor for hijacked product listings and take swift action to reclaim them.</li>

                                        </ul>
                                      

                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">4. Reporting and Enforcement Actions</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Infringement Reporting:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">File intellectual property complaints via Amazon&lsquo;s Report Infringement tool.</li>
                                            
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Legal Action Support:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Collaborate with legal teams to address persistent or severe violations.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Policy Compliance Management:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ensure all actions align with Amazon&lsquo;s enforcement and appeal processes.</li>

                                        </ul>
                                     
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">5. Proactive Monitoring and Alerts</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Listing Monitoring:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Keep track of listings for unauthorized changes or duplicate products.</li>
                                           
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Price Tracking:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identify unauthorized sellers engaging in price manipulation to undercut your products.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Automated Alerts:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Receive notifications of potential IP violations or counterfeit activity.</li>

                                        </ul>
                                     
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">6. Customer Trust Initiatives</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Amazon Transparency Program:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Apply unique scannable codes to your products to verify authenticity.</li>                                         
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Project Zero:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Empower your brand to directly remove counterfeit listings without waiting for Amazon&lsquo;s review.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Customer Support Alignment:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Educate customers on identifying authentic products and reporting counterfeits.</li>

                                        </ul>
                                     
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">7. Brand Reputation Management</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Review Monitoring:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identify and address issues with fake reviews or feedback manipulation.</li>                                         
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Customer Communication:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Respond to complaints related to counterfeit products or brand misrepresentation.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Reputation Restoration:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Manage PR campaigns to rebuild trust after counterfeit or infringement incidents.</li>

                                        </ul>
                                     
                                    </ul>
                                </div>
                            
                                <div className="sm:pt-[80px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Benefits of Brand Protection Services</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Protect Intellectual Property: </span>  Prevent misuse of your brand&lsquo;s assets.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Ensure Product Authenticity: </span>  Reduce customer dissatisfaction caused by counterfeit products.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Maintain Market Control:  </span> Protect pricing strategies and brand exclusivity.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Build Customer Trust: </span> : Ensure customers receive genuine, high-quality products.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Boost Sales: </span> Minimize competition from unauthorized sellers and counterfeits.</li>

                                    </ul>
                                </div>
                                <div className="sm:pt-[40px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Who Should Use These Services?</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Established Brands: </span> To safeguard their reputation and prevent brand erosion.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Growing Brands: </span>  To protect IP as they expand into new markets or categories.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Innovative Brands:  </span> To defend patented or proprietary products from infringement.</li>
                                   
                                    </ul>
                                </div>

                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Amazon Brand Registry Services-</p>
                                   
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px] sm:pt-[30px]">1. Amazon Tools:</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Amazon Brand Registry: </li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Centralized platform for managing IP protection.</li>                                         
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Project Zero:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Combines AI and brand actions to fight counterfeits.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Amazon Transparency:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ensures product authenticity through unique codes.</li>

                                        </ul>
                                     
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
