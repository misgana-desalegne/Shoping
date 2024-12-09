
import './App.css'
import Person from './Person';


let ages:any = [1,2,3,4,5];

ages = ['bring', 1,2,3]



function App() {

  const fetch = {name: "stalin", age: 24, isMarried: null}

  return (
    <>
   <Person name ={fetch.name} age = {fetch.age} isMarried ={fetch.isMarried}></Person>
    </>
  )
}
export default App;


