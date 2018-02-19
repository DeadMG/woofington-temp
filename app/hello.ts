import { dom, createFactory } from "App/ReactHelpers";

export class HelloComponent extends React.Component<{}, {}> {
	render() {
		return dom.div(null, "Hello");
	}
}

export const Hello = createFactory(HelloComponent);
