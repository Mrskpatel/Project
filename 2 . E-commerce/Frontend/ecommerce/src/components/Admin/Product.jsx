/* eslint-disable no-unused-vars */
import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Product() {
  const [data, setData] = useState([]);
  const [ProductName, setProductName] = useState('');
  const [ProductDescription, setProductDescription] = useState("");
  const [ProductPrice, setProductPrice] = useState("");
  const [ProductDiscountPrice, setProductDiscountPrice] = useState("");
  const [ProductRating, setProductRating] = useState("");
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [ProductImage, setProductImage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.default.withCredentials = true
    const fatchingdata = async () => {
      await axios.get('http://localhost:1085/subCategory/viewSubCategory')
        .then((res) => {
          console.log(res.data);
          setData(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    fatchingdata()
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
formData.append("ProductName", ProductName);
formData.append("ProductDescription", ProductDescription);
formData.append("ProductPrice", ProductPrice);
formData.append("ProductDiscountPrice", ProductDiscountPrice);
formData.append("ProductRating", ProductRating);
formData.append("category", category);
formData.append("subCategory", subCategory);
formData.append("ProductImage", ProductImage);

  
    try {
      const res = await axios.post('http://localhost:1085/Product/insserProduct', formData);
      console.log(res);
      navigate('/ViewProduct');
    } catch (err) {
      console.error(err);
    }
  };
  

  return (

    <div>
      <link rel="stylesheet" href="../../../public/assets/css/styles.min.css" />
      <script src="../../../public/assets/libs/jquery/dist/jquery.min.js"></script>
      <script src="../../../public/assets/libs/jquery/dist/jquery.min.js"></script>
      <script src="../../../public/assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
      <script src="../../../public/assets/js/sidebarmenu.js"></script>
      <script src="../../../public/assets/js/app.min.js"></script>
      <script src="../../../public/assets/libs/apexcharts/dist/apexcharts.min.js"></script>
      <script src="../../../public/assets/libs/simplebar/dist/simplebar.js"></script>
      <script src="../../../public/assets/js/dashboard.js"></script>

      <script src="https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js"></script>

      <div
        className="page-wrapper"
        id="main-wrapper"
        data-layout="vertical"
        data-navbarbg="skin6"
        data-sidebartype="full"
        data-sidebar-position="fixed"
        data-header-position="fixed"
      >
        <aside className="left-sidebar">
          <div>
            <div className="brand-logo d-flex align-items-center justify-content-between">
              <a href="/" className="text-nowrap logo-img">
                <img src="../assets/images/logos/logo.svg" alt="" />
              </a>
              <div
                className="close-btn d-xl-none d-block sidebartoggler cursor-pointer"
                id="sidebarCollapse"
              >
                <i className="ti ti-x fs-8"></i>
              </div>
            </div>

            <nav className="sidebar-nav scroll-sidebar" data-simplebar="">
              <ul id="sidebarnav">
                <li className="nav-small-cap">
                  <span className="hide-menu">Home</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="/"
                    aria-expanded="false"
                  >
                    <iconify-icon icon="solar:widget-add-line-duotone"></iconify-icon>
                    <span className="hide-menu">Dashboard</span>
                  </a>
                </li>
                <li>
                  <span className="sidebar-divider lg"></span>
                </li>
                <li className="nav-small-cap">
                  <span className="hide-menu">category</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="/category"
                    aria-expanded="false"
                  >
                    <iconify-icon icon="solar:layers-minimalistic-bold-duotone"></iconify-icon>
                    <span className="hide-menu">Category</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="/subcategory"
                    aria-expanded="false"
                  >
                    <iconify-icon icon="solar:danger-circle-line-duotone"></iconify-icon>
                    <span className="hide-menu">Sub Category</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="/viewcategory"
                    aria-expanded="false"
                  >
                    <iconify-icon icon="solar:bookmark-square-minimalistic-line-duotone"></iconify-icon>
                    <span className="hide-menu">View Category</span>
                  </a>
                </li>


                <li>
                  <span className="sidebar-divider lg"></span>
                </li>
                <li className="nav-small-cap">
                  <span className="hide-menu">Product</span>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="/Product"
                    aria-expanded="false"
                  >
                    <iconify-icon icon="solar:login-3-line-duotone"></iconify-icon>
                    <span className="hide-menu">Product</span>
                  </a>
                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link"
                    href="/ViewProduct"
                    aria-expanded="false"
                  >
                    <iconify-icon icon="solar:user-plus-rounded-line-duotone"></iconify-icon>
                    <span className="hide-menu">View Product</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <div className="body-wrapper">
          <header className="app-header" style={{ margin: "0", position: "relative", width: "100%", backgroundColor: "#fff" }}>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ width: "100%" }}>
              <ul className="navbar-nav">
                <li className="nav-item d-block d-xl-none">
                  <a
                    className="nav-link sidebartoggler"
                    id="headerCollapse"
                    href="javascript:void(0)"
                  >
                    <i className="ti ti-menu-2"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)">
                    <iconify-icon
                      icon="solar:bell-linear"
                      className="fs-6"
                    ></iconify-icon>
                    <div className="notification bg-primary rounded-circle"></div>
                  </a>
                </li>
              </ul>
              <div
                className="navbar-collapse d-flex justify-content-righy px-0"
                id="navbarNav"
              >
                <ul className="navbar-nav ms-auto flex-row align-items-center">
                  <li className="nav-item dropdown" >
                    <a
                      className="nav-link"
                      href="javascript:void(0)"
                      id="drop2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img
                        src="../assets/images/profile/user-1.jpg"
                        alt="User Profile"
                        width="35"
                        height="35"
                        className="rounded-circle"
                      />
                    </a>
                    <div
                      className="dropdown-menu dropdown-menu-end dropdown-menu-animate-up"
                      aria-labelledby="drop2"
                    >
                      <div className="message-body">
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-user fs-6"></i>
                          <p className="mb-0 fs-3">My Profile</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-mail fs-6"></i>
                          <p className="mb-0 fs-3">My Account</p>
                        </a>
                        <a
                          href="javascript:void(0)"
                          className="d-flex align-items-center gap-2 dropdown-item"
                        >
                          <i className="ti ti-list-check fs-6"></i>
                          <p className="mb-0 fs-3">My Task</p>
                        </a>
                        <a
                          href="./authentication-login.html"
                          className="btn btn-outline-primary mx-3 mt-2 d-block"
                        >
                          Logout
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </header>
          <div className="body-wrapper-inner" style={{ margin: "0" }}>
            <div className="container-fluid">
              <div className="card" style={{ width: "80%", marginLeft: "10%" }}>
                <div className="card-body">
                  <h5 className="card-title fw-semibold mb-4">Product</h5>
                  <div className="card">
                    <div className="card-body">
                      <form onSubmit={handleSubmit} encType='multipart/form-data'>
                        <div className="mb-3">
                          <label className="form-label">Product Name </label>
                          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setProductName(e.target.value)} />
                        </div>
                        <div style={{ display: "flex" }}>
                          <div className='mb-3' style={{ width: "50%", marginRight: "30px" }}>
                            <label className="form-label">Category</label>

                            <select className="form-control" id="exampleInputEmail1 category" onChange={(e)=> setCategory(e.target.value)} aria-describedby="emailHelp">
                            <option value="" disabled selected>Select A Category</option>
                              {
                                data && data.map((e, i) => {
                                  return <option value={e._id} key={i}>{e.CategoryId.CategoryName}</option>
                                })
                              }
                            </select>
                          </div>
                          <div className='mb-3' style={{ width: "50%" }}>
                            <label className="form-label">Sub Category</label>
                            <select className="form-control" id="exampleInputEmail1 category" onChange={(e)=> setSubCategory(e.target.value)} aria-describedby="emailHelp">
                            <option value="" disabled selected>Select A Sub Category</option>
                              {
                                data && data.map((e, i) => {
                                  return <option value={e._id} key={i}>{e.subCategoryName}</option>
                                })
                              }
                            </select>
                          </div>
                        </div>
                        <div className="mb-3" style={{ display: "flex", alignItems: "center" }}>
                          <div style={{ width: "50%", marginRight: "30px" }}>
                            <label className="form-label">Product Price </label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setProductPrice(e.target.value)} />
                          </div>
                          <div style={{ width: "50%" }}>
                            <label className="form-label">Product Discount Price </label>
                            <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setProductDiscountPrice(e.target.value)} />
                          </div>
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Product Rating</label>
                          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setProductRating(e.target.value)} />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Product Description </label>
                          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setProductDescription(e.target.value)} />
                        </div>
                        <div className="mb-3">
                          <label className="form-label">Product Image </label>
                          <input type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e)=>setProductImage(e.target.files[0])}/>
                        </div>
                        <div className="mb-3 form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product