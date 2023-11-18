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

const kashimoEstilo = {
    height: '40.5rem'
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
                    <li><a href="#AreaSobre" id='SobreBTN'>Sobre mim</a></li>
                    <li><a href="" id='SkillsBTN'>Skills</a></li>
                    <li><a href="" id='ProjetosBTN'>Projetos</a></li>
                    <li><a href="" id='HomeBTN'>Home</a></li>
                </ul>
            </nav>
        </div>
    )
}

function Infos () {
    return (
        <div className='Infos'>
            <h1 id='Nome'>Arhur Hallack</h1>
            <h2 id='cargo'>Web Developer</h2>
            <ul className='BTNprojetos-container'>
                <li><button className='BTNprojetos'>START</button></li>
                <li><button className='BTNprojetos'>Linkedin</button></li>
            </ul>
        </div>
    )
}



export {Navbar, Infos} 