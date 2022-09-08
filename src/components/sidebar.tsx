import React from "react";

interface SideBarProps {
	setOpenSideBar: (open: boolean) => void;
}
// this is typescript and we are defining the props and prop types to be recieved by this Sidebar component
// Here the component is defined as React.FC (Functional Component) and recieves props defined by the interface SideBarProps

const Sidebar: React.FC<SideBarProps> = ({ setOpenSideBar }) => {
	return (
		<div className="bg-green-600 h-screen p-6 flex items-start justify-between w-full">
			<p className="text-white text-xl">This is the sidebar</p>

			{/* This is the Close button which sets the State to False hence closing the SideBar component */}
			<button onClick={() => setOpenSideBar(false)}>
				<svg
					width="28"
					height="28"
					viewBox="0 0 28 28"
					fill="none"
					xmlns="http://www.w3.org/2000/svg">
					<path
						d="M21.875 6.125L6.125 21.875"
						stroke="#091E42"
						stroke-width="1.6875"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
					<path
						d="M21.875 21.875L6.125 6.125"
						stroke="#091E42"
						stroke-width="1.6875"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>
		</div>
	);
};

export default Sidebar;
