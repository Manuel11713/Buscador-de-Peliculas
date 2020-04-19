import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

const Principales = ({principales}) =>{
    console.log(principales);
    if(!principales){
        return(
            <div className="col-12">
                <h3>No hay peliculas para esa busqueda :(</h3>
            </div>
        );
    }
    return(
        <>
            {principales.map(peli=>{
                return(
                    <div className="col-6 col-md-3 col-lg-4" key={peli.imdbID}>
                        <div className="card mb-3">
                            <h3 className="card-header">{peli.Title}</h3>

                            <img height={500} alt={peli.Title} src={peli.Poster}/>
                        
                            <div className="card-body d-flex justify-content-between">
                                <button id="reference" type="button" className="btn btn-outline-secondary">Sipnosis</button>
                                
                                <Link to={`/ver/${peli.imdbID}`} className="card-link">Ver</Link>
                            </div>
                            <div className="card-footer text-muted d-flex justify-content-end">
                                {peli.Year}
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}

const stateToProps = state=>{
    return({
        principales: state.principales
    });
}
export default connect(stateToProps,{})(Principales);