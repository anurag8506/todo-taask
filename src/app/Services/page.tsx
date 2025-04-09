'use client'

import Header from '../../components/header';
import Footer from '../../components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import BlogCard from '../../components/blog'

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
            blogDescription: "An Marketplace Product Listing Service is designed to help sellers create optimized, high-converting product listings that drive visibility, traffic, and sales. This service typically includes comprehensive support with each element of the listing to ensure it meets Amazon&lsquo;s best practices and stands out in a competitive marketplace...",
            blogLink: "Know More",
            blogImage: "/assets/images/blog1.jpg"
        },
        {
            blogTitle: "Brand Store Creation & Optimization",
            blogDescription: "An Amazon Brand Store Creation & Optimization service helps sellers create a dedicated, visually appealing brand storefront on Amazon, where customers can explore the entire product catalog in one place. This service is especially useful for Amazon Brand Registered sellers, as it offers them an exclusive space to build brand awareness, drive engagement, and increase sales...",
            blogLink: "Know More",
            blogImage: "/assets/images/blog2.jpg"
        },
        {
            blogTitle: "Marketplace Complete Account Management Services",
            blogDescription: "An Amazon Complete Account Management Service is an end-to-end solution designed to handle all aspects of an Amazon seller’s account, enabling them to focus on scaling their business without dealing with the complexities of the platform. This service encompasses everything from account setup and product listing optimization to inventory management, advertising, and customer service...",
            blogLink: "Know More",
            blogImage: "/assets/images/blog3.jpg"
        },
        {
            blogTitle: "Amazon/Flipkart Account Reinstatement Services",
            blogDescription: "Amazon Account Reinstatement Services help sellers whose accounts have been suspended, deactivated, or restricted to regain access to the platform. Account suspensions can be stressful and disruptive for businesses, so these services are designed to efficiently identify issues, communicate with Amazon, and implement a plan of action to restore the account...",
            blogLink: "Know More",
            blogImage: "/assets/images/blog4.jpg"
        },
        {
            blogTitle: "Advertisement PPC Management",
            blogDescription: "Amazon Advertisement Optimization Services are tailored solutions designed to help sellers refine their advertising strategies on Amazon, boost campaign efficiency, and achieve better sales outcomes. These services focus on enhancing the performance of existing ad campaigns to ensure maximum ROI while minimizing unnecessary spending...",
            blogLink: "Know More",
            blogImage: "/assets/images/blog5.jpg"
        },
        {
            blogTitle: "Advertisement PPC Management",
            blogDescription: "Amazon Advertisement Optimization Services are tailored solutions designed to help sellers refine their advertising strategies on Amazon, boost campaign efficiency, and achieve better sales outcomes. These services focus on enhancing the performance of existing ad campaigns to ensure maximum ROI while minimizing unnecessary spending.",
            blogLink: "Know More",
            blogImage: "/assets/images/blog6.jpg"
        },
        {
            blogTitle: "Seller Central Training & Certification",
            blogDescription: "To run the business smoothly, the business owner should have understanding about the business and few technical parts which is important to understand the business growth and planning. We trained sellers on how to effectively use the Marketplace Seller Central Platform effectively.",
            blogLink: "Know More",
            blogImage: "/assets/images/blog7.jpg"
        },
        {
            blogTitle: "Warehouse Fulfilment (FBA Prep.) Services",
            blogDescription: "Amazon Warehouse Fulfilment Services—often referred to as FBA (Fulfilment by Amazon) Prep Services—are tailored to help sellers ensure their inventory meets Amazon's strict requirements for storage and shipping in fulfilment canters. These services simplify the logistics process, save time, and prevent penalties for non-compliance.",
            blogLink: "Know More",
            blogImage: "/assets/images/blog8.jpg"
        },
        {
            blogTitle: "Accounting & Compliance",
            blogDescription: "Amazon Accounting and Compliance Services are designed to help sellers manage their finances, adhere to tax regulations, and comply with Amazon's policies. These services reduce administrative burdens, minimize errors, and ensure legal and operational compliance in selling on Amazon.",
            blogLink: "Know More",
            blogImage: "/assets/images/blog9.jpg"
        },
        {
            blogTitle: "Product Photoshoot, Editiing, Video, Graphic",
            blogDescription: "Amazon Product Photoshoot, Editing, Video, and Graphic Design Services are essential for sellers who want to create visually appealing and high-converting product listings. These services focus on adhering to Amazon’s content guidelines while highlighting the best features of your product to boost sales.",
            blogLink: "Know More",
            blogImage: "/assets/images/blog10.jpg"
        },
        {
            blogTitle: "Customers Return & Refund Management",
            blogDescription: "Amazon Customer Return & Refund Management Services help sellers efficiently handle returns and refunds while ensuring compliance with Amazon policies. These services streamline the process, minimize losses, and maintain customer satisfaction without overburdening the seller.",
            blogLink: "Know More",
            blogImage: "/assets/images/blog11.jpg"
        },
        {
            blogTitle: "Customer Service & Feedback Management",
            blogDescription: "Amazon Customer Service & Feedback Management Services are essential tools for sellers to enhance customer satisfaction, maintain a strong reputation, and optimize account health. These services focus on managing buyer interactions, addressing complaints, and improving seller ratings, which can lead to better sales performance and brand trust.",
            blogLink: "Know More",
            blogImage: "/assets/images/blog12.jpg"
        },
        {
            blogTitle: "Analytical & Business Insight",
            blogDescription: "Amazon Analytical & Business Insight Services are designed to help sellers harness data to make informed decisions, optimize performance, and maximize profitability. These services focus on analyzing sales trends, customer behavior, and operational metrics to offer actionable insights that drive business growth.",
            blogLink: "Know More",
            blogImage: "/assets/images/blog13.jpg"
        },
        {
            blogTitle: "Brand Protection Management",
            blogDescription: "Amazon Brand Protection Management Services help sellers safeguard their intellectual property, maintain brand integrity, and prevent counterfeit or unauthorized use of their products on the platform. These services leverage tools and strategies to protect against infringements, maintain customer trust, and ensure compliance with Amazon’s policies.",
            blogLink: "Know More",
            blogImage: "/assets/images/blog14.jpg"
        },
        {
            blogTitle: "Product & Seller Review",
            blogDescription: "Amazon Product & Seller Review Management Services help sellers improve their reputation, manage feedback effectively, and ensure that reviews align with Amazon's policies. These services focus on gathering valuable customer feedback, monitoring reviews, and ensuring that sellers' feedback profiles remain positive, which can lead to higher trust and sales.",
            blogLink: "Know More",
            blogImage: "/assets/images/blog15.jpg"
        },
        {
            blogTitle: "Ecommerce Export through Global Selling",
            blogDescription: "Amazon Global Selling Services allow sellers to expand their businesses internationally by reaching customers in various countries and regions through Amazon’s marketplace network. These services offer a range of tools and support to help sellers navigate the complexities of international trade, customs, language barriers, and market preferences.",
            blogLink: "Know More",
            blogImage: "/assets/images/blog16.jpg"
        },
    ]
    return (
        <>
            <Header />

            <section className="sm:px-20 px-[10px]  sm:py-20 sm:pb-8  py-6 bg-[#FCFCFF]">
                <div className="container-fluid">
                    <div className="row justify-center">
                        <div className="col-md-10">
                            <div className="text-center">
                                <h1 className="sm:text-[14px] Syne-BB  text-[#000000]  text-[14px] mb-0"
                                >Services
                                </h1>
                                <h1 className="sm:text-[40px] Syne-BB  text-[#000000]  text-[30px]"
                                >Our Services
                                </h1>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
            <section className="sm:px-20 px-[10px] sm:pb-10 bg-[#FCFCFF]">
                <div className="container-fluid">
                    <div className="row justify-start">
                        {
                            blogsDeatils.map((blog_details, index) => (
                                <div className="col-md-4 sm:pt-[20px]" key={index}>
                                    <BlogCard blogDetails={blog_details} />
                                </div>
                            ))
                        }
                    
                    </div>

                </div>
            </section>


            <Footer />

        </>
    );
}
