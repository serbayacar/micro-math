import React, { useState } from 'react'


function Inputs() {

    const [numbers, setInputs] = useState({});

    const handleChange = (e) => {
        e.preventDefault();
        const numberone = e.target.numberone
        const numbertwo = e.target.numbertwo

    }

    return (
        <form>
            <label>
                Number1: <input 
                    type="text"
                    value={numbers} 
                    onChange={(e) => setNumberone(e.target.value)}/>
            </label>
        </form>
    )
}

export default Inputs