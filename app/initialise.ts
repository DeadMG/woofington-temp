import { StoreState, initialState } from "App/Model/StoreState";
import { reduce } from "App/Model/Reducer";
import { Game } from "app/Game";

export function initialise() {
	const store = Redux.createStore<StoreState>(reduce, initialState(window.innerWidth, window.innerHeight));
    const provider = React.createElement(ReactRedux.Provider, { store: store }, Game());
	ReactDOM.render(provider, document.getElementById("app"));
}
