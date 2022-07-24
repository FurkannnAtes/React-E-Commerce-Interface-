/* eslint-disable */
import React from 'react'

const Header = () => {
    return (
        <div>
            <header
                className="header d-flex justify-content-center justify-content-lg-between px-5 py-2 mb-3"
            >
                <div className="brand">
                    <img src="/images/logo 1.png" alt=".." />
                    <img src="/images/444 NAKO.png" alt=".." />
                </div>
                <div className="header-right d-flex align-items-center d-none d-lg-flex">
                    <div className="login-register-box">
                        <a href="" className="nav-links text-decoration-none text-dark px-0"
                        >ÜYE OL</a
                        >
                        <span>/</span>
                        <a href="" className="nav-links text-decoration-none text-dark px-0"
                        >GİRİŞ YAP</a
                        >
                    </div>
                    <div className="basket">
                        <a href="" className="nav-links text-decoration-none text-dark px-2">
                            SEPETİM <i className="bi bi-basket3-fill"></i>
                        </a>
                    </div>
                </div>
            </header>

            <nav className="navbar navbar-expand-lg justify-content-center bg-light">
                <button
                    className="navbar-toggler ms-auto me-3"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarMobileContent"
                >
                    <span ><i className="bi bi-list" style={{ fontSize: "2rem" }}></i></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarMobileContent">
                    <div className="sub-content-enter d-lg-none d-flex ps-2">
                        <div className="login-register-box">
                            <a href="" className="nav-links text-decoration-none text-dark px-0"
                            >ÜYE OL</a
                            >
                            <span>/</span>
                            <a href="" className="nav-links text-decoration-none text-dark px-0"
                            >GİRİŞ YAP</a
                            >
                        </div>
                        <div className="basket ms-3">
                            <a href="" className="nav-links text-decoration-none text-dark px-2">
                                SEPETİM <i className="bi bi-basket3-fill"></i>
                            </a>
                        </div>
                    </div>
                    <div className="nav-item d-flex d-lg-none px-2 mt-3">
                        <i
                            className="bi bi-search border border-dark border-end-0 px-2 d-flex align-items-center"
                        ></i
                        ><input type="text" className="search-bar w-100" />
                    </div>
                    <ul
                        className="navbar-nav w-100 d-flex flex-column flex-lg-row p-3 justify-content-lg-evenly"
                    >
                        <div className="nav-item">
                            <a href="" className="nav-link">EL ÖRGÜ İPLİKLERİ</a>
                        </div>
                        <div className="nav-item">
                            <a href="" className="nav-link">ÖRGÜ EKİPMANLARI</a>
                        </div>
                        <div className="nav-item"><a href="" className="nav-link">DERGİ</a></div>
                        <div className="nav-item"><a href="" className="nav-link">NAKO TV </a></div>
                        <div className="nav-item">
                            <a href="" className="nav-link">NAKO ÖRGÜ KULÜBÜ</a>
                        </div>
                        <div className="nav-item d-none d-lg-flex aling-items-center">
                            <i
                                className="bi bi-search border border-dark border-end-0 px-2 d-flex align-items-center"
                            ></i
                            ><input type="text" className="search-bar" />
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header
