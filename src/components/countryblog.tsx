
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
interface fitBlogInterface {
    blogTitle: string,
    blogHead: string,
    blogDescriptionList: string[],
    blogImage: string,
    CountryLocated: string[];
}
export default function FitBlogCard({ fitblogDetails, selectedCountry }: { fitblogDetails: fitBlogInterface, selectedCountry: string }) {
    console.log('selectedCountry', selectedCountry);
    console.log('fitblogDetails', fitblogDetails.CountryLocated);
    if ((fitblogDetails.CountryLocated.indexOf(selectedCountry))>=0) {
        return (
            <>
                <div className="col-md-4 sm:pt-[30px] pt-[20px]">
                    <div className="bg-[#F4F4F4] sm:h-[500px] rounded-[20px] py-[60px]">
                        <div className="border-b-[1px] border-[#C8C8C8] pb-[60px]">
                            <Image
                                src={fitblogDetails.blogImage}
                                className="m-auto"
                                width={200}
                                height={200}
                                alt="no-img"
                            />
                        </div>
                        <div className="sm:py-[20px] sm:px-14 px-6 sm:h-[250px] py-[10px] sm:mb-[5px] mb-[0px] relative">
                            <p className="sm:text-[25px] Syne-BB  text-[#000000]  text-[20px]"
                            >{fitblogDetails.blogTitle}
                            </p>
                            <p className="sm:text-[18px] Syne-SB  text-[#000000]  text-[20px]"
                            >{fitblogDetails.blogHead}
                            </p>
                            <ul className="list-disc">
                                {
                                    fitblogDetails.blogDescriptionList.map((item,index) => (
                                        <li className="sm:text-[16px] Syne-Regular sm:leading-[20px] text-[#4C4C4C]  text-[14px] sm:pt-[10px]" key={index}>{item}</li>
                                    ))
                                }

                            </ul>

                        </div>
                    </div>
                </div>

            </>
        );
    }
}
