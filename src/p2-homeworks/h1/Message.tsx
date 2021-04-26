import React from 'react'
import s from './Message.module.css'

type MessageType = {
    avatar: string
    name: string
    message: string
    time: string
}

function Message(props: MessageType) {
    return (
        <div className={s.message}>
            <div className={s.imageWrapper}>
                {<img src={props.avatar} alt="Avatar"/>}
            </div>


            <div className={s.messagesItem}>
                <div className={s.box}>

                    <div className={s.nameItem}>
                        {props.name}
                    </div>

                    <div className={s.dialogItem}>
                        {props.message}
                    </div>

                    <div className={s.timeItem}>
                        {props.time}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Message
