import React, {useState} from 'react';

function Search({searchWord, changeSearchWord}) {

    return (
        <div>
            <p>Search terms:</p>
            <div className='input-container'>
                <i className="fa fa-search icon"></i>
                <input id='search_input' value={searchWord} onChange={changeSearchWord}/>
            </div>
        </div>
    );
}; 

export default Search;