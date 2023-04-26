import { useState, useEffect } from "react";

import { Params, Model } from '../../Data/Data';
import { IParam, IModel, IValues } from "./interface";
import { Loader } from "../Loader/loader";

import './ParamEditor.scss';

export const ParamEditor = () => {
    const modelData: IModel = Model;
    const paramsData: IParam[] = Params;
    const [model, setModel] = useState<IModel>();
    const [params, setParams] = useState<IParam[]>([]);
    const [values, setValues] = useState<IValues[]>([]);
    const [loading, setLoading] = useState(true);

    const getModel = () => {
        setModel(modelData);
    };

    const getParams = () => {
        setParams(paramsData);
    };

    useEffect(() => {
        const getData = async () => {
            await getParams();
            await getModel();
            if (model && model.paramValues.length > 0 && params.length > 0) {
                setValues(params.map((item) => ({
                    id: item.id,
                    name: item.name,
                    value: model.paramValues.find((m) => m.paramId === item.id)?.value ?? '',
                })));
                setLoading(false);
            }
        }

        getData();
    }, [model, params]);

    const changeValue = (id: number, event: React.ChangeEvent<HTMLInputElement>) => {
        setValues(values.map((value) => {
            return value.id === id
                ? {...value, value: event.target.value }
                : {...value}
        }))
    };

    return (
        <>
            {
                loading
                    ? <Loader/>
                    : <div className="products">
                        {values.map(item => (
                            <div className="products__item" key={item.id}>
                                <p className="products__item__name">{item.name}</p>
                                <input type="text"
                                       value={item.value}
                                       onChange={(event) => changeValue(item.id, event)}
                                       className="products__item__value"
                                       id={item.id.toString()}
                                />
                            </div>
                        ))}
                    </div>
            }
        </>
    );
}
