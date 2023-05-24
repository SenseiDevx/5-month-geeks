import React from 'react';
import { useSelector} from "react-redux";
import {productsSelect} from "../../redux/productsSlice";
import ProductItem from "../ProducItem/ProductItem";

const MainPage = () => {
    const {products} = useSelector(productsSelect)


    return (
        <div>
            <ul className='ul'style={{width: '1300px', margin: '20px auto'}}>
                {
                    products.map(i => <ProductItem i={i}/>)
                }
            </ul>
        </div>
    );
};

export default MainPage;