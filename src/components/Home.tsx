import React from 'react'
import HomeProducts from './HomeProducts'
import HomeBlog from './HomeBlog'



const Home = () => {
  return (
    <div>
    <div>
  {/*End .banner*/}
  <section className="news">
    <div className="container">
      <div className="section-heading">
        <h2 className="section-heading__title">New</h2>
      </div>
      <div className="section-body">
        <div className="product-list">
          <HomeProducts/>
        </div>
      </div>
    </div>
  </section>
  <div className="container">
    <hr />
  </div>
  {/*End .news*/}
  <section className="shop">
    <div className="container">
      <div className="section-heading">
        <h2 className="section-heading__title">Shop</h2>
      </div>
      <div className="section-body">
        <div className="shops">
          <div className="shop-item" data-aos="fade-up" data-aos-duration={1300}>
            <a  className="shop__link"><img src="https://picsum.photos/id/12/665/500" alt="" className="shop__image" /></a>
          </div>
          <div className="shop-item" data-aos="fade-up" data-aos-duration={1300}>
            <a  className="shop__link"><img src="https://picsum.photos/id/13/665/500" alt="" className="shop__image" /></a>
          </div>
          <div className="shop-item" data-aos="fade-up" data-aos-duration={1300}>
            <a  className="shop__link"><img src="https://picsum.photos/id/14/665/500" alt="" className="shop__image" /></a>
          </div>
          <div className="shop-item" data-aos="fade-up" data-aos-duration={1300}>
            <a  className="shop__link"><img src="https://picsum.photos/id/15/665/500" alt="" className="shop__image" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End .shop*/}
<HomeBlog/>
  <section className="services">
    <div className="container-fluid">
      <div className="service-list">
        <div className="service-item">
          <img src="./assets/icons/10.svg" className="service__image" />
          <div className="service-info">
            <h4 className="service__name">High Quality</h4>
            <p className="service__description">crafted from top materials</p>
          </div>
        </div>
        {/*End service-item*/}
        <div className="service-item">
          <img src="./assets/icons/11.svg" className="service__image" />
          <div className="service-info">
            <h4 className="service__name">High Quality</h4>
            <p className="service__description">crafted from top materials</p>
          </div>
        </div>
        {/*End service-item*/}
        <div className="service-item">
          <img src="./assets/icons/12.svg" className="service__image" />
          <div className="service-info">
            <h4 className="service__name">High Quality</h4>
            <p className="service__description">crafted from top materials</p>
          </div>
        </div>
        {/*End service-item*/}
        <div className="service-item">
          <img src="./assets/icons/13.svg" className="service__image" />
          <div className="service-info">
            <h4 className="service__name">High Quality</h4>
            <p className="service__description">crafted from top materials</p>
          </div>
        </div>
        {/*End service-item*/}
      </div>
    </div>
  </section>
</div>

    </div>
  )
}

export default Home