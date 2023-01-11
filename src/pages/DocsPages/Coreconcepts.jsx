import { render } from 'solid-js/web';
import { Routes, Route } from '@solidjs/router'
import Nav from '../../components/Nav';
function Coreconcepts() {
  return (
  <>
    <Nav/>
    <div>
    <div class="docMain">
      <nav class='sideNav'>
        <h1>Getting Started</h1>
        <ul class="docsUL">
          <li class = "docsNav"><a href='/docs/installation'>Installation</a></li>
          <li class = "docsNav"><a href='/docs/basicusage'>Basic Usage</a></li>
          <li class = "docsNav"><a href='/docs/coreconcepts'>Core Concepts</a></li>
        </ul>
      </nav>
      <main class ="coreConceptsPage">
            <h1>Core Concepts</h1>
            <h2>How Does Solid Rewind Work?</h2>
            <p>Solid Rewind parse through your components and tracks down all of your signals and stores. On each render of your page it will take a snapshot of state and store it, upon rewind it will revert to the previous state and on fast forward it will revert to the next future state.</p>
            <h2>Be Kind, Rewind</h2>
            <p>Solid Rewind is a great tool to assist you as a developer in the process of building out a solid application. Installation is easy and integration is seamless.</p>
      </main>
    </div>
    <footer class='docFooter'>
      <div class="docFooterList">
        <h1>Getting Started</h1>
        <ul class="docsUL">
          <li class = "docsNav"><a href='/docs/installation'>Installation</a></li>
          <li class = "docsNav"><a href='/docs/basicusage'>Basic Usage</a></li>
          <li class = "docsNav"><a href='/docs/coreconcepts'>Core Concepts</a></li>
        </ul>
      </div>
      <div class="docFooterList">
        <h1>Community</h1>
        <ul class="docsUL">
          <li class = "docsNav"><a href="">Blog</a></li>
          <li class = "docsNav"><a href="https://github.com/oslabs-beta/solid-rewind">Github</a></li>
        </ul>
      </div>
  </footer>
    
  </div>
  </>
 );
}

export default Coreconcepts;
