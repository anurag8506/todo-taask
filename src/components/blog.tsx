
import Image from "next/image";
import Link from 'next/link'
import "bootstrap/dist/css/bootstrap.min.css";
interface BlogInterface {
    blogTitle: string,
    blogDescription: string,
    blogLink: string,
    blogImage: string,
}
export default function BlogCard({ blogDetails }: { blogDetails: BlogInterface }) {
    return (
        <>
            <div>
                <div>
                    <Image
                        src={blogDetails.blogImage}
                        className="w-full sm:rounded-[5px] rounded-[2px]"
                        width={1080}
                        height={1080}
                        alt="no-img"
                    />
                </div>
                <div className="sm:py-[20px] sm:h-[250px] py-[10px] sm:mb-[5px] mb-[0px] relative">
                    <p className="sm:text-[20px] Syne-BB  text-[#000000]  text-[20px]"
                    >{blogDetails.blogTitle}
                    </p>
                    <p className="sm:text-[14px] Syne-Regular h-[105px] overflow-hidden   text-[#4C4C4C]  text-[14px]"
                    >{blogDetails.blogDescription}
                    </p>

                    <Link href="" className="sm:py-[20px] absolute bottom-[0px] sm:text-[14px] text-[12px] text-[#FF6A00] Syne-Regular">{blogDetails.blogLink}</Link>
                </div>
            </div>

        </>
    );
}
