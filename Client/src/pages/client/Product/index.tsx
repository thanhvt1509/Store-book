import { useEffect } from "react";
import Footer from "../../../compoment/footer"
import Header from "../../../compoment/header"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { getAllProduct } from "../../../redux/Reducer/ProductSlice";
import { Link } from "react-router-dom";

const Product = () => {
    const dispatch = useAppDispatch();
    const products = useAppSelector((state) => state.Product.products);

    useEffect(() => {
        // setIsLoading(true);
        dispatch(getAllProduct())
    }, [dispatch]);

    useEffect(() => {
        // setIsLoading(true);
        dispatch(getAllProduct())
    }, []);
    return <>
        <div className="wrapper">
            <Header />
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="iq-card-transparent mb-0">
                                <div className="d-block text-center">
                                    <h2 className="mb-3">Search by Book Name</h2>
                                    <div className="w-100 iq-search-filter">
                                        <ul className="list-inline p-0 m-0 row justify-content-center search-menu-options">
                                            <li className="search-menu-opt">
                                                <div className="iq-dropdown">
                                                    <div className="form-group mb-0">
                                                        <select className="form-control form-search-control bg-white border-0" id="exampleFormControlSelect1">
                                                            <option selected="">All</option>
                                                            <option>A Books</option>
                                                            <option>the Sun</option>
                                                            <option>Harsh book</option>
                                                            <option>People book</option>
                                                            <option>the Fog</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="search-menu-opt">
                                                <div className="iq-dropdown">
                                                    <div className="form-group mb-0">
                                                        <select className="form-control form-search-control bg-white border-0" id="exampleFormControlSelect2">
                                                            <option selected="">Genres</option>
                                                            <option>General</option>
                                                            <option>History</option>
                                                            <option>Horror</option>
                                                            <option>Fantasy</option>
                                                            <option>Literary</option>
                                                            <option>Manga</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="search-menu-opt">
                                                <div className="iq-dropdown">
                                                    <div className="form-group mb-0">
                                                        <select className="form-control form-search-control bg-white border-0" id="exampleFormControlSelect3">
                                                            <option selected="">Year</option>
                                                            <option>2015</option>
                                                            <option>2016</option>
                                                            <option>2017</option>
                                                            <option>2018</option>
                                                            <option>2019</option>
                                                            <option>2020</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="search-menu-opt">
                                                <div className="iq-dropdown">
                                                    <div className="form-group mb-0">
                                                        <select className="form-control form-search-control bg-white border-0" id="exampleFormControlSelect4">
                                                            <option selected="">Author</option>
                                                            <option>Milesiy Yor</option>
                                                            <option>Ira Membrit</option>
                                                            <option>Anna Mull</option>
                                                            <option>John Smith</option>
                                                            <option>David King</option>
                                                            <option>Kusti Franti</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="search-menu-opt">
                                                <div className="iq-search-bar search-book d-flex align-items-center">
                                                    <form action="#" className="searchbox">
                                                        <input type="text" className="text search-input" placeholder="search here..." />
                                                        <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                                                    </form>
                                                    <button type="button" className="btn btn-primary search-data ml-2">Search</button>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="iq-card">
                                <div className="iq-card-body">
                                    <div className="row">
                                        {products?.map(item => {
                                            return <>
                                                <div className="col-sm-6 col-md-4 col-lg-3">
                                                    <div className="iq-card iq-card-block iq-card-stretch iq-card-height search-bookcontent">
                                                        <div className="iq-card-body p-0">
                                                            <div className="d-flex align-items-center">
                                                                <div className="col-6 p-0 position-relative image-overlap-shadow">
                                                                    <Link to={`/products/${item._id}`}><img className="img-fluid rounded w-100" src={item?.images} alt="" /></Link>
                                                                    <div className="view-book">
                                                                        <Link to={`/products/${item._id}`} className="btn btn-sm btn-white">View Book</Link>
                                                                    </div>
                                                                </div>
                                                                <div className="col-6">
                                                                    <div className="mb-2">
                                                                        <h6 className="mb-1">{item.name}</h6>
                                                                        <p className="font-size-13 line-height mb-1">{item.author}</p>
                                                                        <div className="d-block">
                                                                            <span className="font-size-13 text-warning">
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                                <i className="fa fa-star"></i>
                                                                            </span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="price d-flex align-items-center">
                                                                        {/* <span className="pr-1 old-price">$99</span> */}
                                                                        <h6><b>{item.price}</b></h6>
                                                                    </div>
                                                                    <div className="iq-product-action">
                                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </>
                                        })}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between align-items-center position-relative mb-0 similar-detail">
                                    <div className="iq-header-title">
                                        <h4 className="card-title mb-0">Similar Books</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <a href="category.html" className="btn btn-sm btn-primary view-more">View More</a>
                                    </div>
                                </div>
                                <div className="iq-card-body similar-contens">
                                    <ul id="similar-slider" className="list-inline p-0 mb-0 row">
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/similar-books/01.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">The Raze Night Book</h6>
                                                        <p className="font-size-13 line-height mb-1">Tara Zona</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="pr-1 old-price">$102</span>
                                                        <h6><b>$95</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/similar-books/02.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">Set For Life Book..</h6>
                                                        <p className="font-size-13 line-height mb-1">Anna Rexia</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="pr-1 old-price">$120</span>
                                                        <h6><b>$110</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/similar-books/03.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">Through the Breaking</h6>
                                                        <p className="font-size-13 line-height mb-1">Bill Emia</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="pr-1 old-price">$105</span>
                                                        <h6><b>$99</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/similar-books/04.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">Wild Beautiful Places</h6>
                                                        <p className="font-size-13 line-height mb-1">Hal Appeno</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="pr-1 old-price">$100</span>
                                                        <h6><b>$95</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/similar-books/05.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">The Mockup Magazine</h6>
                                                        <p className="font-size-13 line-height mb-1">Zack Lee</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="pr-1 old-price">$100</span>
                                                        <h6><b>$89</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/similar-books/06.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">Every Book Of travel</h6>
                                                        <p className="font-size-13 line-height mb-1">Moe Fugga</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <h6><b>$120</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between align-items-center position-relative mb-0 trendy-detail">
                                    <div className="iq-header-title">
                                        <h4 className="card-title mb-0">Trendy Books</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <a href="category.html" className="btn btn-sm btn-primary view-more">View More</a>
                                    </div>
                                </div>
                                <div className="iq-card-body trendy-contens">
                                    <ul id="trendy-slider" className="list-inline p-0 mb-0 row">
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/trendy-books/01.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">The Word Books Day..</h6>
                                                        <p className="font-size-13 line-height mb-1">Paul Molive</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="pr-1 old-price">$99</span>
                                                        <h6><b>$89</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/trendy-books/02.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">The catcher in the Rye</h6>
                                                        <p className="font-size-13 line-height mb-1">Anna Sthesia</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="pr-1 old-price">$89</span>
                                                        <h6><b>$79</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/trendy-books/03.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">Little Black Book</h6>
                                                        <p className="font-size-13 line-height mb-1">Monty Carlo</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="pr-1 old-price">$100</span>
                                                        <h6><b>$89</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/trendy-books/04.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">Take The Risk Book</h6>
                                                        <p className="font-size-13 line-height mb-1">Smith goal</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="pr-1 old-price">$120</span>
                                                        <h6><b>$99</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/trendy-books/05.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">The Raze Night Book </h6>
                                                        <p className="font-size-13 line-height mb-1">Paige Turner</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="pr-1 old-price">$150</span>
                                                        <h6><b>$129</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex align-items-center">
                                                <div className="col-5 p-0 position-relative image-overlap-shadow">
                                                    <a href=""><img className="img-fluid rounded w-100" src="images/trendy-books/06.jpg" alt="" /></a>
                                                    <div className="view-book">
                                                        <a href="book-page.html" className="btn btn-sm btn-white">View Book</a>
                                                    </div>
                                                </div>
                                                <div className="col-7">
                                                    <div className="mb-2">
                                                        <h6 className="mb-1">Find the Wave Book..</h6>
                                                        <p className="font-size-13 line-height mb-1">Barb Ackue</p>
                                                        <div className="d-block">
                                                            <span className="font-size-13 text-warning">
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                                <i className="fa fa-star"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="price d-flex align-items-center">
                                                        <span className="pr-1 old-price">$120</span>
                                                        <h6><b>$100</b></h6>
                                                    </div>
                                                    <div className="iq-product-action">
                                                        <a href=""><i className="ri-shopping-cart-2-fill text-primary"></i></a>
                                                        <a href="" className="ml-2"><i className="ri-heart-fill text-danger"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                                <div className="iq-card-header d-flex justify-content-between align-items-center position-relative">
                                    <div className="iq-header-title">
                                        <h4 className="card-title mb-0">Favorite Reads</h4>
                                    </div>
                                    <div className="iq-card-header-toolbar d-flex align-items-center">
                                        <a href="category.html" className="btn btn-sm btn-primary view-more">View More</a>
                                    </div>
                                </div>
                                <div className="iq-card-body favorites-contens">
                                    <ul id="favorites-slider" className="list-inline p-0 mb-0 row">
                                        <li className="col-md-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="col-5 p-0 position-relative">
                                                    <a href="">
                                                        <img src="images/favorite/05.jpg" className="img-fluid rounded w-100" alt="" />
                                                    </a>
                                                </div>
                                                <div className="col-7">
                                                    <h5 className="mb-2">Every Book is a new Wonderful Travel..</h5>
                                                    <p className="mb-2">Author : Pedro Araez</p>
                                                    <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                                        <span>Reading</span>
                                                        <span className="mr-4">78%</span>
                                                    </div>
                                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                                        <div className="iq-progress-bar iq-bg-primary">
                                                            <span className="bg-primary" data-percent="78"></span>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="text-dark">Read Now<i className="ri-arrow-right-s-line"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="col-5 p-0 position-relative">
                                                    <a href="">
                                                        <img src="images/favorite/06.jpg" className="img-fluid rounded w-100" alt="" />
                                                    </a>
                                                </div>
                                                <div className="col-7">
                                                    <h5 className="mb-2">Casey Christie night book into find...</h5>
                                                    <p className="mb-2">Author : Michael klock</p>
                                                    <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                                        <span>Reading</span>
                                                        <span className="mr-4">78%</span>
                                                    </div>
                                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                                        <div className="iq-progress-bar iq-bg-danger">
                                                            <span className="bg-danger" data-percent="78"></span>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="text-dark">Read Now<i className="ri-arrow-right-s-line"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="col-5 p-0 position-relative">
                                                    <a href="">
                                                        <img src="images/favorite/07.jpg" className="img-fluid rounded w-100" alt="" />
                                                    </a>
                                                </div>
                                                <div className="col-7">
                                                    <h5 className="mb-2">The Secret to English Busy People..</h5>
                                                    <p className="mb-2">Author : Daniel Ace</p>
                                                    <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                                        <span>Reading</span>
                                                        <span className="mr-4">78%</span>
                                                    </div>
                                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                                        <div className="iq-progress-bar iq-bg-info">
                                                            <span className="bg-info" data-percent="78"></span>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="text-dark">Read Now<i className="ri-arrow-right-s-line"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="col-md-3">
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="col-5 p-0 position-relative">
                                                    <a href="">
                                                        <img src="images/favorite/08.jpg" className="img-fluid rounded w-100" alt="" />
                                                    </a>
                                                </div>
                                                <div className="col-7">
                                                    <h5 className="mb-2">The adventures of Robins books...</h5>
                                                    <p className="mb-2">Author : Luka Afton</p>
                                                    <div className="d-flex justify-content-between align-items-center text-dark font-size-13">
                                                        <span>Reading</span>
                                                        <span className="mr-4">78%</span>
                                                    </div>
                                                    <div className="iq-progress-bar-linear d-inline-block w-100">
                                                        <div className="iq-progress-bar iq-bg-success">
                                                            <span className="bg-success" data-percent="78"></span>
                                                        </div>
                                                    </div>
                                                    <a href="#" className="text-dark">Read Now<i className="ri-arrow-right-s-line"></i></a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </>
}

export default Product