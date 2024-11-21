interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
    category: string[];
}

const PostCard = ({ post }: { post: Post }) => {
    return (
        <div className="w-80 h-56 bg-slate-200 rounded-xl p-4">
            <h2 className="mb-3 text-slate-800 font-bold line-clamp-1">
                {post.title}
            </h2>
            <p className="line-clamp-3 text-slate-600 h-20">{post.content}</p>
            <p className="flex justify-between items-center text-sm py-3 text-slate-600">
                <span>{post.author}</span>
                <span>{post.date}</span>
            </p>
            <div className="w-full h-[1px] bg-slate-600 my-1"></div>
            <div className="flex flex-wrap gap-2 mt-2">
                {post.category.map((c, index) => (
                    <span
                        key={index}
                        className="bg-slate-400 px-2 py-1 rounded text-sm"
                    >
                        {c}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default PostCard;
