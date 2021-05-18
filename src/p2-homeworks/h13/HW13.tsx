import React from 'react';
import {Request} from './request/Request';
import s from './HW13.module.css'


export function HW13() {
    return (
        <div>
            <hr/>
            <span>
                homeworks 13
            </span>
            <div className={s.body}><Request/></div>
            <hr/>
        </div>
    );
}



