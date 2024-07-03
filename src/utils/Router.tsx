import { Route, Routes, BrowserRouter } from "react-router-dom";
import App from '../App';
import HomePage from "../components/HomePage";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<h3>"NO RENDER FOR THIS ROUTE"</h3>} />

                <Route path='/' Component={App}>
                    <Route path='home' Component={HomePage} />
                </Route>
            </Routes >
        </BrowserRouter>
    )
}

export default Router
