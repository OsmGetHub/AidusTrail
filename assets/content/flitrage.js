import React, {useEffect} from 'react'
import './styles/filtrage.css'
import Main from './main'
import './styles/filtrage-variables.css'
import {render} from "react-dom";

function Filtrage(props){
    const [lists, setLists] = React.useState([]);
    const [listr, setListr] = React.useState([]);
    const [liste, setListe] = React.useState([]);
    useEffect(()=>{props.sendData(lists)},[lists])
        return(
                <div className="div-filter">
                    <form action="" className="filter">
                            <label><h2>Filtrage</h2></label>
                            <input className="secteur" type="text" placeholder="Secteur d'activites" onKeyPress={
                                (e)=> printer(e, lists, setLists, "secteur")
                            }/>
                            <div id="secteur"></div>
                            <input className="region" type="text" placeholder="Region"onKeyPress={
                                (e)=> printer(e, listr, setListr, "region")
                            }/>
                            <div id="region"></div>
                            <input className="entreprise" type="text" placeholder= "Entreprise" onKeyPress={
                                (e)=> printer(e, liste, setListe, "entreprise")
                            }/>
                            <div id="entreprise"></div>
                            <button>Rechercher</button>
                    </form>
                </div>
        );
    function printer(e,l,s,id){
        const newList = l;
        if(e.key ==="Enter"){
            if(e.target.value!=='')
            newList.push(e.target.value)
            e.preventDefault()
            s(newList)
            e.target.value=''
            const span = l.map((list,i)=>{
                    return <span className="variable" key={i}> {list}<a href="" >x</a> </span>
                })
            render(span,document.getElementById(id))
        }
    }
}

export default Filtrage