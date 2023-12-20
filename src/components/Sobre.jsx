import React from 'react';
import euImg from '../img/eu.jpg'; 

const estiloIMG = {
    width: '17rem',
    borderRadius: '50%',
    border: '6px inset red',
    boxShadow: '-5px 3px 10px 0px'
}

function Sobre () {
    return (
        <section id='AreaSobre'>
            <h1>Sobre Mim</h1>
            <div id='fotoPerfil'>
                <img src={euImg} alt="" style={estiloIMG} />
                <ul id='InfoSobre'>
                    <li><h2>Nome Social</h2><p>Arthur Hallack</p></li>
                    <li><h2>Formação</h2><p>5º semestre em ADS</p></li>
                    <li><h2>Disponibilidade para</h2><p>Full Stack</p></li>
                </ul>
            </div>
            <div id='textSobre'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti aperiam rem sapiente reprehenderit molestiae sequi tempora nesciunt aut nobis aliquid quaerat ex magni consequuntur quia veniam obcaecati, maxime recusandae deserunt.</p>
                
            </div>
        </section>
    )
}

export default Sobre