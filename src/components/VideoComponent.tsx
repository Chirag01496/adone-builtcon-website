"use client";

import { useState } from "react";

interface VideoModalProps {
	videoSrc: string;
	className?: string;
	height: string;
}

export default function VideoComponent({ videoSrc, className, height }: VideoModalProps) {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			{/* Video Preview as Thumbnail */}
			<div
				onClick={() => setIsOpen(true)}
				className={`cursor-pointer relative w-[320px] h-[${height}] group ${className}`}>
				<video
					src={videoSrc}
					muted
					className="w-full h-full object-cover rounded-lg shadow-md"
				/>
				<div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
					<span className="text-white text-xl">▶</span>
				</div>
			</div>

			{/* Modal */}
			{isOpen && (
				<div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
					<div className="relative bg-black rounded-2xl shadow-lg max-w-3xl w-full h-[80vh] flex flex-col overflow-hidden">
						{/* Close Button */}
						<button
							onClick={() => setIsOpen(false)}
							className="absolute top-3 right-3 z-20 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-200">
							✕
						</button>

						{/* Full Video */}
						<div className="flex-1 flex">
							<video
								src={videoSrc}
								controls
								autoPlay
								className="w-full h-full rounded-2xl"
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
