import { Route,Routes,BrowserRouter } from 'react-router-dom'
import {Sender} from './components/Sender'
import {Receiver} from './components/Receiver'
function App() {
  

  return (
  <BrowserRouter>
  <>
    Hi! OM SHARMA
      <Routes>
        <Route path='/sender' element={<Sender/>}></Route>
        <Route path='/receiver' element={<Receiver/>}></Route>
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App
