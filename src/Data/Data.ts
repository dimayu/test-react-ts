import { IParam, IModel } from '../Interface/interface';

export const Params: IParam[] = [
    {
        id: 1,
        name: "Назначение"
    },
    {
        id: 2,
        name: "Длина"
    },
];

export const Model: IModel = {
    "paramValues": [
        {
            "paramId": 1,
            "value": "повседневное"
        },
        {
            "paramId": 2,
            "value": "макси"
        },
    ]
}