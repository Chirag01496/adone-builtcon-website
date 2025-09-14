"use client";
import { LegacyAnimationControls, motion, Variants } from "framer-motion";
import Image from "next/image";

export interface DescriptionWithTeamProps {
	container: Variants;
	controls: LegacyAnimationControls;
	item: Variants;
}

interface Architect {
	name: string;
	title: string;
	image?: string;
	description: string;
}

export default function DescriptionWithTeam({
	container,
	controls,
	item,
}: DescriptionWithTeamProps) {
	const architects: Architect[] = [
		{
			name: "Ar. Chirag Mehta",
			title: "Founder and Creative Director",
			image: "/images/main_1.png",
			description:
				"As the Founder and creative driving force of Adone Builtcon, Ar. Chirag Mehta blends design innovation with technical precision. His expertise spans architectural planning, concept development, and project execution, enabling him to craft spaces that are both visionary and practical. With a strong belief that architecture should inspire while serving its purpose, he ensures that every project reflects bold creativity, refined detailing, and contextual sensitivity. His leadership has been instrumental in positioning Adone Builtcon as a firm that consistently delivers design excellence with enduring impact.",
		},
		{
			name: "Ar. Supriya Mehta",
			title: "Principal Architect",
			image: "/images/main_2.jpg",
			description:
				"As Principal Architect, Ar. Supriya Mehta leads the creative and design development process at Adone Builtcon. She specializes in interior design and spatial planning, bringing elegance, functionality, and human-centered design into every project. Her refined design sensibility, attention to detail, and passion for creating meaningful spaces ensure that each project is both timeless and client-focused.",
		},
	];

	const stats = [
		{ label: "Happy Clients", value: "450+" },
		{ label: "Team Members", value: "80+" },
	];

	// helper: initials
	const getInitials = (fullName: string) => {
		const parts = fullName.split(" ");
		const initials =
			(parts[1]?.charAt(0) || "") + (parts[2]?.charAt(0) || "");
		return initials.toUpperCase();
	};

	return (
		<motion.div
			className="flex flex-col items-center max-w-7xl w-full px-6"
			variants={container}
			initial="hidden"
			animate={controls}>
			{/* Header */}
			<motion.h2
				className="text-5xl md:text-6xl font-extrabold mb-2 text-center text-black tracking-tight"
				variants={item}>
				About Adone Builtcon
			</motion.h2>

			{/* About Key Points */}
			<motion.div className="relative w-full" variants={container}>
				<motion.p className="mt-10 text-gray-800">
					Adone Builtcon is a multidisciplinary architecture and
					interior design practice, widely recognized for its ability
					to deliver distinctive, functional, and timeless spaces. Led
					by Principal Architects Ar. Chirag Mehta and Ar. Supriya
					Mehta, the firm has steadily evolved into one of the most
					trusted names in the design and construction sector,
					catering to an expansive portfolio across{" "}
					<span className="text-orange-400 font-extrabold">
						Residential, Commercial, Landscape and institutional
						projects.
					</span>{" "}
					Our studio brings together a team of creative thinkers,
					technical experts, and execution specialists, who work
					seamlessly from concept to completion. Each project team
					comprises architects, designers, planners, and project
					managers with expertise across various disciplines, ensuring
					a holistic approach that integrates design vision with
					precise delivery. At Adone Builtcon, design is treated as a
					deeply collaborative and client-centric process. Every
					project begins with careful research and exploration,
					understanding not only the functional requirements but also
					the cultural and lifestyle aspirations of the client. This
					process allows us to craft designs that are not just
					visually striking, but also highly personalized and
					enduring.
				</motion.p>
				<motion.p className="mt-10 text-gray-800">
					Over the years, the firm has been privileged to work with
					Over the years, the firm has been privileged to work with
					diverse clientele, ranging from private homeowners to
					business leaders and developers, delivering spaces that
					resonate with identity, functionality, and aesthetic value.
					Our projects stand out for their refined detailing,
					innovative material applications, and context-sensitive
					design approaches, making them both modern in appeal and
					timeless in character. The practice thrives on{" "}
					<span className="text-orange-400 font-extrabold">
						Research, Innovation, and Craftsmanship.
					</span>{" "}
					Our architects and designers are constantly exploring new
					materials, technologies, and design methodologies to stay
					relevant in an ever-evolving global design landscape. This
					ensures that every project not only meets today’s needs but
					anticipates the demands of tomorrow.
				</motion.p>
				<motion.p className="mt-10 text-gray-800">
					With a reputation for design integrity, meticulous
					execution, and client trust, Adone Builtcon continues to
					expand its footprint across multiple sectors and cities. For
					us, architecture and interior design are not just
					services—they are opportunities to shape lifestyles, build
					communities, and create lasting impressions.
				</motion.p>
			</motion.div>

			{/* Team Section */}
			<motion.div
				className="grid md:grid-cols-2 gap-12 w-full mt-20 mb-12"
				variants={container}>
				{architects.map((arch, idx) => (
					<motion.div
						key={idx}
						className="relative flex flex-col items-center text-center space-y-4 p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all bg-white/90 backdrop-blur-md border border-gray-100"
						whileHover={{ scale: 1.03 }}
						variants={item}>
						{/* Photo or Initials */}
						{arch.image ? (
							<div className="relative w-40 h-40 rounded-full overflow-hidden shadow-lg ring-4 ring-orange-200">
								<Image
									src={arch.image}
									alt={arch.name}
									fill
									className="object-cover"
								/>
							</div>
						) : (
							<div className="w-40 h-40 flex items-center justify-center rounded-full bg-orange-100 text-white text-4xl font-bold shadow-lg ring-4 ring-orange-200">
								{getInitials(arch.name)}
							</div>
						)}

						<h3 className="text-2xl font-bold text-black">
							{arch.name}
						</h3>
						<p className="text-lg font-semibold text-orange-500">
							{arch.title}
						</p>
						<p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
							{arch.description}
						</p>
					</motion.div>
				))}
			</motion.div>

			{/* Stats Section */}
			<motion.div
				className="flex justify-center w-full"
				variants={container}>
				<motion.div
					className="flex flex-col sm:flex-row justify-center items-center bg-orange-400 text-white rounded-[50px] px-12 py-10 w-full max-w-4xl shadow-lg"
					variants={item}>
					{stats.map((stat, idx) => (
						<div
							key={idx}
							className={`flex-1 text-center px-6 ${
								idx === 0
									? "border-b sm:border-b-0 sm:border-r border-white/50 pb-6 sm:pb-0"
									: "pt-6 sm:pt-0"
							}`}>
							<h4 className="text-4xl font-bold">{stat.value}</h4>
							<p className="text-lg mt-2">{stat.label}</p>
						</div>
					))}
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
