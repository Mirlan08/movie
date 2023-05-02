
import './App.css';
import Main from './screens/main';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Vxod from './screens/vxod';
import Registor from './screens/registor';
import Test1 from './screens/test1';
import Rezult from './screens/rezult';
import Category from './screens/category';
import Enter from './screens/vxod';
import 'antd/dist/antd.css';
import Profil from './screens/profiles';




function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/vxod' element={<Vxod/>}/>
        <Route path='/registor' element={<Registor/>}/>
        <Route path='/test1/:id/:q' element={<Test1/>}/>
        <Route path='/rezult' element={<Rezult/>}/>
        <Route path='/category/:id' element={<Category/>}/>
        <Route path='/profiles' element={<Profil/>}/>
        



   



        


      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
