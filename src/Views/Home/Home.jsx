import React,{useEffect} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import Header from '../../Helpers/Header.jsx';
import Principales from './Principales.jsx';
import './home.css';

const Home = ({cambiarPrincipales})=>{
    useEffect(()=>{
        const fecthPeliculas =async()=>{
            let pelis=await axios.get('http://www.omdbapi.com/?apikey=a0ba119&s=movie&y=2019');
            cambiarPrincipales(pelis.data.Search);
        }
        fecthPeliculas();
    },[cambiarPrincipales]);
    return(
        <>
            <Header/>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h3 className="home-title">Contenido Principal</h3>
                    </div>
                    <Principales />
                </div>
            </div>
        </>
    );
};


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
const stateToProps = state =>{
    return({});
}

export default connect(stateToProps,dispatchToProps)(Home);