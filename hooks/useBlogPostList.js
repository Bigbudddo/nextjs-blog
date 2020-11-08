import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

export default () => {
    const [results, setResults] = useState([]);
    
    const getBlogPosts = async () => {
        try {
            const res = await fetch('/api/blogs');
            const json = await res.json();

            setResults(json.posts);
        }
        catch (err) {
            // todo; add error message?
            setResults([]);
        }
    };

    useEffect(() => {
        getBlogPosts();
    }, []);

    return [getBlogPosts, results];
};