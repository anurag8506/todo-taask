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
                >Brand Store Creation & Optimization
                </h1>
                

              </div>
              <div className="col-md-10 sm:pt-[15px]">
                <p className="sm:text-[18px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                >An Amazon Brand Store Creation & Optimization service helps sellers create a dedicated, visually appealing brand storefront on Amazon, where customers can explore the entire product catalog in one place. This service is especially useful for Amazon Brand Registered sellers, as it offers them an exclusive space to build brand awareness, drive engagement, and increase sales.</p>

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
                src="/assets/retail/11.png"
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
              
                <p className=" Syne-Regular text-[#686868] sm:text-[18px] text-[14px] sm:leading-[25px] sm:pt-[10px]">
                A well-designed and optimized Amazon Brand Store enhances brand visibility, increases customer engagement, and provides a dedicated space for showcasing products and brand story. By leveraging this service, we can create a powerful brand presence on Amazon that aligns with their long-term growth and branding goals.</p>

                <p className=" Syne-Regular text-[#686868] sm:text-[18px] text-[14px] leading-[16px] sm:pt-[10px]">
                  Here&lsquo;s what a typical  <span className="text-[#000]  Syne-MD"> Amazon Brand Store Creation & Optimization service</span> includes:</p>

              </div>

              <div>
             
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000] Syne-SB  sm:text-[18px] text-[15px] leading-[16px]">1. Store Design and Layout Planning</p>
                  <ul className=" list-disc">
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Development of a unique, brand-aligned store layout based on the brand&lsquo;s identity and goals.</li>
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Customization of store templates to create a user-friendly, visually engaging customer experience.</li>
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Creation of organized pages and subpages for different product categories, collections, or promotions.</li>
                            
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">2. Brand Story and Messaging Development</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Crafting a compelling brand story that reflects the brand&lsquo;s values, mission, and uniqueness.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Strategic placement of messaging to engage visitors and build trust.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Integration of brand storytelling elements to differentiate the brand and deepen customer connection.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">3. High-Quality Visual Content Creation</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Professional, high-resolution product and lifestyle images tailored for the Brand Store.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Creation of banners, logos, and custom graphics to enhance visual appeal.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Video content to showcase products in action, highlight unique features, or tell the brand story.</li>                                    
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">4. Product Catalog Organization</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Structuring the product catalog within the store for easy navigation, ensuring customers can quickly find what they need.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Categorization of products by type, feature, or collection for seamless browsing.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Recommendations and featured products sections to highlight top-selling or new items.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">5. Keyword and SEO Optimization</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Incorporation of targeted keywords into the store&lsquo;s metadata to improve discoverability on Amazon.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use of SEO best practices to maximize search visibility within Amazon&lsquo;s platform.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Regular updating of keywords to stay relevant to trending searches and seasonal demands.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">6. Custom Page Creation for Campaigns and Promotions</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Development of pages for seasonal collections, limited-time promotions, or featured product lines.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Use of promotional banners, countdown timers, and “Deal of the Day” highlights to drive urgency.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Flexibility to update pages and add new ones as needed for ongoing campaigns.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">7. Mobile Optimization</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Ensuring the store layout and content are optimized for mobile users.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Testing and adjusting images, text, and navigation for an optimal mobile experience.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Enhancing the mobile experience to capture on-the-go shoppers and increase mobile conversions.</li>                
                           
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">8. Performance Analysis and Reporting</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Tracking key metrics such as store traffic, page views, and sales generated from the Brand Store.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">A/B testing of different layouts, images, and featured products to improve store performance.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Providing monthly or quarterly reports to analyze trends, customer behavior, and areas for improvement.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">9. Ongoing Store Maintenance and Updates</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Regular updates to banners, product collections, and featured items to keep the store fresh.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Seasonal or holiday updates, including visuals and promotional offers.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Troubleshooting any issues, such as broken links or slow-loading pages, to ensure a smooth customer experience.</li>                 
                  </ul>
                </div>
                <div className="sm:pt-[25px]">
                  <p className=" text-[#000]  Syne-SB sm:text-[18px] text-[15px] leading-[16px]">10. Brand Store Launch and Promotion Strategy</p>
                  <ul className=" list-disc">                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Assistance with the official launch of the Brand Store to maximize visibility.</li>              
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Integration with Amazon Advertising (Sponsored Brands) to drive traffic directly to the Brand Store.</li>                
                    <li className=" Syne-MD text-[#565656] sm:text-[16px] text-[13px]  mb-2">Promotion ideas for off-Amazon channels, such as social media and email marketing, to attract external traffic.</li>                 
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
