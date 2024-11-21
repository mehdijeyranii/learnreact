import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";
import UserPage from "./pages/UserPage";
import Posts from "./pages/Posts";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="dashboard" element={<Dashboard />}>
                <Route path="profile" element={<Profile />} />
                <Route path="settings" element={<Settings />} />
            </Route>
            <Route path="/users" element={<UserPage />} />
            <Route path="/posts" element={<Posts />} />
        </Routes>
    );
}

export default App;
