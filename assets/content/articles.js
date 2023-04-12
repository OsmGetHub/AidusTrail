import React, {useEffect, useState} from 'react'
import './styles/articles.css'
import './styles/pagination.css'
import SG from '../data/societe_generale.jfif'
import Data from '../data/data.json'

function Articles (props){

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 4;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const [records,setRecords] = useState(Data.slice(firstIndex, lastIndex));
    const [filtredRecords,setFRecords] = useState([]);
    const npage = Math.ceil(Data.length/recordsPerPage);
    const numbers = [...Array(npage+1).keys()].slice(1);
    const [lists, setLists] = useState(props.filtredData);
    useEffect(()=>{setRecords(Data.slice(firstIndex, lastIndex));},[currentPage]);
    useEffect(()=>console.log(lists),[lists])
    useEffect(()=>filtring(),[lists])
    useEffect(()=>setLists(props.filtredData),[props.filtredData])
        return(
            <div className="Main">
                {
                    records.map(
                        (e,i)=>(
                        <div className="main-logo" key={i}>
                        <img src={SG} alt=""/>
                        <div>
                        <h3><a href="">{e.Titre}{e.id}</a></h3>
                        <p>{e.Date} | <a href="">{e.Entreprise}</a></p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga laboriosam natus neque praesentium quisquam! Aut, cupiditate eius eum eveniet illum modi natus necessitatibus nulla, officia sed sequi similique, vel veniam!</p>
                        </div>
                        </div>
                        )
                    )
                }
                <div className="pagiContainer">
                    <ul className="pagination">
                        <li >
                            <a href=""
                               onClick={
                                   (e)=>(
                                       e.preventDefault(),
                                           prPage()
                                   )
                               }
                            >Precedant</a>
                        </li>
                        <li>
                            <a href="" onClick={
                                (e)=>{
                                    e.preventDefault()
                                    startPage()
                                }
                            }>{"<<"}</a>
                        </li>
                        {
                            numbers.map(
                                (n,i) =>(
                                    <li
                                        key={i}
                                    >
                                        <a href="" className={`${currentPage === n ? 'active' : ''}`}
                                           onClick={
                                               (e)=>(
                                                   e.preventDefault(),
                                                       changeCPage(n)
                                               )
                                           }
                                        >{n}</a>
                                    </li>
                                )
                            )
                        }
                        <li>
                            <a href="" onClick={
                                (e)=>{
                                    e.preventDefault()
                                    endPage()
                                }
                            }>{">>"}</a>
                        </li>
                        <li >
                            <a href=""
                               onClick={
                                   (e)=>(
                                       e.preventDefault(),
                                           nePage()
                                   )
                               }
                            >Suivante</a>
                        </li>
                    </ul>
                </div>
            </div>
        )

    function filtring(){

            filtredRecords.push(1)

    }

    function prPage(){

        if((currentPage !== firstIndex )&& currentPage!== 1) {
            setCurrentPage(currentPage - 1)
        }

    }
    function endPage(){
            setCurrentPage(numbers.length)
    }
    function startPage(){
            setCurrentPage(1)
    }
    function changeCPage(id){
        setCurrentPage(id)
    }
    function nePage(){
        if((currentPage !== lastIndex) && currentPage !== numbers.length) {
            setCurrentPage(currentPage + 1)
        }
    }

}

export default Articles;