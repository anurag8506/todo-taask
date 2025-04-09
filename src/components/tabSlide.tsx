"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function MockUpTest() {
  return (
    <section className="sm:pt-[100px]">
      <div className="custom-padding">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5">
              <div className="text-start">
                <p className="Syne-SB text-[#000] sm:text-[14px] text-[15px]  mb-2">Testimonials</p>
                <p className="sm:text-[40px] Syne-BB text-[#000] sm:leading-[45px] leading-[30px] tracking-[1px]  text-[30px]"
                >Hear what our amazing customers say
                </p>
            
              </div>
            </div>
            <div className="col-md-12">
              <div className="custom-slider relative">

                <Swiper
                  // install Swiper modules
                  modules={[Navigation, Pagination, Scrollbar, A11y]}
                  spaceBetween={50}
                  slidesPerView={'auto'}
                  navigation={{
                    nextEl: '.custom-next', // Reference to your custom Next button
                    prevEl: '.custom-prev', // Reference to your custom Previous button
                  }}
                  loop={true}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  className="items-center"
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
                
                  <div className="absolute sm:right-[70px] right-[30px] sm:bottom-[0px] bottom-[00px] z-[99]">
                    <button className="custom-prev" type="button">
                      <Image
                        src="/assets/images/arrowleft.svg"
                        className="w-full"
                        width={1080}
                        height={1080}
                        alt="no-img"
                      />
                    </button>
                    <button className="sm:ps-6 ps-10 custom-next" type="button">
                      <Image
                        src="/assets/images/arrowright.svg"
                        className="w-full"
                        width={1080}
                        height={1080}
                        alt="no-img"
                      />
                    </button>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}