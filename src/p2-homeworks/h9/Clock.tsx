import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW9.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        stop()
        const id: number = +setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString() || <br/> // fix with date
    const stringDate = date?.toLocaleDateString() || <br/> // fix with date

    return (
        <div className={s.body}>
            <div>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                    className={s.time}
                >
                    {stringTime}
                </div>

                {show ? (
                    <div className={s.date}>
                        {stringDate}
                    </div>
                ) : (
                    <br/>
                )
                }</div>

            <span>
                <SuperButton onClick={start}>start</SuperButton>
                <SuperButton onClick={stop} red>stop</SuperButton>
            </span>

        </div>
    )
}

export default Clock
