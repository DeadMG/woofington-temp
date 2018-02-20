export class UnitID {
    public static toString(id: UnitID) {
        return <any><string>id;
    }

    private static i = 0;
    public static create() {
        return <UnitID><any>`unit_${UnitID.i++}`;
    }
}

export interface StoreState {
    units: { [key: string]: Unit };
    viewport: Viewport;
    map: Map;
    started: boolean;
}

export interface Map {
    width: number;
    height: number;
}

export interface Viewport {
    x: number;
    y: number;
    width: number;
    height: number;
}

export type Unit = Mothership;

export enum UnitType {
    Mothership
}

export interface Mothership {
    type: UnitType.Mothership;
    x: number;
    y: number;
    id: UnitID;
}

export function initialState(width: number, height: number): StoreState {
    const initialId = UnitID.create();
    return {
        units: { 
            [UnitID.toString(initialId)]: {
                type: UnitType.Mothership,
                x: 0,
                y: 0,
                id: initialId
            }
        },
        viewport: {
            x: 0,
            y: 0,
            width: width,
            height: height
        },
        map: {
            width: width * 2,
            height: height * 2
        },
        started: false
    };
}
