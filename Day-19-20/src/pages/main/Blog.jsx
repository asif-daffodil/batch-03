import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Blog = () => {
    const [posts, setPosts] = useState([]) 

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(res => setPosts(res.data))
    }, [posts])

    return (
        <div className="grid grid-cols-4 gap-4 p-4">
            <Helmet>
                <title>Blog</title>
            </Helmet>
            {posts.map(post => (
                <div key={post.id} className="border rounded p-4">
                    <h2 className="font-bold text-2xl">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;