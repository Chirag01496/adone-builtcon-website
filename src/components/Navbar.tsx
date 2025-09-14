import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
		

	useEffect(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<motion.header
			initial={{ y: -160 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
			className={`fixed w-full z-50 backdrop-blur-sm transition-colors ${
				scrolled ? "bg-white shadow-lg" : "bg-black"
			}`}>
			<div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-6">
				{/* Left Hero Title */}
				<Link
					href="/"
					className={`flex items-center transition ${
						scrolled ? "text-black" : "text-white"
					}`}>
					<Image
						src={"/images/logo.png"}
						alt={"Adone Builtcon"}
						width={120}
						height={120}
						className="shrink-0"
					/>
					<div className="flex flex-col">
						<h3 className="text-3xl font-extrabold tracking-tight uppercase">
							Adone Builtcon
						</h3>
						<span className="text-sm text-orange-400 ps-2">
							Designing Spaces, Building Future
						</span>
					</div>
				</Link>

				{/* Right Nav Links */}
				<nav
					className={`space-x-12 hidden md:flex text-lg font-semibold tracking-wide transition ${
						scrolled ? "text-black" : "text-white"
					}`}>
					<Link href="#about" className="hover:opacity-70">
						About
					</Link>

					<Link href="#services" className="hover:opacity-70">
						Services
					</Link>
					<Link href="#projects" className="hover:opacity-70">
						Projects
					</Link>
					<Link href="#contact" className="hover:opacity-70">
						Contact
					</Link>
				</nav>
			</div>
		</motion.header>
	);
}
