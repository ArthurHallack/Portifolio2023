import React from 'react';
import todolistImg from '../img/todolist.png'

const estilo1={
    width: '140px'
}

function Projetos () {
    return (
        <div id='areaProjetos'>
            <h1>Projetos</h1>
            <ul id='listaProjetos'>
                <li>
                    <div className='Projetos'>
                        <img src={todolistImg} alt="tdlist"/>
                        <h2>To-Do-List</h2>
                        <p>Uma lista de tarefas com tema de uma obra chamada Jujutsu Kaisen. Desenvolvida com o propósito de exercitar a implementação das funcionalidades de: Pesquisar, Filtrar, Adicionar, Editar e Deletar. </p>
                        <p>Tecnologias utilizadas: Html5, Css3, Javascript.</p>
                        <button style={estilo1}>Visualizar</button>
                    </div>
                </li>
                <li>
                    <div className='Projetos'>
                        <img src="" alt="" />
                        <h2>Cronometro.js</h2>
                        <p></p>
                        <p></p>
                        <button></button>
                    </div>
                </li>
                <li>
                    <div className='Projetos'>
                        <img src="" alt="" />
                        <h2>Amigo Secreto PHP</h2>
                        <p></p>
                        <p></p>
                        <button></button>
                    </div>
                </li>
                <li>
                    <div className='Projetos'>
                        <img src="" alt="" />
                        <h2>Em breve...</h2>
                        <p></p>
                        <p></p>
                        <button></button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Projetos