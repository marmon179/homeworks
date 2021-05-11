import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './HW2.module.css'

// types
export type AffairPriorityType = 'high' | 'middle' | 'low' // need to fix any
export type AffairType = {
    _id: number
    name: string
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: AffairType[] = [ // need to fix any
    {_id: 1, name: 'REACT', priority: 'high'},
    {_id: 2, name: 'ANIME', priority: 'low'},
    {_id: 3, name: 'GAMES', priority: 'low'},
    {_id: 4, name: 'WORK', priority: 'high'},
    {_id: 5, name: 'HTML', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairType[], filter: FilterType): AffairType[] => { // need to fix any
    if (filter === 'all') return affairs
    // else if (filter === 'high') return affairs.filter(a => a.priority === 'high')
    // else if (filter === 'middle') return affairs.filter(a => a.priority === 'middle')
    // else if (filter === 'low') return affairs.filter(a => a.priority === 'low')
    // return []
    else return affairs.filter(a => a.priority === filter)


}
export const deleteAffair = (affairs: AffairType[], _id: number): AffairType[] => { // need to fix any
    return affairs.filter(a => a._id != _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <div className={s.body}><Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
                filter={filter}
            /></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
