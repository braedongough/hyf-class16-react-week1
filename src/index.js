import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './counter'

function UserItem({ name, age }) {
    return (
        <li>
            <h3>
                {name}: {age}
            </h3>
        </li>
    )
}

function UserItemExpanded({ fullname, address, age, height, spokenLanguages }) {
    return (
        <h3>
            <h3>Name: {fullname}</h3>
            <h3>Address: {address}</h3>
            <h3>Age: {age}</h3>
            <h3>Height: {height}</h3>
            <h3>
                Spoken Languages:
                <ul>
                    {spokenLanguages.map((language) => (
                        <li>{language}</li>
                    ))}
                </ul>
            </h3>
        </h3>
    )
}

function UserList({ users }) {
    return (
        <ul>
            {users.map((user) => {
                return (
                    <UserItemExpanded
                        fullname={user.fullname}
                        address={user.address}
                        age={user.age}
                        height={user.height}
                        spokenLanguages={user.languages}
                    />
                )
            })}
        </ul>
    )
}

const users = [
    {
        fullname: 'testy mc testy face',
        address: 'test alley',
        age: 35,
        height: 185,
        languages: ['danish', 'arabic'],
    },
    {
        fullname: 'Ahmad Hansen',
        address: 'test alley 2',
        age: 89,
        height: 167,
        languages: ['english', 'polish'],
    },
    {
        fullname: 'Peter Petersen',
        address: 'alley 2',
        age: 19,
        height: 176,
        languages: ['english', 'danish'],
    },
]

ReactDOM.render(<UserList users={users} />, document.getElementById('root'))
