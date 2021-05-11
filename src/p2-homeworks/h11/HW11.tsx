import React, {ChangeEvent, useState} from 'react'
import s from './HW11.module.css'
import SuperRange from './common/c7-SuperRange/SuperRange';
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange';

function HW11() {
    const [value1, setValue1] = useState<number>(10)
    const [value2, setValue2] = useState<number[]>([34, 54])

    const handleChange = (event: ChangeEvent<{}>, newValue: any) => setValue1(newValue)
    const handleChange2 = (event: ChangeEvent<{}>, newValue: any) => setValue2(newValue)

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.body}>
                <div>

                    <span>{value1}</span>

                    <SuperRange
                        handleChange={handleChange}
                        value1={value1}
                    />


                </div>

                <div>
                    <span>{value2[0]}</span>
                    <SuperDoubleRange
                        handleChange2={handleChange2}
                        value2={value2}
                    />
                    <span>{value2[1]}</span>
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
