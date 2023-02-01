import {useState} from "react";
import Card from "./Card";
import axios from "axios";

const Main=()=>{
    const [search,setSearch]=useState("");
    const [bookData,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDHBCJjmGjPmA23drANWe_N0chFYf_lwyo'+'&maxResults=40')
            .then(res=>{
                setData(res.data.items);
                setSearch("");
            })
            .catch(err=>console.log(err))
        }
        
    }
    return(
        <>
            <div className="header">
                <div className="row1">
                    <h1>Books are the mirrors of the soul.<br/>- Virginia Woolf</h1>
                </div>
                <div className="row2">
                    <h2>Find Your Book</h2>
                    <div className="search">
                        <input type="text" placeholder="Enter Your Book Name"
                        value={search} onChange={e=>setSearch(e.target.value)}
                        onKeyDown={searchBook}/>
                        <button><i className="fas fa-search"></i></button>
                    </div>
                    <img src="./images/bg2.jpg" alt="" />
                </div>
            </div>

            <div className="container">
              {
                    <Card book={bookData}/>
              }  
            </div>
        </>
    )
}
export default Main;