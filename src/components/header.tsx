"use client";
import Image from "next/image";
import "../../public/assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { useState, useEffect } from "react";
export default function Header() {
  const [width, setWidth] = useState(560);
  const [menu, setMenu] = useState(false);
  const updateDimensions = () => {
    console.log("call update dem")
    setWidth(window.innerWidth);
    console.log("width,", window.innerWidth)
  };

  useEffect(() => {
    // Only runs on the client side

    if (typeof window !== "undefined") {
      console.log("called")
      setWidth(window.innerWidth);
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  const menuToggle = () => {
    setMenu(!menu);
  };
  return (
    <>
      <header className="sm:px-20 bg-[#FCFCFF] px-[10px] py-[10px]">
        <div className="container-fluid ">
          <div className="row flex justify-center">
            <div className="col-md-12">
              <div className="py-[16px]  bg-[#FCFCFF]  sm:py-[12px]">
                <div className="row items-center justify-between">
                  <div className="col-md-3">
                    <div className="row">
                      <div className="col-md-7 col-6">
                        <div className="">
                          <Link href="/" className="w-full">
                            <Image
                              src="/assets/images/logo.svg"

                              width={217}
                              height={36}
                              alt="no-img"
                            />
                          </Link>
                          <div className="sm:hidden block absolute right-[20px] top-[28px]" onClick={menuToggle} >
                            {menu ? <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M18 6l-12 12" stroke="#000" /><path d="M6 6l12 12" stroke="#000" /></svg> :
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-menu"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8l16 0" /><path d="M4 16l16 0" /></svg>}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div
                      className={
                        width <= 500
                          ? menu
                            ? "row justify-start items-center !block sm:absolute  bg-[#000000d1] absolute left-[0px] px-[30px] py-[30px] h-[400px] w-100 top-[80px] sm:top-[0px] z-[5] rounded-br-[10px]  sm:relative sm:px-0 sm:py-0 sm:bg-transparent "
                            : "row justify-start items-center sm:absolute !block bg-[#fff] fixed left-[-100%] w-100 top-[0px] sm:top-[0px] rounded-br-[10px]py-[10px] sm:relative sm:px-0 sm:py-0 sm:bg-transparent"
                          : "row justify-between items-center sm:absolute  bg-[#fff] fixed left-[0px] top-[0px] w-100 sm:top-[0px] rounded-br-[10px]  py-[10px] sm:relative sm:px-0 sm:py-0 sm:bg-transparent"
                      }
                    >
                      <div className="col-md-6">
                        <div className="nav-menu sm:flex justify-between items-center">
                          <span>
                            <Link
                              href="/"
                              className="Syne-Regular font-medium no-underline sm:text-[16px] text-[16px] sm:my-0 my-[20px] text-[#fff] sm:text-[#000000] block"
                            >
                              Home
                            </Link>
                          </span>
                          <span>
                            <Link
                              href="/about"
                              className="Syne-Regular no-underline font-medium sm:text-[16px] text-[16px] sm:my-0 my-[20px] text-[#fff]  sm:text-[#000000] block"
                            >
                              About Us
                            </Link>
                          </span>
                          <span className="menu-list">
                            <Link
                              href=""
                              className="Syne-Regular items-center font-medium sm:text-[16px] no-underline sm:my-0 my-[20px] sm:text-[12px] text-[16px] text-[#fff]  sm:text-[#000000] block"
                            >
                              Services
                            </Link>
                            <div className="menu-item absolute z-[10]  w-[300px] sm:top-[10px] sm:py-[25px]">
                            <ul className="rounded-[5px] max-w-md  bg-[#fff] border-1 border-[#A2A2A2] px-4 py-3">
                              <li className="sm:pt-[0px]">
                                <Link
                                  href="/MarketplaceRegistration"
                                  className="Syne-MD no-underline font-medium sm:text-[16px] text-[16px]  text-[#000000]"
                                >
                                  Marketplace Registration
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/productListingCataloguing"
                                  className="Syne-MD no-underline sm:text-[14px] text-[16px]  text-[#000000]"
                                >
                                  Product Listing & Cataloguing.
                                </Link>
                              </li>

                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/BrandStoreCreationOptimization"
                                  className="Syne-MD no-underline sm:text-[14px] text-[15px]  text-[#000000]"
                                >
                                  Brand Store Creation & Optimization
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/MarketplaceCompleteAccountManagementServices"
                                  className="Syne-MD no-underline sm:text-[14px] text-[15px]  text-[#000000]"
                                >
                                  Marketplace Complete Account Management Services
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/AmazonFlipkartAccountReinstatementServices"
                                  className="Syne-MD no-underline sm:text-[14px] text-[15px]  text-[#000000]"
                                >
                                  Amazon/Flipkart Account Reinstatement Services
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/AdvertisementManagement"
                                  className="Syne-MD no-underline text-[14px]  text-[#000000]"
                                >
                                  Advertisement PPC Management
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/SellerCentralTrainingCertification"
                                  className="Syne-MD no-underline text-[14px]  text-[#000000]"
                                >
                                  Seller Central Training & Certification
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/WarehouseFulfilmentServices"
                                  className="Syne-MD no-underline text-[14px]  text-[#000000]"
                                >Warehouse Fulfilment (FBA Prep.) Services
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/AccountingCompliance"
                                  className="Syne-MD no-underline text-[14px]  text-[#000000]"
                                >Accounting & Compliance
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/ProductPhotoshootEditiingVideoGraphic"
                                  className="Syne-MD no-underline text-[14px]  text-[#000000]"
                                >Product Photoshoot, Editiing, Video, Graphic
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/CustomersReturnRefundManagement"
                                  className="Syne-MD no-underline text-[14px]  text-[#000000]"
                                >Customers Return & Refund Management
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/CustomerServiceFeedbackManagement"
                                  className="Syne-MD no-underline text-[14px]  text-[#000000]"
                                >Customer Service & Feedback Management
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/AnalyticalBusinessInsight"
                                  className="Syne-MD no-underline text-[14px]  text-[#000000]"
                                >Analytical & Business Insight
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/BrandProtectionManagement"
                                  className="Syne-MD no-underline text-[14px]  text-[#000000]"
                                >Brand Protection Management
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/ProductSellerReview"
                                  className="Syne-MD no-underline text-[14px]  text-[#000000]"
                                >Product & Seller Review
                                </Link>
                              </li>
                              <li className="sm:pt-[10px]">
                                <Link
                                  href="/EcommerceExportthroughGlobalSelling"
                                  className="Syne-MD no-underline text-[14px]  text-[#000000]"
                                >Ecommerce Export through Global Selling
                                </Link>
                              </li>
                            </ul>
                            </div>
                         
                          </span>
                          <span>
                            <Link
                              href="/contact"
                              className="Syne-Regular no-underline font-medium sm:text-[16px] text-[16px] sm:my-0 my-[20px] text-[#fff]   sm:text-[#000000] block"
                            >
                              Contact us
                            </Link>
                          </span>

                        </div>
                      </div>
                      <div className="col-md-3 pe-0">
                        <div className="text-end">
                          <Link
                            href=""
                            className="no-underline flex sm:justify-end"
                          >
                            <button
                              type="button"
                              className="flex sm:bg-[#000] bg-[#fff]  items-center sm:Syne-Regular Syne-SB sm:my-0 my-[8px] no-underline text-[12px] rounded-[8px]  sm:py-[6px] py-[8px] px-[16px] sm:text-[#fff] text-[#000] border-1 border-[#000000] tracking-[0.5px]"
                            >
                              <span className="pe-[5px]">
                                <Image
                                  src="/assets/images/phone.svg"
                                  className="sm:block hidden"
                                  width={12}
                                  height={36}
                                  alt="no-img"
                                />
                                <Image
                                  src="/assets/images/call.svg"
                                  className="sm:hidden block"
                                  width={20}
                                  height={36}
                                  alt="no-img"
                                />
                              </span>
                              +91 8826393222

                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}


