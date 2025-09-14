"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const images = [
	{ slides: ["/images/mainSite/img_1.png"] },
	{
		slides: [
			"/images/sharma/img_main.png",
			"/images/sharma/img_1.png",
			"/images/sharma/img_2.png",
		],
	},
	{ slides: ["/images/male_reward.png", "/images/female_reward.png"] },
	{ slides: ["/images/bedroom/img_1.png", "/images/bedroom/img_2.png"] },
	{ slides: ["/images/mainSite/img_5.jpg"] },
	{
		slides: [
			"/images/livingRoom/img_2.png",
			"/images/livingRoom/img_3.png",
			"/images/livingRoom/img_4.png",
		],
	},
	{
		slides: [
			"/images/workspaceCA/img_main.png",
			"/images/workspaceCA/img_1.png",
			"/images/workspaceCA/img_2.png",
		],
	},
];

export default function MainSiteSlider() {
	return (
		<div className="w-full mx-auto pt-20 pb-10 px-2 bg-black">
			<Swiper
				modules={[Autoplay, Pagination]}
				slidesPerView={1}
				loop
				autoplay={{ delay: 2500 }}
				pagination={{
					el: ".custom-pagination",
					clickable: true,
				}}
				className="h-[500px] w-full">
				{images.map((group, idx) => (
					<SwiperSlide key={idx} className="w-full h-full">
						<div className="relative w-full h-full flex rounded-2xl overflow-hidden shadow-xl">
							{group.slides.map((src, i) => (
								<div key={i} className="relative flex-1 h-full">
									<Image
										src={src}
										alt={`Slide ${idx + 1} image ${i + 1}`}
										fill
										className="object-cover"
									/>
								</div>
							))}
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			{/* Pagination dots placed OUTSIDE images */}
			<div className="custom-pagination mt-6 flex justify-center"></div>

		</div>
	);
}
