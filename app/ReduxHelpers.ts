import { StoreState } from "App/Model/StoreState";
import { Action } from "App/Model/Actions";

class ConnectionBuilderInternal<Props, State, MapStateToProps = {}> {
    protected constructor(public mapStateToPropsFunc: { (state: StoreState, props: Props): MapStateToProps }) {

    }
    
    base() {
        const instance = this;
        return class extends React.Component<Props & MapStateToProps & { dispatch: { (action: Action): void } }, State> {
            public static connection = instance;
        };
    }
}

export class ConnectionBuilder<Props, State> extends ConnectionBuilderInternal<Props, State, {}> {
    public constructor() {
        super(() => ({}));
    }

    mapStateToProps<MapStateToProps>(mapStateToProps: { (state: StoreState, props: Props): MapStateToProps }) {
        return new ConnectionBuilderInternal<Props, State, MapStateToProps>(mapStateToProps);
    }
}

export function connect<T extends { connection: ConnectionBuilderInternal<Props, State, MapStateToProps> } & React.ComponentType<Props & MapStateToProps & { dispatch: { (action: Action): void } }>, Props, State, MapStateToProps>(component: T){
    return ReactRedux.connect<MapStateToProps, { dispatch: { (action: Action): void } }, Props, StoreState>(
        component.connection.mapStateToPropsFunc,
        dispatch => ({ dispatch: dispatch })
    )(component);
}
