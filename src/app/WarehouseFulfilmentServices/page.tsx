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
                                >warehouse fulfilment (fba pREP.)
                                </h1>
                            </div>
                            <div className="col-md-10 sm:pt-[15px]">
                                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                                >Amazon Warehouse Fulfilment Services—often referred to as FBA (Fulfilment by Amazon) Prep Services—are tailored to help sellers ensure their inventory meets Amazon&lsquo;s strict requirements for storage and shipping in fulfilment canters. These services simplify the logistics process, save time, and prevent penalties for non-compliance.</p>

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
                                src="/assets/retail/Amazon/Group 17770.png"
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
                                    We also provide Amazon/Flipkart Warehouse Fulfilment Preparation services to the sellers for National and International shipping. This is very important task because if you do any mistake while doing FBA Preparation, then there is a chance where Amazon might not accept your shipment at Amazon warehouse. In India, sellers get their shipment back after paying few charges, but as far as international shipment is concerned, you will not get your shipment back to India and Amazon either disposed off your shipment at your cost or ask you to do the removal and deliver to any USA/UK Local address.</p>
                                <p className=" Syne-Regular text-[#686868] sm:text-[18px] text-[14px] leading-[25px] sm:pt-[20px]">
                                    Normally in International Shipment Rejection, sellers have to disposed of their inventory at their own cost.
                                    To avoid such mistake, this service is being highly important for all ecommerce exporters as well as Indian Sellers.</p>
                                <p className=" Syne-Regular text-[#686868] sm:text-[18px] text-[14px] leading-[25px] sm:pt-[20px]">
                                What we do?</p>

                            </div>

                            <div>

                                <div className="sm:pt-[30px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">1. Product Inspection</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Verifying product condition and ensuring it matches Amazon&lsquo;s quality standards.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Checking for damage, defects, or inconsistencies in SKU labels.</li>
                                     
                                    </ul>
                                </div>
                        
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">2. Labeling</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2">Applying or reapplying <span className="text-[#000] Syne-SB">FNSKU (Fulfillment Network Stock Keeping Unit)</span>  barcodes to items.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ensuring accurate labeling to avoid issues with tracking or inventory management.</li>                                  
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">3. Poly Bagging and Bubble Wrapping</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2">Packaging items that require additional protection during transit.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Adhering to Amazon&lsquo;s guidelines for products needing polybags (e.g., textiles, liquids, or items with exposed surfaces).</li>                                  
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">4. Bundling and Kitting</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2">Assembling multi-unit packs or bundles (e.g., sets of two, gift packs).</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Creating custom kits with consistent and professional packaging.</li>                                  
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">5. Packaging Compliance</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2">Ensuring all packages meet Amazon&lsquo;s size, weight, and packaging material requirements.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Avoiding non-compliance penalties that could lead to rejection at Amazon warehouses.</li>                                  
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">6. Shipping Box Preparation</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2">Ensuring that cartons meet Amazon&lsquo;s requirements for dimensions and labeling.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Adding box content labels and shipment IDs for seamless warehouse processing.</li>                                  
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">7. Palletizing (if applicable)</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2">Preparing bulk shipments on pallets, including shrink-wrapping and labeling according to Amazon&lsquo;s freight guidelines.</li>
                                                                         
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">8. Inventory Tracking</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2">Maintaining a record of all prepped items and shipments.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Providing reports for better inventory management and tracking.</li>                                  
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">9. Compliance with Amazon&lsquo;s Safety and Hazmat Rules</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2">Ensuring hazardous materials (hazmat) or regulated items comply with Amazon&lsquo;s rules.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Proper documentation and packaging for hazmat shipments.</li>                                  
                                    </ul>
                                </div>

                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Benefits of Using FBA Prep Services</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Time Savings:</span> Offloads tedious tasks, allowing sellers to focus on sales and growth</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Cost Efficiency:</span>Reduces the risk of penalties due to improper packaging or labeling.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Professional Handling:</span>Ensures products are prepped to Amazon&lsquo;s exacting standards.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Scalability: </span>Supports high-volume sellers who may not have the resources for in-house prep.</li>                                                                                                    
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Who Should Use FBA Prep Services?</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">New Sellers:</span> To avoid costly mistakes and streamline entry into the FBA system.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        High-Volume Sellers:</span>For efficient handling of large inventory volumes.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        International Sellers: </span>For seamless inventory prep when shipping from overseas.</li>
                                        
                                    </ul>
                                </div>
                                <div className="sm:pt-[25px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">These providers often offer customizable packages based on your specific needs.</p>
                                  
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
