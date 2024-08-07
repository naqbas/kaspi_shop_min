import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 1000);
    }, []);


    return (
        <h1 className="text-center text-red-700 text-5xl">Not Found!</h1>
    );
}

export default NotFound