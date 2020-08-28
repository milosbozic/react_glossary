import React, {useState} from 'react';

function Terms(props) {

    return (
        <div>
            {
               props.filterDisplay.map((term, i) => (
                    <div key={i}>
                        <li >
                            <span className='pointer hover term_title' onClick={() => props.setDetailView(term.name)}>{term.name}</span>
                            <br></br>
                            <span> {term.description}</span>
                        </li>
                    </div>
                ))
            }
        </div>
    );
};

export default Terms;