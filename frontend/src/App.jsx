import './App.css'

function App() {
  return (
    <>
      <Message text={"YOO"} anotherText={" HO"}/>
      <Message text={"HO"}/>
      <Message text={"HOOO"}/>
    </>
  )
}

function Message({text,anotherText}) {
  return(
    <div>
      <p>
        {text}
        {anotherText}
      </p>
    </div>
  )

}

export default App
