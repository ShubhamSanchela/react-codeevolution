import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {
            id : 1,
            name: "Shubham",
            age : 28,
            skill : "Angular"
        },
        {
            id : 2,
            name: "Sonu",
            age : 28,
            skill : "React"
        },
        {
            id : 3,
            name: "Harsh",
            age : 28,
            skill : "Html"
        },
    ]

    const personList =  persons.map(person => (
        <Person person={person}  key={person.id}></Person>

    ))
     return <div>{personList}</div>
}

export default NameList
