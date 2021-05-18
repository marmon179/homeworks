import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = { // need to fix any
    data: AffairType[]
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    const onAll = s.button + ' ' + (props.filter === 'all' ? s.active : '')
    const onHigh = s.button + ' ' + (props.filter === 'high' ? s.active : '')
    const onMiddle = s.button + ' ' + (props.filter === 'middle' ? s.active : '')
    const onLow = s.button + ' ' + (props.filter === 'low' ? s.active : '')

    return (
        <div>

            {mappedAffairs}

            <SuperButton onClick={setAll} className={onAll}>All</SuperButton>
            <SuperButton onClick={setHigh} className={onHigh}>High</SuperButton>
            <SuperButton onClick={setMiddle} className={onMiddle}>Middle</SuperButton>
            <SuperButton onClick={setLow} className={onLow}>Low</SuperButton>

        </div>
    )
}

export default Affairs
