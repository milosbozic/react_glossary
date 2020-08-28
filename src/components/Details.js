import React, {useState} from 'react';

function Details(props) {

    return (
        <div>
            {
                props.terms.map((term, i) => {
                    if(term.name.toLowerCase() === props.selected.toLowerCase()){
                        return (
                            <div key={i}>
                                <h3 >{term.name}</h3>
                                <br></br>
                                <span> {term.description}</span>
                            </div>
                            
                        )
                    }
                })

            }
        </div>
    );
};

export default Details;