import React,{useState} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
const Header = ({cambiarPrincipales}) =>{
    const [queryPeli,setQueryPeli] = useState('');
    const fecthPelicula = e =>{
        e.preventDefault();
        axios.get(`http://www.omdbapi.com/?apikey=a0ba119&s=${queryPeli}`)
            .then(res=>{
                cambiarPrincipales(res.data.Search);
            });
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Marca Reconocida</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarColor02">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                    <a className="nav-link" href="/recientes">Recientes</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/estreno">Estrenos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/series">Series</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/mi-lista">Mi Lista</a>
                </li>
                </ul>
                <form className="form-inline my-2 my-lg-0" onSubmit={fecthPelicula}>
                    <input className="form-control mr-sm-2" type="text" onChange={e=>setQueryPeli(e.currentTarget.value)}/>
                    <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
                </form>
            </div>
        </nav>

    );
}
const stateToProps=()=>{
    return({})
}
const dispatchToProps = dispatch =>{
    return({
        cambiarPrincipales(principales){
            dispatch({
                type:"CAMBIAR_PRINCIPALES",
                principales
            })
        }
    })
}
export default connect(stateToProps,dispatchToProps)(Header);