import React from 'react';
import todolistImg from '../img/todolist.png'


function Projetos () {
    return (
        <div id='areaProjetos'>
            <h1>Projetos</h1>
            <ul id='listaProjetos'>
                <li>
                    <div className='Projetos'>
                        <img src={todolistImg} alt="tdlist" className='imgProjetos'/>
                        <h2>To-Do-List</h2>
                        <p>Uma lista de tarefas com tema de uma obra chamada Jujutsu Kaisen. Desenvolvida com o propósito de exercitar a implementação das funcionalidades de: Pesquisar, Filtrar, Adicionar, Editar e Deletar. </p>
                        <p>Tecnologias utilizadas: Html5, Css3, Javascript.</p>
                        <div className='BTNprojetos-container'>
                        <button className='BTNprojetos'>Visualizar</button>
                        </div>
                        
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Projetos