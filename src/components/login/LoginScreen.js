import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/types";

export const LoginScreen = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const handleChange = () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Kevin'
            }
        }
        dispatch(action);
        const lastPath = localStorage.getItem('lastPath') || '/marvel';
        navigate(lastPath, {
            replace: true
        });
    }
    return (<div>
        <h1>Login Screen</h1>
        <hr />
        <button
            className="btn btn-primary"
            onClick={handleChange}
        >
            Login
        </button>
    </div>);
};
