// react imports
import { useEffect, useState } from "react";

// components
import Questions from "./components/Questions";

const questions = [
	{
		id: 1,
		question: "What is Frontend Mentor?, and how will it help me?",
		answer:
			"Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
	},
	{
		id: 2,
		question: "Is Frontend Mentor free?",
		answer:
			"Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
	},
	{
		id: 3,
		question: "Can I use Frontend Mentor projects in my portfolio?",
		answer:
			"Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers! ",
	},
	{
		id: 4,
		question: "How can I get help if I'm stuck on a challenge?",
		answer:
			"The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
	},
];

function App() {
	const [showAnswer, setShowAnswer] = useState<number | null>(null);

	const toggleAnswer = (index: number) => {
		setShowAnswer((prevAnswer) => (prevAnswer === index ? null : index));
	};

	const handleKeyPress = (event: KeyboardEvent) => {
		if (event.key === "ArrowUp" || event.key === "ArrowDown") {
			event.preventDefault(); // Prevent default scrolling behavior

			const newIndex =
				showAnswer === null
					? 0
					: event.key === "ArrowUp"
					? (showAnswer - 1 + questions.length) % questions.length
					: (showAnswer + 1) % questions.length;

			setShowAnswer(newIndex);
		}
	};

	useEffect(() => {
		window.addEventListener("keydown", handleKeyPress);
		return () => {
			window.removeEventListener("keydown", handleKeyPress);
		};
	}, [showAnswer]);

	return (
		<main className="flex flex-col items-center justify-center min-h-min font-work bg-lightPink">
			<img
				src="/images/background-pattern-mobile.svg"
				alt=""
				className="block md:hidden"
			/>
			<img
				src="/images/background-pattern-desktop.svg"
				alt=""
				className="hidden md:block"
			/>
			<section className="w-[330px] rounded-xl md:w-[40%] bg-white relative bottom-20">
				<header className="flex items-center p-5 gap-5">
					<img src="/images/icon-star.svg" alt="" />
					<h1 className="text-3xl font-bold text-darkPurple">FAQs</h1>
				</header>
				{questions.map((question, index) => (
					<Questions
						key={question.id}
						index={index}
						question={question}
						isOpen={showAnswer === index}
						toggleAnswer={toggleAnswer}
					/>
				))}
			</section>
			<footer className="attribution">
				Challenge by{" "}
				<a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
					Frontend Mentor
				</a>
				. Coded by{" "}
				<a href="https://github.com/replayzor" target="_blank">
					Ionut Oltean
				</a>
				.
			</footer>
		</main>
	);
}

export default App;
