import { StoreState } from "App/Model/StoreState";
import { Action } from "App/Model/Actions";

export function reduce(state: StoreState, action: Action): StoreState {
    if (action.type == "IncrementClicked") {
        return { ...state, clicked: state.clicked + 1 };
    }
    return state;
}
