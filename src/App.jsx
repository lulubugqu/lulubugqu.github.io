import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import icon1 from "./assets/images/file1-a.png"
import icon2 from "./assets/images/file2-a.png"
import icon3 from "./assets/images/gh-a.png"
import icon4 from "./assets/images/mail-a.png"
import icon5 from "./assets/images/pdf-a.png"


// stylesheet
import "./App.css"
// fonts
import "./fonts/Dunkin.ttf"

const active ="rounded-md icon-highlight border border-transparent border border-white/50 bg-white/30"
const inactive = "rounded-md icon-highlight border border-transparent" 
// selected == 1 ? active : inactive
function App() {
//   const [count, setCount] = useState(0)
  const [selected, setSelected] = useState(0);
  const handleClick = (divNum) => () => {
	// console.log(divNum + " is active")
    setSelected(divNum);
  };
  const [homeBarVisible, setHomeBarVisible] = useState(false);
  function toggleHomeBar() {
	setHomeBarVisible(!homeBarVisible);
  };

//   const openCalc = () => () => {
// 	toggleHomeBar()
// 	setCalcVisible
//   }
  
	return (
		<>
			<div className='whole-page flex basis-1 flex-row'>
				
				<div className='directories basis-1/12 flex flex-col absolute left-3 top-4'>
					<div className={selected == 1 ? active : inactive}
						onClick={handleClick(1)}>
						<img className='icon' id="icon1" src={icon1} alt="" />

						<p>Projects</p>
					</div>

					<div className={selected == 2 ? active : inactive}
						onClick={handleClick(2)}>
						<img className='icon' id="icon2" src={icon2} alt="" />
						<p>Experience</p>
					</div>

					<div className={selected == 3 ? active : inactive}
						onClick={handleClick(3)}>
						<img className='icon' id="icon3" src={icon3} alt="" />
						<p>GitHub</p>
					</div>

					<div className={selected == 4 ? active : inactive}
						onClick={handleClick(4)}>
						<img className='icon' id="icon4" src={icon4} alt="" />
						<p>Resume</p>
					</div>

					<div className={selected == 5 ? active : inactive}
						onClick={handleClick(5)}>
						<img className='icon' id="icon5" src={icon5} alt="" />
						<p>Email</p>
					</div>
			
				
				</div>
				<div className='popups basis-11/12'> 
				
				{/* HOMEBAR */}
				{homeBarVisible && (
					<div className="fixed bottom-20 left-0 z-10 w-80 h-80 rounded-tr
						overflow-y-scroll shadow-[rgba(0,0,15,0.5)_2px_-2px_50px_0px]
						homeBar">
						<ul>
							<li className="border-b border-white">
								<a href="#" className="flex items-center justify-left w-full px-4 py-3 hover:bg-sky-200/50">
									<img className="me-3 w-12 h-12" src={icon1} alt="" />
									<div>
										<p className="text-sm text-white appTitle">Time Sheet Calculator </p>
									</div>
								</a>
							</li>
							{/* <li className="border-b border-gray-100 dark:border-gray-600">
								<a href="#" className="flex items-center justify-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">
									<img className="me-3 rounded-full w-11 h-11"  src={icon1} alt="" />
									<div>
										<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Joseph McFall</span> and <span className="font-medium text-gray-900 dark:text-white">5 others</span> started following you.</p>
										<span className="text-xs text-blue-600 dark:text-blue-500">10 minutes ago</span>
									</div>
								</a>
							</li>
							<li className="border-b border-gray-100 dark:border-gray-600">
								<a href="#" className="flex items-center justify-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">
									<img className="me-3 rounded-full w-11 h-11"  src={icon1} alt="" />
									<div>
										<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Bonnie Green</span> and <span className="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.</p>
										<span className="text-xs text-blue-600 dark:text-blue-500">23 minutes ago</span>
									</div>
								</a>
							</li>
							<li className="border-b border-gray-100 dark:border-gray-600">
								<a href="#" className="flex items-center justify-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">
									<img className="me-3 rounded-full w-11 h-11" src={icon1} alt="" />
									<div>
										<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Leslie Livingston</span> mentioned you in a comment: <span className="font-medium text-blue-600 dark:text-blue-500 hover:underline">@bonnie.green</span> what do you say?</p>
										<span className="text-xs text-blue-600 dark:text-blue-500">23 minutes ago</span>
									</div>
								</a>
							</li>
							<li>
								<a href="#" className="flex items-center justify-center w-full px-4 py-3 hover:bg-gray-50 dark:hover:bg-gray-800">
									<img className="me-3 rounded-full w-11 h-11" src={icon1} alt="" />
									<div>
										<p className="text-sm text-gray-500 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Robert Brown</span> posted a new video: Glassmorphism - learn how to implement the new design trend. </p>
										<span className="text-xs text-blue-600 dark:text-blue-500">23 minutes ago</span>
									</div>
								</a>
							</li> */}
						</ul>
					</div>
				)}

				</div>

			</div>

	

			<div className="fixed bottom-0 left-0 z-10 w-full h-20 bg-white bg-opacity-30 
				backdrop-filter backdrop-blur-lg border-t border-b border-gray-200
				navBar">
				<div className='homeIconDiv'>
					<button onClick={toggleHomeBar}>
						{homeBarVisible ? <img className='homeIcon' id="homeIcon" src={icon5} alt="" /> : <img className='homeIcon' id="homeIcon" src={icon5} alt="" />}
					</button>
				</div>

			</div>

    </>
  )
}

export default App
