import Reaction from '../reaction';

const Main = () => {
	return (
		<div className="flex h-screen w-screen flex-col items-center justify-center gap-8 bg-sky-800 p-10">
			<div className="text-5xl">Check your reaction time</div>
			<div className="flex h-full w-full items-center justify-center border-2">
				<Reaction />
			</div>
		</div>
	);
};

export default Main;
