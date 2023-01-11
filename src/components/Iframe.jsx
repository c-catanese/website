import { createEffect, createSignal, getOwner } from "solid-js";
const listeners = {}

function Iframe(){
  const [maxSteps, setMaxSteps] = createSignal(0);
  const [currentStep, setCurrentStep] = createSignal(0);

  function listenFor(type, callback) {
    // create new array of listner callbacks that execute when this message type comes in
    if (!listeners[type]) listeners[type] = new Map();
    // add callback
    listeners[type].set(callback, callback);
  }
  window.addEventListener('message', function(message, sender, sendResponse) {
    sendReplayToAppWeAreDebugging(message.payload, message.type);
  });
  
  const sendReplayToAppWeAreDebugging = (payload, type) => {
    console.log('getting called')
    let data = { from: "FROM_DEVTOOL", type, payload };
    let myEvent = new CustomEvent('event', {detail: data})
    window.parent.document.dispatchEvent(myEvent); // send to div not window.
  }

  window.addEventListener("message", function(event) {
    let request = event.data
    if (listeners[request.type]) {
      for (const cb of listeners[request.type].values()){
        cb( request.payload );
      }
    }
  });
  // window.addEventListener()
  // LISTEN FOR STATE EVENTS
  listenFor('STATE_INCREMENT', stateIncrementOccured)
  function stateIncrementOccured( newMaxSteps ) {
    const steps = JSON.parse(newMaxSteps)[0];
    setMaxSteps(steps);
    setCurrentStep(steps);
  }
  // Rewind.sendData()
  // LISTEN FOR RESET
  listenFor('RESET_STATE', resetState);
  function resetState() {
    console.log("RESET STATE RECIEVED");
    setMaxSteps(0);
    setCurrentStep(0);
  }
    // step forward and back
    const goBack = () => {
      if (currentStep() > 0) setCurrentStep(Number(currentStep())-1);
    }
    const goForward = () => {
      if (currentStep() < maxSteps()) setCurrentStep(Number(currentStep())+1);
    }
  
    const onInput = (e) => {
      // set current step
      const diff = e.target.value - currentStep();
      console.log("TIME TRAVEL THIS FAR:", diff);
      setCurrentStep(e.target.value);
    }
  return (
  <div class="timelineContainer">
    <input type="range" min="0" max={maxSteps()} onInput={(e) => onInput(e)} value={currentStep()} className="range range-warning" />
    <br></br>
    <div class="timeButtonContainer">
      <button onClick={goBack} class="btn btn-primary">Back</button>
      <button onClick={goForward} class="btn btn-primary">Next</button>
      {/* <button onClick={goBack}>Back</button>
      <button onClick={goForward}>Forward</button> */}
    </div>
  </div>)
}
export default Iframe



