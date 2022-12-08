import React from 'react';
import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = (props) => {
    return (
        <MainContainer keywords={'users'}>
            <h1>Список пользователей</h1>
            <ul>
                {props.users.map(user =>
                    <li key={user.id}>
                        <Link href={`users/${user.id}`}>
                            {user.name}
                        </Link>
                    </li>
                )}
            </ul>
        </MainContainer>
    );
};

export async function getStaticProps(context) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();

    return {
        props: {users}
    };
}

export default Users;

