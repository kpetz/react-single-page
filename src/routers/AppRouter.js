import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";

export const AppRouter = () => {
    return <BrowserRouter>
        <Routes>
            <Route path="/login" element={<LoginScreen />} />
        </Routes>
    </BrowserRouter>;
};
