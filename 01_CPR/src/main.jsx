import React from 'react'
import ReactDom from 'react-dom/client'
import App from './App.jsx'

//Syntax improper to run with react but will compile
  const reactElement_customereact={
    type: "a",
    props:{
        href:"https://google.com",
        target:"_blank",   
    },
    children: "click me to visit google"
}//won't render using the normal render function


const anotherElement=(//works
  <a href="https://google.com" target="_blank">Visit google!</a>
)

const anotherUser="/chai aur react"

const reactElement=React.createElement(
  'a',//tag
  {href: "https://google.com", target: '_blank'},//attributes
  "click me to visit google",//body
  anotherUser//variable injected after the formation of tree
  //and thus evaluations like if cannot be used inside this
)
//same can be done by importing jsx but diff syntax not req currently

ReactDom.createRoot(document.getElementById('root')).render(

  reactElement

)

