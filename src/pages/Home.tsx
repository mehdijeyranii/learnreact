import { Link } from "react-router-dom";

function Home() {
    return (
        <div>
            <div className="w-full h-10 flex justify-center items-center gap-5 bg-slate-200">
                <Link to="dashboard">Go to Dashboard</Link>
                <Link to="users">Users</Link>
                <Link to="posts">Posts</Link>
            </div>
            <h1>Home Page</h1>
        </div>
    );
}

export default Home;
