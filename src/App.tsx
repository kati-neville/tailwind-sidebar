import React, { useState } from "react";
//@ts-ignore
import Sidebar from "./components/sidebar.tsx";

function App() {
	const [openSideBar, setOpenSideBar] = useState(false);

	return (
		<>
			<p className="text-green-600 text-center mt-4 text-3xl">Main Content </p>
			{openSideBar ? (
				<div
					className={`absolute top-0 sm:w-1/5 w-3/4 ease-in-out duration-300`}>
					{/* SideBar component recieves the state Function as its setOpenSideBar prop value */}

					<Sidebar setOpenSideBar={setOpenSideBar} />
				</div>
			) : (
				// This is the hambuger button icon
				<button className="ml-4" onClick={() => setOpenSideBar(!openSideBar)}>
					{" "}
					<svg
						width="26"
						height="20"
						viewBox="0 0 26 20"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<rect width="20.8" height="3.11094" fill="#091E42" />
						<rect y="8.11133" width="26" height="3.11094" fill="#091E42" />
						<rect y="16.2227" width="13.8667" height="3.11094" fill="#091E42" />
					</svg>
				</button>
			)}
		</>
	);
}

export default App;
