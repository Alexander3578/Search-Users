import {FC, memo} from 'react';
import logo from '@/assets/Ellipse 45.png'
import S from './User.module.css'

type User = {
    name: string
    email: string
}

export const User: FC<User> = memo(({name, email}) => {
    return (
        <div className={S.userContainer}>
            <img src={logo} alt={'User avatar'} className={S.userImage}/>
            <div className={S.userInfo}>
                <div className={S.userName}>{name}</div>
                <div className={S.userEmail}>{email}</div>
            </div>
        </div>
    );
});

