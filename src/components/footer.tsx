import "bootstrap/dist/css/bootstrap.min.css"
import Image from "next/image";
import Link from 'next/link'

export default function Footer() {
    return (
        <>
            <footer className="bg-[#000] sm:px-20  px-[10px] pt-14 pb-[10px]">
                <div className="container-fluid">
                    <div className="row justify-between sm:pb-[30px]">
                        <div className="col-md-3">
                            <div>
                                <Image
                                    src="/assets/images/logo1.svg"
                                    width={217}
                                    height={36}
                                    alt="no-img"
                                />
                            </div>
                            <div className="pt-[10px]">
                                <p className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px]  mb-2">E-Retail Solutions is a full service global amazon and walmart agency where sustainable growth and profitability are our top priorities for our partners. Our services include by not limited to : Account Management, Brand Protection, Logistics and Operations, Advertising and DSP and create solutions.</p>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="row relative">
                                <div className="col-md-3">
                                    <div className="sm:pt-[0px] pt-[20px]">
                                        <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Amazon Services</p>
                                        <div>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular
                                                 text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Amazon Account Management
                                                </span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Amazon Advertising</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Amazon Advertising</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Amazon Vendor Central Management</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Amazon SEO</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Amazon A+ Content & Design</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Amazon Listing Optimization</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Amazon Vendor Recovery Services</span>
                                            </Link>

                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Amazon Seller Analytics</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Amazon FBA</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="sm:pt-[0px] pt-[20px]">
                                        <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Flipkart Services in India</p>
                                        <div>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Flipkart Lisiting Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Flipkart Faq</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Flipkart Seller Registration</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Flipkart Boost Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Flipkart Seller Registration</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Flipkart Reconciliation</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Flipkart Advertising Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Flipkart catalogue Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Flipkart Account Management Services</span>
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                                <div className="col-md-3">
                                    <div className="sm:pt-[0px] pt-[20px]">
                                        <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Jiomart Services in India</p>
                                        <div>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Jiomart Lisiting Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Jiomart Faq</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Jiomart Seller Registration</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Jiomart Boost Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Jiomart Reconciliation</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Jiomart Advertising Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Jiomart catalogue Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Jiomart Account Management Services</span>
                                            </Link>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="sm:pt-[0px] pt-[20px]">
                                        <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Ebay Services in India</p>
                                        <div>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Ebay Lisiting Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Ebay Faq</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Ebay Seller Registration</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Ebay Boost Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Ebay Reconciliation</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Ebay Advertising Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Ebay catalogue Services</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Ebay Account Management Services</span>
                                            </Link>

                                        </div>

                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                    <div className="row justify-between sm:pb-[30px]">

                        <div className="row relative">
                            <div className="col-md-2">
                                <div className="sm:pt-[0px] pt-[20px]">
                                    <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Meesho Services in India</p>
                                    <div>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular
                                                 text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Meesho Listing Services
                                            </span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Meesho Faq</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Meesho Seller Registration</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Meesho Boost Services</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Meesho Reconciliation</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Meesho advertising Services</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Meesho Catalogue Services</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Meesho account management Services</span>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="sm:pt-[0px] pt-[20px]">
                                    <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Blinkit Services in India</p>
                                    <div>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular
                                                 text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Blinkit Listing Services
                                            </span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Blinkit Faq</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Blinkit Seller Registration</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Blinkit Boost Services</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Blinkit Reconciliation</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Blinkit advertising Services</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Blinkit Catalogue Services</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Blinkit account management Services</span>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="sm:pt-[0px] pt-[20px]">
                                    <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Walmart Services</p>
                                    <div>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Walmart Faq</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Walmart Seller Registration</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Walmart Boost Services</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Walmart Reconciliation</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Walmart advertising Services</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Walmart Catalogue Services</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Walmart account management Services</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Walmart Full Service agency</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Walmart Advertising</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Walmart SEO</span>
                                        </Link>
                                    </div>
                                </div>
                                {/* <div className="sm:pt-[30px] pt-[20px]">
                                        <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Resources</p>
                                        <div>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Case Studies</span>
                                            </Link>
                                            <Link href="" className="no-underline">
                                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Blog</span>
                                            </Link>

                                        </div>
                                    </div> */}
                            </div>
                            <div className="col-md-2">
                                <div className="sm:pt-[0px] pt-[20px]">
                                    <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Design & Development</p>
                                    <div>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Website Design</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Mobile App Development</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Website Development</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Ecommerce Solution</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Graphic Design</span>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="sm:pt-[0px] pt-[20px]">
                                    <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Digital Marketing</p>
                                    <div>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">SEO Services</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">PPC</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Social Media Marketing</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Lead Generation</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Facebiik Marketing</span>
                                        </Link>

                                    </div>

                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="sm:pt-[0px] pt-[20px]">
                                    <p className="Syne-Regular text-[#FF6A00] sm:text-[14px] text-[15px]  mb-2">Company</p>
                                    <div>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Our team</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Careers</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Amazon Agency Reviews</span>
                                        </Link>
                                        <Link href="" className="no-underline">
                                            <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[14px] block  mb-2">Privacy Policy</span>
                                        </Link>

                                    </div>

                                </div>
                            </div>



                        </div>

                    </div>


                    <div className="text-end w-auto ms-auto  sm:right-0 sm:bottom-0 sm:py-[0px] py-[30px] mb-4 ">
                        <Image
                            src="/assets/images/footer-icon.svg"
                            className="ms-auto"
                            width={360}
                            height={1080}
                            alt="no-img"
                        />
                    </div>



                    <div className="row border-t-[1px] justify-between sm:pt-[10px] pt-[5px] sm:px-[0px] px-[10px]">
                        <div className="col-md-6 ps-0">
                            <div className="sm:pb-[20px]  sm:pt-[8px] pt-[10px]">
                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[16px] block  mb-2">2024-25 e-retailsolutions. All right reserved.</span>
                            </div>
                        </div>
                        <div className="col-md-6 pe-0">
                            <div className="sm:pb-[20px] pb-[15px] sm:pt-[8px] sm:text-end">
                                <span className="Syne-Regular text-[#E6E6E6] sm:text-[14px] text-[16px] block  mb-2">Design & Developed by Scriptstudio.io</span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
