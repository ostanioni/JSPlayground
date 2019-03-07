/*
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from "react-router-dom"

import { Provider } from "mobx-react"

import settingsStore from 'stores/settingsStore'
import   themesStore from 'stores/themesStore'
import     langStore from 'stores/langStore'

import Layout from 'layouts/Layout'
*/
import Worker from 'algs/sortQuick.worker.js'

/*
class App extends React.Component {
  render() {
    return (
      <Provider settingsStore={settingsStore} langStore={langStore} themesStore={themesStore} >
          <Router>
            <Layout/>
          </Router>
      </Provider>
    )
  }
}

ReactDOM.render( <App/>, document.getElementById('edf720cb-b61fe') )
*/
const worker = new Worker();
let arr = [];
for(let i=100; i>1; i--){
  arr.push(getRandomInt(0, 100))
}
console.log('Unodered array:', arr)

worker.postMessage(arr)
worker.onmessage = function (e) {
  console.log( 'WorkerSort', e.data )
  console.log( 'arr after:', arr)
};

// worker.addEventListener("message", function (event) {});


// Возвращает случайное число между 0 (включительно) и 1 (не включая 1)
function getRandom() {
  return Math.random();
}
// Возвращает случайное число между min (включительно) и max (не включая max)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
// Возвращает случайное целое число между min (включительно) и max (не включая max)
// Использование метода Math.round() даст вам неравномерное распределение!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
