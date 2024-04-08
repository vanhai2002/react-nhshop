import React from 'react'

const ShopSreach = () => {
  return (
    <>
     <section className="sreach">
        <div className="sreach-Filter">
          <div className="sreach-Filter__full">
            <div className="sreach-Filter__icon">
              <img src="../assets/fiter.svg" alt="" />
            </div>
            <div className="sreach-Filter__text">Filter</div>
            <div className="sreach-Filter__icon2">
              <img src="../assets/iconFiter2.svg" alt="" />
            </div>
            <div className="sreach-Filter__icon3">
              <img src="../assets/iconFiter3.svg" alt="" />
            </div>
          </div>
          <div className="sreach-Filter__Showing">
            <span>Showing 1–16 of 32 results</span>
          </div>
        </div>
        <div className="sreach-Show">
          <div className="sreach-Show__size">
            <span>Show</span>
            <input type="text" placeholder="16" />
          </div>
          <div className="sreach-Show__buy">
            <span>Short by</span>
            <input type="text" placeholder="Default" />
          </div>
        </div>
      </section>

    </>
  )
}

export default ShopSreach