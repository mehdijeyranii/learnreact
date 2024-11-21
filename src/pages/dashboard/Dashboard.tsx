import { Link, Outlet } from "react-router-dom";

function Dashboard() {
    return (
        <div className="w-full h-dvh overflow-hidden bg-red-300 flex justify-start items-start flex-col">
            <header className="w-full h-16 bg-slate-300 flex justify-center items-center gap-2">
                <Link className="text-lg font-semibold" to="/">
                    Go to Home
                </Link>
            </header>
            <div className="w-full h-dvh bg-yellow-200 flex ">
                <div className="w-3/12 h-full bg-red-800 flex flex-col p-6">
                    Link
                    <Link to="profile">Profile</Link>
                    <Link to="settings">Settings</Link>
                </div>
                <div className="w-9/12 h-full bg-slate-100">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
