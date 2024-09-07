import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";


const PageNotFound  = () => {
    return <>
        <p>Page Not Found</p>
    </>
}

function Web() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                
                <Route path="/*" element={ <PageNotFound /> } />

            </Routes>
        </BrowserRouter>
    );
}

export default Web;