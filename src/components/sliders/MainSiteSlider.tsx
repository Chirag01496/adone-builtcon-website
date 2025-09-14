"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
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
		<div id="#" className="w-full max-w-6xl mx-auto pt-20 pb-10">
			<Swiper
				modules={[EffectCoverflow, Autoplay]}
				effect="coverflow"
				grabCursor
				centeredSlides
				slidesPerView="auto"
				loop
				autoplay={{ delay: 2500 }}
				coverflowEffect={{
					rotate: 0,
					stretch: 0,
					depth: 200,
					modifier: 1.5,
					slideShadows: false,
				}}
				className={`h-[500px]`}>
				{images.map((group, idx) => (
					<SwiperSlide
						key={idx}
						className="!w-[80vw] !h-[50vh] md:!w-[70vw] md:!h-[55vh]">
						<div className="relative w-full h-full flex rounded-2xl overflow-hidden shadow-xl">
							{group.slides.map((src, i) => (
								<div key={i} className="relative flex-1 h-full">
									<Image
										src={src}
										alt={`Slide ${idx + 1} image ${i + 1}`}
										fill
										className={`object-cover slide-image`}
									/>
								</div>
							))}
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}
