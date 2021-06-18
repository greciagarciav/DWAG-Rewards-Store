import Header from './components/header'
import "./styles.css"
import ContainerProducts from './components/containerProducts'
import History from './components/history'
import { UserProvider } from './context/userContext'

function App() {

  return (
    <div className="App">
      <UserProvider>
        <Header />
        <ContainerProducts />
        <History />
      </UserProvider>
    </div>
  );
}

export default App;