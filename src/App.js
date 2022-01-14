import TelaInicio from './TelaInicio'
import Topo from './Topo'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TelaCriar from './TelaCriar'

function App(){
    return(
        <BrowserRouter>
            <Topo></Topo>
            <Routes>
                <Route path="/" element={<TelaInicio/>} />
                <Route path='/criar' element={<TelaCriar/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default App