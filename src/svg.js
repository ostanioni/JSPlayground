/*tslint:disabled*/
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import styled, { css, keyframes } from 'styled-components'

import Snap from 'snapsvg';


const circle = [0,1,2,3,4,5,6,7,8,9]

export default class Svg extends Component {
  componentDidMount(){
   // console.log( document.querySelector('#row0').childNodes[3] )
   // 
   var s = Snap("#svg");
   console.log(Snap("#svg"))
var bigCircle = s.circle(150, 150, 100);
bigCircle.attr({
  fill: "#bada55",
  stroke: "#000",
  strokeWidth: 5
});
  }
  render() {
    return (
      <svg id="svg" viewBox="0 0 500 500" style></svg>
    )
  }
}
ReactDOM.render( <Svg/>, document.getElementById('edf720cb-b61fe') )

/*
stroke="blue" strokeWidth="2"
          <g stroke="green" fill="white" strokeWidth="5">
            <circle cx="25" cy="25" r="15"/>
            <circle cx="40" cy="25" r="15"/>
            <circle cx="55" cy="25" r="15"/>
            <circle cx="70" cy="25" r="15"/>
          </g>
        
<defs>
            <radialGradient id="exampleGradient">
              <stop offset="10%" stop-color="gold"/>
              <stop offset="95%" stop-color="green"/>
            </radialGradient>
          </defs>
          <circle fill="url(#exampleGradient)" cx="160" cy="160" r="50"/>
<div class="wrapper">
<svg viewBox="0 0 120 120" version="1.1" xmlns="http://www.w3.org/2000/svg">
<style>
    .white { font: 2.5rem sans-serif; fill: green;}
      // Обратите внимание, что цвет текста задается с помощью        
     // fill свойства, а свойство color используется только для HTML
    .Rrrrr { font: italic 40px serif; fill: red; }
  </style>
  <circle cx="60" cy="60" r="50" stroke="blue" stroke-width="2" fill="white">
    
  </circle>
  <text x="48" y="75" class="white">0</text>
</svg>
</div>
*/