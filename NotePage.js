import React, { Component } from 'react';
import './page1.css';

class App extends Component {
  render() {
  return (
    <div className="App">
      <div>
    <button type="button" id="button0">Back</button>
    <button type="button" id="button0">Tasks</button>
    <button type="button" id="button0">Notes</button>
    <button type="button" id="button0">Members</button>
    <h1>Your Profile</h1>
    <hr></hr>
    </div>
    <div><button type="button" id="button1">Add Note</button>
    <h>Page 1</h></div>
    <div class="container">
    <div class="Rectangle">
    <button type="button" id="button5">EDIT</button>
    <button type="button" id="button6">DELETE</button>
    <textarea></textarea>
    </div>
    <div class="Rectangle">
    <button type="button" id="button5">EDIT</button>
    <button type="button" id="button6">DELETE</button>
    <textarea></textarea>
    </div>
    <div class="Rectangle">
    <button type="button" id="button5">EDIT</button>
    <button type="button" id="button6">DELETE</button>
    <textarea></textarea>
    </div>
    <div class="Rectangle">
    <button type="button" id="button5">EDIT</button>
    <button type="button" id="button6">DELETE</button>
    <textarea></textarea>
    </div>
    <div class="Rectangle">
    <button type="button" id="button5">EDIT</button>
    <button type="button" id="button6">DELETE</button>
    <textarea></textarea>
    </div>
    <div class="Rectangle">
    <button type="button" id="button5">EDIT</button>
    <button type="button" id="button6">DELETE</button>
    <textarea></textarea>
    </div>
    <div class="Rectangle">
    <button type="button" id="button5">EDIT</button>
    <button type="button" id="button6">DELETE</button>
    <textarea></textarea>
    </div>
    </div>
    <div>
    <hr></hr>
    </div>
    <button type="button" id="button2">Prev Page</button>
    <button type="button" id="button3">page 1</button>
    <button type="button" id="button3">page 2</button>
    <button type="button" id="button3">page 3</button>
    <button type="button" id="button3">page 4</button>
    <button type="button" id="button3">...</button>
    <button type="button" id="button4">Next Page</button>
    <hr></hr>
    </div> 
  );
}
}

export default App;