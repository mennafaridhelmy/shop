import { React , useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from '../images/logo.png'
import cart from '../images/cart.svg'
import {getCurrencySlice , editCurrencySlice} from '../redux/slice/currency'
import { NavLink } from "react-router-dom";
export default function Navbar() {
    
    const currency = useSelector(state=>state.currency);
    const dispatch = useDispatch(); 
    useEffect(() => dispatch(getCurrencySlice()), [])

    const categoryname=["clothes","tech"];

    const handleChange = (event) =>{
        dispatch(editCurrencySlice(event.target.value));
    }

    return (
    <nav className="navbar stick navbar-expand-lg navbar-light">
        <div className="container">
            <NavLink className="navbar-brand" to="/">
                <img src={logo} />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link title" to={`/${categoryname[0]}`} >{categoryname[0]}</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link title" to={`/${categoryname[1]}`} >{categoryname[1]}</NavLink>
                    </li>
                    <li className="nav-item text-center">
                        <div className="form-group">
                            {
                            <select className="form-control" value={currency.current} onChange={handleChange} id="choosenCurrency">
                                {currency.all.map((c,index)=>(
                                    <option key={`currency${c}`} value={c}>{c}</option>
                                ))}
                            </select>}
                        </div>                        
                    </li>
                    <li className="nav-item px-2">
                        <NavLink className="nav-link" to="/cart">
                            <img src={cart} width={23} height={23} />
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
