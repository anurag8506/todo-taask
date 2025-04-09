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
                                >PRODUCT PHOTOSHOOT, EDITING, VIDEO, GRAPHIC
                                </h1>
                            </div>
                            <div className="col-md-12 sm:pt-[15px]">
                                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                                >Amazon Product Photoshoot, Editing, Video, and Graphic Design Services are essential for sellers who want to create visually appealing and high-converting product listings. These services focus on adhering to Amazon&lsquo;s content guidelines while highlighting the best features of your product to boost sales.</p>

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
                                src="/assets/retail/17.png"
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
                                    We do quality product Photoshoot, Model Shoot with national & International Models, Graphic Designing, Product Video Shoot, Rendering Image Creation, Logo Design and many more.</p>

                                <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px] sm:pt-[30px]">Our Service details are as follows-</p>
                            </div>

                            <div>

                                <div className="sm:pt-[30px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">1. Product Photoshoot</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">High-Quality Studio Photography:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Capturing crisp, professional images with proper lighting and backgrounds.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Adherence to Amazon Guidelines:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">White background (RGB 255, 255, 255) for main images.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Minimum image size: 1000 x 1000 pixels for zoom functionality.</li>
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Lifestyle Photography:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Showcasing products in real-life scenarios to connect with customers.</li>
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">360° View Photography:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Interactive product displays for a comprehensive view.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Model Photography:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Featuring models using or wearing the product (for fashion, accessories, etc.).</li>

                                        </ul>
                                    </ul>
                                </div>


                                <div className="sm:pt-[30px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">2. Photo Editing and Retouching</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Background Removal and Enhancement:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Removing unnecessary elements and ensuring a clean, professional look.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Image Resizing and Cropping:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Optimizing images for different sections of Amazon (main image, thumbnails).</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Color Correction:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ensuring accurate and vibrant colors to match the product.</li>
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Shadow and Reflection Effects:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Adding depth to product images for a premium feel.</li>

                                        </ul>

                                    </ul>
                                </div>
                                <div className="sm:pt-[30px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">3. Product Videos</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Promotional Videos:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Short, engaging videos showcasing product features and benefits.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">How-To Tutorials:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Demonstrating product usage to increase customer confidence.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Lifestyle Videos:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Showcasing the product in action to enhance relatability.</li>
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Compliance with Amazon Video Guidelines:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Aspect ratio, resolution (minimum 1280 x 720), and file format requirements.</li>

                                        </ul>

                                    </ul>
                                </div>
                                <div className="sm:pt-[30px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">4. Graphic Design for Enhanced Content (A+ Content)</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Infographics:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Visuals with key product details like dimensions, features, and benefits.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Comparison Charts:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Highlighting how your product stands out against competitors.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Brand Story Layouts:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Designing visual elements for Amazon A+ content and Brand Story sections.</li>
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Custom Design for EBC (Enhanced Brand Content):</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Unique layouts and imagery to elevate your product page.</li>

                                        </ul>

                                    </ul>
                                </div>




                                <div className="sm:pt-[40px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Benefits for Amazon Sellers</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Improved Conversion Rates:</span>  High-quality visuals increase trust and buyer confidence.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">

                                            Better Search Ranking:</span>Professional photos and A+ content improve Amazon SEO.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Compliance: </span> Avoid rejection or suspension of listings due to guideline violations.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Increased Sales: </span> Engaging visuals attract more clicks and boost purchase likelihood.</li>

                                    </ul>
                                </div>
                                <div className="sm:pt-[40px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Who Should Use These Services?</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">New Sellers:</span> To create competitive and professional listings.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Established Sellers: </span>To refresh or upgrade older listings.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Sellers with Niche Products: </span> To explain and highlight unique features visually.</li>                                    
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
