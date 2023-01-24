import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import {loadState, saveState} from "../utils/localStorage-utils/localStorage-utils";

const rootReducer = combineReducers({
    counter: counterReducer
})

export type AppRootStateType = ReturnType<typeof rootReducer>
export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
    saveState({
        counter: store.getState().counter
    })
})