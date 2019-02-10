import React from 'react';

//inline destructuring
// const Ninjas = (props) => {
const Ninjas = ({ninjas}) => {
  //Take original array 'ninjas', we 'map' through the array to recieve the individual 'ninja' which represents the individual items in the array
  //Then we perform a function on each item, which returns a bit of JSX that we want to output for each ninja
  const ninjaList = ninjas.map(ninja => {
    return(
      <div className="ninja" key={ ninja.id }>
        <div>Name: { ninja.name }</div>
        <div>Age: { ninja.age }</div>
        <div>Belt: { ninja.belt }</div>
      </div>                
    )
  })
  return(
    <div className="ninja-list">
        { ninjaList }
    </div>
  )
}


export default Ninjas;