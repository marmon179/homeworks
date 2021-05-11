import React, {useState} from 'react'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {makeStyles, Slider} from '@material-ui/core';
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const useStyles = makeStyles({
        root: {
            width: 200,
        },
    });
    const classes = useStyles();
    const handleChange = (event: any, newValue: any) => setValue1(newValue)

    return (
        <div >
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={s.body}>
                <div className={classes.root}>

                    <span>{value1}</span>

                    <Slider
                        // сделать так чтоб value1 изменялось
                        onChange={handleChange}
                        value={value1}
                        aria-labelledby="continuous-slider"
                        color = 'secondary'
                    />


                </div>

                <div>
                    <span>{value1}</span>
                    <SuperDoubleRange
                        // сделать так чтоб value1 и value2 изменялось
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
