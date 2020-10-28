/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unused-vars */
import React from 'react';
import {
  
    Link
  } from "react-router-dom";
  import "./style.scss"
  import studys from "../../data/studycase"

const NavWorks = () => {
  return (
    <nav class="breadcrumb is-centered" aria-label="breadcrumbs">
    <ul>
    {studys.map((study) => (
				<li className="nav-item">
					<Link to={`/works/${study.name}`}>
						{study.nameb}
					</Link>
				</li>))}
    </ul>
  </nav>
 
  )

};
  
  



export default NavWorks;