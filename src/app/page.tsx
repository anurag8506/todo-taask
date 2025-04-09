'use client'
import Image from "next/image";
import Header from '../components/header';
import Footer from '../components/footer';
import ServiceAccordion from '@/components/faq';
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper, SwiperSlide } from "swiper/react";
import WhatshapIcon from "../components/watsap"
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardBolg from '../components/cardBlog'


import Link from "next/link";

export default function Home() {
  const blogsDeatils = [
    {
      blogTitle: "Marketplace Registration",
      blogDescription: "Seller Account Registration Service assists new sellers in setting up a fully compliant and optimized Amazon seller account. This service is especially valuable for businesses new to the platform, as it ensures all steps are handled professionally, avoiding potential pitfalls that could lead to account suspension or delays.",
      blogLink: "Know More",
      blogImage: "/assets/images/blog.jpg"
    },
    {
      blogTitle: "Product Listing & Cataloguing.",
      blogDescription: "An Marketplace Product Listing Service is designed to help sellers create optimized, high-converting product listings that drive visibility, traffic, and sales. This service typically includes comprehensive support with each element of the listing to ensure it meets Amazon &lsquo; s best practices and stands out in a competitive marketplace.",
      blogLink: "Know More",
      blogImage: "/assets/images/blog1.jpg"
    },
    {
      blogTitle: "Brand Store Creation & Optimization",
      blogDescription: "An Amazon Brand Store Creation & Optimization service helps sellers create a dedicated, visually appealing brand storefront on Amazon, where customers can explore the entire product catalog in one place. This service is especially useful for Amazon Brand Registered sellers, as it offers them an exclusive space to build brand awareness, drive engagement, and increase sales.",
      blogLink: "Know More",
      blogImage: "/assets/images/blog2.jpg"
    },
    {
      blogTitle: "Marketplace Complete Account Management Services",
      blogDescription: "An Amazon Complete Account Management Service is an end-to-end solution designed to handle all aspects of an Amazon seller’s account, enabling them to focus on scaling their business without dealing with the complexities of the platform. This service encompasses everything from account setup and product listing optimization to inventory management, advertising, and customer service.",
      blogLink: "Know More",
      blogImage: "/assets/images/blog3.jpg"
    },
    {
      blogTitle: "Amazon/Flipkart Account Reinstatement Services",
      blogDescription: "Amazon Account Reinstatement Services help sellers whose accounts have been suspended, deactivated, or restricted to regain access to the platform. Account suspensions can be stressful and disruptive for businesses, so these services are designed to efficiently identify issues, communicate with Amazon, and implement a plan of action to restore the account.",
      blogLink: "Know More",
      blogImage: "/assets/images/blog4.jpg"
    },
    {
      blogTitle: "Advertisement PPC Management",
      blogDescription: "Amazon Advertisement Optimization Services are tailored solutions designed to help sellers refine their advertising strategies on Amazon, boost campaign efficiency, and achieve better sales outcomes. These services focus on enhancing the performance of existing ad campaigns to ensure maximum ROI while minimizing unnecessary spending.",
      blogLink: "Know More",
      blogImage: "/assets/images/blog5.jpg"
    },
  ]
  console.log(blogsDeatils)
  const cardDetail = [
    {
      cardDescription: "Amazon India and International Marketplaces like USA, UK, EU & UAE",
      cardImage: "/assets/images/card.svg"
    },
    {
      cardDescription: "Experienced to manage300+ product categories and more than 150+ Brands on Different Marketplaces",
      cardImage: "/assets/images/card1.svg"
    },
    {
      cardDescription: "In-dept knowledge about India & International Marketplace compliance ",
      cardImage: "/assets/images/card2.svg"
    },
    {
      cardDescription: "Preferred partner of all major payment solutions like Pingpong & Payoneer for seamless international payment remittance.",
      cardImage: "/assets/images/card3.svg"
    },
    {
      cardDescription: "In-House team of Taxation, Ecommerce Accounting, Trademark, GST, Product Compliance.",
      cardImage: "/assets/images/card4.svg"
    },
    {
      cardDescription: "Company in-corporation and Taxation in country such as USA, UK.EU, UAE, Malaysia, Thailand, Australia, Nepal & Hongkong",
      cardImage: "/assets/images/card5.svg"
    },
    {
      cardDescription: "In-House Digital Marketing Team to help Building Website, Social Media Management",
      cardImage: "/assets/images/card6.svg"
    },
    {
      cardDescription: "Advanced Sales Performance Reporting",
      cardImage: "/assets/images/card6.svg"

    },
  ]

  return (
    <>
      <Header />

      <section className="relative sm:pt-[0px] bg-[#FCFCFF]">
        <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          loop={true}
          className="items-center"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <Link href="/candles">
              <Image
                src="/assets/retail/Group 17699.png"
                width={1920}
                height={600}
                alt="SUBSTAINABLE"
                className="m-auto w-full"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="/car-diffusers">
              <Image
                src="/assets/retail/Group 17703.png"
                width={1920}
                height={600}
                alt="SUBSTAINABLE"
                className="m-auto w-full"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="">
              <Image
                src="/assets/retail/Group 17712.png"
                width={1920}
                height={600}
                alt="SUBSTAINABLE"
                className="m-auto w-full"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="">
              <Image
                src="/assets/retail/Group 17714.png"
                width={1920}
                height={600}
                alt="SUBSTAINABLE"
                className="m-auto w-full"
              />
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link href="">
              <Image
                src="/assets/retail/Group 17700.png"
                width={1920}
                height={600}
                alt="SUBSTAINABLE"
                className="m-auto w-full"
              />
            </Link>
          </SwiperSlide>
        </Swiper>
      </section>

      <section className="sm:px-20 px-[10px] sm:py-20 py-6 bg-[#FCFCFF]">
        <div className="container-fluid">
          <div className="row justify-center">
            <div className="col-md-6">
              <div className="text-center">
                <p className="sm:text-[40px] Syne-BB text-[#000000] text-[25px] mb-0"
                >Why E Retail Solutions?
                </p>
                <p className=" Syne-Regular text-[#686868] sm:text-[16px] text-[14px] leading-[20px]">
                  India 1st SPN and ATES partner of Amazon and Flipkart. Industry Experience more than 10 Years for Domestic and International Ecommerce Service.</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="col-lg-8">
              <div className="row justify-center sm:pt-[20px] sm:pb-[20px] pb-[20px]">
                {cardDetail.map((card_detail, index) => (

                  <div className="col-md-3 pt-4 mb-4" key={index}>
                    <CardBolg cardDetail={card_detail} />
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="sm:px-20 bg-[#000000] rounded-t-[90px] px-[10px] sm:py-20 py-10">
        <div className="container-fluid">
          <div className=" col-md-11">
            <div className="row justify-start  sm:pb-8">

              <div className="col-md-6 lg:sticky lg:max-h-screen lg:top-[200px]">
                <div className="text-start">
                  <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">The E-retail Solutions Process</p>
                  <p className="sm:text-[40px] Syne-Regular  text-[#fff] sm:leading-[45px] leading-[25px] text-[20px] mb-0"
                  >Start your brand&lsquo;s GROWTH on Amazon with our expert approach and process we follow for seller sucess as an amazon authorized agency.
                  </p>
                  <p className="sm:text-[16px] Syne-Regular  text-[#fff] leading-[45px]  text-[18px] mb-0 py-[10px]"
                  >See our step by step process:
                  </p>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="flex justify-end">
                  <div className='col-lg-8'>
                    <div className="row">
                      <div className="col-lg-12 mb-4">
                        <div className="bg-white h-full lg:p-[60px] p-[30px] rounded-md flex-1">
                          <Image
                            src="/assets/retail/Group 390.svg"
                            width={1920}
                            height={600}
                            alt="SUBSTAINABLE"
                            className=" w-[50px]"
                          />
                          <p className="font-bold text-[20px] pt-3 ">1.Understand</p>
                          <p className="p-0 m-0">Your brand: where else you are selling, your competitors, each marketplace and the opportunity.</p>
                        </div>

                      </div>
                      <div className="col-lg-12 mb-4">
                        <div className="bg-white h-full lg:p-[60px] p-[30px] rounded-md flex-1">
                          <Image
                            src="/assets/retail/Group 391.svg"
                            width={1920}
                            height={600}
                            alt="SUBSTAINABLE"
                            className=" w-[50px]"
                          />
                          <p className="font-bold  text-[20px] pt-3 ">2. Strategize</p>
                          <p className="p-0 m-0">Collaborate and develop an omni-channel approach with SEO, image / A+, advertising plan to drive incremental sales while maintaining profitability</p>
                        </div>

                      </div>
                      <div className="col-lg-12 mb-4">
                        <div className="bg-white h-full lg:p-[60px] p-[30px] rounded-md flex-1">
                          <Image
                            src="/assets/retail/Vector.svg"
                            width={1920}
                            height={600}
                            alt="SUBSTAINABLE"
                            className=" w-[50px]"
                          />
                          <p className="font-bold text-[20px] pt-3 ">3. Execute</p>
                          <p className="p-0 m-0">Let our team excuse the strategy we have proposed and we have both agreed on.</p>
                        </div>

                      </div>
                 
                      <div className="col-lg-12 mb-4">
                        <div className="bg-white h-full lg:p-[60px] p-[30px] rounded-md flex-1">
                          <Image
                            src="/assets/retail/Vector1.svg"
                            width={1920}
                            height={600}
                            alt="SUBSTAINABLE"
                            className=" w-[50px]"
                          />
                          <p className="font-bold text-[20px] pt-3 ">4. Report</p>
                          <p className="m-0 p-0">We have weekly calls to review the execution of plans which include reporting and analytics. We ensure you always have full transparency.</p>
                        </div>

                      </div>
                    </div>



                  </div>

                </div>
              </div>









            </div>

            {/* <div className="row justify-between sm:pt-10 pt-10 sm:px-[0px] px-[10px]">
              
              <div className="col-md-3 p-0">
                <div className=" py-[20px] sm:h-[180px] rounded-[10px]">
                  <Image
                    src="/assets/images/icon.svg"

                    width={40}
                    height={36}
                    alt="no-img"
                  />
                  <div className="sm:py-[20px] py-[10px] py-[10px] sm:pe-[50px]">
                    <p className="Syne-Regular text-[#E86232] sm:text-[18px] text-[15px]  mb-2">1. Understand</p>
                    <p className=" Syne-Regular text-[#fff] sm:text-[12px] text-[12px] leading-[20px] mb-0">
                      Your brand: where else you are selling, your competitors, each marketplace and the opportunity.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 p-0">
                <div className="py-[20px] sm:px-[20px] sm:h-[180px] rounded-[10px] sm:pe-[50px]">
                  <Image
                    src="/assets/images/icon1.svg"

                    width={30}
                    height={36}
                    alt="no-img"
                  />
                  <div className="sm:py-[20px] py-[10px]">
                    <p className="Syne-Regular text-[#E86232] sm:text-[18px] text-[15px]  mb-2">2. Strategize</p>
                    <p className=" Syne-Regular text-[#fff] sm:text-[12px] text-[12px] leading-[20px] mb-0">
                      Collaborate and develop an omni-channel approach with SEO, image / A+, advertising plan to drive incremental sales while maintaining profitability</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 p-0">
                <div className=" py-[20px] sm:px-[20px] sm:h-[180px] rounded-[10px] sm:pe-[50px]">
                  <Image
                    src="/assets/images/icon2.svg"

                    width={30}
                    height={36}
                    alt="no-img"
                  />
                  <div className="sm:py-[20px] py-[10px]">
                    <p className="Syne-Regular text-[#E86232] sm:text-[18px] text-[15px]  mb-2">3. Execute</p>
                    <p className=" Syne-Regular text-[#fff] sm:text-[12px] text-[12px] leading-[20px] mb-0">
                      Let our team excuse the strategy we have proposed and we have both agreed on.</p>
                  </div>
                </div>
              </div>
              <div className="col-md-3 p-0">
                <div className=" py-[20px] sm:px-[20px] sm:h-[180px] rounded-[10px] sm:pe-[20px]">
                  <Image
                    src="/assets/images/icon3.svg"

                    width={20}
                    height={30}
                    alt="no-img"
                  />
                  <div className="sm:py-[20px] py-[10px]">
                    <p className="Syne-Regular text-[#E86232] sm:text-[18px] text-[15px]  mb-2">4. Report</p>
                    <p className=" Syne-Regular text-[#fff] sm:text-[12px] text-[12px] leading-[20px] mb-0">
                      We have weekly calls to review the execution of plans which include reporting and analytics. We ensure you always have full transparency.</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>


      <section className="sm:px-20 px-[10px] sm:py-28 py-10 bg-[#FCFCFF]">
        <div className="container-fluid">
          <div className="row justify-between">
            <div className="col-md-6">
              <div className="text-start sm:pe-[50px]">
                <p className="sm:text-[40px] Syne-BB  text-[#000000]  text-[30px] mb-0"
                >About Us
                </p>
                <div className="sm:py-8 py-6">
                  <p className=" Syne-Regular text-[#222222] sm:text-[16px] text-[14px] leading-[25px]">
                    At E Retail Solutions, we empower brands to succeed on Amazon&lsquo;s, Flipkart, Meesho, Ajio ever-evolving marketplace. With a team of e-commerce experts, we specialize in maximizing sales, boosting visibility, and optimizing performance for businesses of all sizes. From listing optimization and PPC campaign management to inventory planning and customer support, we handle every detail to ensure our clients&lsquo; success.</p>
                  <p className=" Syne-Regular text-[#222222] sm:text-[16px] text-[14px] leading-[25px] sm:pt-[20px]">
                    Our approach is data-driven, proactive, and tailored to each brand&lsquo;s unique needs. Whether you&lsquo;re launching a new product or scaling an established brand, we provide the insights and strategies to achieve lasting growth. Trusted by brands worldwide, we are dedicated to helping you unlock the full potential of Amazon.</p>
                </div>
              </div>

            </div>

            <div className="col-md-6">
              <div>
                <Image
                  src="/assets/images/about-image.jpg"
                  className="w-full"
                  width={1080}
                  height={1080}
                  alt="no-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:px-20 bg-[#000000] px-[10px] sm:py-10 py-6">
        <div className="container-fluid">
          <div className="row justify-center ">
            <div className="col-md-9">
              <div className="text-center">

                <p className="sm:text-[28px] Syne-MD  text-[#fff] sm:leading-[45px] leading-[25px] text-[20px] mb-0"
                >DISCOVER THE E-RETAIL SOLUTIONS ADVANTAGE!
                </p>
                <Link href="">
                  <button type="button" className="bg-[#FF6A00] sm:mt-[20px]  Syne-BB sm:my-0 my-[8px] no-underline sm:text-[14px] text-[12px] rounded-[50px]  sm:py-[8px] py-[8px] px-[16px] sm:text-[#000] text-[#000] border-1 border-[#000000] tracking-[0.5px]">Register For Free Sample</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sm:px-20 px-[10px] sm:pt-28 sm:pb-10  pt-10 pb-10 bg-[#FCFCFF]">
        <div className="container-fluid">
          <div className="row justify-start sm:py-[20px]">
            <div className="col-md-12">
              <div className="text-center">
                <p className="sm:text-[14px] Syne-BB   text-[#000000]  text-[14px] mb-2"
                >Services
                </p>
                <h1 className="sm:text-[40px] Syne-BB mb-2 text-[#000000]  text-[30px]"
                >Our Services
                </h1>
                <p className=" Syne-Regular  text-[#000000] sm:text-[16px] text-[14px] leading-[20px]">
                  Discover services in a growing number of categories </p>
              </div>

            </div>
          </div>

          <div className="row justify-center">

            <ServiceAccordion />
          </div>

        </div>
      </section>


      <section className="sm:px-20 bg-[#000000] px-[10px] sm:py-10 py-8">
        <div className="container-fluid">
          <div className="row justify-between items-center">
            <div className="col-md-8">
              <div className="text-start">

                <p className="sm:text-[28px] Syne-MD  text-[#fff] sm:leading-[45px] leading-[25px] text-[20px] mb-0"
                >Want to know for sure if Eretail Solutions is a good fit for you?
                </p>

              </div>
            </div>
            <div className="col-md-4">
              <div className="sm:text-end sm:pt-[0px] pt-[20px]">
                <Link href="">
                  <button type="button" className="bg-[#EF893A]  Syne-BB px-[20px] py-[10px] text-[#000] text-[18px] rounded-[10px]">ASK FOR A Consultancy</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* slide */}
      <section className="relative sm:px-20 px-[10px] sm:py-20 py-10 bg-[#FCFCFF]">
        <div className="container-fluid">

        </div>
        <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          loop={true}
          className="items-center"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="row justify-between items-center">

              <div className="col-md-4">
                <div>
                  <Image
                    src="/assets/images/beBOLD.png"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
              </div>

              <div className="col-md-7">
                <div className="text-start sm:pe-[50px] sm:pt-[0px] pt-[20px]">
                  <p className="sm:text-[30px] Syne-MD  text-[#E86232] sm:leading-[35px] leading-[25px] text-[20px] mb-0"
                  >E-Retail Solutions <span className="text-[#102D7B]">is Proud to be a</span> Verified <span className="text-[#102D7B]"> Amazon Advertising Partner</span>
                  </p>
                  <div className="py-6">
                    <ul className="list-disc">
                      <li className=" Syne-Regular text-[#102D7B] sm:text-[16px] text-[14px] leading-[25px]">
                        Amazon Sponsored Product, Sponsored Brands, Sponsored Display</li>
                      <li className=" Syne-Regular text-[#102D7B] sm:text-[16px] text-[14px] leading-[25px] sm:pt-[5px]">
                        Amazon DSP Advertising to reach new audiences</li>
                      <li className=" Syne-Regular text-[#102D7B] sm:text-[16px] text-[14px] leading-[25px] sm:pt-[5px]">
                        <span className="Syne-SB sm:text-[18px]">Sustainable Growth and Profitability </span>are our top priorities for our Partners</li>
                    </ul>

                  </div>

                  <div className="flex">
                    <Link href="">
                      <button type="button" className="bg-[#FF6A00] Syne-Regular text-[14px] text-[#fff] rounded-[5px] px-[15px] sm:px-[25px] py-[8px]">Contact New seller</button>
                    </Link>
                    <Link href="">
                      <button type="button" className="bg-[#FF6A00] sm:ms-[20px] ms-[10px] px-[15px]  text-[14px] Syne-Regular text-[#fff] rounded-[5px] sm:px-[25px] py-[8px]">Contact Existing Seller</button>
                    </Link>

                  </div>
                </div>

              </div>

            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row justify-between items-center">

              <div className="col-md-4">
                <div>
                  <Image
                    src="/assets/images/beBOLD.png"
                    className="w-full"
                    width={1080}
                    height={1080}
                    alt="no-img"
                  />
                </div>
              </div>

              <div className="col-md-7">
                <div className="text-start sm:pe-[50px] sm:pt-[0px] pt-[20px]">
                  <p className="sm:text-[30px] Syne-MD  text-[#E86232] sm:leading-[35px] leading-[25px] text-[20px] mb-0"
                  >E-Retail Solutions <span className="text-[#102D7B]">is Proud to be a</span> Verified <span className="text-[#102D7B]"> Amazon Advertising Partner</span>
                  </p>
                  <div className="py-6">
                    <ul className="list-disc">
                      <li className=" Syne-Regular text-[#102D7B] sm:text-[16px] text-[14px] leading-[25px]">
                        Amazon Sponsored Product, Sponsored Brands, Sponsored Display</li>
                      <li className=" Syne-Regular text-[#102D7B] sm:text-[16px] text-[14px] leading-[25px] sm:pt-[5px]">
                        Amazon DSP Advertising to reach new audiences</li>
                      <li className=" Syne-Regular text-[#102D7B] sm:text-[16px] text-[14px] leading-[25px] sm:pt-[5px]">
                        <span className="Syne-SB sm:text-[18px]">Sustainable Growth and Profitability </span>are our top priorities for our Partners</li>
                    </ul>

                  </div>

                  <div className="flex">
                    <Link href="">
                      <button type="button" className="bg-[#FF6A00] Syne-Regular text-[14px] text-[#fff] rounded-[5px] px-[15px] sm:px-[25px] py-[8px]">Contact New seller</button>
                    </Link>
                    <Link href="">
                      <button type="button" className="bg-[#FF6A00] sm:ms-[20px] ms-[10px] px-[15px]  text-[14px] Syne-Regular text-[#fff] rounded-[5px] sm:px-[25px] py-[8px]">Contact Existing Seller</button>
                    </Link>

                  </div>
                </div>

              </div>

            </div>
          </SwiperSlide>

        </Swiper>
      </section>


      <section className="sm:px-20 bg-[#000000] px-[10px] sm:py-20 py-10">
        <div className="container-fluid">
          <div className="row justify-start">
            <div className="col-md-3">
              <div className="text-start">
                <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Who we help</p>
                <p className="sm:text-[40px] Syne-SB text-[#fff] sm:leading-[40px] leading-[30px] tracking-[1px]  text-[30px]"
                >Who Can avail our services
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-between sm:pt-10 sm:px-[0px] px-[10px]">
            <div className="col-md-3 p-0">
              <div className=" py-[20px] sm:h-[180px] rounded-[10px]">
                <Image
                  src="/assets/images/Group (3).svg"

                  width={50}
                  height={36}
                  alt="no-img"
                />
                <div className="sm:py-[20px] py-[15px] sm:pe-[50px]">
                  <p className="Syne-Regular text-[#E86232] sm:text-[18px] text-[15px]  mb-2">1. Manufacture</p>
                  <p className=" Syne-Regular text-[#fff] sm:text-[12px] text-[14px] leading-[20px] mb-0">
                    Empowering manufacturers with innovative solutions for precision, efficiency, and sustainable growth.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-0">
              <div className=" py-[20px] sm:px-[20px] sm:h-[180px] rounded-[10px] sm:pe-[50px]">
                <Image
                  src="/assets/images/Group 17715.svg"

                  width={40}
                  height={36}
                  alt="no-img"
                />
                <div className="sm:py-[20px] py-[15px]">
                  <p className="Syne-Regular text-[#E86232] sm:text-[18px] text-[15px]  mb-2">2. Brand Owner</p>
                  <p className=" Syne-Regular text-[#fff] sm:text-[12px] text-[14px] leading-[20px] mb-0">
                    Helping brand owners elevate their vision with tailored strategies and impactful solutions.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-0">
              <div className=" py-[20px] sm:px-[20px] sm:h-[180px] rounded-[10px] sm:pe-[50px]">
                <Image
                  src="/assets/images/Group 17716.svg"

                  width={40}
                  height={36}
                  alt="no-img"
                />
                <div className="sm:py-[20px] py-[15px]">
                  <p className="Syne-Regular text-[#E86232] sm:text-[18px] text-[15px]  mb-2">3. Traders</p>
                  <p className=" Syne-Regular text-[#fff] sm:text-[12px] text-[14px] leading-[20px] mb-0">
                    Supporting traders with seamless solutions to optimize operations and drive global growth.</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 p-0">
              <div className=" py-[20px] sm:px-[20px] sm:h-[180px] rounded-[10px] sm:pe-[20px]">
                <Image
                  src="/assets/images/Vector (28).svg"

                  width={30}
                  height={30}
                  alt="no-img"
                />
                <div className="sm:py-[20px] py-[15px]">
                  <p className="Syne-Regular text-[#E86232] sm:text-[18px] text-[15px]  mb-2">4. Seller with No GST</p>
                  <p className=" Syne-Regular text-[#fff] sm:text-[12px] text-[14px] leading-[20px] mb-0">
                    Enabling sellers without GST to expand their reach with simplified solutions and hassle-free processes.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="sm:py-14 py-10   bg-[#FCFCFF] overflow-hidden">
        <div className="container-fluid">
          <div className="row justify-center">
            <div className="col-md-6">
              <div className="text-center">
                <p className="sm:text-[40px] Syne-BB  text-[#000000]  text-[30px] mb-0"
                >Our Clients
                </p>
                <p className=" Syne-Regular text-[#686868] sm:text-[16px] text-[14px] leading-[20px]">
                  We collaborate with the best to deliver excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FCFCFF] overflow-hidden sm:py-[0px]">
        <div className="w-[100vw]">
          <div className="flex justify-start items-center marquee-anim sm:w-[40vw] w-[35vw]">
            <Image
              src="/assets/images/1.svg"
              width={250}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/2.svg"
              width={200}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/3.svg"
              width={200}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/4.svg"
              width={200}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/5.svg"
              width={250}
              height={150}
              alt="no-img"
              className="px-10"
            />

            <Image
              src="/assets/images/1.svg"
              width={250}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/2.svg"
              width={200}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/3.svg"
              width={200}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/4.svg"
              width={200}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/5.svg"
              width={250}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/1.svg"
              width={250}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/2.svg"
              width={200}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/3.svg"
              width={200}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/4.svg"
              width={200}
              height={150}
              alt="no-img"
              className="px-10"
            />
            <Image
              src="/assets/images/5.svg"
              width={250}
              height={150}
              alt="no-img"
              className="px-10"
            />

          </div>
        </div>
      </section>

      <section className="relative sm:px-20 px-[10px]  sm:py-28 py-14 sm:pb-14 pb-6 bg-[#FCFCFF]">
        <div className="col-lg-12 ">
          <div className="flex justify-center mb-4 ">
            <div className="col-lg-5">

              <p className="Syne-SB text-[#000] text-center sm:text-[14px] text-[15px]  mb-2">Testimonials</p>
              <p className="sm:text-[40px] Syne-BB text-[#000] text-center sm:leading-[45px] leading-[30px] tracking-[1px]  text-[30px]"
              >Hear what our amazing customers say
              </p>
            </div>
          </div>
          <div className="flex gap-4  marquee-anim ">
            <div className="col-lg-3 ">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">Thanks Eretail Solutions Team -  Excellent Work</p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">Lata Chouhan</p>
                    <p className="p-0 m-0 text-[#7B7B7B]">Pushpa Organic Root</p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>

              </div>


            </div>

            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]"> Great service And Support - Excellent account management Everything is well-organized, and the support is prompt and helpful. Great service
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">Ashish Jain	</p>
                    <p className="p-0 m-0 text-[#7B7B7B]">JMT PLASP PVT LTD.
                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">Excellent Work 👍 - I am really happy work with eRetail Solutions team. Very Good supporting team & my managers also. eRetail Solutions team always work according amazon guidelines & always resolve every issue on time
                  
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">Suhaib Ilyasi	</p>
                    <p className="p-0 m-0 text-[#7B7B7B]">P&apos;URA Shop

                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">Very Good Team eRetail Solutions Managers supportive work Always... - Very good experience having their services with Best SPN team work. Always resolve each and every issue we are facing. I am really thankful to the team work. Very Good Team eRetail Solutions Managers.

                
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">Sunil R Valaki	</p>
                    <p className="p-0 m-0 text-[#7B7B7B]">Radhe hosiery &collection


                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 ">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">Excellent Work By E-retails Solutions Team - The team did very good quality work. The team is fully supportive and the team and Managers also. They always coordinate and suggest each and every guideline per Amazon policies. Thanks, ERetail Solutions Team
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">Divine Pubication 	</p>
                    <p className="p-0 m-0 text-[#7B7B7B]">Divine Pubication </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>

              </div>


            </div>

            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">Excellent Work By E-retails Solutions Team 👍☺-I m really happy work with eRetail Solutions teams 👍☺️
                  
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">Aafrin shaikh	</p>
                    <p className="p-0 m-0 text-[#7B7B7B]">Laxoria

                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">Excellent work done by Team eRetail Solutions Thanks- Excellent work done by Team eRetail Solutions I am there very happy & satisfied with services & guidelines🙂

                
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0"> ARADHANA ENTERPRISE
                    </p>
                    <p className="p-0 m-0 text-[#7B7B7B]"> ARADHANA ENTERPRISE


                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">overall experience is great, account handled well by Pinki Patidar, i can recommend the services to -Excellent support provided by your team
                
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">Nikhil Borgaonkar </p>
                    <p className="p-0 m-0 text-[#7B7B7B]">Rosa Creation

                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]"> Excellent Work By E-retails Solutions Team 👍☺️ - Excellent Work By E-retails Solutions Team 👍☺️

                
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">Vishwajit Shriniwas Deshmukh </p>
                    <p className="p-0 m-0 text-[#7B7B7B]">FARM AND STUFF

                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">I am very happy & satisfied with their services & guidelines 🙂 👍🏽 - Eretail Solutions team handling my account from then only and I am very happy & satisfied with their services & guidelines. They are professionals & good communication skill. I am really happy work with teams support. Thanks Eretail solutions team 🙂 
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0"> SONU Kumar 	 </p>
                    <p className="p-0 m-0 text-[#7B7B7B]">Manvik Store


                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">  Good Work 👍🏽 - I am Happy Good Work from eRetail Solutions team 🙂


                
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">Heed Digital Publications
                    </p>
                    <p className="p-0 m-0 text-[#7B7B7B]">Heed Digital Publications


                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">order increasing within 5 days.


                
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">Anuj Mittal
                    </p>
                    <p className="p-0 m-0 text-[#7B7B7B]">Truvic


                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">Best SPN in India - It was great experience. This is first time I have contacted Amazon SPN and I am totally satisfied



                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">sunil sachdeva
                    </p>
                    <p className="p-0 m-0 text-[#7B7B7B]">Guru


                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]">It&apos;s a Good experience having their services & team work. Always helps to solve every issue... - I am really Happy work with eRetail Solutions such a wonderful team and Specially My managers who provide me guideline and work properly without any hassle . Thank you so much eRetail Solutions SPN and wonderful team work and efforts. Thanks My manager


              
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0"> Sanjay kapoor
                    </p>
                    <p className="p-0 m-0 text-[#7B7B7B]">SKYMAN ORTHODONTICS INC



                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="flex-1 bg-[#F2F2F2] px-4 py-8 rounded-xl h-full">
                <p className="lg:text-[1vw] sm:text-[3vw] text-[3vw] text-[#7B7B7B]"> Very Good supporting team 👍 - I m really happy work with eRetail Solutions teams


                
                </p>

                <div className="flex gap-2 pt-4">

                  <div className="col-lg-6">
                    <p className="p-0 m-0">Ansariafif - Afif
                    </p>
                    <p className="p-0 m-0 text-[#7B7B7B]">HANDICRAFT


                    </p>
                    <Image
                      src="/assets/retail/Group 17752.svg"
                      className="w-[70px]"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />

                  </div>
                </div>
              </div>
            </div>




          </div>
        </div>
        {/* <Swiper
          spaceBetween={0}
          slidesPerView={"auto"}
          loop={true}
          className="items-center"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide>
            <div className="row justify-between items-center">
              <div className="col-md-5">
                <div className="text-start">

                  <div className="sm:pt-[20px]">
                    <Image
                      src="/assets/images/girl.png"
                      className="w-full"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="text-start sm:px-[20px] sm:py-[0px] py-[30px]">
                  <div className="col-md-2 sm:py-[20px] flex sm:justify-between">
                    <Image
                      src="/assets/images/start.svg"
                      width={15}
                      height={15}
                      alt="no-img"
                    />
                    <Image
                      src="/assets/images/start.svg"
                      width={15}
                      height={15}
                      alt="no-img"
                    />
                    <Image
                      src="/assets/images/start.svg"
                      width={15}
                      height={15}
                      alt="no-img"
                    />
                    <Image
                      src="/assets/images/start.svg"
                      width={15}
                      height={15}
                      alt="no-img"
                    />
                    <Image
                      src="/assets/images/start.svg"
                      width={15}
                      height={15}
                      alt="no-img"
                    />
                  </div>
                  <p className="Syne-SB text-[#000] sm:text-[16px] text-[15px] sm:py-[0px] py-[20px] mb-0">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.&quot;</p>

                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="row justify-between items-center">
              <div className="col-md-5">
                <div className="text-start">

                  <div className="sm:pt-[20px]">
                    <Image
                      src="/assets/images/girl.png"
                      className="w-full"
                      width={1080}
                      height={1080}
                      alt="no-img"
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="text-start sm:px-[20px] sm:py-[0px] py-[30px]">
                  <div className="col-md-2 sm:py-[20px] flex sm:justify-between">
                    <Image
                      src="/assets/images/start.svg"
                      width={15}
                      height={15}
                      alt="no-img"
                    />
                    <Image
                      src="/assets/images/start.svg"
                      width={15}
                      height={15}
                      alt="no-img"
                    />
                    <Image
                      src="/assets/images/start.svg"
                      width={15}
                      height={15}
                      alt="no-img"
                    />
                    <Image
                      src="/assets/images/start.svg"
                      width={15}
                      height={15}
                      alt="no-img"
                    />
                    <Image
                      src="/assets/images/start.svg"
                      width={15}
                      height={15}
                      alt="no-img"
                    />
                  </div>
                  <p className="Syne-SB text-[#000] sm:text-[16px] text-[15px] sm:py-[0px] py-[20px] mb-0">&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.&quot;</p>

                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper> */}
      </section>

      <section className="sm:px-20 bg-[#FCFCFF] px-[10px] sm:py-10">
        <div className="container-fluid">
          <div className="row justify-between items-center">
            <div className="col-md-5">
              <div className="text-start">
                <p className="Syne-SB text-[#000] sm:text-[14px] text-[15px]  mb-2">AWARDS</p>
                <p className="sm:text-[25px] Syne-BB text-[#000] sm:leading-[30px] leading-[25px] tracking-[1px]  text-[20px]"
                >Awarded for Outstanding Excellence in E-commerce Solutions
                </p>
              </div>
            </div>
          </div>
          <div className="row sm:pt-[50px]">
            <div className="col-md-3">
              <div className="sm:pt-[0px] pt-[20px]">
                <Image
                  src="/assets/images/amazonConnect.png"
                  className="w-full"
                  width={1080}
                  height={1080}
                  alt="no-img"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="sm:pt-[0px] pt-[20px]">
                <Image
                  src="/assets/images/certify.png"
                  className="w-full"
                  width={1080}
                  height={1080}
                  alt="no-img"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="sm:pt-[0px] pt-[20px]">
                <Image
                  src="/assets/images/amazonConnect.png"
                  className="w-full"
                  width={1080}
                  height={1080}
                  alt="no-img"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="sm:pt-[0px] pt-[20px]">
                <Image
                  src="/assets/images/amazonConnect.png"
                  className="w-full"
                  width={1080}
                  height={1080}
                  alt="no-img"
                />
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
      <WhatshapIcon />

      <Footer />

    </>
  );
}
