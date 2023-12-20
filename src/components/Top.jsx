//importações//
import React from 'react';
import kashimoImg from '../img/kashimo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
const Icon = <FontAwesomeIcon icon={faBars} />

//estilos inline//
const estilo1 = {
    color: 'red'
}
const estilo2 = {
    color: 'aliceblue'
}

//elementos js//
const sobreBTN= window.document.getElementById('sobreBTN')
const skillBTN= window.document.getElementById('skillBTN')
const projetosBTN= window.document.getElementById('projetosBTN')

//elementos para exprotação//
function Navbar () {
    return (
        <div id='Navbar'>
            <nav id='Nav'>
                <ul>
                    <li><a href="#Navbar" id='HomeBTN' className='TagsA'>Home</a></li>
                    <li><a href="#AreaSobre" id='SobreBTN' className='TagsA'>Sobre mim</a></li>
                    <li><a href="#SkillsArea" id='SkillsBTN' className='TagsA'>Skills</a></li>
                    <li><a href="#areaProjetos" id='ProjetosBTN' className='TagsA'>Projetos</a></li>
                </ul>
            </nav>
        </div>
    )
}

function Infos () {
    return (
        <div className='Infos'>
            <h1 id='Nome'>Arthur Hallack</h1>
            <h2 id='cargo'>Web Developer</h2>
            <ul className='BTNprojetos-container'>
                <li><button className='BTNprojetos'><a href="https://github.com/ArthurHallack" target='_blank' className='TagsA'>Github</a></button></li>
                <li><button className='BTNprojetos'><a href="https://www.linkedin.com/in/arthurhallack/" target='_blank' className='TagsA'>Linkedin</a></button></li>
            </ul>
        </div>
    )
}



export {Navbar, Infos} 