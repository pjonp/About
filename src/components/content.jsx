import React, { Component } from 'react'

export default class Content extends Component {
  render(){
    return(
      <div id='content_1'>

      <pre><code> {`

function checkCashRegister(price, cash, cid) {

  let change = (a,b) =>{
  return {status: a, change: b}
  }
  let drawer = []
  let names = ["PENNY","NICKEL","DIME","QUARTER","ONE","FIVE","TEN","TWENTY","ONE HUNDRED"]
  let money = [.01,.05,.1,.25,1,5,10,20,100]
  for(let i = 0; i < cid.length; i++){
    drawer.push(cid[i][1])
  }
  let reqChange = cash - price;
  let changeArr = []
  let output = []
  if(reqChange === drawer.reduce((a,b)=>{ return a+b})){ return change('CLOSED',cid) }

for(let i=money.length-1; i >=0; i--){
if(reqChange >= money[i]){
  let r = Math.floor(Math.round(reqChange/money[i]*100)/100)
  for(let j = r; 0 < j; j--){
    if(drawer[i] === 0) break
    changeArr.push(money[i])
    reqChange -= money[i]
    drawer[i] -= money[i]
  }
}
  if(changeArr[0]) {
    output.push([names[i],changeArr.reduce((a,b)=>{
    return a+b
  })])
  }
  changeArr = []
  }

 if(reqChange > 0){
    return change('INSUFFICIENT_FUNDS',[])
  }

   return change('OPEN',output)

`}</code></pre>

      </div>
    );
  }
}
