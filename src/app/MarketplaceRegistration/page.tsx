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
            <div className="col-md-7">
              <div className="">
                <h1 className="sm:text-[75px] uppercase  sm:leading-[70px] text-[#000000] ff-syne font-[600] text-[30px] leading-[30px]"
                >Marketplace Registration
                </h1>           
              </div>
              <div className="sm:pt-[15px]">
                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                >Seller Account Registration Service assists new sellers in setting up a fully compliant and optimized Amazon seller account. This service is especially valuable for businesses new to the platform, as it ensures all steps are handled professionally, avoiding potential pitfalls that could lead to account suspension or delays. </p>

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
                src="/assets/retail/10.png"
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
                <p className=" Syne-Regular text-[#686868] sm:text-[18px] text-[14px] leading-[25px]">By using Seller Account Registration Service, new sellers can ensure their account is set up efficiently and in full compliance with Amazon&lsquo;s policies, creating a solid foundation for their e-commerce business.</p>
                <p className=" Syne-Regular text-[#686868] sm:text-[18px] text-[14px] leading-[16px] sm:pt-[10px]">
                  Here&lsquo;s what a typical <span className="text-[#000]  Syne-MD">Amazon/Flipkart/Meesho, Walmart & Ajio </span> Account Registration Service that includes-</p>

              </div>

              <div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000] Syne-SB  sm:text-[18px] text-[15px] leading-[16px]">1. Account Setup and Registration</p>
                  <div className="ps-[10px]">
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Step-by-step guidance through seller account creation process as per the marketplace.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Assistance with selecting the correct account type (Individual or Professional) based on business goals.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Support with submitting accurate and complete business information, including bank account and tax details.</p>

                  </div>
                </div>
                <div className="sm:pt-[25px]">
                  <p className="text-[#000] Syne-SB  sm:text-[18px] text-[15px] leading-[16px]">2. Document Preparation and Verification</p>
                  <div className="ps-[10px]">
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Verification of business documentation (e.g., tax ID, proof of address) to meet Amazon&lsquo;s requirements.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Assistance with uploading necessary documents and verifying their accuracy before submission.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Support with Amazon&lsquo;s identity verification process to avoid delays or rejections.</p>
                  </div>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000] Syne-SB  sm:text-[18px] text-[15px] leading-[16px]">3. Marketplace Selection</p>
                  <div className="ps-[10px]">
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Advice on choosing the right Amazon marketplaces (e.g. India, US, UK, EU, or Global) based on target customers and business objectives.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Guidance on fulfilling Amazon&lsquo;s compliance requirements for each selected region.</p>
                    
                  </div>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000] Syne-SB  sm:text-[18px] text-[15px] leading-[16px]">4. Tax and Legal Compliance Setup</p>
                  <div className="ps-[10px]">
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Support with understanding and completing Amazon&lsquo;s tax information interview.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Guidance on sales tax registration, VAT (for European marketplaces), and other tax compliance requirements.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Introduction to Amazon&lsquo;s tax tools and insights into third-party tax service providers.</p>
                  </div>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000] Syne-SB  sm:text-[18px] text-[15px] leading-[16px]">5. Policy Education and Compliance Guidance</p>
                  <div className="ps-[10px]">
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Education on Amazon&lsquo;s policies and guidelines to avoid potential issues, including listing requirements and performance metrics.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Guidance on maintaining a compliant account from day one.</p>
            
                  </div>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000] Syne-SB  sm:text-[18px] text-[15px] leading-[16px]">7. Post-Registration Support</p>
                  <div className="ps-[10px]">
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Initial listing setup and optimization guidance for a strong start.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Troubleshooting for any account setup issues or verification delays.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Ongoing support for the first 30 days to ensure smooth operation and compliance.</p>
                  </div>
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
