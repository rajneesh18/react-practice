import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../components/App";


const PageNotFound  = () => {
    return <>
        <p>Page Not Found</p>
    </>
}

const Products  = () => {
    const products = ["Learning React", "Pro React", "Beginning React"];

    const listProducts = products.map((product) => {
       return <li key={product.toString()}>{product}</li>
    })
    
    return (
        <div>
            <ul>{listProducts}</ul>
        </div>
    )
}

function Web() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="list-product" element={ <Products /> } />
                
                <Route path="*" element={ <PageNotFound /> } />

            </Routes>
        </BrowserRouter>
    );
}

export default Web;