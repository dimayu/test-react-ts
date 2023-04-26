export interface IParam {
    id: number;
    name: string;
}

export interface IModel {
    paramValues: {
        paramId: number;
        value: string;
    }[];
}

export interface IValues {
    id: number;
    name: string;
    value: string;
}