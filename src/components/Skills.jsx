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


function Skills () {
    return(
        <div id='SkillsArea'>
            <h1>Skills</h1>
            <ul id='SkillsList'>
                <li><div className='card'>
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
                <li><div className='card'>
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
                <li>
                <div className='card'>
                            <div className='image-content'>
                                <span className='over-lay'></span>
                                <div className='card-image'>
                                    <img src={htmlImg} alt="html" className='card-img' />
                                </div>
                            </div>
                            <div className='card-content'>
                                <h2 className='name'>DEVOPS</h2>
                                <p className='descricao'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur cumque laborum harum voluptate quaerat placeat magnam, aut at aliquam tempora autem vel maiores nulla minus quasi odit modi ratione dicta!</p>
                            </div>
                        </div>
                </li>
            </ul>
        </div>                  
    )
}

export default Skills