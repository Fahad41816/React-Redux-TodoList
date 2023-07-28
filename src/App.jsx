 
import { Provider } from 'react-redux'
import './App.css'
import Footer from './components/Footer' 
import Header from './components/Header'
import Todos from './components/Todos'
import Store from './Redux/Store'




function App() {
 
  return (
    <Provider store={Store}>
        <div
            className="grid place-items-center bg-blue-100 h-screen px-6 font-sans"
        >
            {/* <!-- navbar --> */}
            <div
                className="fixed top-0 left-0 text-center w-full header bg-violet-600 py-4 text-white font-bold text-lg shadow-lg"
            >
                Simple Todo Application with Redux
            </div>

            <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                {/* <!-- header --> */}
               <Header></Header>
                <hr className="mt-4" />

                {/* <!-- todo list --> */}
               <Todos></Todos> 

                <hr className="mt-4" />

                {/* <!-- footer --> */}
                <Footer></Footer>
            </div>
        </div>
    </Provider>
  )
}

export default App
