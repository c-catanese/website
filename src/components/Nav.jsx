
function Nav() {
  
  function scrollToId(target) {
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav class='nav'>
      {/* href='/#install' */}
      <div class='navItem leftNavItem'><a onclick={()=>scrollToId('install')} >Get Started</a></div>
      <div class='navSpacer'></div>
      <div class='navItem'><a href='/demo'>Demo</a></div>
      <div class='navItem'><a href='/docs/installation'>Docs</a></div>
      <div class='navItem'><a href='https://www.solidjs.com/blog/introducing-solidstart'>Blog</a></div>
      <div class='navItem'><a href='https://github.com/oslabs-beta/solid-rewind'>Github</a></div>
    </nav>
  );
}

export default Nav;
