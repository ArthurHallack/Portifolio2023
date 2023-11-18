import React from 'react';
import todolistImg from '../img/todolist.png'
import sorteioImg from '../img/sorteio.jpg'


function Projetos () {
    return (
        <div id='areaProjetos'>
            <h1>Projetos</h1>
            <ul id='listaProjetos'>
                <li>
                    <div className='Projetos'>
                        <img src={todolistImg} alt="tdlist" className='imgProjetos'/>
                        <h2>To-Do-List</h2>
                        <p>Uma lista de tarefas com tema de uma obra chamada Jujutsu Kaisen. Desenvolvida com o propósito de exercitar a implementação das funcionalidades de: Pesquisar, Filtrar, Adicionar, Editar e Deletar.</p>
                        <p className='Ptec'>Tecnologias utilizadas: Html5, Css3, Javascript.</p>
                        <div className='BTNprojetos-container'>
                        <button className='BTNprojetos'><a href="" className='TagsA'>Visualizar</a></button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className='Projetos'>
                        <img src={sorteioImg} alt="sorteio" className='imgProjetos'id='imgSort'/>
                        <h2>Sorteio Amigo Secreto</h2>
                        <p>Um projeto que visa criar um CRUD em php, e posteriormente utilizar os partipantes cadastrados para um sorteio simples de amigo secreto. Criado como parte do desafio Boostech.</p>
                        <p className='Ptec'>Tecnologias utilizadas: PHP, Laravel, Javascript.</p>
                        <div className='BTNprojetos-container'>
                        <button className='BTNprojetos'><a href="" className='TagsA'>Visualizar</a></button>
                        </div>
                    </div>
                 </li>
            </ul>
        </div>
    )
}

export default Projetos