import './App.css'
import Info from "./components/Info.jsx";
import About from "./components/About.jsx";
import Interests from "./components/Interests.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <div className="bg">
            <div className="card--">
                <Info className="card--info"/>
                <About className="card--about"/>
                <Interests className="card--interests"/>
                <Footer className="card--footer"/>
            </div>
        </div>

    )
}

export default App
