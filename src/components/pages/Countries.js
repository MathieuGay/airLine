import React, { useState, useEffect } from 'react';
import '../../styles/Countries.css'
import { OrderList } from 'primereact/orderlist';
import { ProductService } from '../../dataCountries/DataCountries';

export default function FilterDemo() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        ProductService.getProductsSmall().then((data) => setProducts(data));
    }, []);

    const itemTemplate = (item) => {
        return (
            <div className="flex flex-wrap p-2 align-items-center gap-3">
                <img className="w-4rem shadow-2 flex-shrink-0 border-round"/>
                <div className="flex-1 flex flex-column gap-2 xl:mr-8">
                    <span className="font-bold">{item.name}</span>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card xl:flex xl:justify-content-center">
            <OrderList value={products} onChange={(e) => setProducts(e.value)} itemTemplate={itemTemplate} header="Pays" filter filterBy="name"></OrderList>
        </div>
    )
}