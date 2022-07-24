import React from 'react'

const Contact = () => {
    return (
        <div className="contact">
            <div
                className="contact-bar border border-2 border-dark border-end-0 border-start-0 w-75 mx-auto d-flex flex-column flex-lg-row justify-content-evenly align-items-center"
            >
                <span className="mb-2 mb-lg-0">
                    <i className="bi bi-cart"></i> GÜVENİLİR ALIŞVERİŞ</span
                >
                <span className="mb-2 mb-lg-0"
                ><i className="bi bi-truck"></i> 75 TL VE ÜZERİ ÜCRETSİZ KARGO</span
                >
                <span><i className="bi bi-emoji-smile"></i> MÜŞTERİ MEMNUNİYET</span>
            </div>
            <div className="contact-text text-center mt-3">
                Kampanyalarımızdan ve sitemizdeki yeniliklerden haberdar olmak için
                e-bülten listemizi üye olun
            </div>
            <div className="contact-sign d-flex mt-3 mb-5 justify-content-center">
                <form className="d-flex">
                    <input type="text" placeholder="e-posta adresi" />
                    <button type="submit" className="btn btn-dark rounded-0">ÜYE OL</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
