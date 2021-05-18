export type InitialStateLoading = typeof initState
type LoadingActionType = ReturnType<typeof loadingAC>

const initState = {
    isLoading: false
}

export const loadingReducer = (state: InitialStateLoading = initState, action: LoadingActionType): InitialStateLoading => { // fix any
    switch (action.type) {
        case 'SET-LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default:
            return state
    }
}

export const loadingAC = (isLoading: boolean) => {
    return ({type: 'SET-LOADING', isLoading} as const)} // fix any