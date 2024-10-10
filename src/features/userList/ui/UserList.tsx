import {User} from './user';
import {FC, memo} from 'react';
import S from './UserList.module.css'

type UserList = {
    users: UserType[]
}

export const UserList: FC<UserList> = memo(({users}) => {
    return (
        <ul className={S.userList}>
            {users.map((user) =>
                <li key={user.id}
                    className={S.userItem}>
                    <User name={user.name} email={user.email}/>
                </li>)}
        </ul>
    );
});

