import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				{/* Google font */}
				<link rel="icon" href="/logo.png" />
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap"
					rel="stylesheet"
				/>
				<meta name="theme-color" content="#0f172a" />
			</Head>
			<body className="font-sans bg-white text-neutral-900">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
