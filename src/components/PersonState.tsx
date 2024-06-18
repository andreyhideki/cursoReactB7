import { useState } from "react";
import { Person } from "../types/person";

const PersonState = () => {

    const [person, setPerson] = useState<Person>({
        name: '',
        lastName: '',
        age: 0,
        city: '',
        email: ''
    });

    return (
        
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            <input 
                type="text" 
                placeholder="digite seu nome"
                value={person.name} 
                onChange={(e) => setPerson({ ...person, name: e.target.value })} 
            />

            <input 
                type="text" 
                placeholder="digite seu sobrenome"
                value={person.lastName} 
                onChange={(e) => setPerson({ ...person, lastName: e.target.value })} 
            />

            <p>nome: {person.name} {person.lastName}</p>
            <p>idade: {person.age}</p>
            <p>cidade: {person.city}</p>
            <p>email: {person.email}</p>
        </div>

    );
}

export default PersonState;