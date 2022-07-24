import React from "react";

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white">
            <div className="container p-4">
                <section className="">
                    <div className="row">
                        <div className="col-xl-3 col-lg-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Kurumsal</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">
                                        Hakkımızda
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">
                                        İletişim
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-xl-2 col-lg-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">MÜŞTERİ HİZMETLERİ</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">
                                        Satış Sözleşmesi Kultanim Sartlari
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">
                                        Güvenlik Sertifikası
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">
                                        Hesap Numaralarımız
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">
                                        Gizlilik
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">
                                        Odeme Seçenekleri
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-xl-2 col-lg-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Hesabım</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">
                                        Siparişlerim
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">
                                        Sepetim
                                    </a>
                                </li>
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">
                                        Bilgilerim
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-xl-2 col-lg-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Örgü danışmanı</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white text-decoration-none">
                                        El örgüsü ile ilgili her türlü soru, öneri ve destek
                                        talebiniz için hafta içi mesai saatleri içinde asagidaki
                                        telefon numarasından Orgu Danışmanlarımıza ulaşabilirsiniz.
                                        TELEFON: 123000000000
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-xl-3 col-lg-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Bizi Takip Edin</h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a href="#!" className="text-white text-decoration-none me-2">
                                        <i className="bi bi-instagram"></i>
                                    </a>
                                    <a href="#!" className="text-white text-decoration-none me-2">
                                        <i className="bi bi-twitter"></i>
                                    </a>
                                    <a href="#!" className="text-white text-decoration-none me-2">
                                        <i className="bi bi-linkedin"></i>
                                    </a>
                                    <a href="#!" className="text-white text-decoration-none">
                                        <i className="bi bi-whatsapp"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <div
                className="text-center p-3"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            >
                © 2022 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">
                    MDBootstrap.com
                </a>
            </div>
        </footer>
    );
};

export default Footer;
