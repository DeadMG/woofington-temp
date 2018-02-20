import { ConnectionBuilder, connect } from "App/ReduxHelpers";
import { dom, createFactory } from "App/ReactHelpers";

const connection = new ConnectionBuilder<{}, {}>()
    .mapStateToProps(state => state);

export class CanvasComponent extends connection.base() {
    render() {
        if (!this.props.started) return null;
        return dom.canvas({ style: { width: this.props.viewport.width, height: this.props.viewport.height } });
    }

    componentDidUpdate() {
        /* Perform any random side effects here */
    }
}

export const Canvas = createFactory(connect(CanvasComponent));
