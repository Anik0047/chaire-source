'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IBanner } from '@/interfaces';

const BannerSlider = ({ bannersList }: { bannersList: IBanner[] }) => {
    return (
        <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
            <div className="w-full">
                <div className="swiper-container" style={{ height: '400px' }}> {/* Fixed height */}
                    <Swiper
                        spaceBetween={30}
                        effect={'fade'}
                        navigation={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[EffectFade, Navigation, Pagination]}
                        className="h-full" // Make Swiper take full height of container
                    >
                        {bannersList?.map((banner: IBanner) => (
                            <SwiperSlide key={banner._id} className="!h-full">
                                <img
                                    src={banner.banner_image || 'https://swiperjs.com/demos/images/nature-2.jpg'}
                                    className="w-full h-full object-cover" // Ensure image fills slide
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default BannerSlider;