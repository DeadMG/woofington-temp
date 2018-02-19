import { Hello } from "app/hello";

export function initialise() {
	ReactDOM.render(Hello(), document.getElementById("app"));
}
