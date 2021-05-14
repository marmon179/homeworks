import React from 'react';
import s from './HW12.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {changeThemeC} from './bll/themeReducer';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';

const themes = ['dark', 'red', 'green', 'yellow'];

function HW12() {

    const theme = useSelector<AppStoreType, string>(state => state.theme.themes); // useSelector
    const dispatch = useDispatch()
    const onChangeCallback = (value: string) => {
        dispatch(changeThemeC(value))
    }
    // useDispatch, onChangeCallback

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>
            <SuperRadio
                value={theme}
                name={'radio'}
                options={themes}
                onChangeOption={onChangeCallback}
            />
            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
