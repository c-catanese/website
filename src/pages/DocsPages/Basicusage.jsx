import { render } from 'solid-js/web';
import { Routes, Route } from '@solidjs/router'
import Nav from '../../components/Nav';
function Basicusage() {
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
          <main class ="basicUsagePage">
            <h1>Basic Usage</h1>
            <p>Solid Rewind is easy to use and set up, after wrapping your top level component in the rewind component you will be able to use our chrome extension to debug your app and track your signals and stores.</p>
            <p>Insert image here of wrapped component</p>
            <h2>Chrome Extension</h2>
            <p>Our chrome extension allows you to track changes, if you time travel backward and make a state change you will no longer be able to access the future changes as they will be disposed of and a new future will be created.</p>
            <p>insert gif/picture of extension</p>
            <p>To install our chrome extension click <a href= "">here</a></p>
            <h2>Check Out Our Demo App</h2>
            <p>Our Demo App allows you to test out the extension to see if it's the right tool for you!</p>
            <button>Demo App</button>
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

export default Basicusage;
