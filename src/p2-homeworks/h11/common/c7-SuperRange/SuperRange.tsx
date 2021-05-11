import React, {ChangeEvent} from 'react'
import {makeStyles, Slider} from '@material-ui/core';


type SuperRangePropsType = {
    handleChange:(event: ChangeEvent<{}>, newValue: any) => void
    value1: number
};

const SuperRange: React.FC<SuperRangePropsType> = ({handleChange,value1}) => {
    const useStyles = makeStyles({
        root: {
            width: 200,
        },
    });
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Slider
                onChange={handleChange}
                value={value1}
                aria-labelledby="continuous-slider"
                color="secondary"
            />
        </div>
    )
}

export default SuperRange
