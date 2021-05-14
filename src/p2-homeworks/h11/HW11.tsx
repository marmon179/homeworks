import React, {ChangeEvent, useState} from 'react'
import s from './HW11.module.css'
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
    const [value1, setValue1] = useState<number>(10)
    const [value2, setValue2] = useState<number>(50)
    const onChangeRange = (value: number | number[]) => {
        if (Array.isArray(value)) {
            setValue1(value[0])
            setValue2(value[1])
        }
    }

    // const handleChange = (event: ChangeEvent<{}>, newValue: any) => setValue1(newValue)
    // const handleChange2 = (event: ChangeEvent<{}>, newValue: any) => setValue2(newValue)

    return (
        <div>
            <hr/>
            homeworks 11
            {/*should work (должно работать)*/}
            <div className={s.body}>
                <div>
                    <span>{value1}</span>
                    <SuperRange
                        value={value1}
                        onChangeRange={setValue1}
                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        // сделать так чтоб value1 и value2 изменялось
                        value={[value1, value2]}
                        onChangeRange={onChangeRange}
                    />
                    <span>{value2}</span>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
