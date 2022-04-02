import React from 'react'
import Nav from './Nav'
import '../StyleSheets/Home.css';
import logo from '../images/suitcase_logo.png';
import banner1 from '../images/b1.jpg';
import banner2 from '../images/b2.jpg';
import banner3 from '../images/b3.jpg';
import top_p1 from '../images/top_p1.jpg';
import top_p2 from '../images/top_p2.jpg';
import top_p3 from '../images/top_p3.jpg';
import more from '../images/more.jpg';
import add_banner from '../images/add_banner.jpg';
import Footer from './Footer';

function Home() {
    return (
        <div>
            {/* home header start */}
            <div className="container">
                <div className="row">
                    <div className="col-md-2" id="col_logo">
                        <img src={logo} id="logo" alt="..." />
                    </div>
                    <div className="col-md-10" id="col_search">
                        <div className="row">
                            <div className="col-md-8" id="col_search1">
                                <form className="d-flex" id="Search">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn" id="home_search_bun"><i class="fas fa-search"></i></button>
                                </form>
                            </div>
                            <div className="col-md-4" id="home_header">
                                <i class="fas fa-envelope-open-text"></i>
                                <i class="fas fa-bell"></i>
                                <i class="fas fa-user-circle"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home header end */}

            {/* nav Start */}
            <Nav />
            {/* Nav end */}

            {/* List, slider Start */}
            <div className="container">
                <div className="row">
                    <div className="col-md-2" id="catagoris_list">
                        <ul className="list-group">
                            <h6 id="catagoris_heading1" className="list-group-item">Catagories</h6>
                            <button className="list-group-item"><i className="fas fa-blender-phone"></i>An item</button>
                            <button className="list-group-item"><i className="fas fa-book"></i>A second item</button>
                            <button className="list-group-item"> <i className="fas fa-car"></i>A third item</button>
                            <button className="list-group-item"><i className="fas fa-couch"></i>A fourth item</button>
                            <button className="list-group-item"><i className="fas fa-tshirt"></i>And a fifth one</button>
                            <button className="list-group-item"><i className="fas fa-camera"></i>A third item</button>
                        </ul>
                    </div>
                    <div className="col-md-8" id="home_banner">
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={banner1} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={banner2} className="d-block w-100" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={banner3} className="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-2" id="home_top_products">
                        <h6 id="top_products" className="list-group-item">Top Products</h6>
                        <div className="row ">
                            <div className="co-md-12">
                                <div className="top_products">
                                    <img src={top_p1} className="rounded mx-auto d-block" alt="..." />
                                    <img src={top_p2} className="rounded mx-auto d-block" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* List, slider end */}

            {/* icon navigation start */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12" id="icon_head_col">
                        <h6 id="catagoris_heading" className="list-group-item">Featured Category</h6>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" id="icon_col">
                        <i className="fas fa-tv"></i>
                        <i className="fas fa-tshirt"></i>
                        <i className="fas fa-camera"></i>
                        <i className="fas fa-laptop"></i>
                        <i className="fas fa-apple-alt"></i>
                        <i className="fas fa-basketball-ball"></i>
                        <i className="fas fa-bed"></i>
                        <i className="fas fa-bicycle"></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" id="icon_col">
                        <i className="fas fa-blender-phone"></i>
                        <i className="fas fa-book"></i>
                        <i className="fas fa-car"></i>
                        <i className="fas fa-couch"></i>
                        <i className="fas fa-tshirt"></i>
                        <i className="fas fa-camera"></i>
                        <i className="fas fa-bicycle"></i>
                        <i className="fas fa-blender-phone"></i>
                    </div>
                </div>
            </div>
            {/* icon navigation end */}

            {/* home_products_area_no1 start */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12" id="home_products__head_col">
                        <h6 id="catagoris_heading" className="list-group-item">Daily Needs</h6>
                    </div>
                </div>

                <div className="row row-cols-2 row-cols-md-5 g-4" id="home_products_area_no1">
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p3} className="img-responsivecard-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>

                    {/* ................................................... */}

                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={more} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">See More</h5>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">

                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home_products_area_no1 end */}

            {/* advertige_products_area_no1 start */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12" id="add_banner">
                        <img src={add_banner} class="img-fluid" alt="..." />
                    </div>
                </div>
            </div>
            {/* advertige_products_area_no1 end */}

            {/* home_products_area_no2 start */}
            <div className="container">
                <div className="row">
                    <div className="col-md-12" id="home_products__head_col">
                        <h6 id="catagoris_heading" className="list-group-item">Daily Needs</h6>
                    </div>
                </div>

                <div className="row row-cols-2 row-cols-md-5 g-4" id="home_products_area_no1">
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p2} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>

                    {/* ................................................... */}

                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-80">
                            <img src={top_p1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <h5 className="card-title">Product title</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p className="card-amount"> ৳ 500/=</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">
                                    <button className="btn" id="add"><i class="fas fa-plus-circle"></i></button>
                                    <button className="btn" id="buy_now"><i class="fas fa-shopping-cart"></i></button>
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src={more} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">See More</h5>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">

                                </small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* home_products_area_no2 end */}
            {/* footer start */}
            <Footer />
            {/* footer end */}
        </div>
    )
}

export default Home