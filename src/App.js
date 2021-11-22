// import logo from './logo.svg';
// import './App.css';
import React, { Fragment } from "react";
// import './assets/css/icons.css';
// import './assets/libs/bootstrap/css/bootstrap.min.css';
// import './assets/css/icons.css';
// import "@scss_assets/app.scss";
// import "@libs/jquery/jquery.min.js";
// import "@libs/metismenu/metisMenu.min.js";
// import "@libs/simplebar/simplebar.min.js";
// import "@libs/node-waves/waves.min.js";

function App({ name }) {
  const elements = ["one", "two", "three", "two", "three", "two", "three"];

  const items = [];
  const onChangeText = (e) => {}

  console.log("hola mundo xdxxxx");
  return (
    <div className="bg-pattern">
      <div id="layout-wrapper">
        <header id="page-topbar">
          <div className="navbar-header">
            <div className="d-flex">
              {/* <!-- LOGO --> */}
              <div className="navbar-brand-box text-center">
                <a href="index.html" className="logo logo-dark">
                  <span className="logo-sm">
                    <img src="assets/images/logo-sm.png" alt="logo-sm-dark" height="22"/>
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-dark.png" alt="logo-dark" height="24"/>
                  </span>
                </a>

                <a href="index.html" className="logo logo-light">
                  <span className="logo-sm">
                    <img src="assets/images/logo-sm.png" alt="logo-sm-light" height="22"/>
                  </span>
                  <span className="logo-lg">
                    <img src="assets/images/logo-light.png" alt="logo-light" height="24"/>
                  </span>
                </a>
              </div>

              <button type="button" className="btn btn-sm px-3 font-size-24 header-item waves-effect"
                id="vertical-menu-btn">
                <i className="ri-menu-2-line align-middle"></i>
              </button>

              {/* <!-- App Search--> */}
              <form className="app-search d-none d-lg-block">
                <div className="position-relative">
                  <input type="text" className="form-control" placeholder="Search..."/>
                  <span className ="ri-search-line"></span>
                </div>
              </form>
            </div>

            <div className="d-flex">

              <div className="dropdown d-inline-block d-lg-none ms-2">
                <button type="button" className="btn header-item noti-icon waves-effect"
                  id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true"
                  aria-expanded="false">
                  <i className="ri-search-line"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-search-dropdown">

                  <form className="p-3">
                    <div className="mb-3 m-0">
                      <div className="input-group">
                        <input type="text" className="form-control" placeholder="Search ..."/>
                        <div className ="input-group-append">
                        <button className ="btn btn-primary" type ="submit"><i
                        className ="ri-search-line"></i></button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="dropdown d-none d-sm-inline-block">
                <button type="button" className="btn header-item waves-effect" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <img className="" src="assets/images/flags/us.jpg" alt="Header Language" height="16"/>
                </button>
                <div className="dropdown-menu dropdown-menu-end">

                  {/* <!-- item--> */}
                  <a href="#" className="dropdown-item notify-item">
                    <img src="assets/images/flags/spain.jpg" alt="user-image" className="me-1" height="12"/>
                    <span className ="align-middle">Spanish</span>
                  </a>

                  {/* <!-- item--> */}
                  <a href="#" className="dropdown-item notify-item">
                    <img src="assets/images/flags/germany.jpg" alt="user-image" className="me-1" height="12"/>
                    <span className ="align-middle">German</span>
                  </a>

                  {/* <!-- item--> */}
                  <a href="#" className="dropdown-item notify-item">
                    <img src="assets/images/flags/italy.jpg" alt="user-image" className="me-1" height="12"/>
                    <span className ="align-middle">Italian</span>
                  </a>

                  {/* <!-- item--> */}
                  <a href="#" className="dropdown-item notify-item">
                    <img src="assets/images/flags/russia.jpg" alt="user-image" className="me-1" height="12"/>
                    <span className ="align-middle">Russian</span>
                  </a>
                </div>
              </div>

              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" className="btn header-item noti-icon waves-effect" data-bs-toggle="dropdown"
                  aria-haspopup="true" aria-expanded="false">
                  <i className="ri-apps-2-line"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                  <div className="px-lg-2">
                    <div className="row g-0">
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/github.png" alt="Github"/>
                          <span>GitHub</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/bitbucket.png" alt="bitbucket"/>
                          <span>Bitbucket</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/dribbble.png" alt="dribbble"/>
                          <span>Dribbble</span>
                        </a>
                      </div>
                    </div>

                    <div className="row g-0">
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/dropbox.png" alt="dropbox"/>
                          <span>Dropbox</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/mail_chimp.png" alt="mail_chimp"/>
                          <span>Mail Chimp</span>
                        </a>
                      </div>
                      <div className="col">
                        <a className="dropdown-icon-item" href="#">
                          <img src="assets/images/brands/slack.png" alt="slack"/>
                          <span>Slack</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" className="btn header-item noti-icon waves-effect" data-toggle="fullscreen">
                  <i className="ri-fullscreen-line"></i>
                </button>
              </div>

              <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon waves-effect"
                  id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="ri-notification-3-line"></i>
                  <span className="noti-dot"></span>
                </button>
                <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
                  aria-labelledby="page-header-notifications-dropdown">
                  <div className="p-3">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0"> Notifications </h6>
                      </div>
                      <div className="col-auto">
                        <a href="#!" className="small"> View All</a>
                      </div>
                    </div>
                  </div>
                  <div data-simplebar style={{ maxHeight : "230px"}}>
                    <a href="" className="text-reset notification-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar-xs">
                            <span className="avatar-title bg-primary rounded-circle font-size-16">
                              <i className="ri-shopping-cart-line"></i>
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Your order is placed</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">If several languages coalesce the grammar</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="" className="text-reset notification-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <img src="assets/images/users/avatar-3.jpg" className="rounded-circle avatar-xs"
                            alt="user-pic"/>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">James Lemire</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">It will seem like simplified English.</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                    <a href="" className="text-reset notification-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <div className="avatar-xs">
                            <span className="avatar-title bg-success rounded-circle font-size-16">
                              <i className="ri-checkbox-circle-line"></i>
                            </span>
                          </div>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Your item is shipped</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">If several languages coalesce the grammar</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 3 min ago</p>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="" className="text-reset notification-item">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3">
                          <img src="assets/images/users/avatar-4.jpg" className="rounded-circle avatar-xs"
                            alt="user-pic"/>
                        </div>
                        <div className="flex-grow-1">
                          <h6 className="mb-1">Salena Layfield</h6>
                          <div className="font-size-12 text-muted">
                            <p className="mb-1">As a skeptical Cambridge friend of mine occidental.</p>
                            <p className="mb-0"><i className="mdi mdi-clock-outline"></i> 1 hours ago</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="p-2 border-top">
                    <div className="d-grid">
                      <a className="btn btn-sm btn-link font-size-14 text-center" href="#">
                        <i className="mdi mdi-arrow-right-circle me-1"></i> View More..
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dropdown d-inline-block user-dropdown">
                <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown"
                  data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-2.jpg"
                    alt="Header Avatar"/>
                  <span className ="d-none d-xl-inline-block ms-1">Kevin</span>
                  <i className ="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div className="dropdown-menu dropdown-menu-end">
                  {/* <!-- item--> */}
                  <a className="dropdown-item" href="#"><i className="ri-user-line align-middle me-1"></i> Profile</a>
                  <a className="dropdown-item" href="#"><i className="ri-wallet-2-line align-middle me-1"></i> My
                    Wallet</a>
                  <a className="dropdown-item d-block" href="#"><span
                    className="badge bg-success float-end mt-1">11</span><i
                      className="ri-settings-2-line align-middle me-1"></i> Settings</a>
                  <a className="dropdown-item" href="#"><i className="ri-lock-unlock-line align-middle me-1"></i> Lock
                    screen</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item text-danger" href="#"><i
                    className="ri-shut-down-line align-middle me-1 text-danger"></i> Logout</a>
                </div>
              </div>

              <div className="dropdown d-inline-block">
                <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                  <i className="mdi mdi-cog"></i>
                </button>
              </div>

            </div>
          </div>
        </header>

        {/* <!-- ========== Left Sidebar Start ========== --> */}
        <div className="vertical-menu">

          <div data-simplebar className="h-100">

            {/* <!--- Sidemenu --> */}
            <div id="sidebar-menu">
              {/* <!-- Left Menu Start --> */}
              <ul className="metismenu list-unstyled" id="side-menu">
                <li className="menu-title">Menu</li>

                <li>
                  <a href="index.html" className="waves-effect">
                    <i className="mdi mdi-home-variant-outline"></i><span
                      className="badge rounded-pill bg-primary float-end">3</span>
                    <span>Dashboard</span>
                  </a>
                </li>

                <li>
                  <a href="calendar.html" className=" waves-effect">
                    <i className="mdi mdi-calendar-outline"></i>
                    <span>Calendar</span>
                  </a>
                </li>

                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-email-outline"></i>
                    <span>Email</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="email-inbox.html">Inbox</a></li>
                    <li><a href="email-read.html">Read Email</a></li>
                    <li><a href="email-compose.html">Email Compose</a></li>
                  </ul>
                </li>

                <li className="menu-title">Layouts</li>

                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-gradient"></i>
                    <span>Vertical</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="layouts-light-sidebar.html">Light Sidebar</a></li>
                    <li><a href="layouts-compact-sidebar.html">Compact Sidebar</a></li>
                    <li><a href="layouts-icon-sidebar.html">Icon Sidebar</a></li>
                    <li><a href="layouts-boxed.html">Boxed Layout</a></li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-page-layout-header"></i>
                    <span>Horizontal</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="layouts-horizontal.html">Default</a></li>
                    <li><a href="layouts-hori-topbar-dark.html">Topbar Dark</a></li>
                    <li><a href="layouts-hori-boxed-width.html">Boxed width</a></li>
                  </ul>
                </li>

                <li className="menu-title">Pages</li>

                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-account-circle-outline"></i>
                    <span>Authentication</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="auth-login.html">Login</a></li>
                    <li><a href="auth-register.html">Register</a></li>
                    <li><a href="auth-recoverpw.html">Recover Password</a></li>
                    <li><a href="auth-lock-screen.html">Lock Screen</a></li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-format-page-break"></i>
                    <span>Utility</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="pages-starter.html">Starter Page</a></li>
                    <li><a href="pages-maintenance.html">Maintenance</a></li>
                    <li><a href="pages-comingsoon.html">Coming Soon</a></li>
                    <li><a href="pages-timeline.html">Timeline</a></li>
                    <li><a href="pages-faqs.html">FAQs</a></li>
                    <li><a href="pages-pricing.html">Pricing</a></li>
                    <li><a href="pages-404.html">Error 404</a></li>
                    <li><a href="pages-500.html">Error 500</a></li>
                  </ul>
                </li>

                <li className="menu-title">Components</li>

                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="mdi mdi-briefcase-variant-outline"></i>
                    <span>UI Elements</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="ui-alerts.html">Alerts</a></li>
                    <li><a href="ui-badge.html">Badge</a></li>
                    <li><a href="ui-buttons.html">Buttons</a></li>
                    <li><a href="ui-cards.html">Cards</a></li>
                    <li><a href="ui-carousel.html">Carousel</a></li>
                    <li><a href="ui-dropdowns.html">Dropdowns</a></li>
                    <li><a href="ui-grid.html">Grid</a></li>
                    <li><a href="ui-images.html">Images</a></li>
                    <li><a href="ui-lightbox.html">Lightbox</a></li>
                    <li><a href="ui-modals.html">Modals</a></li>
                    <li><a href="ui-offcanvas.html">Offcavas</a></li>
                    <li><a href="ui-rangeslider.html">Range Slider</a></li>
                    <li><a href="ui-session-timeout.html">Session Timeout</a></li>
                    <li><a href="ui-pagination.html">Pagination</a></li>
                    <li><a href="ui-progressbars.html">Progress Bars</a></li>
                    <li><a href="ui-sweet-alert.html">Sweetalert 2</a></li>
                    <li><a href="ui-tabs-accordions.html">Tabs & Accordions</a></li>
                    <li><a href="ui-typography.html">Typography</a></li>
                    <li><a href="ui-video.html">Video</a></li>
                    <li><a href="ui-popover-tooltips.html">Popovers &amp; Tooltips</a></li>
                    <li><a href="ui-rating.html">Rating</a></li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="waves-effect">
                    <i className="ri-eraser-fill"></i>
                    <span className="badge rounded-pill bg-danger float-end">8</span>
                    <span>Forms</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="form-elements.html">Form Elements</a></li>
                    <li><a href="form-validation.html">Form Validation</a></li>
                    <li><a href="form-advanced.html">Form Advanced Plugins</a></li>
                    <li><a href="form-editors.html">Form Editors</a></li>
                    <li><a href="form-uploads.html">Form File Upload</a></li>
                    <li><a href="form-xeditable.html">Form X-editable</a></li>
                    <li><a href="form-wizard.html">Form Wizard</a></li>
                    <li><a href="form-mask.html">Form Mask</a></li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="ri-table-2"></i>
                    <span>Tables</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="tables-basic.html">Basic Tables</a></li>
                    <li><a href="tables-datatable.html">Data Tables</a></li>
                    <li><a href="tables-responsive.html">Responsive Table</a></li>
                    <li><a href="tables-editable.html">Editable Table</a></li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="ri-bar-chart-line"></i>
                    <span>Charts</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="charts-apex.html">Apex Charts</a></li>
                    <li><a href="charts-chartjs.html">Chartjs Charts</a></li>
                    <li><a href="charts-flot.html">Flot Charts</a></li>
                    <li><a href="charts-knob.html">Jquery Knob Charts</a></li>
                    <li><a href="charts-sparkline.html">Sparkline Charts</a></li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="ri-brush-line"></i>
                    <span>Icons</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="icons-remix.html">Remix Icons</a></li>
                    <li><a href="icons-materialdesign.html">Material Design</a></li>
                    <li><a href="icons-dripicons.html">Dripicons</a></li>
                    <li><a href="icons-fontawesome.html">Font Awesome </a></li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="ri-map-pin-line"></i>
                    <span>Maps</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="false">
                    <li><a href="maps-google.html">Google Maps</a></li>
                    <li><a href="maps-vector.html">Vector Maps</a></li>
                  </ul>
                </li>

                <li>
                  <a href="#" className="has-arrow waves-effect">
                    <i className="ri-share-line"></i>
                    <span>Multi Level</span>
                  </a>
                  <ul className="sub-menu" aria-expanded="true">
                    <li><a href="#">Level 1.1</a></li>
                    <li><a href="#" className="has-arrow">Level 1.2</a>
                      <ul className="sub-menu" aria-expanded="true">
                        <li><a href="#">Level 2.1</a></li>
                        <li><a href="#">Level 2.2</a></li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            {/* <!-- Sidebar --> */}
          </div>
        </div>
        {/* <!-- Left Sidebar End -->

        <!-- ============================================================== -->
        <!-- Start right Content here -->
        <!-- ============================================================== --> */}
        <div className="main-content">

          <div className="page-content">
            <div className="container-fluid">

              {/* <!-- @@include("partials/page-title.html", {"pagetitle": "Upzet", "title": "Dashboard"}) -->
              <!-- start page title --> */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0">Upzet</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item"><a href="#">Upzet</a></li>
                        <li className="breadcrumb-item active">Dashboard</li>
                      </ol>
                    </div>

                  </div>
                </div>
              </div>
              {/* <!-- end page title --> */}

              <div className="row">
                <div className="col-xl-3 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex text-muted">
                        <div className="flex-shrink-0 me-3 align-self-center">
                          <div id="radialchart-1" className="apex-charts" dir="ltr"></div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <p className="mb-1">Users</p>
                          <h5 className="mb-3">2.2k</h5>
                          <p className="text-truncate mb-0"><span className="text-success me-2"> 0.02% <i
                            className="ri-arrow-right-up-line align-bottom ms-1"></i></span>
                            From previous</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end card-body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div className="col-xl-3 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex">
                        <div className="flex-shrink-0 me-3 align-self-center">
                          <div id="radialchart-2" className="apex-charts" dir="ltr"></div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <p className="mb-1">Views per minute</p>
                          <h5 className="mb-3">50</h5>
                          <p className="text-truncate mb-0"><span className="text-success me-2"> 1.7% <i
                            className="ri-arrow-right-up-line align-bottom ms-1"></i></span>
                            From previous</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end card-body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div className="col-xl-3 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex text-muted">
                        <div className="flex-shrink-0 me-3 align-self-center">
                          <div id="radialchart-3" className="apex-charts" dir="ltr"></div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <p className="mb-1">Bounce Rate</p>
                          <h5 className="mb-3">24.03 %</h5>
                          <p className="text-truncate mb-0"><span className="text-danger me-2"> 0.01% <i
                            className="ri-arrow-right-down-line align-bottom ms-1"></i></span>
                            From previous</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end card-body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div className="col-xl-3 col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex text-muted">
                        <div className="flex-shrink-0  me-3 align-self-center">
                          <div className="avatar-sm">
                            <div
                              className="avatar-title bg-light rounded-circle text-primary font-size-20">
                              <i className="ri-group-line"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1 overflow-hidden">
                          <p className="mb-1">New Visitors</p>
                          <h5 className="mb-3">435</h5>
                          <p className="text-truncate mb-0"><span className="text-success me-2"> 0.01% <i
                            className="ri-arrow-right-up-line align-bottom ms-1"></i></span>
                            From previous</p>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end card-body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row --> */}

              <div className="row">
                <div className="col-xl-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="card-title">Overview</h5>
                        </div>
                        <div className="flex-shrink-0">
                          <div>
                            <button type="button" className="btn btn-soft-secondary btn-sm">
                              ALL
                            </button>
                            <button type="button" className="btn btn-soft-primary btn-sm">
                              1M
                            </button>
                            <button type="button" className="btn btn-soft-secondary btn-sm">
                              6M
                            </button>
                            <button type="button" className="btn btn-soft-secondary btn-sm active">
                              1Y
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div id="mixed-chart" className="apex-charts" dir="ltr"></div>
                      </div>
                    </div>
                    {/* <!-- end card-body --> */}

                    <div className="card-body border-top">
                      <div className="text-muted text-center">
                        <div className="row">
                          <div className="col-4 border-end">
                            <div>
                              <p className="mb-2"><i
                                className="mdi mdi-circle font-size-12 text-primary me-1"></i>
                                Expenses</p>
                              <h5 className="font-size-16 mb-0">$ 8,524 <span
                                className="text-success font-size-12"><i
                                  className="mdi mdi-menu-up font-size-14 me-1"></i>1.2
                                %</span></h5>
                            </div>
                          </div>
                          <div className="col-4 border-end">
                            <div>
                              <p className="mb-2"><i
                                className="mdi mdi-circle font-size-12 text-light me-1"></i>
                                Maintenance</p>
                              <h5 className="font-size-16 mb-0">$ 8,524 <span
                                className="text-success font-size-12"><i
                                  className="mdi mdi-menu-up font-size-14 me-1"></i>2.0
                                %</span></h5>
                            </div>
                          </div>
                          <div className="col-4">
                            <div>
                              <p className="mb-2"><i
                                className="mdi mdi-circle font-size-12 text-danger me-1"></i>
                                Profit</p>
                              <h5 className="font-size-16 mb-0">$ 8,524 <span
                                className="text-success font-size-12"><i
                                  className="mdi mdi-menu-up font-size-14 me-1"></i>0.4
                                %</span></h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end card-body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex  align-items-center">
                        <div className="flex-grow-1">
                          <h5 className="card-title">Social Source</h5>
                        </div>
                        <div className="flex-shrink-0">
                          <select className="form-select form-select-sm mb-0 my-n1">
                            <option value="MAY" defaultValue="">May</option>
                            <option value="AP">April</option>
                            <option value="MA">March</option>
                            <option value="FE">February</option>
                            <option value="JA">January</option>
                            <option value="DE">December</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <div id="radialBar-chart" className="apex-charts" dir="ltr"></div>
                      </div>

                      <div className="row">
                        <div className="col-4">
                          <div className="social-source text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <span className="avatar-title rounded-circle bg-primary font-size-18">
                                <i className="ri  ri-facebook-circle-fill text-white"></i>
                              </span>
                            </div>
                            <h5 className="font-size-15">Facebook</h5>
                            <p className="text-muted mb-0">125 sales</p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="social-source text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <span className="avatar-title rounded-circle bg-info font-size-18">
                                <i className="ri  ri-twitter-fill text-white"></i>
                              </span>
                            </div>
                            <h5 className="font-size-15">Twitter</h5>
                            <p className="text-muted mb-0">112 sales</p>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="social-source text-center mt-3">
                            <div className="avatar-xs mx-auto mb-3">
                              <span className="avatar-title rounded-circle bg-danger font-size-18">
                                <i className="ri ri-instagram-line text-white"></i>
                              </span>
                            </div>
                            <h5 className="font-size-15">Instagram</h5>
                            <p className="text-muted mb-0">104 sales</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- end card-body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row --> */}

              <div className="row">
                <div className="col-xl-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Order Stats</h5>
                      <div>
                        <ul className="list-unstyled">
                          <li className="py-3">
                            <div className="d-flex">
                              <div className="avatar-xs align-self-center me-3">
                                <div
                                  className="avatar-title rounded-circle bg-light text-primary font-size-18">
                                  <i className="ri-checkbox-circle-line"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <p className="text-muted mb-2">Completed</p>
                                <div className="progress progress-sm animated-progess">
                                  <div className="progress-bar bg-success" role="progressbar"
                                    style={{width: "70%"}} aria-valuenow="70" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="py-3">
                            <div className="d-flex">
                              <div className="avatar-xs align-self-center me-3">
                                <div
                                  className="avatar-title rounded-circle bg-light text-primary font-size-18">
                                  <i className="ri-calendar-2-line"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <p className="text-muted mb-2">Pending</p>
                                <div className="progress progress-sm animated-progess">
                                  <div className="progress-bar bg-warning" role="progressbar"
                                    style={{width: "45%"}} aria-valuenow="45" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li className="py-3">
                            <div className="d-flex">
                              <div className="avatar-xs align-self-center me-3">
                                <div
                                  className="avatar-title rounded-circle bg-light text-primary font-size-18">
                                  <i className="ri-close-circle-line"></i>
                                </div>
                              </div>
                              <div className="flex-grow-1">
                                <p className="text-muted mb-2">Cancel</p>
                                <div className="progress progress-sm animated-progess">
                                  <div className="progress-bar bg-danger" role="progressbar"
                                    style={{width: "19%"}} aria-valuenow="19" aria-valuemin="0"
                                    aria-valuemax="100"></div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <hr/>

                      <div className ="text-center">
                      <div className ="row">
                      <div className ="col-4">
                      <div className ="mt-2">
                      <p className ="text-muted mb-2">Completed</p>
                      <h5 className ="font-size-16 mb-0">70</h5>
                      </div>
                      </div>
                      <div className ="col-4">
                      <div className ="mt-2">
                      <p className ="text-muted mb-2">Pending</p>
                      <h5 className ="font-size-16 mb-0">45</h5>
                      </div>
                      </div>
                      <div className ="col-4">
                      <div className ="mt-2">
                      <p className ="text-muted mb-2">Cancel</p>
                      <h5 className ="font-size-16 mb-0">19</h5>
                      </div>
                      </div>
                      </div>
                      </div>
                    </div>
                    {/* <!-- end card-body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Notifications</h4>

                      <div className="pe-3" data-simplebar style={{maxHeight: "287px"}}>
                        <a href="#" className="text-body d-block">
                          <div className="d-flex py-3">
                            <div className="flex-shrink-0 me-3 align-self-center">
                              <img className="rounded-circle avatar-xs" alt=""
                                src="assets/images/users/avatar-2.jpg"/>
                            </div>

                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="font-size-14 mb-1">Scott Elliott</h5>
                              <p className="text-truncate mb-0">
                                If several languages coalesce
                              </p>
                            </div>
                            <div className="flex-shrink-0 font-size-13">
                              20 min ago
                            </div>
                          </div>
                        </a>
                        <a href="#" className="text-body d-block">
                          <div className="d-flex py-3">
                            <div className="flex-shrink-0 me-3 align-self-center">
                              <div className="avatar-xs">
                                <span
                                  className="avatar-title bg-soft-primary rounded-circle text-primary">
                                  <i className="mdi mdi-account-supervisor"></i>
                                </span>
                              </div>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="font-size-14 mb-1">Team A</h5>
                              <p className="text-truncate mb-0">
                                Team A Meeting 9:15 AM
                              </p>
                            </div>
                            <div className="flex-shrink-0 font-size-13">
                              9:00 am
                            </div>
                          </div>
                        </a>
                        <a href="#" className="text-body d-block">
                          <div className="d-flex py-3">
                            <div className="flex-shrink-0 me-3 align-self-center">
                              <img className="rounded-circle avatar-xs" alt=""
                                src="assets/images/users/avatar-3.jpg"/>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="font-size-14 mb-1">Frank Martin</h5>
                              <p className="text-truncate mb-0">
                                Neque porro quisquam est
                              </p>
                            </div>
                            <div className="flex-shrink-0 font-size-13">
                              8:54 am
                            </div>
                          </div>
                        </a>
                        <a href="#" className="text-body d-block">
                          <div className="d-flex py-3">
                            <div className="flex-shrink-0 me-3 align-self-center">
                              <div className="avatar-xs">
                                <span
                                  className="avatar-title bg-soft-primary rounded-circle text-primary">
                                  <i className="mdi mdi-email-outline"></i>
                                </span>
                              </div>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="font-size-14 mb-1">Updates</h5>
                              <p className="text-truncate mb-0">
                                It will be as simple as fact
                              </p>
                            </div>
                            <div className="flex-shrink-0 font-size-13">
                              27-03-2020
                            </div>
                          </div>
                        </a>

                        <a href="#" className="text-body d-block">
                          <div className="d-flex py-3">
                            <div className="flex-shrink-0 me-3 align-self-center">
                              <img className="rounded-circle avatar-xs" alt=""
                                src="assets/images/users/avatar-4.jpg"/>
                            </div>
                            <div className="flex-grow-1 overflow-hidden">
                              <h5 className="font-size-14 mb-1">Terry Garrick</h5>
                              <p className="text-truncate mb-0">
                                At vero eos et accusamus et
                              </p>
                            </div>
                            <div className="flex-shrink-0 font-size-13">
                              27-03-2020
                            </div>
                          </div>
                        </a>

                      </div>
                    </div>
                    {/* <!-- end card-body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}

                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title mb-3">Revenue by Location</h5>

                      <div>
                        <div id="usa" style={{height: "226px"}}></div>
                      </div>

                      <div className="text-center mt-4">
                        <a href="#" className="btn btn-primary btn-sm">View More</a>
                      </div>
                    </div>
                    {/* <!-- end card-body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row --> */}

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title mb-4">Latest Transaction</h4>

                      <div className="table-responsive">
                        <table className="table table-centered table-nowrap mb-0">
                          <thead>
                            <tr>
                              <th scope="col" style={{width: "50px"}}>
                                <div className="form-check">
                                  <input type="checkbox" className="form-check-input"
                                    id="customCheckall"/>
                                  <label className ="form-check-label"
                                  htmlFor="customCheckall"></label>
                                </div>
                              </th>
                              <th scope="col" style={{width: "60px"}}></th>
                              <th scope="col">ID & Name</th>
                              <th scope="col">Date</th>
                              <th scope="col">Price</th>
                              <th scope="col">Quantity</th>
                              <th scope="col">Amount</th>
                              <th scope="col">Status</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input type="checkbox" className="form-check-input"
                                    id="customCheck1"/>
                                  <label className ="form-check-label" htmlFor="customCheck1"></label>
                                </div>
                              </td>
                              <td>
                                <img src="assets/images/users/avatar-2.jpg" alt="user"
                                  className="avatar-xs rounded-circle" />
                              </td>
                              <td>
                                <p className="mb-1 font-size-12">#AP1234</p>
                                <h5 className="font-size-15 mb-0">David Wiley</h5>
                              </td>
                              <td>02 Nov, 2019</td>
                              <td>$ 1,234</td>
                              <td>1</td>

                              <td>
                                $ 1,234
                              </td>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-success me-1"></i>
                                Confirm
                              </td>
                              <td>
                                <button type="button"
                                  className="btn btn-outline-success btn-sm">Edit</button>
                                <button type="button"
                                  className="btn btn-outline-danger btn-sm">Cancel</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input type="checkbox" className="form-check-input"
                                    id="customCheck2"/>
                                  <label className ="form-check-label" htmlFor="customCheck2"></label>
                                </div>
                              </td>
                              <td>
                                <div className="avatar-xs">
                                  <span
                                    className="avatar-title rounded-circle bg-soft-primary text-success">
                                    W
                                  </span>
                                </div>
                              </td>
                              <td>
                                <p className="mb-1 font-size-12">#AP1235</p>
                                <h5 className="font-size-15 mb-0">Walter Jones</h5>
                              </td>
                              <td>04 Nov, 2019</td>
                              <td>$ 822</td>
                              <td>2</td>

                              <td>
                                $ 1,644
                              </td>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-success me-1"></i>
                                Confirm
                              </td>
                              <td>
                                <button type="button"
                                  className="btn btn-outline-success btn-sm">Edit</button>
                                <button type="button"
                                  className="btn btn-outline-danger btn-sm">Cancel</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input type="checkbox" className="form-check-input"
                                    id="customCheck3"/>
                                  <label className ="form-check-label" htmlFor="customCheck3"></label>
                                </div>
                              </td>
                              <td>
                                <img src="assets/images/users/avatar-3.jpg" alt="user"
                                  className="avatar-xs rounded-circle" />
                              </td>
                              <td>
                                <p className="mb-1 font-size-12">#AP1236</p>
                                <h5 className="font-size-15 mb-0">Eric Ryder</h5>
                              </td>
                              <td>05 Nov, 2019</td>
                              <td>$ 1,153</td>
                              <td>1</td>

                              <td>
                                $ 1,153
                              </td>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-danger me-1"></i>
                                Cancel
                              </td>
                              <td>
                                <button type="button"
                                  className="btn btn-outline-success btn-sm">Edit</button>
                                <button type="button"
                                  className="btn btn-outline-danger btn-sm">Cancel</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input type="checkbox" className="form-check-input"
                                    id="customCheck4"/>
                                  <label className ="form-check-label" htmlFor="customCheck4"></label>
                                </div>
                              </td>
                              <td>
                                <img src="assets/images/users/avatar-6.jpg" alt="user"
                                  className="avatar-xs rounded-circle" />
                              </td>
                              <td>
                                <p className="mb-1 font-size-12">#AP1237</p>
                                <h5 className="font-size-15 mb-0">Kenneth Jackson</h5>
                              </td>
                              <td>06 Nov, 2019</td>
                              <td>$ 1,365</td>
                              <td>1</td>

                              <td>
                                $ 1,365
                              </td>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-success me-1"></i>
                                Confirm
                              </td>
                              <td>
                                <button type="button"
                                  className="btn btn-outline-success btn-sm">Edit</button>
                                <button type="button"
                                  className="btn btn-outline-danger btn-sm">Cancel</button>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <div className="form-check">
                                  <input type="checkbox" className="form-check-input"
                                    id="customCheck5"/>
                                  <label className ="form-check-label" htmlFor="customCheck5"></label>
                                </div>
                              </td>
                              <td>
                                <div className="avatar-xs">
                                  <span
                                    className="avatar-title rounded-circle bg-soft-primary text-success">
                                    R
                                  </span>
                                </div>
                              </td>
                              <td>
                                <p className="mb-1 font-size-12">#AP1238</p>
                                <h5 className="font-size-15 mb-0">Ronnie Spiller</h5>
                              </td>
                              <td>08 Nov, 2019</td>
                              <td>$ 740</td>
                              <td>2</td>

                              <td>
                                $ 1,480
                              </td>
                              <td>
                                <i className="mdi mdi-checkbox-blank-circle text-warning me-1"></i>
                                Pending
                              </td>
                              <td>
                                <button type="button"
                                  className="btn btn-outline-success btn-sm">Edit</button>
                                <button type="button"
                                  className="btn btn-outline-danger btn-sm">Cancel</button>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* <!-- end card-body --> */}
                  </div>
                  {/* <!-- end card --> */}
                </div>
                {/* <!-- end col --> */}
              </div>
              {/* <!-- end row --> */}

            </div>
            {/* <!-- container-fluid --> */}
          </div>
          {/* <!-- End Page-content --> */}

          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <script>document.write(new Date().getFullYear())</script> © Upzet.
                </div>
                <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                    Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesdesign
                  </div>
                </div>
              </div>
            </div>
          </footer>

        </div>
        {/* <!-- end main content--> */}

      </div>
      {/* <!-- END layout-wrapper -->
      <!-- Right Sidebar --> */}
      <div className="right-bar">
        <div data-simplebar className="h-100">
          <div className="rightbar-title d-flex align-items-center px-3 py-4">

            <h5 className="m-0 me-2">Settings</h5>

            <a href="#" className="right-bar-toggle ms-auto">
              <i className="mdi mdi-close noti-icon"></i>
            </a>
          </div>

          {/* <!-- Settings --> */}
          <hr className="mt-0" />
          <h6 className="text-center mb-0">Choose Layouts</h6>

          <div className="p-4">
            <div className="mb-2">
              <img src="assets/images/layouts/layout-1.png" className="img-thumbnail" alt="layout-1"/>
            </div>

            <div className="form-check form-switch mb-3">
              <input className="form-check-input theme-choice" type="checkbox" id="light-mode-switch" onChange={onChangeText}/>
              <label className ="form-check-label" htmlFor="light-mode-switch">Light Mode</label>
            </div>

            <div className="mb-2">
              <img src="assets/images/layouts/layout-2.png" className="img-thumbnail" alt="layout-2"/>
            </div>
            <div className="form-check form-switch mb-3">
              <input className="form-check-input theme-choice" type="checkbox" id="dark-mode-switch"
                data-bsstyle="assets/css/bootstrap-dark.min.css" data-appstyle="assets/css/app-dark.min.css"/>
              <label className ="form-check-label" htmlFor="dark-mode-switch">Dark Mode</label>
            </div>

            <div className="mb-2">
              <img src="assets/images/layouts/layout-3.png" className="img-thumbnail" alt="layout-3"/>
            </div>
            <div className="form-check form-switch mb-5">
              <input className="form-check-input theme-choice" type="checkbox" id="rtl-mode-switch"
                data-appstyle="assets/css/app-rtl.min.css"/>
              <label className ="form-check-label" htmlFor="rtl-mode-switch">RTL Mode</label>
            </div>


          </div>

        </div>
      </div>

      <div className="rightbar-overlay"></div>

    </div>
  );
}

export default App;
