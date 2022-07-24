import React from 'react'
import ProductBox from '../productBox/ProductBox'

const MustPopular = () => {
    return (
        <div className="must-popular">
            <h1 className="text-center">En Popüler</h1>
            <div className="new-products-box-container container">
                <div className="row">
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                    <ProductBox />
                </div>
            </div>
        </div>
    )
}

export default MustPopular
