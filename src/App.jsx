
import './App.css'
import TrendingMovie from './components/TrendingMovie'
import Header from './components/Header'
import NewMovie from './components/NewMovie'

function App() {

  return (
    <>
      <Header/>
      <br /><br /><br /><br /><br />
      <TrendingMovie/>
      {/* <UnevenSetsInfinite/> */}
      <NewMovie/>
    </>
  )
}

export default App
