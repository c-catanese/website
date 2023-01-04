import { render } from 'solid-js/web';
import { Routes, Route } from '@solidjs/router'
import { createSignal, getOwner } from 'solid-js';
import logo from '../assets/solid-rewind-logo.svg';
import screenshot from '../assets/screenshots/screenshot-1.png';


function Home() {

  return (
     <>
      <header id='hero'>

        <div id='heroContent'>

          <img src={logo} class="logo" />

          <h1 id='heroTitle'>
            SOLID<br></br>
            <div id='rewind'>
              <div id='rewindBehind'>REWIND</div>
              <div id='rewindOver'>REWIND</div>
              <br></br>
            </div>
          </h1>
          
        </div>

        <h2 id='tagLine'>
          Solid Rewind: A Time Travel Debugger
        </h2>

      </header>

      <section class='contentSection'>
        <div class='oneThird'>
          <h3>
            Intro
          </h3>
          <p>
            A description of what it does. How it works and why it’s so great. A few of the main features that are undeniably cool. 
            <br></br><br></br>
            And how easy it is to install.
          </p>
          <br></br><br></br>
          {/* <button>GET STARTED</button> */}
        </div>

        <div class='twoThird'>
          <figure class='fullbox aboutImage'>
            <img class='transparent' src={screenshot}></img>
          </figure>
        </div>
        
      </section>

      <section class='contentSection' id='install'>
        <div class='oneHalf'>
          <h3>
            easy to install
          </h3>
        </div>
      
        <article class='oneHalf'>
          <br></br><br></br><br></br><br></br>
          Install the npm package
          <div class='flex'>
            <div id='copyWindow'>
              npm i solid-rewind
            </div>
          </div>
          <br></br><br></br><br></br><br></br>
          Import Rewind. Wrap Rewind around the top-level component.
          <br></br><br></br><br></br><br></br>
          Use the Solid-Rewind Chrome Extension to debug your app.
          <br></br>
          Download <a href=''>here</a>.

        </article>

      </section>



      <section class='contentSection noPadding'>
        <div class='oneThird rightBorder smallerPadding'>
          <h3>
            Features
          </h3>
          <options class='bigLink'>
            <a href=''>Time Travel</a><br></br>
            <a href=''>Component Tree View</a><br></br>
            <a href=''>????</a>
          </options>
        </div>

        <div class='twoThird smallerPadding'>
          <figure class='fullbox aboutImage'>
            <img class='transparent' src={screenshot}></img>
          </figure>
        </div>
      </section>




      <section class='contentSection smallerPadding oneWhole'>

          <h3>
            The Team
          </h3>
          <p>
            Christian Catanese  <a href='' class='teamLink'>LinkedIn</a>  <a href='' class='teamLink'>GitHub</a><br></br>
            Robbie Gottlieb  <a href='' class='teamLink'>LinkedIn</a>  <a href='' class='teamLink'>GitHub</a><br></br>
            Willem Rosenthal  <a href='' class='teamLink'>LinkedIn</a>  <a href='' class='teamLink'>GitHub</a><br></br>
            Jason Moon  <a href='' class='teamLink'>LinkedIn</a>  <a href='' class='teamLink'>GitHub</a>
          </p>
          <br></br><br></br><br></br>
      </section>


      
     </>
  );
}

export default Home;
