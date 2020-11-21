import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import { auth } from "../../components/Firebase/firebase";
import './ProfileScreen.css'
import '../../style/css/bootstrap.min.css'
import '../../style/css/font-awesome.min.css'
import '../../style/css/nalika-icon.css'
import '../../style/css/owl.carousel.css'
import '../../style/css/owl.theme.css'
import '../../style/css/owl.transitions.css'
import '../../style/css/animate.css'
import '../../style/css/normalize.css'
import '../../style/css/meanmenu.min.css'
import '../../style/css/morrisjs/morris.css'
import '../../style/css/scrollbar/jquery.mCustomScrollbar.min.css'
import '../../style/css/metisMenu/metisMenu.min.css'
import '../../style/css/metisMenu/metisMenu-vertical.css'
import '../../style/css/responsive.css'

const ProfileScreen = () => {
  const user = useContext(UserContext);
  const { photoURL, displayName, email } = user;

  return (
    <div>
    <div className="left-sidebar-pro">
      <nav id="sidebar" className>
        <div className="sidebar-header">
          <a href="index.html"><img className="main-logo" src="img/logo/logo.jpg" alt="" style={{height: '60px'}} /></a>
          <strong><img src="img/logo/logo.jpg" alt="" /></strong>
        </div>
        <div className="nalika-profile">
          <div className="profile-dtl">
            <a href="#"><img src="img/notification/4.jpg" alt="" /></a>
            <h2>Avatar <span className="min-dtn">go here</span></h2>
          </div>
          <div className="profile-social-dtl">
            <ul className="dtl-social">
              <li><a href="#"><i className="icon nalika-facebook" /></a></li>
              <li><a href="#"><i className="icon nalika-twitter" /></a></li>
              <li><a href="#"><i className="icon nalika-linkedin" /></a></li>
            </ul>
          </div>
        </div>
        <div className="left-custom-menu-adp-wrap comment-scrollbar">
          <nav className="sidebar-nav left-sidebar-menu-pro">
            <ul className="metismenu" id="menu1">
              <li className="active"><a className="has-arrow" href="index.html"><i className="icon nalika-home icon-wrap" /><span className="mini-click-non">Home Page</span></a></li>
              <li><a className="has-arrow" href="#" aria-expanded="false"><i className="fa fa-clock-o text-success icon-wrap" style={{color: '#fff', marginLeft: '5px'}} /> <span className="mini-click-non">History</span></a></li>
              <li> <a className="has-arrow" href="#" aria-expanded="false"><i className="icon nalika-diamond icon-wrap" /> <span className="mini-click-non">Ranking</span></a> </li>  
              <li><a className="has-arrow" href="#" aria-expanded="false"><i className="icon nalika-bar-chart icon-wrap" /> <span className="mini-click-non">About us</span></a></li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
    <div className="all-content-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="logo-pro">
              <a href="index.html"><img className="main-logo" src="img/logo/logo.png" alt="" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="header-advance-area">
        <div className="header-top-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="header-top-wraper">
                  <div className="row">
                    <div className="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                    </div>
                    <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                      <div className="header-top-menu tabl-d-n hd-search-rp">
                        <div className="breadcome-heading">
                          <form role="search" className>
                            <input type="text" placeholder="Search..." className="form-control" style={{color: 'aliceblue'}} />
                            <a href><i className="fa fa-search" /></a>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                      <div className="header-right-info">
                        <ul className="nav navbar-nav mai-top-nav header-right-menu">  
                          <li className="nav-item"><a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle"><i className="icon nalika-alarm" aria-hidden="true" /><span className="indicator-nt" /></a>
                            <div role="menu" className="notification-author dropdown-menu animated zoomIn">
                              <div className="notification-single-top">
                                <h1>Notifications</h1>
                              </div>
                              <ul className="notification-menu">
                                <li>
                                  <a href="#">
                                    <div className="notification-icon">
                                      <i className="icon nalika-tick" aria-hidden="true" />
                                    </div>
                                    <div className="notification-content">
                                      <span className="notification-date">16 Sept</span>
                                      <h2>Advanda Cro</h2>
                                      <p>Please done this project as soon possible.</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="notification-icon">
                                      <i className="icon nalika-cloud" aria-hidden="true" />
                                    </div>
                                    <div className="notification-content">
                                      <span className="notification-date">16 Sept</span>
                                      <h2>Sulaiman din</h2>
                                      <p>Please done this project as soon possible.</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="notification-icon">
                                      <i className="icon nalika-folder" aria-hidden="true" />
                                    </div>
                                    <div className="notification-content">
                                      <span className="notification-date">16 Sept</span>
                                      <h2>Victor Jara</h2>
                                      <p>Please done this project as soon possible.</p>
                                    </div>
                                  </a>
                                </li>
                                <li>
                                  <a href="#">
                                    <div className="notification-icon">
                                      <i className="icon nalika-bar-chart" aria-hidden="true" />
                                    </div>
                                    <div className="notification-content">
                                      <span className="notification-date">16 Sept</span>
                                      <h2>Victor Jara</h2>
                                      <p>Please done this project as soon possible.</p>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                              <div className="notification-view">
                                <a href="#">View All Notification</a>
                              </div>
                            </div>
                          </li>
                          <li className="nav-item">
                            <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" className="nav-link dropdown-toggle">
                              <i className="icon nalika-user" />
                              <span className="admin-name">Advance Settings</span>
                            </a>
                            <ul role="menu" className="dropdown-header-top author-log dropdown-menu animated zoomIn">
                              {/* <li><a href="#"><span class="icon nalika-home author-log-ic"></span> Register</a></li> */}
                              <li><a href="profile-edit.html"><span className="icon nalika-user author-log-ic" /> My Profile</a></li>
                              {/* <li><a href="#"><span class="icon nalika-settings author-log-ic"></span> Settings</a></li> */}
                              <li><a href="login.html"><span className="icon nalika-unlocked author-log-ic" /> Log Out</a></li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Mobile Menu start*/}
        <div className="mobile-menu-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="mobile-menu">
                  <nav id="dropdown">
                    <ul className="mobile-menu-nav">
                      <li><a data-toggle="collapse" data-target="#Charts" href="#">Home <span className="admin-project-icon nalika-icon nalika-down-arrow" /></a>
                        <ul className="collapse dropdown-header-top">
                          <li><a href="index.html">Dashboard v.1</a></li>
                        </ul>
                      </li>
                      <li><a data-toggle="collapse" data-target="#demo" href="#">Mailbox <span className="admin-project-icon nalika-icon nalika-down-arrow" /></a>
                        <ul id="demo" className="collapse dropdown-header-top">
                          <li><a href="mailbox.html">Inbox</a>
                          </li>
                        </ul>
                      </li>
                      <li><a data-toggle="collapse" data-target="#others" href="#">Ranking <span className="admin-project-icon nalika-icon nalika-down-arrow" /></a>
                        <ul id="others" className="collapse dropdown-header-top">
                          <li><a href="file-manager.html">File Manager</a></li>
                        </ul>
                      </li>
                      <li><a data-toggle="collapse" data-target="#Pagemob" href="#">Pages <span className="admin-project-icon nalika-icon nalika-down-arrow" /></a>
                        <ul id="Pagemob" className="collapse dropdown-header-top">
                          <li><a href="login.html">Login</a>
                          </li>
                          <li><a href="register.html">Register</a>
                          </li>
                          <li><a href="lock.html">Lock</a>
                          </li>
                          <li><a href="password-recovery.html">Password Recovery</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Mobile Menu end */}
        <div className="breadcome-area">
          <div className="container-fluid  ">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="breadcome-list">
                  <div className="row z-depth-3">
                    <div className="profile-user-pic aligncenter">
                      <img src="https://iupac.org/wp-content/uploads/2018/05/default-avatar.png" alt="" className="img-responsive img-circle" />
                    </div>
                    <div className="profile-user-title text-center" style={{color: 'white'}}>
                      <div className="profile-user-name ">
                        <h3>Name's Placeholder</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="breadcome-area">
          <div className="container-fluid  ">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="breadcome-list">
                  <h2 className="mt-3 text-center" style={{color: 'white'}}>INFORMATION</h2>
                  <hr className="badge-light mt-0 w-30" />
                  <div className="row">
                    <div className="col-md-6">
                      <p className="font-weight-bold" style={{fontSize: 'medium', color: 'white'}}><i className="icon nalika-mail icon-wrap" /> <span className="mini-click-non">Email:</span></p>
                      <h4 className="text-info">Examplemail@mail.com</h4>
                    </div>
                    <div className="col-md-6">
                      <p className="font-weight-bold" style={{fontSize: 'medium', color: 'white'}}><i className="fa fa-phone-square" />  <span className="mini-click-non">Tel:</span></p>
                      <h4 className="text-info">+1234567891</h4>
                    </div>
                  </div><div className="row" style={{marginBottom: '3%', marginTop: '3%'}}>
                    <div className="col-md-6">
                      <p className="font-weight-bold" style={{fontSize: 'medium', color: 'white'}}><i className="fa fa-hand-paper-o" />  <span className="mini-click-non">Date of birth</span></p>
                      <h4 className="text-info">DD/MM/YYYY</h4>
                    </div> 
                  </div>
                  <hr className="badge-light mt-0 w-30" />
                  <div className="row" style={{marginBottom: '3%'}}>
                    <div className="col-md-6">
                      <p className="font-weight-bold" style={{fontSize: 'medium', color: 'white'}}><i className="fa fa-credit-card" />  <span className="mini-click-non">Job:</span></p>
                      <h4 className="text-info">Example Workplace</h4>
                    </div>
                    <div className="col-md-6">
                      <p className="font-weight-bold" style={{fontSize: 'medium', color: 'white'}}><i className="fa fa-users" />  <span className="mini-click-non">Workplace:</span></p>
                      <h4 className="text-info">Example Workplace</h4>
                    </div>
                  </div>
                  <hr className="badge-light mt-0 w-30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="button-style-four btn-mg-b-10">
        <button type="button" className="btn btn-custon-four btn-primary aligncenter" onclick="$('.review-tab-pro-inner').slideToggle();">
          Edit Profile</button>
      </div>        
      <div className="single-product-tab-area mg-b-30">
        <div className="single-pro-review-area">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="review-tab-pro-inner" style={{display: 'none'}}>
                  <ul id="myTab3" className="tab-review-design">
                    <li className="active"><a href="#profile"><i className="icon nalika-chat" aria-hidden="true" /> Profile</a></li>
                  </ul>
                  <div id="myTabContent" className="tab-content custom-product-edit">
                    <div className="product-tab-list tab-pane fade active in" id="profile">
                      <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                          <div className="review-content-section">
                            <div className="card-block">
                              <div className="text-muted f-w-400" style={{marginBottom: '4%'}}>
                                <p>You can change your profile below:</p>
                              </div>
                              <div className="m-t-10" />
                              <div className="input-group mg-b-15">
                                <span className="input-group-addon"><i className="icon nalika-mail" aria-hidden="true" /></span>
                                <label type="text" className="form-control">Email</label>
                              </div>
                              <div className="input-group mg-b-15">
                                <span className="input-group-addon"><i className="icon nalika-picture" aria-hidden="true" /></span>
                                <input type="file" className="form-control" placeholder="Avatar" />
                              </div>
                              <div className="input-group mg-b-15 mg-t-15">
                                <span className="input-group-addon"><i className="icon nalika-user" aria-hidden="true" /></span>
                                <input type="text" className="form-control" placeholder="User Name" />
                              </div>
                              <div className="input-group mg-b-15">
                                <span className="input-group-addon"><i className="icon nalika-edit" aria-hidden="true" /></span>
                                <input type="text" className="form-control" placeholder="Password" />
                              </div>
                              <div className="input-group mg-b-15">
                                <span className="input-group-addon"><i className="icon nalika-pie-chart icon-wrap" aria-hidden="true" /></span>
                                <input type="text" className="form-control" placeholder="Confirm password" />
                              </div>
                              <div className="button-style-four btn-mg-b-10 aligncenter">
                                <button type="button" className="btn btn-custon-four btn-primary aligncenter">
                                  <i className="fa fa-info-circle adminpro-informatio " aria-hidden="true" /> Save Change</button>
                              </div>                                                      
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12" style={{marginTop: '20px'}}>
                <div className="button-style-four btn-mg-b-10">
                  <button type="button" className="btn btn-custon-four btn-danger">
                    <i className="fa fa-times adminpro-danger-error" aria-hidden="true" /> Delete Account</button>
                </div>
              </div>    
            </div>
          </div>
        </div>
      </div>
      <div className="footer-copyright-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-copy-right">
                <p>Copyright © 2020 All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  ) 
};
export default ProfileScreen;