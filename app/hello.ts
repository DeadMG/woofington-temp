interface Window {
	initialise: { ():void };
}

window.initialise = () => {
	alert("hello");
};
