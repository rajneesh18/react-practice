import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";
import Products from "../components/Products";
import UserForm from "../components/UserForm";


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

                <Route path="/form" element={ <UserForm /> } />
                
                <Route path="/*" element={ <PageNotFound /> } />

            </Routes>
        </BrowserRouter>
    );
}

export default Web;