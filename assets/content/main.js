import React, {useEffect, useState} from 'react'
import Filtrage from "./flitrage"
import Articles from './articles'
import './styles/main.css'
function Main(){
    const [data, setData] = useState(0);
        return (
            <div id="Main">
                <Filtrage sendData={setData}/>
                <Articles filtredData ={data} />
            </div>
        );
}
export default Main;