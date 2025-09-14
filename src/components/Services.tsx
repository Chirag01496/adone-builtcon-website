import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import {
	FaBuilding,
	FaCouch,
	FaTree,
	FaHotel,
	FaDraftingCompass,
	FaFireExtinguisher,
} from "react-icons/fa";
import { GiWindSlap, GiVibratingShield } from "react-icons/gi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { RiTBoxFill } from "react-icons/ri";
import Logo from "./Logo";

const items = [
	{
		id: 1,
		title: "Architecture",
		desc: "At Adone Builtcon, our architectural designs stand out for their innovation and timeless appeal. Every project is crafted to combine functionality with aesthetic excellence, creating spaces that inspire and endure.",
		icon: <FaBuilding className="w-6 h-6" />,
	},
	{
		id: 2,
		title: "Structure Design",
		desc: "Our structural solutions are engineered with precision and durability in mind. By seamlessly integrating strength, safety, and elegance, we deliver structures that exceed expectations and stand the test of time.",
		icon: <FaDraftingCompass className="w-6 h-6" />,
	},
	{
		id: 3,
		title: "Interior Design",
		desc: "Interiors by Adone Builtcon are more than just spaces—they are experiences. Attention to detail, material selection, and thoughtful layouts ensure environments that are both beautiful and highly functional.",
		icon: <FaCouch className="w-6 h-6" />,
	},
	{
		id: 4,
		title: "Landscape Design",
		desc: "We transform outdoor areas into visually stunning and sustainable landscapes. Every garden, terrace, or open space is designed to harmonize with its surroundings while offering a serene and refreshing experience.",
		icon: <FaTree className="w-6 h-6" />,
	},
	{
		id: 5,
		title: "Hospitality Design",
		desc: "Our hospitality projects are crafted to leave lasting impressions. By focusing on guest comfort, brand identity, and operational efficiency, we create spaces that are both luxurious and practical.",
		icon: <FaHotel className="w-6 h-6" />,
	},
	{
		id: 6,
		title: "HVAC Services",
		desc: "Adone Builtcon delivers HVAC solutions that ensure optimal comfort and energy efficiency. Every system is designed for reliability, seamless integration, and superior performance.",
		icon: <GiWindSlap className="w-6 h-6" />,
	},
	{
		id: 7,
		title: "Vaastu Consultation",
		desc: "Our Vaastu consultation ensures that every space promotes harmony, positive energy, and well-being. We combine traditional principles with modern design to create environments that feel balanced and inviting.",
		icon: <GiVibratingShield className="w-6 h-6" />,
	},
	{
		id: 8,
		title: "Project Management",
		desc: "From concept to completion, our project management services guarantee seamless execution. Timely delivery, quality control, and cost efficiency are at the core of every project we undertake.",
		icon: <MdOutlineManageAccounts className="w-6 h-6" />,
	},
	{
		id: 9,
		title: "3D Modelling",
		desc: "Our advanced 3D modeling brings designs to life with precision and realism. Clients can visualize, refine, and experience every detail before construction begins, ensuring perfect outcomes.",
		icon: <RiTBoxFill className="w-6 h-6" />,
	},
	{
		id: 10,
		title: "Fire Fighting Services",
		desc: "Safety is paramount at Adone Builtcon. Our fire fighting solutions are comprehensive, modern, and reliable, ensuring complete protection while seamlessly integrating with the building design.",
		icon: <FaFireExtinguisher className="w-6 h-6" />,
	},
];

const container: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: { staggerChildren: 0.15 },
	},
};

const card: Variants = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
	exit: { opacity: 0, y: 40, transition: { duration: 0.4 } },
};

export default function Services() {
	const [showAll, setShowAll] = useState(false);

	const visibleItems = showAll ? items : items.slice(0, 3);

	return (
		<section
			id="services"
			className="py-24 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative overflow-hidden">
			<div className="max-w-7xl mx-auto px-6 relative z-10">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.3 }}
					className="text-4xl md:text-5xl font-extrabold text-center mb-20 text-black">
					Key Areas of Expertise
				</motion.h2>

				{/* Cards */}
				<motion.div
					variants={container}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true, amount: 0.2 }}
					className="grid md:grid-cols-3 gap-10">
					<AnimatePresence>
						{visibleItems.map((it) => (
							<motion.article
								key={it.id}
								variants={card}
								initial="hidden"
								animate="show"
								exit="exit"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.98 }}
								className="relative group p-8 rounded-3xl bg-white/80 backdrop-blur-lg shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 overflow-hidden">
								{/* Gradient Border Glow */}
								<div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

								{/* Icon */}
								<div className="relative w-14 h-14 flex items-center justify-center rounded-2xl text-orange-600  shadow-md mb-6">
									<Logo />
								</div>

								{/* Content */}
								<h3 className="relative font-semibold text-xl text-gray-900">
									{it.title}
								</h3>
								<p className="relative text-gray-600 mt-3 leading-relaxed">
									{it.desc}
								</p>
							</motion.article>
						))}
					</AnimatePresence>
				</motion.div>

				{/* View More / Hide button */}
				<div className="text-center mt-12">
					<button
						onClick={() => setShowAll((prev) => !prev)}
						className="px-6 py-3 rounded-full bg-orange-400 text-white font-semibold shadow-md hover:shadow-lg transition">
						{showAll ? "Show Less" : "View More"}
					</button>
				</div>
			</div>

		</section>
	);
}
