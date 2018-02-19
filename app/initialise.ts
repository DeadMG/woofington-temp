import { Hello } from "app/hello";
import { StoreState } from "App/Model/StoreState";
import { reduce } from "App/Model/Reducer";

export function initialise() {
	const store = Redux.createStore<StoreState>(reduce, { clicked: 0 });
    const provider = React.createElement(ReactRedux.Provider, { store: store }, Hello());
	ReactDOM.render(provider, document.getElementById("app"));
}
