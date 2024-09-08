

import Rating from "./Rating";


const Products  = () => {
    // const products = ["Learning React", "Pro React", "Beginning React"];

    // const listProducts = products.map((product) => {
    //    return <li key={product.toString()}>{product}</li>
    // })
    
    return (
        <div>
            {/* <ul>{listProducts}</ul> */}

            <Rating rating='0' />
        </div>
    )
}

export default Products;