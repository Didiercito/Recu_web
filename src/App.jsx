import Feed from './Pages/Feed/Feed'; 
import Perfil from './Pages/perfil/Perfil';
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';

function App() {
  return ( 
    <Router>
      <Routes>
        <Route path='/Perfil' element={<Perfil/>}/>
        <Route path='/' element={<Feed/>}/>
      </Routes>
    </Router>      
   );
}

export default App;