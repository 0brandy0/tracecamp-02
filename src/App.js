import Header from './components/Header.js'
import Home from './components/Home.js'
import About from './components/About.js'
import Interests from './components/Interests.js'
import Copyright from './components/Copyright.js'

function App() {
  return (
    <div>
      <Header/>
      <main>
        <Home/>
        <About/>
        <Interests/>
      </main>
      <Copyright/>
    </div>
  );
}

export default App;
