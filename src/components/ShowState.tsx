import { useState } from "react";

const ShowState = () => {
    const [show, setShow] = useState<boolean>(false);

    const clickButton = () => {
        setShow(!show);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center text-3xl">
            <button onClick={clickButton} className="bg-blue-500 p-3">{show ? 'Ocultar' : 'Mostrar'}</button>
            {show && <p>teste teste teste teste teste teste teste teste</p>}
        </div>
    );
}

export default ShowState;