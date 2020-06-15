import React from 'react';

const SearchBox = ({ placeHolder, handleChanger }) => {
    return (
        <div className="align-center">
            <input
                onChange={handleChanger} 
                type="search" 
                placeholder={placeHolder} 
                className="search"
            />
        </div>
    )
}

export default SearchBox;