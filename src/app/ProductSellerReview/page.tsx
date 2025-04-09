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
                                >PRODUCT & SELLER REVIEW
                                </h1>
                            </div>
                            <div className="col-md-12 sm:pt-[15px]">
                                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                                > <span className="text-[#000] Syne-SB">Amazon Product & Seller Review Management Services </span> help sellers improve their reputation, manage feedback effectively, and ensure that reviews align with Amazon&lsquo;s policies. These services focus on gathering valuable customer feedback, monitoring reviews, and ensuring that sellers&lsquo; feedback profiles remain positive, which can lead to higher trust and sales.</p>

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
                                src="/assets/retail/22.png"
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
                                <p className=" text-[#000]  Syne-SB sm:text-[20px] text-[15px] leading-[16px]">Key Components of Product & Seller Review Management</p>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">1. Review Monitoring and Tracking</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Real-Time Review Tracking:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Automatically track new reviews across all your listings and monitor changes in seller feedback.</li>


                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Review Alerts:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Receive notifications when negative or positive reviews are posted, allowing for quick responses.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Negative Feedback Identification:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identify negative reviews early to prevent escalation or account health issues.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Sentiment Analysis:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Analyze reviews for common customer complaints, concerns, or praises to improve product offerings.</li>

                                        </ul>

                                    </ul>
                                </div>


                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">2. Review Request Services</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Compliant Review Solicitation:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use Amazon-compliant methods to request reviews from customers (e.g., after purchase emails, Amazon&lsquo;s &quot;Request a Review&quot; button).
                                            </li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Automated Review Campaigns:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Set up automated email campaigns that encourage buyers to leave feedback, improving review frequency without violating Amazon&lsquo;s policies.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Enhanced Brand Content (EBC) Promotion:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use A+ Content to encourage positive reviews by educating customers about product features and benefits.</li>

                                        </ul>


                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">3. Handling Negative Reviews</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Response Management:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Craft polite, professional responses to negative reviews to demonstrate commitment to customer satisfaction.</li>
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Offer solutions, such as refunds, replacements, or additional instructions, to resolve issues publicly.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Request for Removal:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identify reviews that violate Amazon&lsquo;s guidelines (e.g., irrelevant content, abusive language) and request removal or mediation.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Improving Product Listings:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use feedback from reviews to improve product descriptions, photos, and FAQs to reduce future negative reviews.</li>

                                        </ul>


                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">4. Building Positive Reviews</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Incentivized Review Programs (Compliant):</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Run campaigns within Amazon&lsquo;s guidelines, such as through Amazon Vine, to get early product reviews from trusted reviewers.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Customer Engagement:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Engage with customers post-purchase to gather feedback on product experiences, ensuring long-term customer loyalty.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Branded Packaging:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Encourage buyers to leave reviews by including review reminders in the product packaging.</li>

                                        </ul>

                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">5. Maintaining Account Health</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Seller Feedback Monitoring:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Track seller feedback to ensure your account rating stays high and that your <span className="Syne-SB text-[#000]">Order Defect Rate (ODR), Late Shipment Rate,</span> and <span className="Syne-SB text-[#000]">Pre-Fulfillment Cancel Rate </span> remain within Amazon&lsquo;s standards.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Performance Alerts:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Set up alerts for sudden drops in ratings to address issues quickly before they impact account health.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Amazon Policy Compliance:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ensure all review management strategies are fully compliant with Amazon&lsquo;s <span className="Syne-SB text-[#000]">Review and Feedback Policies </span>to avoid penalties</li>
                                        </ul>

                                    </ul>
                                </div>
                                <div className="sm:pt-[50px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">6. Reporting & Analytics</p>
                                    <ul className=" list-disc sm:pt-[10px]">
                                        <li className=" Syne-MD text-[#000] sm:text-[17px] text-[13px]  mb-2">Review Trends:</li>
                                        <ul className=" list-disc sm:py-[5px]">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Generate reports that analyze the quality, quantity, and sentiment of reviews over time.</li>
                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Review Impact:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Track how reviews correlate with sales, conversions, and overall performance.</li>

                                        </ul>
                                        <li className=" Syne-MD text-[#000] sm:text-[18px] text-[13px]  mb-2">Customer Insights:</li>
                                        <ul className=" list-disc">
                                            <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Gain insights into customer preferences, product quality, and potential pain points.</li>
                                        </ul>
                                    </ul>
                                </div>
                         


                                <div className="sm:pt-[80px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Benefits of Product & Seller Review Management Services</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Improved Seller Reputation: </span>  Positive reviews help build trust, leading to higher conversion rates and better sales.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">Customer Satisfaction:  </span> Quick resolution of negative reviews improves customer loyalty and retention.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Compliance: </span>  Avoid violating Amazon&lsquo;s review policies, which can lead to account suspension or penalties.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Data-Driven Insights: </span> Leverage review trends to make informed decisions on product improvements or customer service.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Faster Problem Resolution: </span> Proactively address negative reviews before they escalate into issues that affect the overall reputation.</li>

                                    </ul>
                                </div>
                                <div className="sm:pt-[40px]">
                                    <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">Who Should Use These Services?</p>
                                    <ul className=" list-disc sm:py-[10px]">
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">New Sellers: </span> To establish a positive feedback profile and encourage early reviews.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">High-Volume Sellers: </span> To efficiently manage a large number of reviews and maintain high seller ratings.</li>
                                        <li className=" Syne-MD text-[#565656] sm:text-[18px] text-[13px]  mb-2"><span className="text-[#000] Syne-SB">
                                        Established Sellers:  </span> To address negative feedback promptly and maintain a strong, consistent reputation.</li>
                                 

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
