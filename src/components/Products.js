import React from "react";
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { add } from "../redux/feature/cartSlice";
import { getProducts } from "../redux/feature/productSlice";
import "./Products.css";

const Products = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);

  // const [products,getProducts]=useState([])
  useEffect(() => {
    
    //dispatch an action for get products
    dispatch(getProducts());
  }, []);
  const addToCart = (product) => {
    dispatch(add(product));
  };
  const cards = products.map((product) => (
    < >
    
      <div className="item-container" key={product.id} >
        
        <div className="main-item">
            <img src={product.image_url} alt="" style={{ width: "100px", height: "130px" }}/>
        </div>
        <h3 className="item-heading">
            {product.name}
        </h3>
        <p className="item-description">
            {product.tagline}
        </p>
        
        <p className="item-price">{product.first_brewed}</p>
        <button className="item-cart-btn" onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
    </>
  ));
  const [cardsPerPage, setCardsperPage] = useState(3);
  const [currentPage, setCurrentPage] = useState(1);
  const numOfTotalPages = Math.ceil(cards.length / cardsPerPage);
  const pages = [...Array(numOfTotalPages + 1).keys()].slice(1);
  console.log(pages);
  const indexOfLastCards = currentPage + cardsPerPage;
  const indexOfFirstCards = indexOfLastCards - cardsPerPage;
  const visiblecards = cards.slice(indexOfFirstCards, indexOfLastCards);
  const prevPageHandler = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const nextPageHandler = () => {
    if (currentPage !== numOfTotalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div>
      <h1 className="heading" style={{ textAlign:"center" }}>Welcome, To BeerWorld!!!</h1>
      <div className="row" style={{ display:"flex" ,justifyContent:"space-between"}}>{visiblecards}</div>
      <div className=" pagination d-flex justify-content-center   ">
        <button onClick={prevPageHandler}  >PREV</button>
        <p>
          {pages.map((page) => (
            <span
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${currentPage === page ? "active" : ""}`}
            >
              {`${page}   |  `}
            </span>
          ))}
        </p>
        <button onClick={nextPageHandler} >NEXT</button>
      </div>
    </div>
  );
};

export default Products;
