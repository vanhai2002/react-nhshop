import React from 'react'



const ProductDetailMenu = () => {
  return (
    <>
     <section className="menuShop">
          <ul>
            <li>
              <a href="/">Home</a>
              <span>
                <img src="../assets/next.svg" alt="" />
              </span>
            </li>
            <li>
              <a href="./shop">Shop</a>
              <span>
                <img src="../assets/next.svg" alt="" />
              </span>
            </li>
            <div className="menuShop_title">
              <a className="menuShop_name" href="#">
                Asgaard sofa
              </a>
            </div>
          </ul>
        </section></>
  )
}

export default ProductDetailMenu