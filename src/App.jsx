/** @format */

import { useState, useEffect, useRef } from "react";
import Footer from "./Footer";

function App() {
	const [day, setDay] = useState("");
	const [hour, setHour] = useState("");
	const [mins, setMins] = useState("");
	const [secs, setSecs] = useState("");
	const [isFlipped, setIsFlipped] = useState(false);

	const dayRef = useRef(null);
	const hourRef = useRef(null);
	const minRef = useRef(null);
	const secondRef = useRef(null);

	// curren data
	const now = Date.now();

	const oneDay = 12 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;
	// Eight days furher
	let futureDate = now + oneDay * 8;
	// remainingSeconds befor setinterval
	let remainingSeconds = futureDate - now;

	const timer = () => {
		let countdown = setInterval(() => {
			remainingSeconds = futureDate - Date.now();
			const days = Math.round(remainingSeconds / oneDay);
			const hours = Math.floor((remainingSeconds % oneDay) / oneHour);
			const minutes = Math.floor((remainingSeconds % oneHour) / oneMinute);
			const seconds = Math.floor((remainingSeconds % oneMinute) / 1000);

			setDay(days);
			setHour(hours);
			setMins(minutes);
			setSecs(seconds);

			if (secs === 0) {
			}
		}, 1000);

		if (remainingSeconds < 0) {
			clearInterval(countdown);
		}
	};

	useEffect(() => {
		timer();
	}, []);

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsFlipped(true);
			console.log("shake and bake");
		}, 1000);

		return () => clearTimeout(timeout);
	}, []);

	return (
		<>
			<div className="App">
				<h1>we're launching soon</h1>
				<div className="container">
					<article>
						<div className="number day">
							<h2>{day < 10 ? `0${day}` : day}</h2>
						</div>
						<h3>days</h3>
					</article>
					<article>
						<div className="number hour">
							<h2>{hour < 10 ? `0${hour}` : hour}</h2>
						</div>
						<h3>hours</h3>
					</article>
					<article>
						<div className="number min">
							<h2>{mins < 10 ? `0${mins}` : mins}</h2>
						</div>
						<h3>minutes</h3>
					</article>
					<article>
						<div className={`number second ${isFlipped && "rotate"}`}>
							<h2> {secs < 10 ? `0${secs}` : secs} </h2>
						</div>
						<h3>seconds</h3>
					</article>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
