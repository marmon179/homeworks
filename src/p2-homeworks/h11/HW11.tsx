import React, {useState} from 'react'
import {makeStyles, Slider} from '@material-ui/core';
import s from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(10)
    const [value2, setValue2] = useState([9,30])
    const useStyles = makeStyles({
        root: {
            width: 200,
        },
    });
    const useStyles2 = makeStyles({
        root: {
            width: 300,
        },
    });

    const classes = useStyles();
    const classes2 = useStyles2();
    const handleChange = (event: any, newValue: any) => setValue1(newValue)
    const handleChange2 = (event: any, newValue: any) => setValue2(newValue)

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

                <div className={classes2.root}>
                    <span>{value2[0]}</span>
                    <Slider
                        onChange={handleChange2}
                        value={value2}
                        valueLabelDisplay="auto"
                        aria-labelledby="range-slider"
                        // сделать так чтоб value1 и value2 изменялось

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
