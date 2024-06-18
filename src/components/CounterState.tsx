import { useState } from "react";

const CounterState = () => {
    const [count, setCount] = useState<number>(0);

    const clickButton = () => {
        setCount(count + 1);
        console.log(count);
        //alert(count);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            <p>{count}</p>
            <button onClick={clickButton} className="bg-blue-500 p-3">Clique Aqui + 1</button>
        </div>
    );
}

export default CounterState;