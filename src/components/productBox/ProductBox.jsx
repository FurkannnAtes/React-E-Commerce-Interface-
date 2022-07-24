import React from 'react'

const ProductBox = () => {
    return (
        <div className="box-p p-3 px-4 col-md-6 col-lg-4 col-xl-3">
            <div
                className="new-product-box order text-center p-1 position-relative"
            >
                <span
                    className="position-absolute top-0 end-0 bg-danger text-dark fw-bold p-2"
                >YENİ</span
                >
                <div className="card-body d-flex flex-column align-items-center">
                    <img
                        className="new-product-img img-fluid mt-2"
                        src="images/Wool 1.png"
                        alt=""
                    />
                    <h5 className="product-amount mb-4 mt-3">13 RENK</h5>
                    <div className="new-product-info mt-3">
                        <h3 className="mb-3">Calico Jakar</h3>
                        <h6 className="mb-3">%50 Pamuk, %50 Premium Akrilik</h6>
                        <h3>6.50 TL</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductBox
