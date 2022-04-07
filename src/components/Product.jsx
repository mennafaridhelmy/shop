import React from 'react';
import {useParams} from 'react-router-dom';
import {useSelector ,  useDispatch} from 'react-redux';

export default function Product() {

    const products = useSelector(state=>state.products)
    const dispatch = useDispatch();
    const {id} = useParams();

    return (
        <div className='container product'>
            {products.map((product)=>{
                if(product.id==id){
                    return(
                        <div key={product.id}>
                            <h2>{product.name}</h2>
                        </div>
                    )
                }
            })}
        </div>
    )
}
