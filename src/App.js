import logo from './logo.svg';
import './App.css';
import Header from './components/common/heading\'/header';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/home/Home';
import CourseHome from './components/allcourses/CourseHome';
import ABout from './components/About/ABout';
// import Login from './components/Login/Login';




function App() {
  return (
    <>
      
      <Router>
        <Header />
        
        <Routes>
          <Route  path='/' exact component={Home} />
          <Route  path='/about' exact component={ABout} />
          <Route  path='/courses' exact component={CourseHome} />
         
        </Routes>
        
      </Router>

     
   

       


    </>
  );
}

export default App;
