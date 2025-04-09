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
            <div className="col-md-8">
              <div className="">
                <h1 className="sm:text-[75px] uppercase  sm:leading-[70px] text-[#000000] ff-syne font-[600] text-[30px] leading-[30px]"
                >Product Listing & Cataloguing.
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
                src="/assets/retail/image.png"
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
              
                <p className=" Syne-Regular text-[#686868] sm:text-[18px] text-[14px] leading-[16px] sm:pt-[10px]">
                Here&lsquo;s a breakdown of what an <span className="text-[#000]  Syne-MD">Amazon Product Listing Service</span> Account might offer:</p>

              </div>

              <div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB  sm:text-[18px] text-[15px] leading-[16px]">1. Brand Registry and Trademark Support.</p>
                  <div className="ps-[10px]">
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Assistance with Amazon Brand Registry for sellers with registered trademarks, which offers enhanced brand protection and control.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Guidance on the trademark application process if a brand isn&lsquo;t yet registered.</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- If you do not have Trademark? No Worry, we still help you to register your account and list your product on Amazon under your given brand name or under “Generic” Category.</p>

                  </div>
             
                </div>
                <div className="sm:pt-[25px]">
                  <p className="text-[#000] Syne-MD  sm:text-[16px] text-[15px] leading-[16px]">a. Category and Product Approval Assistance</p>
                  <div className="ps-[10px]">
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Help with obtaining approval for restricted or gated categories (e.g., beauty, health, grocery).</p>
                    <p className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">- Assistance with completing and submitting applications for gated product types and categories.</p>
                   
                  </div>
                </div>
                <div className="sm:pt-[25px]">
                  <p className="text-[#000] Syne-MD  sm:text-[16px] text-[15px] leading-[16px]">b. Product Title Optimization</p>
                  <ul className=" list-disc">
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Creation of keyword-rich, informative, and clear product titles.</li>
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Optimization for readability and relevance, following Amazon&lsquo;s title guidelines.</li>
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Incorporation of essential details (e.g., brand, key features, size, color) to attract clicks.</li>
             
                   
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000] Syne-SB  sm:text-[18px] text-[15px] leading-[16px]">2. Bullet Points & Description Writing</p>
                  <ul className=" list-disc">
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Compelling bullet points highlighting product benefits and unique selling points (USPs).</li>
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Structuring bullet points for easy readability, focusing on customer needs and pain points.</li>
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Detailed product descriptions with storytelling and persuasive language to increase customer engagement.</li>
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use of HTML formatting (where allowed) for improved readability in descriptions.</li>          
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">3. Keyword Research & SEO Optimization</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">In-depth keyword research tailored to the product, using Amazon-specific SEO tools and methods.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Integration of primary and secondary keywords in the title, bullet points, and backend search terms.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Placement of keywords to maximize search visibility without keyword stuffing.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">4. High-Quality Product Image Creation</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Professional photography of the product, following Amazon&lsquo;s image guidelines.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Lifestyle images to showcase the product in real-life use scenarios.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Infographic images to highlight key features, dimensions, and product details.</li>                 
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">360-degree or 3D imaging options to provide a more interactive experience.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">5. A+ Content (Enhanced Brand Content) Creation</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">For registered brands, development of A+ Content with high-quality images, graphics, and formatted text.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Creation of comparison charts, feature breakdowns, and brand storytelling elements.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Structuring A+ Content to enhance customer trust and provide an immersive brand experience.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">6. Backend Search Terms Optimization</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Filling out backend search terms with relevant keywords that enhance search visibility.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Guidance on Amazon&lsquo;s search term character limits, forbidden keywords, and misspelling practices.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Regular updating of backend search terms to stay relevant with changing search trends.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">7. Product Categorization & Compliance</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Accurate categorization of the product in the most relevant category and subcategory.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Assistance with obtaining approval for restricted or gated categories, if necessary.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Compliance check to ensure the listing adheres to Amazon&lsquo;s category-specific guidelines and policies.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">8. Pricing Strategy and Competitor Analysis</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Analysis of competitors&lsquo; pricing strategies to recommend competitive pricing.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Guidance on implementing discount strategies, promotions, and coupons to increase conversions.</li>                
                           
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">9. Listing Audit and Optimization (For Existing Listings)</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Analysis of existing product listings to identify improvement areas.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Comprehensive review and update of titles, bullet points, images, keywords, and backend search terms.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Testing of A/B elements like titles and images for improved conversions.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">10. Customer Reviews & Feedback Integration</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Strategic placement of information in listings to address common customer concerns from reviews.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Identification of potential negative feedback trends and adjustments to listing content to mitigate issues.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Encouragement of customer reviews and ratings to boost social proof.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">11. Ongoing Listing Maintenance and Updates</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Regular monitoring and updating of listings based on performance and seasonal trends.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Adjustments to keywords, images, and content as customer behaviour or market conditions change.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Troubleshooting any issues such as suppressed or deactivated listings. </li>                 
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
