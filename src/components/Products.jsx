import Product from "./Product";

const getProducts = () => {
    return [
        {
            imageUrl: "http://loremflickr.com/150/150?random=1",
            productName: "Product 1",
            releasedDate: "May 31, 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim.",
            rating: 4,
            numOfReviews: 2
        },
        {
            imageUrl: "http://loremflickr.com/150/150?random=2",
            productName: "Product 2",
            releasedDate: "October 31, 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim.",
            rating: 2,
            numOfReviews: 12
        },
        {
            imageUrl: "http://loremflickr.com/150/150?random=3",
            productName: "Product 3",
            releasedDate: "July 30, 2016",
            description: "Lorem ipsum dolor sit amet, consectetur adipising elit. Aenean porttitor, tellus laoreet venenatis facilisis, enim.",
            rating: 5,
            numOfReviews: 2
        }
    ]
}

const Products  = () => {
    const products = getProducts();


    const listProducts = products.map((product) => 
        <Product key={product.productName} data={product} />
    )

    return (
        <div>
            { listProducts.length > 0 ? (<ul>{listProducts}</ul>) : ( <ul>No Products to display</ul> ) }
        </div>
    )
}

export default Products;