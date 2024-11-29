import React from "react";

function Admin() {
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
          <header className="app-header" style={{ margin: "0"  , position : "relative" , width : "100%" , backgroundColor : "#fff"}}>
            <nav className="navbar navbar-expand-lg navbar-light" style={{width : "100%" }}>
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

          <div className="body-wrapper-inner" style={{margin : "0"}}>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-8 d-flex align-items-strech">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                        <div className="mb-3 mb-sm-0">
                          <h5 className="card-title fw-semibold">
                            Sales Profit
                          </h5>
                        </div>
                        <div>
                          <select className="form-select">
                            <option value="1">March 2024</option>
                            <option value="2">April 2024</option>
                            <option value="3">May 2024</option>
                            <option value="4">June 2024</option>
                          </select>
                        </div>
                      </div>
                      <div id="sales-profit"></div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="card bg-danger-subtle shadow-none w-100">
                        <div className="card-body">
                          <div className="d-flex mb-10 pb-1 justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-6">
                              <div className="rounded-circle-shape bg-danger px-3 py-2 rounded-pill d-inline-flex align-items-center justify-content-center">
                                <iconify-icon
                                  icon="solar:users-group-rounded-bold-duotone"
                                  className="fs-7 text-white"
                                ></iconify-icon>
                              </div>
                              <h6 className="mb-0 fs-4 fw-medium text-muted">
                                Total followers
                              </h6>
                            </div>
                            <div className="dropdown dropstart">
                              <a
                                href="javascript:void(0)"
                                className="text-muted"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical fs-6"></i>
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <li>
                                  <a
                                    className="dropdown-item d-flex align-items-center gap-3"
                                    href="javascript:void(0)"
                                  >
                                    <i className="fs-4 ti ti-plus"></i>Add
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item d-flex align-items-center gap-3"
                                    href="javascript:void(0)"
                                  >
                                    <i className="fs-4 ti ti-edit"></i>Edit
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item d-flex align-items-center gap-3"
                                    href="javascript:void(0)"
                                  >
                                    <i className="fs-4 ti ti-trash"></i>Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row align-items-end justify-content-between">
                            <div className="col-5">
                              <h2 className="mb-6 fs-8">4,562</h2>
                              <span className="badge rounded-pill border border-muted fw-bold text-muted fs-2 py-1">
                                +23% last month
                              </span>
                            </div>
                            <div className="col-5">
                              <div
                                id="total-followers"
                                className="rounded-bars"
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="card bg-secondary-subtle shadow-none w-100">
                        <div className="card-body">
                          <div className="d-flex mb-10 pb-1 justify-content-between align-items-center">
                            <div className="d-flex align-items-center gap-6">
                              <div className="rounded-circle-shape bg-secondary px-3 py-2 rounded-pill d-inline-flex align-items-center justify-content-center">
                                <iconify-icon
                                  icon="solar:wallet-2-line-duotone"
                                  className="fs-7 text-white"
                                ></iconify-icon>
                              </div>
                              <h6 className="mb-0 fs-4 fw-medium text-muted">
                                Total Income
                              </h6>
                            </div>
                            <div className="dropdown dropstart">
                              <a
                                href="javascript:void(0)"
                                className="text-muted"
                                id="dropdownMenuButton"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                              >
                                <i className="ti ti-dots-vertical fs-6"></i>
                              </a>
                              <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                              >
                                <li>
                                  <a
                                    className="dropdown-item d-flex align-items-center gap-3"
                                    href="javascript:void(0)"
                                  >
                                    <i className="fs-4 ti ti-plus"></i>Add
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item d-flex align-items-center gap-3"
                                    href="javascript:void(0)"
                                  >
                                    <i className="fs-4 ti ti-edit"></i>Edit
                                  </a>
                                </li>
                                <li>
                                  <a
                                    className="dropdown-item d-flex align-items-center gap-3"
                                    href="javascript:void(0)"
                                  >
                                    <i className="fs-4 ti ti-trash"></i>Delete
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="row align-items-center justify-content-between pt-4">
                            <div className="col-5">
                              <h2 className="mb-6 fs-8 text-nowrap">$6,280</h2>
                              <span className="badge rounded-pill border border-muted fw-bold text-muted fs-2 py-1">
                                +18% last month
                              </span>
                            </div>
                            <div className="col-5">
                              <div id="total-income"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-8 d-flex align-items-stretch">
                  <div className="card w-100 overflow-hidden">
                    <div className="card-body pb-0">
                      <h4 className="fs-4 mb-1 card-title">Popular Products</h4>
                      <p className="mb-0 card-subtitle">Total 9k Visitors</p>
                    </div>
                    <div data-simplebar className="position-relative">
                      <div
                        className="table-responsive products-tabel"
                        data-simplebar
                      >
                        <table className="table text-nowrap mb-0 align-middle table-hover">
                          <thead className="fs-4">
                            <tr>
                              <th className="fs-3 px-4">Products</th>
                              <th className="fs-3">Payment</th>
                              <th className="fs-3">Status</th>
                              <th className="fs-3"></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center product">
                                  <img
                                    src="../assets/images/products/s1.jpg"
                                    className="img-fluid flex-shrink-0 rounded"
                                    width="60"
                                    height="60"
                                  />
                                  <div className="ms-3 product-title">
                                    <h6 className="fs-3 mb-0 text-truncate-2">
                                      iPhone 13 pro max-Pacific Blue-128GB
                                      storage
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h5 className="mb-0 fs-4">
                                  $180 <span className="text-muted">/499</span>
                                </h5>
                                <p className="text-muted mb-2">
                                  Partially paid
                                </p>
                                <div
                                  className="progress bg-light w-100"
                                  style={{ height: "4px" }}
                                >
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    aria-label="Example 4px high"
                                    style={{ width: "40%" }}
                                    aria-valuenow="40"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </td>
                              <td>
                                <span className="badge rounded-pill fs-2 fw-medium bg-secondary-subtle text-secondary">
                                  Confirmed
                                </span>
                              </td>
                              <td>
                                <div className="dropdown dropstart">
                                  <a
                                    href="javascript:void(0)"
                                    className="text-muted"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots-vertical fs-6"></i>
                                  </a>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-plus"></i>Add
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-edit"></i>Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-trash"></i>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center product">
                                  <img
                                    src="../assets/images/products/s2.jpg"
                                    className="img-fluid flex-shrink-0 rounded"
                                    width="60"
                                    height="60"
                                  />
                                  <div className="ms-3 product-title">
                                    <h6 className="fs-3 mb-0 text-truncate-2">
                                      Apple MacBook Pro 13 inch-M1-8/256GB-space
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h5 className="mb-0 fs-4">
                                  $120 <span className="text-muted">/499</span>
                                </h5>
                                <p className="text-muted mb-2">Full paid</p>
                                <div
                                  className="progress bg-light w-100"
                                  style={{ height: "4px" }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    aria-label="Example 4px high"
                                    style={{ width: "100%" }}
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </td>
                              <td>
                                <span className="badge rounded-pill fs-2 fw-medium bg-success-subtle text-success">
                                  Confirmed
                                </span>
                              </td>
                              <td>
                                <div className="dropdown dropstart">
                                  <a
                                    href="javascript:void(0)"
                                    className="text-muted"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots-vertical fs-6"></i>
                                  </a>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-plus"></i>Add
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-edit"></i>Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-trash"></i>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center product">
                                  <img
                                    src="../assets/images/products/s3.jpg"
                                    className="img-fluid flex-shrink-0 rounded"
                                    width="60"
                                    height="60"
                                  />
                                  <div className="ms-3 product-title">
                                    <h6 className="fs-3 mb-0 text-truncate-2">
                                      PlayStation 5 DualSense Wireless
                                      Controller
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h5 className="mb-0 fs-4">
                                  $120 <span className="text-muted">/499</span>
                                </h5>
                                <p className="text-muted mb-2">Cancelled</p>
                                <div
                                  className="progress bg-light w-100"
                                  style={{ height: "4px" }}
                                >
                                  <div
                                    className="progress-bar bg-danger"
                                    role="progressbar"
                                    aria-label="Example 4px high"
                                    style={{ width: "100%" }}
                                    aria-valuenow="100"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </td>
                              <td>
                                <span className="badge rounded-pill fs-2 fw-medium bg-danger-subtle text-danger">
                                  Cancelled
                                </span>
                              </td>
                              <td>
                                <div className="dropdown dropstart">
                                  <a
                                    href="javascript:void(0)"
                                    className="text-muted"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots-vertical fs-6"></i>
                                  </a>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-plus"></i>Add
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-edit"></i>Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-trash"></i>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="d-flex align-items-center product">
                                  <img
                                    src="../assets/images/products/s5.jpg"
                                    className="img-fluid flex-shrink-0 rounded"
                                    width="60"
                                    height="60"
                                  />
                                  <div className="ms-3 product-title">
                                    <h6 className="fs-3 mb-0 text-truncate-2">
                                      Amazon Basics Mesh, Mid-Back, Swivel
                                      Office De...
                                    </h6>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <h5 className="mb-0 fs-4">
                                  $120 <span className="text-muted">/499</span>
                                </h5>
                                <p className="text-muted mb-2">
                                  Partially paid
                                </p>
                                <div
                                  className="progress bg-light w-100"
                                  style={{ height: "4px" }}
                                >
                                  <div
                                    className="progress-bar bg-warning"
                                    role="progressbar"
                                    aria-label="Example 4px high"
                                    style={{ width: "40%" }}
                                    aria-valuenow="40"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                  ></div>
                                </div>
                              </td>
                              <td>
                                <span className="badge rounded-pill fs-2 fw-medium bg-secondary-subtle text-secondary">
                                  Confirmed
                                </span>
                              </td>
                              <td>
                                <div className="dropdown dropstart">
                                  <a
                                    href="javascript:void(0)"
                                    className="text-muted"
                                    id="dropdownMenuButton"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                  >
                                    <i className="ti ti-dots-vertical fs-6"></i>
                                  </a>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton"
                                  >
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-plus"></i>Add
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-edit"></i>Edit
                                      </a>
                                    </li>
                                    <li>
                                      <a
                                        className="dropdown-item d-flex align-items-center gap-3"
                                        href="javascript:void(0)"
                                      >
                                        <i className="fs-4 ti ti-trash"></i>
                                        Delete
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 d-flex align-items-stretch">
                  <div className="card w-100">
                    <div className="card-body">
                      <div className="d-flex mb-3 justify-content-between align-items-center">
                        <h4 className="mb-0 card-title">Earning Reports</h4>
                        <div className="dropdown">
                          <button
                            id="dropdownMenuButton1"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            className="rounded-circle btn-transparent rounded-circle btn-sm px-1 btn shadow-none"
                          >
                            <i className="ti ti-dots-vertical fs-6"></i>
                          </button>
                          <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownMenuButton1"
                          >
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Action
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Another action
                              </a>
                            </li>
                            <li>
                              <a
                                className="dropdown-item"
                                href="javascript:void(0)"
                              >
                                Something else here
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="list-unstyled mb-0">
                        <li className="d-flex align-items-center justify-content-between py-10 border-bottom">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle-shape bg-primary-subtle me-3 rounded-pill d-inline-flex align-items-center justify-content-center">
                              <iconify-icon
                                icon="solar:card-line-duotone"
                                className="fs-7 text-primary"
                              ></iconify-icon>
                            </div>
                            <div>
                              <h6 className="mb-1 fs-3">Bank Transfer</h6>
                              <p className="mb-0 fs-2 d-flex align-items-center gap-1">
                                and +1 more<i className="ti ti-info-circle"></i>
                              </p>
                            </div>
                          </div>
                          <span className="badge rounded-pill fw-medium fs-2 d-flex align-items-center bg-success-subtle text-success text-end">
                            <i className="ti ti-caret-up"></i>16.3%
                          </span>
                        </li>

                        <li className="d-flex align-items-center justify-content-between py-10 border-bottom">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle-shape bg-danger-subtle me-3 rounded-pill d-inline-flex align-items-center justify-content-center">
                              <iconify-icon
                                icon="solar:wallet-2-line-duotone"
                                className="fs-7 text-danger"
                              ></iconify-icon>
                            </div>
                            <div>
                              <h6 className="mb-1 fs-3">Net Profit</h6>
                              <p className="mb-0 fs-2 d-flex align-items-center gap-1">
                                and +4 more<i className="ti ti-info-circle"></i>
                              </p>
                            </div>
                          </div>
                          <span className="badge rounded-pill fw-medium fs-2 d-flex align-items-center bg-success-subtle text-success text-end">
                            <i className="ti ti-caret-up"></i>12.55%
                          </span>
                        </li>

                        <li className="d-flex align-items-center justify-content-between py-10 border-bottom">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle-shape bg-secondary-subtle me-3 rounded-pill d-inline-flex align-items-center justify-content-center">
                              <iconify-icon
                                icon="solar:course-up-line-duotone"
                                className="fs-7 text-secondary"
                              ></iconify-icon>
                            </div>
                            <div>
                              <h6 className="mb-1 fs-3">Total Income</h6>
                              <p className="mb-0 fs-2 d-flex align-items-center gap-1">
                                and +4 more<i className="ti ti-info-circle"></i>
                              </p>
                            </div>
                          </div>
                          <span className="badge rounded-pill fw-medium fs-2 d-flex align-items-center bg-success-subtle text-success text-end">
                            <i className="ti ti-caret-up"></i>12.55%
                          </span>
                        </li>

                        <li className="d-flex align-items-center justify-content-between py-10 border-bottom">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle-shape bg-light me-3 rounded-pill d-inline-flex align-items-center justify-content-center">
                              <iconify-icon
                                icon="solar:waterdrops-line-duotone"
                                className="fs-7 text-body-color"
                              ></iconify-icon>
                            </div>
                            <div>
                              <h6 className="mb-1 fs-3">Total Expenses</h6>
                              <p className="mb-0 fs-2 d-flex align-items-center gap-1">
                                and +2 more<i className="ti ti-info-circle"></i>
                              </p>
                            </div>
                          </div>
                          <span className="badge rounded-pill fw-medium fs-2 d-flex align-items-center bg-success-subtle text-success text-end">
                            <i className="ti ti-caret-up"></i>8.28%
                          </span>
                        </li>

                        <li className="d-flex align-items-center justify-content-between py-10 border-bottom">
                          <div className="d-flex align-items-center">
                            <div className="rounded-circle-shape bg-warning-subtle me-3 rounded-pill d-inline-flex align-items-center justify-content-center">
                              <iconify-icon
                                icon="solar:waterdrops-line-duotone"
                                className="fs-7 text-warning"
                              ></iconify-icon>
                            </div>
                            <div>
                              <h6 className="mb-1 fs-3">Marketing</h6>
                              <p className="mb-0 fs-2 d-flex align-items-center gap-1">
                                and +3 more<i className="ti ti-info-circle"></i>
                              </p>
                            </div>
                          </div>
                          <span className="badge rounded-pill fw-medium fs-2 d-flex align-items-center bg-success-subtle text-success text-end">
                            <i className="ti ti-caret-up"></i>9.25%
                          </span>
                        </li>
                        <a
                          href="javascript:void(0)"
                          className="fs-4 mt-7 text-center d-block"
                        >
                          View more markets
                        </a>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="card overflow-hidden hover-img">
                    <div className="position-relative">
                      <a href="javascript:void(0)">
                        <img
                          src="../assets/images/blog/blog-img1.jpg"
                          className="card-img-top"
                          alt="materialM-img"
                        />
                      </a>
                      <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                        2 min Read
                      </span>
                      <img
                        src="../assets/images/profile/user-3.jpg"
                        alt="materialM-img"
                        className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9"
                        width="40"
                        height="40"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Georgeanna Ramero"
                      />
                    </div>
                    <div className="card-body p-4">
                      <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">
                        Social
                      </span>
                      <a
                        className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                        href=""
                      >
                        As yen tumbles, gadget-loving Japan goes for secondhand
                        iPhones
                      </a>
                      <div className="d-flex align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <i className="ti ti-eye text-dark fs-5"></i>9,125
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <i className="ti ti-message-2 text-dark fs-5"></i>3
                        </div>
                        <div className="d-flex align-items-center fs-2 ms-auto">
                          <i className="ti ti-point text-dark"></i>Mon, Dec 19
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card overflow-hidden hover-img">
                    <div className="position-relative">
                      <a href="javascript:void(0)">
                        <img
                          src="../assets/images/blog/blog-img2.jpg"
                          className="card-img-top"
                          alt="materialM-img"
                        />
                      </a>
                      <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                        2 min Read
                      </span>
                      <img
                        src="../assets/images/profile/user-2.jpg"
                        alt="materialM-img"
                        className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9"
                        width="40"
                        height="40"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Georgeanna Ramero"
                      />
                    </div>
                    <div className="card-body p-4">
                      <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">
                        Gadget
                      </span>
                      <a
                        className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                        href=""
                      >
                        Intel loses bid to revive antitrust case against patent
                        foe Fortress
                      </a>
                      <div className="d-flex align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <i className="ti ti-eye text-dark fs-5"></i>4,150
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <i className="ti ti-message-2 text-dark fs-5"></i>38
                        </div>
                        <div className="d-flex align-items-center fs-2 ms-auto">
                          <i className="ti ti-point text-dark"></i>Sun, Dec 18
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="card overflow-hidden hover-img">
                    <div className="position-relative">
                      <a href="javascript:void(0)">
                        <img
                          src="../assets/images/blog/blog-img3.jpg"
                          className="card-img-top"
                          alt="materialM-img"
                        />
                      </a>
                      <span className="badge text-bg-light text-dark fs-2 lh-sm mb-9 me-9 py-1 px-2 fw-semibold position-absolute bottom-0 end-0">
                        2 min Read
                      </span>
                      <img
                        src="../assets/images/profile/user-3.jpg"
                        alt="materialM-img"
                        className="img-fluid rounded-circle position-absolute bottom-0 start-0 mb-n9 ms-9"
                        width="40"
                        height="40"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Georgeanna Ramero"
                      />
                    </div>
                    <div className="card-body p-4">
                      <span className="badge text-bg-light fs-2 py-1 px-2 lh-sm  mt-3">
                        Health
                      </span>
                      <a
                        className="d-block my-4 fs-5 text-dark fw-semibold link-primary"
                        href=""
                      >
                        COVID outbreak deepens as more lockdowns loom in China
                      </a>
                      <div className="d-flex align-items-center gap-4">
                        <div className="d-flex align-items-center gap-2">
                          <i className="ti ti-eye text-dark fs-5"></i>9,480
                        </div>
                        <div className="d-flex align-items-center gap-2">
                          <i className="ti ti-message-2 text-dark fs-5"></i>12
                        </div>
                        <div className="d-flex align-items-center fs-2 ms-auto">
                          <i className="ti ti-point text-dark"></i>Sat, Dec 17
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-6 px-6 text-center">
                <p className="mb-0 fs-4">
                  Design and Developed by{" "}
                  <a
                    href="https://www.wrappixel.com/"
                    target="_blank"
                    className="pe-1 text-primary text-decoration-underline"
                  >
                    Wrappixel.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Admin;
