const getCurrentDateInMs = () => {
	const d = new Date();
	const time = d.getTime();
	return time;
};

export default getCurrentDateInMs;
