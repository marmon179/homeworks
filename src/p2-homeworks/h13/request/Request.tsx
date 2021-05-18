import React, {useState} from 'react';
import SuperButton from '../../h4/common/c2-SuperButton/SuperButton';
import SuperCheckbox from '../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import {RequestsAPI} from './requestAPI';


export function Request() {
    const [success, setSuccess] = useState<boolean>(false)
    const [state, setState] = useState<any>(null)
    const create = () => {
        RequestsAPI.createRequest(success)
            .then((res) => {
                setState(res.data.errorText)
            })
            .catch(rej => {
                setState(rej.response.data.errorText)
            })
    }

    return (
        <div>
            <div>{`Ответ с сервера: ${JSON.stringify(state)}`}</div>
            <div>
                <SuperCheckbox
                    checked={success}
                    onChangeChecked={setSuccess}
                />
            </div>
            <div>
                <SuperButton onClick={create}>start</SuperButton>
            </div>
        </div>
    );
}



