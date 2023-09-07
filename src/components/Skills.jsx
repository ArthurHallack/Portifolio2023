import React from 'react'
import htmlImg from '../img/html.png'
import cssImg from '../img/css.png'
import reactImg from '../img/react.png'
import nodeImg from '../img/node.png'
import sqlImg from '../img/sql.png'
import gitImg from '../img/git.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons'

const estilo1 = {
    width: '60px'
}

const estilo2 = {
    width: '48px'
}

function Skills () {
    return (
        <div id='skills'>
            <h1>Skills</h1>
            <ul id='skillsList'>
                <li>
                    <div className='skillCard'>
                        <img src={htmlImg} alt="html" style={estilo2}/>
                        <h2>HTML5</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis suscipit neque, asperiores, </p>
                    </div>
                </li>
                <li>
                    <div className='skillCard'>
                        <img src={cssImg} alt="css" style={estilo1}/>
                        <h2>CSS3</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis suscipit neque, asperiores, </p>
                    </div>
                </li>    
                <li>
                    <div className='skillCard'>
                        <img src={reactImg} alt="react" style={estilo1}/>
                        <h2>React.js</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis suscipit neque, asperiores, </p>
                    </div>
                </li>
                <li>
                    <div className='skillCard'>
                        <img src={nodeImg} alt="node" style={estilo1}/>
                        <h2>Node.js</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis suscipit neque, asperiores, </p>
                    </div>
                </li>
                <li>
                    <div className='skillCard'>
                        <img src={sqlImg} alt="sql" style={estilo1} />
                        <h2>SQL</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis suscipit neque, asperiores, </p>
                    </div>
                </li>
                <li>
                    <div className='skillCard'>
                        <img src={gitImg} alt="git" style={estilo1} />
                        <h2>GIT</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis suscipit neque, asperiores, </p>
                    </div>
                </li>
            </ul>
            <button className='proxBTN'>
                    <FontAwesomeIcon icon={faAnglesDown} fade />
            </button>
        </div>
    )
}

export default Skills