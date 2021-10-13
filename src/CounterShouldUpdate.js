import React, { useState } from 'react'
import Counter1ShouldUpdate from "./Counter1ShouldUpdate";
import Counter2ShouldUpdate from "./Counter2ShouldUpdate";


function CounterShouldUpdate() {

    // Using useState hooks for defining state
    const [counter1, setCounter1] = useState(0);

    const increase1 = () => {
        setCounter1(counter1 + 1);
    };
    const [counter2, setCounter2] = useState(0);

    const increase2 = () => {
        setCounter2(counter2 + 1);
    };

    return (
        <div className="container">
            <div>
                <Counter1ShouldUpdate value={counter1} onClick={increase1} />
            </div>
            <div>
                <Counter2ShouldUpdate value={counter2} onClick={increase2} />
            </div>
        </div>
    );
};

export default CounterShouldUpdate;
