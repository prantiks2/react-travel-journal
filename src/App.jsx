import './App.css'
import { Header } from './components/Header'
import { Entry } from './components/Entry';
import entries  from './data'

function App() {

  const entryList = entries.map(entry => <Entry key={entry.id} {...entry}/>);

  return (
    <>
      <Header/>
      {entryList}
    </>
  )
}

export default App
