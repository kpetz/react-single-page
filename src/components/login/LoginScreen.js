import { useNavigate } from "react-router-dom";

export const LoginScreen = () => {
    const navigate = useNavigate();
    const handleChange = () => {
        navigate('/',{
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
  