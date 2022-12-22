import { render } from 'solid-js/web';
import { Routes, Route } from '@solidjs/router'
import Christian from '../Contributors/Christian.jpeg';
import Robbie from '../Contributors/Robbie.jpeg'
import Willem from '../Contributors/Willem.jpeg'
import Jason from '../Contributors/Jason.jpeg'
import linkedin from '../Icons/linkedin.png'
import github from '../Icons/github.png'
import { createSignal, getOwner } from 'solid-js';


function Home() {

  return (
      <div class="homepage">
        <div class = 'getStartedContainer'>
          <div class='getStarted'>
            <h1>The Perfect Solution For Your Solid JS Application</h1>
            <h3>Solid Rewind: a time travel debugger </h3>
            <button><a href="/docs/installation">Get Started</a></button>
          </div>
        </div>
        <div class="preview">
          <div class = "previewColOne">
            <h1>Signal and Store Tracking</h1>
            <h3>Rewind allows you to easily traverse changes to both signals and stores</h3>
            <button><a href="">Learn More</a></button>
          </div>
          <div class = "previewColTwo">
            <h1>ADD IN A PICTURE HERE</h1>
          </div>
      </div>
      <div class = "contributors">
        <div class = "contibutorsHeader">
          <h1>Contributors</h1>
        </div>
        <div class = "contributor">
          <img src={Christian} />
          <div>
            <h3>Christian Catanese</h3>
            <a href="www.linkedin.com/in/christian-catanese"><img src={linkedin}></img></a>
            <a href="https://github.com/c-catanese"><img src={github}></img></a>
          </div>
        </div>
        <div class = "contributor">
          <img src={Robbie} />
          <h3>Robbie Gottlieb</h3>
          <a href=""><img src={linkedin}></img></a>
          <a href="https://github.com/Boblobblieb"><img src={github}></img></a>
        </div>
        <div class = "contributor">
          <img src={Willem} />
          <h3>Willem Rosenthal</h3>
          <a href=""><img src={linkedin}></img></a>
          <a href="https://github.com/willemrosenthal"><img src={github}></img></a>
        </div>
        <div class = "contributor">
          <img src={Jason} />
          <h3>Jason Moon</h3><br/>
          <a href=""><img src={linkedin}></img></a>
          <a href="https://github.com/Crescent0130"><img src={github}></img></a>
        </div>
        <div class="welcomeContainer">
          <p>Solid Rewind is open source and has room for many more features.</p>
          <button><a href="https://github.com/oslabs-beta/solid-rewind">See SolidJS on GitHub</a></button>
        </div>
      </div>

      <div class='preview'>
        <div class = "previewColOne">
          <h1>Get Started Easily</h1>
          <h3>Start mapping out your ideas with our NPM package. Simply provide your data to the Rewind and you are ready to use time traveler debugger - no extra configuration needed!</h3>
          <button><a href='/docs/installation'>Install Now</a></button>
        </div>
      </div>
      <footer class='homeFooter'>
          <div class="footerList">
            <h1>Getting Started</h1>
            <ul class="docsUL">
              <li class = "docsNav">Installation</li>
              <li class = "docsNav">Basic Usage</li>
              <li class = "docsNav">Core Concepts</li>
            </ul>
          </div>
          <div class="footerList">
            <h1>Community</h1>
            <ul class="docsUL">
              <li class = "docsNav"><a href="">Blog</a></li>
              <li class = "docsNav"><a href="https://github.com/oslabs-beta/solid-rewind">Github</a></li>
            </ul>
          </div>
      </footer>
      </div>
  );
}

export default Home;
