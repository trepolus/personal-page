import AIMindLogo from './images/mindAi.png';
import './App.css';
import backgroundImage from './images/volumetricShapes.png';

function App() {
    return (
        <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <header className="App-header">
                <h2>#AITakeover</h2>
                <img src={AIMindLogo} className="App-logo" alt="logo" />
                <p>
                    <code>Everything is generated</code>!
                </p>
                <a className="App-link" href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer">
                    Reimagine your Imagination
                </a>
            </header>
        </div>
    );
}

export default App;
