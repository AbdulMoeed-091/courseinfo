
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const part2 = 'Using props to pass data'
  const part3 = 'State of a component'
  const exercise1 = 10
  const exercise2 = 7
  const exercise3 = 14
const a=3

  return (
    <>
    <Header course={course} />
    <Content part1={part1} part2={part2} part3 = {part3}/>
    <Total exercise1={exercise1} exercise2={exercise2} exercise3={exercise3}/>
    <Sum a={a} b={10}/>
    </>
  )
// // Guessing age:
//   const person ={name:'Ahsan', age:20}
//   const bornYear = () => {
//     const yearNow = new Date().getFullYear()
//     return yearNow - person.age
//   }

//   return (
//     <div>
//       <p>
//         Hello {person.name}, you are {person.age} years old
//       </p>
//       <p>So you were probably born in {bornYear()}</p>
//     </div>
//   )

}

const Header = (props) => {
console.log(props)
  return (
    <div>
      <h1> {props.course}</h1>
    </div>
  )
}
const Content = (props) => { 

  return (
    <div>
      <p>{props.part1}</p>
      <p>{props.part2}</p>
      <p>{props.part3}</p>
    </div>
  )
}
const Total = (props) => {  
// const {exercise1, exercise2, exercise3} = props
  return (
    <div>
  {/* <p>Number of exercises = {exercise1 + exercise2 + exercise3}</p> */}

<p>Number of exercises = {props.exercise1 + props.exercise2 + props.exercise3}</p>
    </div>
  )
}

const Sum = ({a, b}) => a+b


export default App;
