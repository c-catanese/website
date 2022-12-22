import { Routes, Route } from '@solidjs/router'

import Docs from './pages/Docs';
import Home from './pages/Home';
import Installation from './pages/DocsPages/Installation'
import Basicusage from './pages/DocsPages/BasicUsage';
import Coreconcepts from './pages/DocsPages/CoreConcepts';
import logo from '../src/logo/logo.png'

function App() {
  return (
    <>
    <div >
      <div class="navBar">
          <img src={logo}></img>
        <ul>
          <li class='nav'><a href='/'>Home</a></li>
          <li class='nav'><a href='/docs/installation'>Docs</a></li>
          <li class='nav'><a href='/demo'>Demo</a></li>
          <li class='nav'><a href='https://www.solidjs.com/blog/introducing-solidstart'>Blog</a></li>
          <li class='nav'><a href='https://github.com/SolidMoonwalk/MoonWalk'>Github</a></li>
        </ul>
        
      </div>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/docs" component={Installation}/>
        <Route path="/docs/installation" component={Installation} /> 
        <Route path="/docs/basicusage" component={Basicusage} /> 
        <Route path="/docs/coreconcepts" component={Coreconcepts} /> 
      </Routes>
      
    </div>
    </>
  );
}

export default App;
