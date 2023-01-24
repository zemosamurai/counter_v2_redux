const initialState = {
    minValue: 0,
    maxValue: 5,
    count: 0,
    disabled: true
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_MIN_VALUE': {
            return {...state, minValue: action.value}
        }
        case 'SET_MAX_VALUE': {
            return {...state, maxValue: action.value}
        }
        case 'SET_COUNT_VALUE': {
            return {...state, count: action.value}
        }
        case 'SET_DISABLED': {
            return {...state, disabled: action.disabled}
        }
        default:
            return state
    }
}


//actions
export const setMinValueAC = (value: number) => ({type: 'SET_MIN_VALUE', value} as const)
export const setMaxValueAC = (value: number) => ({type: 'SET_MAX_VALUE', value} as const)
export const setCountValueAC = (value: number) => ({type: 'SET_COUNT_VALUE', value} as const)
export const setDisabledAC = (disabled: boolean) => ({type: 'SET_DISABLED', disabled} as const)

// types
type InitialStateType = typeof initialState
type ActionsType =
    | ReturnType<typeof setMinValueAC>
    | ReturnType<typeof setMaxValueAC>
    | ReturnType<typeof setCountValueAC>
    | ReturnType<typeof setDisabledAC>