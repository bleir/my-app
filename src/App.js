import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import './App.css';

function App() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');

  useEffect(() => { 
    const fetchData = async () => {
      const result = await axios(
        `https://hn.algolia.com/api/v1/search?query=${query}`,
      );
 
      setData(result.data);
    };
    fetchData();
  }, [query]);

  
  return (
    <div className="App">
      <TextField 
        id="outlined-basic" 
        label="Type something..." 
        variant="outlined" 
        onChange={event => setQuery(event.target.value)}
      />
      <ul className="list">
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
