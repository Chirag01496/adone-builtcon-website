import { FaInstagram } from "react-icons/fa";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("../components/Map"), { ssr: false });

export default function ContactFooter() {
	return (
		<footer
			id="contact"
			className="bg-gradient-to-t from-gray-900 via-black to-gray-800 text-gray-300 py-14 relative overflow-hidden">
			<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 relative z-10">
				{/* Company Info */}
				<div>
					<h3 className="font-bold text-xl text-white tracking-wide">
						Adone Builtcon
					</h3>
					<p className="text-gray-400 mt-3 tracking-wide">
						Plot no -84, Pocket C-7, Sector 8, Rohini, Delhi, 110085
					</p>
					<p className="text-gray-400 mt-2">
						📞 9899572696, 9899526696
					</p>
					<p className="mt-2 text-gray-400">
						✉️ adonebuiltcon@gmail.com
					</p>

					{/* Social Links */}
					<div className="flex gap-4 mt-5">
						<a
							href="https://instagram.com/@adone_builtcon"
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-row items-center gap-2 p-2 rounded-full bg-gray-800 hover:bg-accent transition">
							<FaInstagram className="w-5 h-5 text-white" />{" "}
							<p className=" text-gray-400">@adone_builtcon</p>
						</a>
					</div>
				</div>

				{/* CTA */}
				<div>
					<h4 className="font-semibold text-lg text-white">
						Let’s build something{" "}
						<span className="text-accent">extraordinary</span>
					</h4>
					<p className="text-gray-400 mt-3 max-w-xl leading-relaxed">
						For inquiries, collaborations, or to discuss your design
						needs, reach out. We’d love to bring your vision to
						life.
					</p>

					<div className="mt-6 flex gap-4 flex-wrap">
						<a
							href="mailto:adonebuiltcon@gmail.com"
							className="px-5 py-2.5 bg-accent text-white rounded-xl shadow-md hover:bg-accent/90 transition">
							Email Us
						</a>
						<a
							href="tel:+919899572696"
							className="px-5 py-2.5 border border-gray-500 rounded-xl hover:border-accent hover:text-accent transition">
							Call Now
						</a>
					</div>
				</div>

				{/* Map */}
				<Map />
			</div>

			{/* Divider */}
			<div className="border-t border-gray-700 mt-12 pt-6 text-center text-gray-500 text-sm relative z-10">
				© {new Date().getFullYear()}{" "}
				<span className="text-gray-300 font-medium">
					Adone Builtcon
				</span>{" "}
				— All rights reserved.
			</div>
		</footer>
	);
}
