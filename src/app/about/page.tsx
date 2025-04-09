'use client'
import React, { useState } from "react"

import Image from "next/image";
import Header from '../../components/header';
import Footer from '../../components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import FitBlogCard from '../../components/countryblog'



export default function About() {

    const [selectedCountryModal, SetSelectedCountryModal] = useState(false);
    const [selectedCountry, SetSelectedCountry] = useState("INDIA");
    const countryData = [
        { name: "USA", code: "USA" },
        { name: "UK", code: "UK" },
        { name: "EUROPE", code: "EUROPE" },
        { name: "AUS", code: "AUS" },
        { name: "SINGAPORE", code: "SINGAPORES" },
        { name: "UAE", code: "UAE" },
        { name: "INDIA", code: "INDIA" },
    ];
    const fitblogsDeatils = [
        {
            blogTitle: "Flipkart",
            blogHead: "Key Features:",
            blogDescriptionList: ["Easy Product Listing & Management", "Logistics & Fulfillment Support"],
            blogImage: "/assets/images/flipkart.svg",
            CountryLocated: ["INDIA"]
        },
        {
            blogTitle: "Myntra",
            blogHead: "Key Features:",
            blogDescriptionList: ["Effortless Onboarding & Product Management" , "Widespread Logistics & Fulfillment Support"],
            blogImage: "/assets/images/myntra.svg",
            CountryLocated: ["INDIA"]
        },
        {
            blogTitle: "Amazon",
            blogHead: "Key Features:",
            blogDescriptionList: ["Global Marketplace Access", "Fulfillment by Amazon (FBA)" , "Dedicated Seller Support"],
            blogImage: "/assets/images/amazon.svg",
            CountryLocated:["INDIA","USA" , "UK" ,"AUS","UAE","SINGAPORE" ,"EUROPE"]
        },
        {
            blogTitle: "Blinkit",
            blogHead: "Key Features:",
            blogDescriptionList: ["Quick Onboarding & Product Management", "Fast Delivery Network" , "Wider Customer Reach" ,"Real-Time Inventory Management"],
            blogImage: "/assets/images/blinkit.svg",
            CountryLocated: ["INDIA"]
        }, 
        {
            blogTitle: "Meesho",
            blogHead: "Key Features:",
            blogDescriptionList: ["Zero Commission Selling", "Wide Customer Base" , "Marketing & Promotions" ,"Payment Assurance"],
            blogImage: "/assets/images/meesho.svg",
            CountryLocated: ["INDIA"]
        }, 
        {
            blogTitle: "Snapdeal",
            blogHead: "Key Features:",
            blogDescriptionList: ["Simple Onboarding & Product Management", "Wide Customer Reach" , "Efficient Logistics Support" ,"Seller Support & Training"],
            blogImage: "/assets/images/Snapdeal.svg",
            CountryLocated: ["INDIA"]
        }, 
        {
            blogTitle: "Swiggy Instamart",
            blogHead: "Key Features:",
            blogDescriptionList: ["Fast Onboarding Process", "Hyperlocal Delivery Network" , "Wider Customer Reach" ,"Efficient Inventory Management"],
            blogImage: "/assets/images/SwiggyInstamart.svg",
            CountryLocated: ["INDIA"]
        }, 
        {
            blogTitle: "AJIO",
            blogHead: "Key Features:",
            blogDescriptionList: ["Seamless Onboarding Process", "Extensive Customer Base" , "Curated Fashion Marketplace" ,"Logistics & Delivery Support"],
            blogImage: "/assets/images/AJIO.svg",
            CountryLocated: ["USA" , "UK" ,"AUS","UAE","SINGAPORE" ,"EUROPE"]
        }, 
        {
            blogTitle: "Noon",
            blogHead: "Key Features:",
            blogDescriptionList: ["Simple Onboarding Process", "Access to a Growing Customer Base" , "Wide Product Categories"],
            blogImage: "/assets/images/Noon.svg",
             CountryLocated: ["USA" , "UK" ,"AUS","UAE","SINGAPORE" ,"EUROPE"]
        }, 
        {
            blogTitle: "Namshi",
            blogHead: "Key Features:",
            blogDescriptionList: ["Fashion-Focused Marketplace", "Access to a Diverse Customer Base" , "Marketing & Promotions"],
            blogImage: "/assets/images/Namshi.svg",
             CountryLocated: ["USA" , "UK" ,"AUS","UAE","SINGAPORE" ,"EUROPE"]
        }, 
        {
            blogTitle: "AliExpress",
            blogHead: "Key Features:",
            blogDescriptionList: ["Global Reach", "Easy Onboarding & Product Listing" , "Diverse Product Categories" ,"Marketing & Promotions"],
            blogImage: "/assets/images/AliExpress.svg",
             CountryLocated: ["USA" , "UK" ,"AUS","UAE","SINGAPORE" ,"EUROPE"]
        }, 
        {
            blogTitle: "Shopify",
            blogHead: "Key Features:",
            blogDescriptionList: ["Easy Store Setup & Customization", "Multi-Channel Selling" , "Mobile-Friendly Design" ,"Marketing & SEO Tools" , "Shipping & Fulfillment Solutions"],
            blogImage: "/assets/images/Shopify.svg",
             CountryLocated: ["USA" , "UK" ,"AUS","UAE","SINGAPORE" ,"EUROPE"]
        }, 
        {
            blogTitle: "Etsy",
            blogHead: "Key Features:",
            blogDescriptionList: ["Simple Store Setup & Customization", "Global Customer Reach" , "Integrated Payment Processing"],
            blogImage: "/assets/images/Etsy.svg",
             CountryLocated: ["USA" , "UK" ,"AUS","UAE","SINGAPORE" ,"EUROPE"]
        }, 
        {
            blogTitle: "Lazada",
            blogHead: "Key Features:",
            blogDescriptionList: ["Easy Onboarding & Store Setup", "Multi-Channel Selling" , "Payment Gateway Integration" ,"Marketing & Promotions"],
            blogImage: "/assets/images/Lazada.svg",
             CountryLocated: ["USA" , "UK" ,"AUS","UAE","SINGAPORE" ,"EUROPE"]
        }, 
        {
            blogTitle: "SharafDG",
            blogHead: "Key Features:",
            blogDescriptionList: ["  Simple Seller Onboarding", "Secure Payment Gateway" , "Integrated Logistics & Delivery" ,"Customer Reviews & Ratings" , "Seller Support & Training"],
            blogImage: "/assets/images/SharafDG.svg",
             CountryLocated: ["USA" , "UK" ,"AUS","UAE","SINGAPORE" ,"EUROPE"]
        }, 
        {
            blogTitle: "Ebay",
            blogHead: "Key Features:",
            blogDescriptionList: ["Global Marketplace Access", "Easy Listing & Store Setu" , "Auction and Fixed-Price Sales" ,"Secure Payment Solutions" , "Global Shipping Program"],
            blogImage: "/assets/images/Ebay.svg",
             CountryLocated: ["USA" , "UK" ,"AUS","UAE","SINGAPORE" ,"EUROPE"]
        }, 
        {
            blogTitle: "Walmart",
            blogHead: "Key Features:",
            blogDescriptionList: ["Massive Customer Reach", "Easy Integration & Store Setup" , "Secure Payment Solutions" ,"Marketing & Promotions"],
            blogImage: "/assets/images/Walmart.svg",
             CountryLocated: ["USA" , "UK" ,"AUS","UAE","SINGAPORE" ,"EUROPE"]
        }, 
    ]

    return (
        <>
            <Header />


            <section className="sm:px-20 px-[10px]  sm:py-28 sm:pb-28 pb-6 py-6 bg-[#FCFCFF]">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="">
                                <h1 className="sm:text-[45px]  sm:leading-[70px] text-[#000000] ff-syne font-[600] text-[30px] leading-[30px]"
                                >About Us
                                </h1>
                            </div>
                            <div className="col-md-10 sm:pt-[15px]">
                                <p className="sm:text-[16px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                                >At E Retail Solutions, we empower brands to succeed on Amazon &apos;s, Flipkart, Meesho, Ajio ever-evolving marketplace. With a team of e-commerce experts, we specialize in maximizing sales, boosting visibility, and optimizing performance for businesses of all sizes. From listing optimization and PPC campaign management to inventory planning and customer support, we handle every detail to ensure our clients &lsquo; success.
                                </p>
                                <p className="sm:text-[16px] sm:leading-[25px]  text-[#565656] ff-syne font-[400] text-[14px]"
                                >
                                    Our approach is data-driven, proactive, and tailored to each brand &apos;s unique needs. Whether you&lsquo;re launching a new product or scaling an established brand, we provide the insights and strategies to achieve lasting growth. Trusted by brands worldwide, we are dedicated to helping you unlock the full potential of Amazon.</p>

                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <section className="bg-[#FCFCFF] sm:pb-6 pb-6 sm:px-20 px-6">
                <div className="container-fluid">
                    <div className="row justify-center">
                        <div className="col-md-10">
                            <div className="text-center">
                                <p className="sm:text-[40px]  text-[#000000] ff-syne font-[600] text-[20px] mb-0"
                                >Ecommerce fit your business
                                </p>
                            </div>

                        </div>

                        <div className="col-md-12">
                            <div className="text-center flex justify-center items-center">
                                <div>
                                    <p className="sm:text-[18px] text-[15px] mb-0  text-[#000000] ff-syne font-[600]"
                                    >Countries:
                                    </p>
                                </div>

                                <div className="relative sm:ms-6 ms-2 sm:py-[5px] py-[10px]">
                                    <div
                                        className="border-[#000] h-[30px] border-[1.5px] rounded-[5px] sm:w-[130px] w-[150px]"
                                        onClick={() => {
                                            SetSelectedCountryModal(
                                                !selectedCountryModal
                                            );
                                        }}
                                    >

                                        <span className="Syne-BB uppercase text-start cursor-pointer text-[12px] sm:pt-[6px] sm:py-[2px] py-[6px] pb-[5px] px-[10px] block text-[#000] tracking-[.5px]">
                                            {selectedCountry}
                                        </span>
                                        <div className="z-[1] absolute sm:top-[14px] top-[18px] right-[10px]">
                                            <Image
                                                src="/assets/images/aboutDrop.svg"

                                                width={8}
                                                height={10}
                                                alt="no-img"
                                            />
                                        </div>
                                    </div>

                                    <div
                                        className={
                                            selectedCountryModal
                                                ? "absolute border-[1px] border-[#000] sm:top-[40px] top-[45px] rounded-[10px] bg-[#fff] w-full p-[10px] z-[3]"
                                                : "hidden"
                                        }
                                    >
                                        <div className="overflow-x-hidden text-start">
                                            {countryData.map((countrydata, index) => {
                                                return (
                                                    <p
                                                        onClick={() => {

                                                            SetSelectedCountry(countrydata.name);
                                                            SetSelectedCountryModal(
                                                                !selectedCountryModal
                                                            );
                                                        }}
                                                        className="Syne-SB py-[1px] text-[12px] cursor-pointer w-full py-[7px] px-[10px] block text-[#000] tracking-[.5px] mb-[0px]"
                                                        key={index}
                                                    >
                                                        {countrydata.name}
                                                    </p>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                    <div className="row justify-center sm:pt-[30px] sm:pb-[30px] pb-[30px] pt-[10px]">
                        <div className="col-md-10">
                            <div className="row">
                                {
                                    fitblogsDeatils.map((fitblog_details, index) => (
                                            <FitBlogCard fitblogDetails={fitblog_details} selectedCountry={selectedCountry} key={index}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            <section className="sm:px-20 px-[10px]  sm:py-28 sm:pb-28 pb-6 py-6 bg-[#FCFCFF]">
                <div className="container-fluid">
                    <div className="row justify-between">
                        <div className="col-md-5">
                            <div className="">
                                <p className="sm:text-[35px]  sm:leading-[40px] text-[#000000] Syne-SB text-[25px] leading-[25px]"
                                >Partner with Us for Powerful, Results-Driven Marketing Campaigns
                                </p>
                            </div>

                            <div>
                                <Image
                                    src="/assets/images/scanner.png"
                                    width={180}
                                    height={216}
                                    alt="no-img"
                                />
                            </div>

                        </div>
                        <div className="col-md-5">
                            <div className="sm:pt-[0px] pt-[20px]">
                                <Image
                                    src="/assets/images/scan.jpg"
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


            <Footer />

        </>
    );
}
