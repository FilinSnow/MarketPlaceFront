import { useState } from 'react';
import Link from 'next/link';
import style from '../styles/Users.module.scss';
import MainContainer from '../components/MainContainer';

const Users = ({ users }) => {

  return (
    <MainContainer >
      {users.map(user => {
        return (
          <div key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </div>
        )
      })}
    </MainContainer >
  )
}

export default Users;

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  console.log(users);
  console.log(1);
  return {
    props: { users }, // will be passed to the page component as props
  }
}
