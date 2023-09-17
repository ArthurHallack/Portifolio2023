//importações//
import React from 'react';
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
        <div>
            <nav>
                <ul className="navbar">
                    <li id='homeBTN'  className='ListTop'><a href="" style={estilo1}>Home</a></li>
                    <li className='ListTop' id='sobreBTN'><a href="" style={estilo1}>Sobre Mim</a></li>
                    <li className='ListTop' id='skillBTN'><a href="" style={estilo1}>Skills</a></li>
                    <li className='ListTop' id='projetosBTN'><a href="" style={estilo1}>Projetos e Experiencias</a></li>
                    <li id='contatoBTN' className='ListTop'><a href="" style={estilo2}>Contatos</a></li>
                    <li id='bars' style={estilo2}><FontAwesomeIcon icon={faBars} /></li>
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
            <h3><a href=""id='startBTN'>-Start-</a></h3>
        </div>
    )
}

export {Navbar, Infos} 