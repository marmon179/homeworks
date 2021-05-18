import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = s.error ? s.errorInput : s.input // need to fix with (?:)

    return (
        <div>
            <div>
                <SuperInputText value={name} onChange={setNameCallback}
                                className={error ? inputClass : s.input}
                                onBlur={setNameCallback}
                />
                <div className={s.error}>{error}</div>
            </div>
            <SuperButton onClick={addUser} disabled={!name}>add</SuperButton>
            {/*<button onClick={addUser} className={s.button} disabled={!name}>add</button>*/}
            <div className={s.count}>{totalUsers}</div>
        </div>
    )
}

export default Greeting
