import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name, className,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }


    const mappedOptions: any[] = options ? options.map((o, i) => (
        <div className={s.body}>
            <label key={name + '-' + i} className={s.label}>
                <input
                    className={s.radio}
                    type={'radio'}
                    name={name}
                    checked={o === value}
                    value={o}
                    onChange={onChangeCallback}
                    // name, checked, value, onChange
                    {...restProps}
                />
                <div className={s.radDesign}/>
                <div className={s.RadText}>{o}</div>
            </label>
        </div>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
