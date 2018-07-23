import React, {Component} from 'react';
import './App.css';
import ThreeJsContainer from './ThreeJsContainer';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">WebGL Solar System</h1>

                    <p className="App-intro">
                        Eventually add some intro text here...
                    </p>
                </header>

                <ThreeJsContainer />
            </div>
        );
    }
}

export default App;
