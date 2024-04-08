import React from 'react'



const HomeBlog = () => {
  return (
    <>
          <section className="blog">
    <div className="container">
      <div className="section-heading section-blog-heading">
        <h2 className="section-heading__title">Blog</h2>
      </div>
      <div className="section-body" data-aos="fade-up" data-aos-duration={1300}>
        <div className="post-list">
          <div className="post-item">
            <div className="post-image">
              <a >
                <img src="https://picsum.photos/id/16/665/250" alt="" className="post__thumbnail" />
              </a>
            </div>
            <div className="post-info">
              <h3 className="post__title">
                <a  className="post__link">THE ULTIMATE SOFA BUYING GUIDE</a>
              </h3>
              <p className="post__excerpt">
                The versatility of our living space is more crucial than ever.
                But buying a sofa might be a difficult undertaking. Your needs
                and the size of your living area will determine everything,
                However, don’t worry, were are here to help you
              </p>
              <a style={{ alignItems:"center", display:"flex", marginBottom:"15px"}} className="post__readmore">ABOUT <img src="../assets/blog.svg" style={{ width:"15px", marginLeft:"10px" }} alt="" /></a>

              <img src="" alt="" />
            </div>
          </div>
          {/*End .post-item*/}
          <div className="post-item" data-aos="fade-up" data-aos-duration={1300}>
            <div className="post-image">
              <a >
                <img src="https://picsum.photos/id/17/665/250" alt="" className="post__thumbnail" />
              </a>
            </div>
            <div className="post-info">
              <h3 className="post__title">
                <a  className="post__link">THE ULTIMATE SOFA BUYING GUIDE</a>
              </h3>
              <p className="post__excerpt">
                The versatility of our living space is more crucial than ever.
                But buying a sofa might be a difficult undertaking. Your needs
                and the size of your living area will determine everything,
                However, don’t worry, were are here to help you
              </p>
              <a style={{ alignItems:"center", display:"flex", marginBottom:"15px"}} className="post__readmore">ABOUT <img src="../assets/blog.svg" style={{ width:"15px", marginLeft:"10px" }} alt="" /></a>
              
            </div>
          </div>
          {/*End .post-item*/}
          <div className="post-item" style={{ paddingBottom:"50px"}} data-aos="fade-up" data-aos-duration={1300}>
            <div className="post-image">
              <a >
                <img src="https://picsum.photos/id/17/665/250" alt="" className="post__thumbnail" />
              </a>
            </div>
            <div className="post-info">
              <h3 className="post__title">
                <a  className="post__link">THE ULTIMATE SOFA BUYING GUIDE</a>
              </h3>
              <p className="post__excerpt">
                The versatility of our living space is more crucial than ever.
                But buying a sofa might be a difficult undertaking. Your needs
                and the size of your living area will determine everything,
                However, don’t worry, were are here to help you
              </p>
              <a style={{ alignItems:"center", display:"flex", marginBottom:"15px"}} className="post__readmore">ABOUT <img src="../assets/blog.svg" style={{ width:"15px", marginLeft:"10px" }} alt="" /></a>

            </div>
          </div>
          {/*End .post-item*/}
        </div>
      </div>
    </div>
  </section>
  {/*End .blog*/}
    </>
  )
}

export default HomeBlog