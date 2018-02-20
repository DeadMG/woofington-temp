import { dom, createFactory } from "App/ReactHelpers";
import { Canvas } from "app/Canvas";
import { UI } from "app/UI";

export class GameComponent extends React.Component<{}, {}> {
    render() {
        return dom.div({ style: { position: "relative" } },
            Canvas(),
            dom.div({ style: { position: "absolute", top: "0px" } },
                UI()));
    }
}

export const Game = createFactory(GameComponent);
