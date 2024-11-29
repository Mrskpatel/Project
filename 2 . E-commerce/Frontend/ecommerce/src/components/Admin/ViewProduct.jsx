import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

function ViewProduct() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fatchingdata = async () => {
      await axios
        .get('http://localhost:1085/Product/viewProduct')
        .then((res) => {
          console.log('Response:', res.data.msg.data);
          setData(res.data.msg.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fatchingdata();
  }, []);

  const deleteProduct = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:1085/Product/deleteProduct?id=${id}`);
      if (response.status === 200) {
        alert(response.data.msg); // Show a success message
        setData(data.filter(product => product._id !== id)); // Update the UI to remove the deleted product
      }
    } catch (error) {
      console.error("Error deleting product:", error);
      alert("Failed to delete product. Please try again.");
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
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title fw-semibold mb-4">View Products </h5>
                  <div className="card">
                    <div className="card-body">
                      <table className="table text-center">
                        <thead>
                          <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Discount Price</th>
                            <th>Rating</th>
                            <th>Sub Category</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            data && data.map((e, i) => {
                              return <tr key={i}>
                                <td><img width={"50px"} src={`http://localhost:1085/${e.ProductImage}`} alt="" /></td>
                                <td>{e.ProductName}</td>
                                <td>{e.ProductDescription}</td>
                                <td>{e.ProductPrice}</td>
                                <td>{e.ProductDiscountPrice}</td>
                                <td>{e.ProductRating}</td>
                                <td>{e.subCategory.subCategoryName}</td>

                                <td>
                                  <button type="button" className="btn btn-danger m-1" onClick={() => deleteProduct(e._id)}>Delete</button>
                                </td>
                              </tr>
                            })
                          }
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="body-wrapper-inner" style={{ margin: "0" }}>
            <div className="container-fluid">
              <h5 className="fw-semibold mb-4">View Products</h5>
              <div className="row">
                {data &&
                  data.map((product, index) => (
                    <div className="col-md-4 col-sm-6 col-lg-3 mb-4" key={index}>
                      <div className="card h-100">
                        <img
                          src={`http://localhost:1085/${product.ProductImage}`}
                          className="card-img-top"
                          alt={product.ProductName}
                          style={{ objectFit: "cover" }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.ProductName}</h5>
                          <p className="card-text">{product.ProductDescription}</p>
                          <p className="mb-1">
                            <strong>Price:</strong> ${product.ProductPrice}
                          </p>
                          <p className="mb-1">
                            <strong>Discount Price:</strong> ${product.ProductDiscountPrice}
                          </p>
                          <p className="mb-1">
                            <strong>Rating:</strong> {product.ProductRating}⭐
                          </p>
                          <p className="mb-3">
                            <strong>Category:</strong> {product.subCategory.subCategoryName}
                          </p>
                          <button
                            type="button"
                            className="btn btn-danger w-100"
                            onClick={() => deleteProduct(product._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewProduct