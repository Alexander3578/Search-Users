import {TextField} from '@/components/textField';
import {Button} from '@/components/button';

import S from './UserSearch.module.css';
import {useState} from 'react';
import {useGetUserByNameQuery} from '../api/userSearch-api';
import {UserList} from '../../userList/ui';

export const UserSearch = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const [name, setName] = useState<string>('');

    const {data, isSuccess, isError, error}
        = useGetUserByNameQuery({username: name}, {skip: !name});

    const handleInputChange = (value: string) => {
        setInputValue(value);
    };

    const handleSearch = () => {
        if (inputValue.trim()) {
            setName(inputValue.trim());
        }
    };

    return (
        <div>
            <div className={S.container}>
                <TextField
                    value={inputValue}
                    onValueChange={handleInputChange}
                />
                <Button onClick={handleSearch}>Search</Button>
            </div>
            {isError || data?.length === 0 && <p className={S.error}>{error ? error?.message : 'Пользователи не найдены'}</p>}

            {isSuccess && data?.length !== 0 && (
                <UserList users={data}/>
            )}
        </div>
    );
};
