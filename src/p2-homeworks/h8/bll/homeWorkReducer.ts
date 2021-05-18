import {UserType} from '../HW8';

type SortPeopleActionType = {
    type: 'sort'
    payload: 'up' | 'down'

}
type CheckActionType = {
    type: 'check'
    payload: number
}

type ActionType = SortPeopleActionType | CheckActionType


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            const newState = [...state].sort((a, b) => {
                if (a.name > b.name) return 1
                else if (a.name < b.name) return -1
                else return 0
            })
            return action.payload === 'up' ? newState : newState.reverse()
        }
        case 'check': {

            return state.filter(t => t.age >= action.payload)
        }
        default:
            return state
    }
}
export const sortPeopleAC = (payload: 'up' | 'down'): SortPeopleActionType => {
    return {type: 'sort', payload}
}
export const checkPeopleAC = (payload: number): CheckActionType => {
    return {type: 'check', payload}
}