import { dom, createFactory } from "App/ReactHelpers";
import { ConnectionBuilder, connect } from "App/ReduxHelpers";

const connection = new ConnectionBuilder<{}, {}>()
    .mapStateToProps(state => ({ clicked: state.clicked }));

export class HelloComponent extends connection.base() {
	render() {
		return dom.div({ onClick: () => this.props.dispatch({ type: "IncrementClicked" }) }, 
			"Hello",
		    "Clicked: " + this.props.clicked);
	}
}

export const Hello = createFactory(connect(HelloComponent));
