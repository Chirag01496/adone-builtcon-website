import Head from "next/head";
import Navbar from "@/components/Navbar";
import Description from "@/components/Description";
import Services from "@/components/Services";
import ContactFooter from "@/components/ContactFooter";
import { useEffect } from "react";
import Projects from "@/components/Projects";
import MainSiteSlider from "@/components/sliders/MainSiteSlider";

export default function Home() {
	
	useEffect(() => {
		if (typeof window !== "undefined") {
			document.documentElement.style.scrollBehavior = "smooth";
		}
	}, []);

	return (
		<>
			<Head>
				<title>Adone Builtcon — Architecture & Construction</title>
				<meta
					name="description"
					content="Adone Builtcon - Designing Spaces, Building Future"
				/>
			</Head>

			<Navbar />
			<main className="pt-20">
				<MainSiteSlider />
				<Description />
				<Services />
				<Projects />
				<ContactFooter />
			</main>
		</>
	);
}
