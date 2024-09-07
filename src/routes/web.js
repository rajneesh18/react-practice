import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import Products from "../components/Products";


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
                <Route path="/list-product" element={ <Products /> } />
                
                <Route path="/*" element={ <PageNotFound /> } />

            </Routes>
        </BrowserRouter>
    );
}

export default Web;