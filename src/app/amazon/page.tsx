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
            <section className="sm:px-20 px-[10px]  sm:py-28  py-6  bg-gray-600">
                <div className="col-lg-12 ">
                    <p className="text-white font-bold sync-regular ff-syne text-center text-[40px]">Flipkart Product Listing Services</p>
                    <p className="text-center text-white text-[20px]">Home / <span className="text-[#ffa400]">Flipkart Product Listings Service</span>
                    </p>
                </div>
            </section>
            <section className="sm:px-20 px-[10px] pt-[80px] sm:py-28  py-6 ">
                <div className="flex justify-center">
                    <div className="col-lg-9 Syne-Regular">
                        <p className="text-[20px]">Boost Your Flipkart Sales with Our Expert Product Listing Services</p>
                        <p className="text-[20px] text-gray-400">If you&apos;re selling on Flipkart, you know how important it is to have high-quality product listings that stand out from the competition. At DigiBells, we specialize in optimizing Flipkart product listings to increase your sales and attract more customers.</p>
                        <p className="text-[20px]">Boost Your Flipkart Sales with Our Expert Product Listing Services</p>
                        <p className="text-[20px] text-gray-400">If you&apos;re selling on Flipkart, you know how important it is to have high-quality product listings that stand out from the competition. At DigiBells, we specialize in optimizing Flipkart product listings to increase your sales and attract more customers.</p>
                        <p className="text-[20px]">Boost Your Flipkart Sales with Our Expert Product Listing Services</p>
                        <p className="text-[20px] text-gray-400">If you&apos;re selling on Flipkart, you know how important it is to have high-quality product listings that stand out from the competition. At DigiBells, we specialize in optimizing Flipkart product listings to increase your sales and attract more customers.</p>
                        <p className="text-[20px]">Boost Your Flipkart Sales with Our Expert Product Listing Services</p>
                        <p className="text-[20px] text-gray-400">If you&apos;re selling on Flipkart, you know how important it is to have high-quality product listings that stand out from the competition. At DigiBells, we specialize in optimizing Flipkart product listings to increase your sales and attract more customers.</p>
                        <p className="text-[20px]">Boost Your Flipkart Sales with Our Expert Product Listing Services</p>
                        <p className="text-[20px] text-gray-400">If you&apos;re selling on Flipkart, you know how important it is to have high-quality product listings that stand out from the competition. At DigiBells, we specialize in optimizing Flipkart product listings to increase your sales and attract more customers.</p>

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
            <Footer/>
        </>
    )
};