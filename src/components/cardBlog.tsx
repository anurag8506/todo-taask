
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
interface cardInterface {
    cardDescription: string,
    cardImage: string,
}
export default function BlogCard({ cardDetail }: { cardDetail: cardInterface }) {
    return (
        <>
         <div className="px-[20px] py-[20px] rounded-[10px] h-full shadow">
                <Image
                  src={cardDetail.cardImage}
                  width={50}
                  height={50}
                  alt="no-img"

                />  
                <div className="sm:py-[20px] py-[15px]">
                  <p className=" Syne-Regular text-[#2F2F2F] sm:text-[15px] text-[14px]">
                    {cardDetail.cardDescription}</p>
                </div>
              </div>
    

        </>
    );
}
