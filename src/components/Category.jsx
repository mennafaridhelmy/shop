import {React , useEffect}from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_PRODUCTS} from '../redux/types/index'
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';

export default function Category() {
    const products = useSelector(state => state.products);
    const currency = useSelector(state => state.currency);

    const dispatch = useDispatch(); 
    useEffect(() => dispatch({ type: GET_PRODUCTS }), [])

    const {category} = useParams();

    console.log(category);
    products.map(p=>console.log(p.category));

    const handleAddToCart=(p)=>{
        // change product inStock to false
        // dispatch({type: UPDATE_PRODUCT_BY_ID, product:{...p,inStock:false}});
    }

    return (
      <div className='home container'>
          <div className='row align-items-start justify-content-center'>
                  {products.map((p)=>(
                      p.category == category &&
                      (<div className='col-4' key={p.id+"details"}>     
                          <div className="card mx-2 my-3">
                              <img src={p.gallery[0]} className="card-img-top" height="300px" alt="product-img" />
                              {   
                                  !p.inStock?(
                                  <div className='not-available'>
                                      <h2>OUT OF STOCK</h2>
                                  </div>):(
                                  <div></div>
                                  )
                              }
                              <div className="card-body">
                                  <Link className='link' to={`/product/${p.id}`}><h4 className="card-title">{p.name}</h4></Link>
                                  <h6 className="card-text"><span>{currency.current}</span>{p.prices.map((pp)=>{return (pp.currency.symbol==currency.current?pp.amount:"")})}</h6>
                                  <div className='text-center'>
                                      <button onClick={()=>handleAddToCart(p)} className="btn">ADD TO CART</button>
                                  </div>
                              </div>
                          </div>
                      </div>)
                  ))}
          </div>
      </div>
    )
}
