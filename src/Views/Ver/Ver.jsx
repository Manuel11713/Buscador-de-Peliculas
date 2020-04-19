import React from 'react';
import {connect} from 'react-redux';
import Header from '../../Helpers/Header.jsx';

const Ver = ({idPelicula,principales})=>{
    let pelicula = principales.filter(pelicula=>pelicula.imdbID===idPelicula);
    pelicula=pelicula[0]
    return(
        <>
        <Header/>
        <div className="container">
            <div className="row">
                <div className=" col-12">
                    <div className="card mt-3">
                        <img alt={pelicula.Title} src={pelicula.Poster}/>

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
const stateToProps = state=>{
    return({
        principales: state.principales
    });
}
export default connect(stateToProps)(Ver);