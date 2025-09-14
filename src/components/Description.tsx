"use client";
import {
	motion,
	useAnimation,
	Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaBuilding, FaBriefcase, FaCompass, FaAward } from "react-icons/fa";
import DescriptionWithTeam from "./DescriptionWithTeam";


export default function Description() {
	const ref = useRef<HTMLDivElement>(null);
	const controls = useAnimation();
	const [hasLoaded, setHasLoaded] = useState(false);

	// Trigger animation on mount
	useEffect(() => {
		setHasLoaded(true);
		if (hasLoaded) controls.start("visible");
	}, [hasLoaded, controls]);


	// Variants
	const container: Variants = {
		hidden: {},
		visible: { transition: { staggerChildren: 0.2 } },
	};
	const item: Variants = {
		hidden: { opacity: 0, y: 30, scale: 0.95 },
		visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
	};

	return (
		<section
			ref={ref}
			id="about"
			className="relative flex flex-col items-center px-6 md:px-20 py-12 overflow-hidden">
			{/* Animated gradient background */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"
				initial={{ backgroundPosition: "0% 50%" }}
				animate={{
					backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
				}}
				transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
				style={{ backgroundSize: "200% 200%", zIndex: -1 }}
			/>

			{/* Content */}
			<motion.div
				className="flex flex-col items-center max-w-6xl w-full relative z-10"
				variants={container}
				initial="hidden"
				animate={controls}>
				<DescriptionWithTeam {...{ container, controls, item }} />

				{/* Key Highlights */}
				<motion.div
					className="grid mt-24 md:grid-cols-2 gap-12 max-w-5xl mx-auto w-full text-center md:text-left"
					variants={container}>
					{[
						{
							title: "Our Journey",
							Icon: FaBuilding,
							text: [
								"From vision to reality, our journey is one of passion, innovation, and design excellence. Each step reflects our dedication to creating spaces that inspire and endure.",
							],
						},
						{
							title: "Our Portfolio",
							Icon: FaBriefcase,
							text: [
								"A tapestry of thoughtfully crafted spaces—residential sanctuaries, vibrant commercial hubs, sophisticated office interiors, and serene rooftop gardens. Every project is a testament to our creativity and attention to detail",
							],
						},
						{
							title: "Our Approach",
							Icon: FaCompass,
							text: [
								"We blend artistry with strategy, turning ideas into experiences. Through collaboration, precision, and innovation, we ensure every design resonates with purpose and elegance.",
							],
						},
						{
							title: "Trust & Excellence",
							Icon: FaAward,
							text: [
								"Excellence is not just a goal—it’s a promise. With unwavering integrity and meticulous execution, we deliver results that earn the trust and admiration of our clients.",
							],
						},
					].map(({ title, Icon, text }, i) => {
						return (
							<motion.div
								key={i}
								className="space-y-4"
								variants={item}>
								<div className="flex items-center justify-center md:justify-start gap-3">
									<motion.div
										initial={{ scale: 0 }}
										animate={{
											scale: [1, 1.15, 1],
											rotate: [0, -5, 5, 0],
										}}
										transition={{
											duration: 3,
											repeat: Infinity,
											delay: i * 0.5,
										}}
										className={`p-3 bg-white rounded-full shadow-md ring-1 ring-gray-200`}>
										<Icon
											className={`w-6 h-6 text-orange-300 text-xl`}
										/>
									</motion.div>
									<h3
										className={`text-2xl font-semibold text-black`}>
										{title}
									</h3>
								</div>

								<p className="text-lg text-gray-700">{text}</p>
							</motion.div>
						);
					})}
				</motion.div>

				<motion.div className="mt-16" variants={item}>
					<a
						href="#contact"
						className="px-10 py-4 bg-orange-400 text-white font-semibold rounded-2xl shadow-lg hover:bg-orange-600 transition">
						Request Consultation
					</a>
				</motion.div>
			</motion.div>
		</section>
	);
}
