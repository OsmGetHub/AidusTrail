import React from 'react'
import './styles/nav.css'
import shark from '../data/shark.png'
import profile from '../default.jpg'
import click from '../data/arrow.png'


class Nav extends React.Component{
    render(){
        return(
            <div className="main">
                <nav>
                    <div className="Aidus">
                        <span>A</span>idus
                    </div>
                    <ul className="Offres">
                        <li><a href="">Offres d'emploi</a></li>
                        <li><a href="">Offres de stage</a></li>
                        <li><a href="">Offres de fromation</a></li>
                        <li><a href="">Aides</a></li>
                    </ul>
                    <div className="Profile">
                        <a href="" onClick={(event)=>{
                            event.preventDefault()
                            document.getElementById("hidden").style.visibility="visible"
                        }}
                           style={{
                               fontFamily: "Arial",
                               textDecoration: "none",
                               fontWeight: "bold"
                           }}
                        >
                            <span>nom_d'etudiant</span>
                            <img src={click} alt="click" style={{
                                width : "15px",
                                marginLeft: "5px"
                            }}/>
                        </a>
                        <img src={profile} alt="photo-profile"/>
                        <div className="hidden"
                             id="hidden"
                             onMouseLeave={(event)=>{
                                 event.preventDefault()
                                 document.getElementById("hidden").style.visibility="hidden"
                             }}
                        >
                            <img src={shark} alt="shark" style={{
                                width: "25px",
                                marginBottom: "0px",
                                position: "relative",
                                left: "188px",
                                top: "35px"
                            }}/>
                            <ul className="Details">
                                <li style={{

                                    backgroundColor : "#12549B",
                                    borderTop: "0px",
                                    borderTopRightRadius : "10px",
                                    borderTopLeftRadius : "10px",
                                    color: "white"

                                }} className="Ajouter">Ajouter une publication</li>
                                <li className="Profile">Profile</li>
                                <li className="Parametres">Parametres</li>
                                <li style={{ borderBottom : "0px"}} className="Deconnexion">Deconnexion</li>
                            </ul>
                        </div>
                        
                    </div>
                </nav>
            </div>
        );
    }
}

export default Nav;