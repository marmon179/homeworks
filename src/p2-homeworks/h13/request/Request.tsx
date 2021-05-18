import React, {useState} from 'react';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {RequestsAPI} from './requestAPI';
import s from '../HW13.module.css';


export function Request() {

    const [success, setSuccess] = useState<boolean>(false)
    const [state, setState] = useState<any>(null)

    const onChangeButton = () => {
        RequestsAPI.createRequest(success)
            .then((res) => {
                setState(res.data.errorText)
            })
            .catch(rej => {
                setState(rej.response.data.errorText)
            })
    }

    return (
        <div className={s.body}>
            <div>{`Ответ с сервера: ${JSON.stringify(state)}`}</div>
            <div>
                <SuperCheckbox
                    checked={success}
                    onChangeChecked={setSuccess}
                />
            </div>
            <div>
                <SuperButton onClick={onChangeButton}>start</SuperButton>
            </div>
        </div>
    );
}



