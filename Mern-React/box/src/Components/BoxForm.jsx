import React, { useState } from 'react';
import BoxGenerator from './BoxGenerator';

// Functional Component w/ hook (useState) 
const BoxForm = (props) => {
    const [colors, setColors] = useState([]);
    const [boxSize, setBoxSize] = useState('');
    const [color, setColor] = useState('');

    // Handles the box size
    const handleSize = e => {
        setBoxSize(e.target.value);
    }

    // Handles the box color
    const handleColor = e => {
        setColor(e.target.value);
    }

    // Handles the Submit (Add) (preventDefault handles the data that react wants to send to memory)
    const handleAdd = e => {
        e.preventDefault();

        const newColor = { 
            color: color,
            boxSize: boxSize
        };

        // Calling setColors to add the newColor to colors 
        setColors([...colors, newColor]);
    }

    return (
        <>
            <form onSubmit={handleAdd}>
                {/* Adding Box Color Input to form (handleColor handles this) */}
                <label htmlFor="colorSelect">Color of Box</label>
                <input
                    type="text" name="color" 
                    onChange={handleColor}
                />

                {/* Adding Box Size Input to form (handleSize handles this) */}
                <label htmlFor="boxSizeSelect">Pixel Size Of Box</label>
                <input
                    type="text" name="boxSize" value={boxSize}
                    onChange={handleSize}
                />
                <button type="submit">Add</button>
            </form>
            <BoxGenerator colors={colors} />
        </>
    );
}

export default BoxForm;