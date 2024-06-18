import { useState } from "react";
import { TodoItem } from "../types/TodoItem";

const TodoState = () =>{
    const [itemInput, setItemInput] = useState('');
    const [list, setList] = useState<TodoItem[]>([
        {id: 1, label: 'Item 1', checked: true},
        {id: 2, label: 'Item 2', checked: false},
        {id: 3, label: 'Item 3', checked: false},
    ]);

    const handleAddItem = () => {
        if(itemInput === '') return;

        setList([...list, {id: list.length + 1, label: itemInput, checked: false}]);
        setItemInput('');
    }

    const handleRemoveItem = (id: number) => {
        //setList(list.filter((item, i) => i !== index));
        setList(list.filter(item => item.id !== id));
    }

    const toggleItem = (id: number) => {
        //metodo 1 por index
        // setList(
        //     //list.map((item, i) => i === index ? {...item, checked: !item.checked} : item)
        
        // );

        //metodo 2 por id
        //     list.map(item => item.id === id ? {...item, checked: !item.checked} : item)

        //metidi 3 por id
        let newList = [...list];
        for (let i in newList) {
            if(newList[i].id === id) {
                newList[i].checked = !newList[i].checked;
                break;
            }
        }
        setList(newList);

    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-2xl">
            <h1 className="text-4xl mt-5">Todo List</h1>
            <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-gray-700 border-2 border-gray-600">
                <input
                    type="text"
                    placeholder="digite seu item"
                    className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
                    value={itemInput}
                    onChange={(e) => setItemInput(e.target.value)}
                />
                <button onClick={handleAddItem} className="p-3 bg-blue-500 text-white rounded-md">Adicionar</button>

            </div>

            <p className="my-4">{list.length} itens na lista</p>

            <ul className="w-full max-w-lg list-disc pl-5">
                {list.map((item) => (
                    <li key={item.id}>
                        <input onClick={() => toggleItem(item.id)} type="checkbox" checked={item.checked} className="w-6 h-6 mr-3" />
                        {item.label} - <button onClick={() => handleRemoveItem(item.id)} className="hover:underline">Remover</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoState;