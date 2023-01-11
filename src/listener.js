
//navigator.clipboard.writeText(JSON.stringify(stateStack));

// all our listners
let initComplete = false;
const listeners = {}

export function listenFor(type, callback) {
  // create new array of listner callbacks that execute when this message type comes in
  if (!listeners[type]) listeners[type] = new Map();
  // add callback
  listeners[type].set(callback, callback);
}

