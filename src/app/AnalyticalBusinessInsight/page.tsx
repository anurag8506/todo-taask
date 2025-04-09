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
                                >ANALYTICAL & BUSINESS INSIGHT
                                </h1>
                            </div>
                            <div className="col-md-12 sm:pt-[15px]">
                                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                                > <span className="text-[#000] Syne-SB">Amazon Analytical & Business Insight Services </span>are designed to help sellers harness data to make informed decisions, optimize performance, and maximize profitability. These services focus on analyzing sales trends, customer behavior, and operational metrics to offer actionable insights that drive business growth.</p>

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
                                src="/assets/retail/20.png"
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
                            <p className=" text-[#000]  Syne-SB sm:text-[20px] text-[15px] leading-[16px]">Core Services in Amazon Analytics & Business Insights</p>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">1. Sales Performance Analytics</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Revenue Tracking:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Monitor daily, weekly, and monthly sales to identify growth patterns.</li>
                                      

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Product Performance:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Analyze sales by SKU to identify bestsellers and underperforming products.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Seasonality Trends:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Study historical data to forecast demand during peak seasons or promotional events.</li>
                                      
                                        </ul>
                                     
                                    </ul>
                                </div>


                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">2. Customer Behavior Insights</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Purchase Trends:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Understand what customers are buying and why.
                                           </li>
                                         
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Demographic Data:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Analyze customer locations, age groups, and preferences to refine marketing strategies.</li>
                                          
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Customer Journey Analysis:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Track how buyers interact with product pages, including clicks, conversions, and bounce rates.</li>
                                       
                                        </ul>
                                    
                                      
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">3. Competitor Analysis</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Pricing Insights:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Monitor competitor prices to remain competitive while maintaining profit margins.</li>
                                            
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Market Share Analysis:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identify where your products stand in the market relative to competitors.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Keyword Performance:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Track competitors&lsquo; keyword rankings and optimize your listings to outperform them.</li>

                                        </ul>
                                      

                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">4. Advertising Insights</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Campaign Performance:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Analyze metrics like click-through rate (CTR), cost-per-click (CPC), and advertising cost of sales (ACoS).</li>
                                            
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Budget Optimization:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identify high-performing keywords and allocate ad spend accordingly.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Return on Ad Spend (ROAS):</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Measure the effectiveness of your ad campaigns in driving revenue.</li>

                                        </ul>
                                     
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">5. Inventory and Fulfillment Analytics</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Stock Level Monitoring:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ensure optimal inventory levels to prevent stockouts or overstocking.</li>
                                           
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Fulfillment Metrics:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Evaluate order defect rate (ODR), late shipment rate, and fulfillment times.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Replenishment Forecasting:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use historical data to predict restocking needs and avoid storage fees.</li>

                                        </ul>
                                     
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">6. Profitability Analysis</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Cost Analysis:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Break down costs, including production, shipping, and Amazon fees, to calculate net profit.</li>                                         
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">ROI Evaluation:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Assess the return on investment for new product launches or marketing campaigns.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Profit Margin Tracking:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identify high-margin products and focus on scaling them.</li>

                                        </ul>
                                     
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">7. Brand and Market Insights</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Brand and Market Insights</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use tools like Amazon Brand Analytics (available to Brand Registered sellers) to track brand visibility and share.</li>                                         
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Search Term Analysis:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identify high-performing search terms using Amazon&lsquo;s Brand Analytics dashboard.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Market Trends:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Stay updated on emerging categories, customer preferences, and industry developments.</li>

                                        </ul>
                                     
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">8. Customer Feedback Insights</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Review Analysis:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Analyze customer reviews to identify recurring themes and areas for improvement.</li>                                         
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Feedback Sentiment Analysis:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use AI tools to understand customer sentiment and refine your products or services.</li>

                                        </ul>                                                   
                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">9. Financial Performance Analysis</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Payout Reconciliation:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Match Amazon disbursements with sales and fees.</li>                                         
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Fee Structure Evaluation:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Optimize product listings to reduce FBA, referral, or storage fees.</li>

                                        </ul>                                                   
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Cash Flow Management:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Track financial health to ensure smooth operations.</li>

                                        </ul>                                                   
                                    </ul>
                                </div>
                              




                                <div className="sm:pt-[80px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Benefits of Using Analytical & Insight Services</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Data-Driven Decisions: </span>  Empower your business strategy with actionable insights.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Improved Efficiency:  </span> Optimize inventory, advertising, and fulfilments processes</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Enhanced Profitability: </span>  Identify high-margin opportunities and reduce unnecessary expenses.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Competitive Edge: </span> Stay ahead by analysing market trends and competitors.</li>

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
