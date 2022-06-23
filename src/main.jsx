import React from 'react'
import ReactDOM from 'react-dom/client'
import {GifExpertApp} from './GifExpertApp'

import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(

    //Star of my react application with strict mode
    <React.StrictMode>
{/* 
        Componente princial en la aplicación */}
        <GifExpertApp/>
    </React.StrictMode>


)