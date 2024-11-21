import { useNavigate } from "react-router-dom";

const RedirectButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };
    return (
        <button
            className="px-4 py-2 rounded-lg bg-violet-600 text-slate-50"
            onClick={handleClick}
        >
            Go to Home
        </button>
    );
};

export default RedirectButton;
