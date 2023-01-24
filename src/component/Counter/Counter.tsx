import React from 'react';
import s from "./Counter.module.css";
import {Button} from "../Button/Button";
import {Display} from "../Display/Display";
import {useDispatch, useSelector} from "react-redux";
import {setCountValueAC} from "../../bll/counter-reducer";
import {AppRootStateType} from "../../bll/store";


export const Counter = () => {
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const count = useSelector<AppRootStateType, number>(state => state.counter.count)
    const disabled = useSelector<AppRootStateType, boolean>(state => state.counter.disabled)
    const dispatch = useDispatch()

    const error = maxValue <= minValue || minValue < 0

    const onClickUp = () => count < maxValue && dispatch(setCountValueAC(count + 1))
    const onClickReset = () => dispatch(setCountValueAC(minValue))

    return (
        <div className={s.wrapper}>
            <Display
                count={count}
                maxValue={maxValue}
                error={error}
                disabled={disabled}
            />
            <div className={s.btnWrapper}>
                <Button
                    name={'inc'}
                    callback={onClickUp}
                    disable={count === maxValue || error || !disabled}
                    style={s.btn}
                />
                <Button
                    name={'reset'}
                    callback={onClickReset}
                    disable={!disabled || error}
                    style={s.btn}
                />
            </div>
        </div>
    )
};



