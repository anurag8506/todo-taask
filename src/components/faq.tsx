
// components/ServiceAccordion.tsx
"use client";
import { useState } from 'react';

// Define an interface for the service items
interface ServiceItem {
  id: number;
  title: string;
  content: string;
  hasKnowMore?: boolean;
}

const ServiceAccordion = () => {
  const [openId, setOpenId] = useState<number | null>(0); // Default to first item open

  const toggleAccordion = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "Marketplace Registration",
      content: "Seller Account Registration Service assists new sellers in setting up a fully compliant and optimized Amazon seller account. This service is especially valuable for businesses new to the platform, as it ensures all steps are handled professionally, avoiding potential pitfalls that could lead to account suspension or delays.",
      hasKnowMore: true
    },
    {
      id: 2,
      title: "Product Listing & Cataloguing",
      content: "An Marketplace Product Listing Service is designed to help sellers create optimized, high-converting product listings that drive visibility, traffic, and sales. This service typically includes comprehensive support with each element of the listing to ensure it meets Amazon's best practices and stands out in a competitive",
      hasKnowMore: true
    },
    {
      id: 3,
      title: "Brand Store Creation & Optimization",
      content: "An Amazon Brand Store Creation & Optimization service helps sellers create a dedicated, visually appealing brand storefront on Amazon, where customers can explore the entire product catalog in one place. This service is especially useful for Amazon Brand Registered sellers, as it offers them an exclusive space to build brand awareness, drive"
    },
    {
      id: 4,
      title: "Marketplace Complete Account Management Services",
      content: "An Amazon Brand Store Creation & Optimization service helps sellers create a dedicated, visually appealing brand storefront on Amazon, where customers can explore the entire product catalog in one place. This service is especially useful for Amazon Brand Registered sellers, as it offers them an exclusive space to build brand awareness, drive"
    },
    {
      id: 5,
      title: "Amazon/Flipkart Account Reinstatement Services",
      content: "An Amazon Complete Account Management Service is an end-to-end solution designed to handle all aspects of an Amazon seller's account, enabling them to focus on scaling their business without dealing with the complexities of the platform. This service encompasses everything from account setup and product listing",
      hasKnowMore: true
    },
    {
      id: 6,
      title: "Advertisement PPC Management",
      content: "An Amazon Complete Account Management Service is an end-to-end solution designed to handle all aspects of an Amazon seller's account, enabling them to focus on scaling their business without dealing with the complexities of the platform. This service encompasses everything from account setup and product listing"
    },
    {
      id: 7,
      title: "Seller Central Training & Certification",
      content: "To run the business smoothly, the business owner should have understanding about the business and few technical parts which is important to understand the business growth and planning. We trained sellers on how to effectively use the Marketplace Seller Central Platform effectively."
    },
    {
      id: 8,
      title: "Warehouse Fulfilment (FBA Prep.) Services",
      content: "Amazon Warehouse Fulfilment Services—often referred to as FBA (Fulfilment by Amazon) Prep Services—are tailored to help sellers ensure their inventory meets Amazon's strict requirements for storage and shipping in fulfilment canters. These services simplify the logistics process, save time, and prevent penalties for non-compliance."
    },
    {
      id: 9,
      title: "Accounting & Compliance",
      content: "Amazon Accounting and Compliance Services are designed to help sellers manage their finances, adhere to tax regulations, and comply with Amazon's policies. These services reduce administrative burdens, minimize errors, and ensure legal and operational compliance in selling on Amazon."
    },
    {
      id: 10,
      title: "Product Photoshoot, Editing, Video, Graphic",
      content: "Amazon Product Photoshoot, Editing, Video, and Graphic Design Services are essential for sellers who want to create visually appealing and high-converting product listings. These services focus on adhering to Amazon's content guidelines while highlighting the best features of your product to boost sales."
    },
    {
      id: 11,
      title: "Customer Return & Refund Management",
      content: "Our Customer Return & Refund Management Service handles the entire returns process efficiently, from initial return requests to processing refunds and managing returned inventory. This service aims to maintain positive customer experiences while protecting sellers from fraud and minimizing financial impact."
    },
    {
      id: 12,
      title: "Customer Service & Feedback Management",
      content: "Our Customer Service team handles all customer inquiries, concerns, and feedback across marketplace platforms. This service includes message monitoring, review management, and feedback solicitation strategies to maintain high seller ratings and build a strong reputation that drives sales."
    },
    {
      id: 13,
      title: "Analytical & Business Insight",
      content: "Our Analytical & Business Insight Service provides comprehensive data analysis and actionable intelligence for your marketplace business. This includes performance tracking, competitive analysis, trend identification, and strategic recommendations to help you make informed decisions for growth."
    },
    {
      id: 14,
      title: "Brand Protection Management",
      content: "Our Brand Protection Management Service safeguards your intellectual property and brand integrity across marketplace platforms. This includes monitoring for unauthorized sellers, counterfeit products, and trademark violations, plus enforcement actions to protect your brand's reputation."
    },
    {
      id: 15,
      title: "Product & Seller Reviews",
      content: "Our Product & Seller Reviews Management Service helps marketplace sellers build and maintain a positive online reputation. This service includes implementing compliant review generation strategies, monitoring incoming reviews, addressing negative feedback, and leveraging positive reviews to enhance credibility."
    },
    {
      id: 16,
      title: "Ecommerce Export Through Global Selling",
      content: "Our Ecommerce Export Through Global Selling Service enables businesses to expand internationally through marketplace platforms. This includes market analysis, account setup across global marketplaces, localization of product listings, international compliance guidance, and cross-border logistics support."
    },
  ];

  return (
    <div className="container mx-auto px-4 py-5 Syne-Regular">
      {/* <div className="text-center mb-8">
        <p className="text-sm text-gray-600">Services</p>
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-4">
          {services.slice(0, 8).map((service) => (
            <div key={service.id} className="border-t border-gray-200">
              <button
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => toggleAccordion(service.id)}
              >
                <span className="font-medium text-[#000]">{service.title}</span>
                <span className='text-[#000]'>{openId === service.id ? "−" : "+"}</span>
              </button>
              {openId === service.id && (
                <div className="pb-4 text-sm text-gray-600">
                  <p>{service.content}</p>
                  {service.id === 1 && (
                    <button className="text-blue-600 mt-2">Know More</button>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-4">
          {services.slice(8).map((service) => (
            <div key={service.id} className="border-t border-gray-200">
              <button
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                onClick={() => toggleAccordion(service.id)}
              >
                <span className="font-medium text-gray-900">{service.title}</span>
                <span className='text-[#000]'>{openId === service.id ? "−" : "+"}</span>
              </button>
              {openId === service.id && (
                <div className="pb-4 text-sm text-gray-600">
                  <p>{service.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceAccordion;