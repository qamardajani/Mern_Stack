import React from 'react';

// Functional Component w/ destructoring props
const BoxGenerator = (props) => {
    const { colors } = props;

    // Using map to cycle through colors 
    return (
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {
                colors.map((color, c) => {
                    return (
                        <div key={c} className="box" style={{ backgroundColor: color.color, height: color.boxSize +"px", width: color.boxSize +"px", margin: '10px' }}>
                    </div>
                    )
                })
            }
        </div>
    );
}

export default BoxGenerator;