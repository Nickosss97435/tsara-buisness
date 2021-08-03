import React from 'react';
import CartList from './CartList';

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>Votre pannier est actuelement vide</h1>
<CartList />
                </div>
            </div>
            
        </div>
    )
}
