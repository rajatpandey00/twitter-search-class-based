import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

// @flow
const SearchBox = (props) => {
    return (
            <div className="search-box">
                <input
                    placeholder="Search by User name..."
                    value={props.query}
                    onChange={props.handleInputChange}
                />
                <Button onClick={props.getData}>Submit</Button>
            </div>
    );
}

export default SearchBox;