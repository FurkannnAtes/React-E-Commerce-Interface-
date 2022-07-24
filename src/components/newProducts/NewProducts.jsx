import React from 'react'
import ProductBox from '../productBox/ProductBox'

const NewProducts = () => {
    return (
        <div className="new-products">
            <h1 className="text-center">YENİ ÜRÜNLER</h1>
            <div className="new-products-box-container container">
                <div className="row">
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />


                    <div className="box-p col-md-6 col-lg-4 col-xl-3 px-4">
                        <div className="new-products-advertise py-3">
                            <img
                                className="img-fluid w-100"
                                src="images/Layer 6 1 (1).png"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewProducts
