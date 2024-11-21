import { useEffect, useState } from "react";
import PostCard from "./PostCard";

interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    category: string[];
}

const Posts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("http://localhost:4000/posts");
                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }
                const data = await response.json();
                setPosts(data);
            } catch (err: unknown) {
                setError(
                    err instanceof Error
                        ? err.message
                        : "An unknown error occurred"
                );
            } finally {
                setLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (loading) {
        return <p className="text-center">Loading...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500">Error: {error}</p>;
    }
    return (
        <div className="p-5">
            <h1 className="text-5xl font-bold py-3">Posts list</h1>
            <hr />
            <div className="my-3 flex justify-center items-center gap-2 w-full flex-wrap">
                {posts.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Posts;
