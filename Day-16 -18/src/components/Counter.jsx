import { useState } from "react";

const Counter = () => {
    const [num, setNum] = useState(0)

    return (
        <div className="flex gap-3 items-center justify-center p-4">
            <button className="border w-10 aspect-square rounded cursor-pointer hover:bg-fuchsia-500 hover:text-white" onClick={() => setNum(num + 1)} >+</button>
            <span className="text-2xl">{ num }</span>
            <button className="border w-10 aspect-square rounded cursor-pointer hover:bg-fuchsia-500 hover:text-white" onClick={() => setNum(num - 1)}>-</button>
        </div>
    );
};

export default Counter;