import { StoreState } from "App/Model/StoreState";
import { Action } from "App/Model/Actions";

export function reduce(state: StoreState, action: Action): StoreState {
    if (action.type == "Start") {
        return { ...state, started: true };
    }
    return state;
}
