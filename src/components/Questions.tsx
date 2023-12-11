type Props = {
	index: number;
	question: {
		question: string;
		answer: string;
	};
	isOpen: boolean;
	toggleAnswer: (index: number) => void;
};

function Questions({ index, question, isOpen, toggleAnswer }: Props) {
	return (
		<div className="py-3 px-6 hover:text-red-800 cursor-pointer">
			<h4 className="flex justify-between items-center">
				<span className="text-darkPurple hover:text-purple-500 font-semibold w-[80%]">
					{question.question}
				</span>
				<button type="button" onClick={() => toggleAnswer(index)}>
					{isOpen ? (
						<img src="/images/icon-minus.svg" alt="" />
					) : (
						<img src="/images/icon-plus.svg" alt="" />
					)}
				</button>
			</h4>
			{isOpen && (
				<p className="py-2 text-sm text-grayishPurple">{question.answer}</p>
			)}
		</div>
	);
}
export default Questions;
