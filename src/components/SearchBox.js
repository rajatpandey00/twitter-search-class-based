import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './UserCard';

const SearchBox = () => {
    const [query, setQuery] = useState("");
    const [result, setData] = useState([]);

    const handleInputChange = ({ target: { value } }) => setQuery(value);

    async function getData(query) {
        const response = await axios.get(`http://localhost:4000/gitUsers/${query}`);
        setData(response.data);
    }

    useEffect(() => {
        getData(query)
    }, [query]);

    return (
        <div>
            <div className="text-center">
                <form>
                    <input
                        placeholder="Search by User name..."
                        value={query}
                        onChange={handleInputChange}
                    />
                </form>
            </div>
            <div>
                {result.map((user, index) => <User {...user} key={index} />)}
            </div>
        </div>

    );
}

export default SearchBox;