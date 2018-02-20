import { createFactory, dom } from "App/ReactHelpers";
import { ConnectionBuilder, connect } from "App/ReduxHelpers";

const connection = new ConnectionBuilder<{}, {}>()
    .mapStateToProps(state => ({ 
        viewport: state.viewport,
        started: state.started
     }));

export class UIComponent extends connection.base() {
    render() {
        return dom.div({ style: { width: this.props.viewport.width, height: this.props.viewport.height } },
            this.renderMenu(),
            this.renderIngame());
    }

    private renderMenu() {
        if (this.props.started) return null;
        return dom.div({ style: { width: "100%", height: "100%", backgroundColor: "#000000" } },
            dom.button({ onClick: () => this.props.dispatch({ type: "Start" }) }, "Start"));
    }

    private renderIngame(): React.ReactNode {
        if (!this.props.started) return null;
        return null;
    }
}

export const UI = createFactory(connect(UIComponent));
