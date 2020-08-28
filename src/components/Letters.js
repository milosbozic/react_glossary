import React, {useState} from 'react';

function Letters(props) {
    
    return (
        <div>
            {props.letters.map((ll, index) => (
                    <p className='pointer hover' key={index} onClick={e => props.selectLetter(e.target.textContent)}>
                        {ll}
                    </p>
            ))}
        </div>
    );
};

export default Letters;