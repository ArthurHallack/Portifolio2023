import React from 'react'
import htmlImg from '../img/html.png'
import cssImg from '../img/css.png'
import reactImg from '../img/react.png'
import nodeImg from '../img/node.png'
import sqlImg from '../img/sql.png'
import gitImg from '../img/git.png'
import codeImg from '../img/code.ico'
import backImg from '../img/back.png'
import javascriptImg from '../img/javascript.jpg'
import devopsImg from '../img/devops.png'
import { useState } from 'react'
import Modal from 'react-modal'

//configs//
Modal.setAppElement('#root')
const styleIMG = {
    height: '3rem'
}

//component
function Skills () {

const [modalIsOpen, setIsOpen] = useState(false)
const handleOpenModal = ()=>{
    setIsOpen(true)
}
const handleCloseModal = ()=>{
    setIsOpen(false)
}


    return(
        <div id='SkillsArea'>
            <h1>Skills</h1>
            <ul id='SkillsList'>
                <li onClick={handleOpenModal}><div className='card'>
                            <div className='image-content'>
                                <span className='over-lay'></span>
                                <div className='card-image'>
                                    <img src={codeImg} alt="html" className='card-img' />
                                </div>
                            </div>
                            <div className='card-content'>
                                <h2 className='name'>FRONT END</h2>
                                <p className='descricao'>No front-end, damos vida à experiência do usuário com HTML, CSS e JavaScript, criando visuais intuitivos. Integrando designs de forma suave e otimizando o desempenho, buscamos tornar a interação agradável.</p>
                            </div>
                        </div>
                        </li>
                <li onClick={handleOpenModal}><div className='card'>
                            <div className='image-content'>
                                <span className='over-lay'></span>
                                <div className='card-image'>
                                    <img src={backImg} alt="html" className='card-img' />
                                </div>
                            </div>
                            <div className='card-content'>
                                <h2 className='name'>BACK END</h2>
                                <p className='descricao'>
                                No back-end, gerenciamos lógica e dados da aplicação, assegurando funcionamento robusto, eficiente e seguro. Nos bastidores, nossa missão é construir a base sólida para uma experiência do usuário confiável.</p>
                            </div>
                        </div></li>
                <li onClick={handleOpenModal}>
                <div className='card'>
                            <div className='image-content'>
                                <span className='over-lay'></span>
                                <div className='card-image'>
                                    <img src={devopsImg} alt="html" className='card-img' />
                                </div>
                            </div>
                            <div className='card-content'>
                                <h2 className='name'>DEVOPS</h2>
                                <p className='descricao'>DevOps integra desenvolvimento e operações para colaboração eficiente. Automação, entrega contínua e monitoramento são essenciais, criando ambientes ágeis e eficientes.</p>
                            </div>
                        </div>
                </li>
            </ul>
            <Modal  isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            className="Modal"
           overlayClassName="Overlay" >
                <h1 id='staksTitle'>STACKS</h1>
                <ul id='listaModal'>
                    <li><img src={htmlImg} alt="html" style={styleIMG}/></li>
                    <li><img src={cssImg} alt="css3" style={styleIMG}/></li>
                    <li><img src={javascriptImg} alt="JS" style={styleIMG} /></li>
                    <li><img src={reactImg} alt="react" style={styleIMG}/></li>
                    <li><img src={nodeImg} alt="node" style={styleIMG} /></li>
                    <li><img src={sqlImg} alt="sql" style={styleIMG}/></li>
                    <li><img src={gitImg} alt="git" style={styleIMG} /></li>
                </ul>
            </Modal>
        </div>                  
    )
}

export default Skills