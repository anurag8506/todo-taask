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
                                >E-COMMERCE EXPORT THROUGH GLOBAL SELLING
                                </h1>
                            </div>
                            <div className="col-md-12 sm:pt-[15px]">
                                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                                > <span className="text-[#000] Syne-SB">Amazon Global Selling Services </span> allow sellers to expand their businesses internationally by reaching customers in various countries and regions through Amazon&lsquo;s marketplace network. These services offer a range of tools and support to help sellers navigate the complexities of international trade, customs, language barriers, and market preferences.</p>

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
                                src="/assets/retail/Amazon/Group 17772.png"
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
                                <p className=" text-[#000]  Syne-SB sm:text-[20px] text-[15px] leading-[16px]">Key Components of Amazon Global Selling</p>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">1. Selling in Multiple Marketplaces</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Global Marketplace Access:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Sell your products in Amazon&lsquo;s global marketplaces, including the US, UK, Germany, Japan, Canada, and many other countries.</li>


                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Unified Seller Central Account:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Manage multiple countries and regions from a single Amazon Seller Central account.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use <span className="text-[#000] Syne-SB">Amazon Global Selling</span> to list products in multiple Amazon marketplaces.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Localized Listings:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Translate and adapt product listings for each marketplace, including local language and currency.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Tailor product details to meet local regulations and preferences.</li>

                                        </ul>


                                    </ul>
                                </div>


                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">2. Cross-Border Fulfillment</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Fulfillment by Amazon (FBA) International:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use Amazon&lsquo;s FBA network to store and ship products to multiple countries.
                                            </li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Pan-European FBA</span> allows products to be stored and fulfilled across the EU, reducing shipping costs and improving delivery speeds.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Global Selling FBA</span>  enables sellers to store inventory in a central location (e.g., US or UK) and fulfill orders worldwide.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Multi-Country Inventory Management:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Manage stock levels across different Amazon marketplaces, ensuring inventory is available for international customers.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Replenish stock in the correct fulfillment centers to optimize delivery times and costs.</li>

                                        </ul>

                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">3. International Shipping and Customs</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Global Shipping Solutions:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Leverage Amazon&lsquo;s shipping partners and logistics networks to ship internationally at competitive rates.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Customs and Duties Management:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Amazon provides tools to calculate and manage customs duties, taxes, and tariffs, ensuring smooth cross-border trade.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Export and Import Assistance:</span> Tools to guide sellers on export and import regulations for each country.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">International Shipping Program:</li>
                                        <ul className=" list-disc">

                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">For US-based sellers, Amazon&lsquo;s <span className="text-[#000] Syne-SB">Global Export</span>  program simplifies selling to other Amazon marketplaces by offering pre-calculated shipping fees and international delivery options.</li>

                                        </ul>

                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">4. Currency and Payment Management</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Amazon Currency Converter for Sellers:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Easily convert foreign earnings into your local currency and receive payments from different marketplaces in your preferred currency.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Global Payment Options:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Sellers can receive payments in local currencies (USD, GBP, EUR, JPY, etc.) and manage their earnings through a single Amazon account.</li>

                                        </ul>


                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">5. Marketing and Advertising Support</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Localized Marketing Campaigns:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Promote products with targeted ads in each country, using <span className="Syne-SB text-[#000]">Amazon Sponsored Products</span>  or  <span className="Syne-SB text-[#000]">Sponsored Brands </span> ads.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Amazon Global Store Ads:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Market your products globally by setting up ad campaigns targeted to customers in international marketplaces.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">International Deals:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Participate in global promotions and events, such as  <span className="Syne-SB text-[#000]">Prime Day or Black Friday, </span> to attract international customers.</li>
                                        </ul>

                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">6. Tax and Legal Compliance</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Tax Calculation Services:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Amazon helps sellers comply with international tax laws, providing tools for VAT (Value Added Tax) registration and tax calculation in countries where tax is applicable.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Sellers are notified when they need to register for tax purposes in new regions.</li>
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Regulatory Compliance:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ensure that your products comply with each country&lsquo;s legal and safety standards (e.g., product labeling, packaging, import regulations).</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Global Legal Support:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Amazon provides support for navigating the legalities of doing business in various countries, such as intellectual property laws and consumer protection regulations.</li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">7. Customer Service and Support</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Global Customer Support:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Amazon offers multilingual customer service in various regions to help handle issues, complaints, or returns in local languages.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Returns Management:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Handle returns and refunds across international markets with Amazon&lsquo;s streamlined return process.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Customer Feedback Management:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Monitor and respond to customer reviews and feedback in multiple languages to improve customer satisfaction.</li>
                                        </ul>
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">8. Market Research and Insights</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Market Expansion Insights:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Amazon offers tools and reports to help you assess the demand for your products in different countries.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use <span className="Syne-SB text-[#000]"> Amazon Brand Analytics  </span> and other tools to analyze international sales trends, competitor performance, and customer preferences.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Localized Pricing Recommendations:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Amazon provides guidance on competitive pricing for different markets, considering local market conditions, currency fluctuations, and demand.</li>

                                        </ul>

                                    </ul>
                                </div>



                                <div className="sm:pt-[80px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Benefits of Amazon Global Selling</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Increased Reach: </span>  Access Amazon&lsquo;s massive global customer base, expanding your reach to millions of international buyers.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Simplified Logistics: </span> Take advantage of Amazon&lsquo;s fulfillment network to handle international shipping and returns</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                            Local Expertise: </span>  Sell in multiple countries without needing to understand the complexities of each local market (e.g., language, currency, customs).</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                            Revenue Growth: </span> Tap into high-demand international markets to increase sales and revenue.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                            Brand Exposure: </span> Increase your brand&lsquo;s visibility and recognition on a global scale.</li>

                                    </ul>
                                </div>
                                <div className="sm:pt-[40px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Who Should Use Amazon Global Selling?</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Established Sellers: </span> Looking to expand their reach beyond domestic markets.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">New Sellers: </span>  Interested in accessing international markets from the start to grow their business faster.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Sellers with International Products: </span>  If your products appeal to customers worldwide (e.g., electronics, clothing, beauty products), global selling provides an opportunity to scale quickly.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Brands with Global Ambitions: </span>  Those who want to establish themselves as a global brand and reach customers in multiple regions.</li>


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
