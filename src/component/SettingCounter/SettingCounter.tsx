import s from './SettingCounter.module.css'
import {Button} from "../Button/Button";
import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCountValueAC, setDisabledAC, setMaxValueAC, setMinValueAC} from "../../bll/counter-reducer";
import {AppRootStateType} from "../../bll/store";

export const SettingCounter = () => {
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const disabled = useSelector<AppRootStateType, boolean>(state => state.counter.disabled)
    const dispatch = useDispatch()

    const errorMax = maxValue <= minValue
    const error = errorMax || minValue < 0

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => dispatch(setMaxValueAC(+e.currentTarget.value))
    const onChangeStartHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueAC(+e.currentTarget.value))
        dispatch(setCountValueAC(+e.currentTarget.value))
    }
    const onSetHandler = () => {
        dispatch(setDisabledAC(true))
    }
    const onFocusHandler = () => dispatch(setDisabledAC(false))

    return (
        <div className={s.wrapper}>
            <div className={s.count}>
                <div>
                    <p>max value: </p>
                    <input
                        value={maxValue}
                        onFocus={onFocusHandler}
                        className={errorMax ? s.errorInput : ''}
                        type={"number"}
                        onChange={onChangeMaxHandler}
                    />
                </div>
                <div className={s.elemWrap}>
                    <p>start value: </p>
                    <input
                        value={minValue}
                        onFocus={onFocusHandler}
                        type={"number"}
                        onChange={onChangeStartHandler}
                        className={error ? s.errorInput : ''}
                    />
                </div>
            </div>
            <div className={s.btnWrapper}>
                <Button
                    name={'set'}
                    callback={onSetHandler}
                    disable={disabled || error}
                    style={s.btn}
                />
            </div>
        </div>
    )
}