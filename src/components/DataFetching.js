import React, { useState, useEffect } from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            console.log(res);
            setPosts(res.data);
        }
        ).catch((err) => {
            console.log(err);
            
        }
        );
        return () => {
            
        }
    }, [])
    return (
        <div>
            <ul>
                {
                    posts.map(ost => (
                    <li key = {ost.id}>{ost.title}</li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default DataFetching
