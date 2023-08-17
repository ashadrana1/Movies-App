import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"
import abc from './abc.jpeg'
const Header=() => {
return (
         <div className="header">
              <div className="headerLeft">
                  <Link to="/"><img className="header__icon" src= {abc} /></Link>
                  <Link to="/movie/popular" style={{ textDecoration: "none" }}><span>Popular</span></Link>
                  <Link to="/movie/top_rated" style={{ textDecoration: "none" }}><span>Top Rated</span></Link>
                  <Link to="/movie/upcoming" style={{ textDecoration: "none" }}><span>Upcoming</span></Link>
              </div>  
         </div>
)
}
export default Header
