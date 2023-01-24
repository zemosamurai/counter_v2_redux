import {AppRootStateType} from "../../bll/store";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('app-state')
        if (serializedState === null) {
            return undefined
        }
        let parsedState = JSON.parse(serializedState)
        return {...parsedState, counter: {...parsedState.counter, count: parsedState.counter.minValue}}
    } catch (e) {
        return undefined
    }
}



export const saveState = (state: AppRootStateType) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('app-state', serializedState)
    } catch (e) {

    }
}