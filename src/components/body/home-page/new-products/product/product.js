import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Waitting from "./../../../../../common/waiting";
import AddToCart from "../../../../../common/add-to-cart/addToCart";
import { db } from "../../../../../firebase";

const Product = (props) => {
  const [newProducts, setNewProducts] = useState([]);
  const [newDatas, setNewDatas] = useState([]);
  const { dataCategory } = props;

  let settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const fetchData = async () => {
      let products = [];
      let data = [];
      await db
        .collection("products")
        .get()
        .then((snapshot) =>
          snapshot.docs.map((doc) => {
            products.push({ ...doc.data(), id: doc.id });
            return true;
          })
        );
      products.forEach((item) => {
        if (item.newProduct === true) {
          data.push(item);
        }
        return true;
      });

      setNewProducts([...data]);
      setNewDatas([...data]);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (newProducts) setNewDatas([...newProducts]);
    if (dataCategory) {
      let products = newProducts.filter(
        (item) => item.category === dataCategory
      );
      setNewDatas([...products]);
    }
  }, [dataCategory, newProducts]);

  return newDatas ? (
    <div className="products-slick">
      <Slider {...settings}>
        {newDatas.map((product, i) => {
          let oldPrice = product.oldPrice ? `$${product.oldPrice}` : "";
          let discount =
            product.discount === "" ? (
              ""
            ) : (
              <span className="sale">{`-${product.discount}%`}</span>
            );
          let newPro = product.newProduct ? (
            <span className="new">NEW</span>
          ) : (
            ""
          );
          const imgUrl = require(`../../../../../img/${product.img}`).default;
          return (
            <div className="product discount" key={i}>
              <div className="product-img">
                <img src={imgUrl} alt="" />
                <div className="product-label">
                  {discount}
                  {newPro}
                </div>
              </div>
              <div className="product-body">
                <p className="product-category">Category</p>
                <h3 className="product-name">
                  <Link
                    to={`/detail/${product.id}`}
                    className="product-name-detail"
                  >
                    {product.name}
                  </Link>
                </h3>
                <h4 className="product-price">
                  ${product.newPrice}
                  <del className="product-old-price ml-2">{oldPrice}</del>
                </h4>
                <div className="product-rating">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                </div>
                <div className="product-btns">
                  <button className="add-to-compare">
                    <i className="fas fa-exchange-alt" />
                    <span className="tooltipp">add to compare</span>
                  </button>
                  <button className="quick-view">
                    <i className="fa fa-eye" />
                    <span className="tooltipp">quick view</span>
                  </button>
                </div>
              </div>
              <AddToCart id={product.id} />
            </div>
          );
        })}
      </Slider>
    </div>
  ) : (
    <Waitting custom={{ position: "relative", top: "20px" }} />
  );
};

export default Product;
