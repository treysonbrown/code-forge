import { useState } from "react";

const ProblemModal = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-button hover:bg-accent text-white text-3xl flex items-center justify-center shadow-lg active:scale-95 transition-transform  pb-[2px]"
				type="button"
			>
				+
			</button>

			{isOpen && (
				<div
					aria-hidden="true"
					className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-black/50"
				>
					<div className="relative p-4 w-full max-w-md max-h-full">
						<div className="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
							<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
								<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
									Create New Problem
								</h3>
								<button
									type="button"
									onClick={() => setIsOpen(false)}
									className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
								>
									<svg
										className="w-3 h-3"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 14"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
										/>
									</svg>
									<span className="sr-only">Close modal</span>
								</button>
							</div>

							<form className="p-4 md:p-5">
								<div className="grid gap-4 mb-4 grid-cols-2">
									<div className="col-span-2">
										<label
											htmlFor="name"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Title
										</label>
										<input
											type="text"
											name="name"
											id="name"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
											placeholder="Type problem title"
											required
										/>
									</div>
									<div className="col-span-2">
										<label
											htmlFor="name"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Answers
										</label>
										<input
											type="text"
											name="name"
											id="name"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
											placeholder="Type answers"
											required
										/>
									</div>
									<div className="col-span-2">
										<label
											htmlFor="category"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Difficulty
										</label>
										<select
											id="category"
											className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
										>
											<option>Select difficulty</option>
											<option value="EASY">Easy</option>
											<option value="MEDIUM">Medium</option>
											<option value="HARD">Hard</option>
										</select>
									</div>
									<div className="col-span-2">
										<label
											htmlFor="description"
											className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
										>
											Problem Description
										</label>
										<textarea
											id="description"
											className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
											placeholder="Write problem description here"
										></textarea>
									</div>
								</div>
								<button
									type="submit"
									className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
								>
									<svg
										className="me-1 -ms-1 w-5 h-5"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
											clipRule="evenodd"
										/>
									</svg>
									Add new problem
								</button>
							</form>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default ProblemModal;
