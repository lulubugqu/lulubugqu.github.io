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
	console.log(divNum + " is active")
    setSelected(divNum);
  };
  
	return (
		<>
			<div className='whole-page flex basis-1 flex-row'>
				
				<div className='directories basis-1/12 flex flex-col absolute left-3 top-4'>
					<div className={selected == 1 ? active : inactive}
						onClick={handleClick(1)}>
						{/* <div className="icon bg-file1a hover:bg-[url('./src/img/file1-b.png')] bg-cover w-24 h-24"></div> */}
						<img className='icon' id="icon1" src={icon1} alt="" />

						<p>Projects</p>
					</div>

					<div className={selected == 2 ? active : inactive}
						onClick={handleClick(2)}>
						{/* <div className="icon bg-[url('./src/assets/images/file2-a.png')] hover:bg-[url('./src/img/file2-b.png')] bg-cover w-24 h-24"></div> */}
						<img className='icon' id="icon2" src={icon2} alt="" />
						<p>Experience</p>
					</div>

					<div className={selected == 3 ? active : inactive}
						onClick={handleClick(3)}>
						{/* <div className="icon bg-[url('./src/img/gh-a.png')] hover:bg-[url('./src/img/gh-b.png')] bg-cover w-24 h-24"></div> */}
						<img className='icon' id="icon3" src={icon3} alt="" />
						<p>GitHub</p>
					</div>

					<div className={selected == 4 ? active : inactive}
						onClick={handleClick(4)}>
						{/* <div className="icon bg-[url('./src/img/pdf-a.png')] hover:bg-[url('./src/img/pdf-b.png')] bg-cover w-24 h-24"></div> */}
						<img className='icon' id="icon4" src={icon4} alt="" />
						<p>Resume</p>
					</div>

					<div className={selected == 5 ? active : inactive}
						onClick={handleClick(5)}>
						{/* <div className="icon bg-[url('./src/img/mail-a.png')] hover:bg-[url('./src/img/mail-b.png')] bg-cover w-24 h-24"></div> */}
						<img className='icon' id="icon5" src={icon5} alt="" />
						<p>Email</p>
					</div>
			
				
				</div>
				<div className='popups basis-11/12'> 


				</div>

			</div>

	

			<div className="fixed bottom-0 left-0 z-10 w-full h-14 
							bg-white bg-opacity-30 backdrop-filter backdrop-blur-lg border-t border-b border-gray-200">
				{/* <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
					<button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
						<svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
							<path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
						</svg>
						<span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Home</span>
					</button>
					<button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
						<svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
							<path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"/>
							<path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"/>
						</svg>
						<span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Wallet</span>
					</button>
					<button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
						<svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
							<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"/>
						</svg>
						<span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span>
					</button>
					<button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
						<svg className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
							<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
						</svg>
						<span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
					</button>
				</div> */}
			</div>

    </>
  )
}

export default App
