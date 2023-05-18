import random from '@src/utils/random';
import getCurrentDateInMs from '@src/utils/time';
import { useEffect, useState } from 'react';

const Reaction = () => {
	const [isReactionTime, setReactionTime] = useState(false);
	const [countdown, setCountdown] = useState(5);
	const [ms, setMs] = useState(0);
	const [results, setResults] = useState<number[]>([]);
	const [tries, setTries] = useState(0);

	const intervalTimes = [500, 2000, 4500, 6500, 8000];

	useEffect(() => {
		let interval: NodeJS.Timer;
		let timeout: NodeJS.Timeout;
		if (countdown > 0) {
			interval = setInterval(() => {
				setCountdown((number) => number - 1);
				if (countdown === 0) {
					clearInterval(interval);
				}
			}, 1000);
		} else {
			const timeMs = intervalTimes[random(0, intervalTimes.length - 1)];
			timeout = setTimeout(() => {
				setReactionTime((bool) => !bool);
				const time = getCurrentDateInMs();
				setMs(() => time);
			}, timeMs);
		}

		return () => {
			clearInterval(interval);
			clearTimeout(timeout);
		};
	}, [countdown]);

	const handleClick = () => {
		if (!isReactionTime) return;

		if (tries === 5) return;

		setReactionTime(!isReactionTime);
		setCountdown(5);
		setTries(tries + 1);
		const time = getCurrentDateInMs();
		setResults([...results, time - ms]);
	};

	const calculateAvgRespTime = () => {
		const sum = results.reduce((a, b) => a + b, 0);
		return sum / 5;
	};

	const bgClassName = isReactionTime ? 'bg-lime-500' : 'bg-red-800';
	const text = countdown > 0 ? countdown : 'Wait before ball turns green';

	return (
		<div className="flex flex-col items-center gap-8">
			{tries === 5 ? (
				<div className="text-3xl">Avg response time - {calculateAvgRespTime()}</div>
			) : (
				<>
					<div className={`h-40 w-40 rounded-full ${bgClassName}`} onClick={handleClick}></div>
					<div className="text-3xl">{text}</div>
				</>
			)}
		</div>
	);
};

export default Reaction;
