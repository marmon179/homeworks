import React, {ChangeEvent} from 'react'
import {makeStyles, Slider} from '@material-ui/core';

type SuperDoubleRangePropsType = {
    handleChange2: (event: ChangeEvent<{}>, newValue: any) => void
    value2: number[]

}


const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = ({value2, handleChange2}) => {

    const useStyles = makeStyles({
        root: {
            width: 300,
        },
    });
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Slider
                onChange={handleChange2}
                value={value2}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
            />
        </div>
    )
}

export default SuperDoubleRange
