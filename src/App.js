// CAROLINA ROJAS COLLANTE
import React from 'react';
import './App.css';
import PersonCard from './PersonCard';

function App() {
    return (
        <div className="App">
            <div className="Container">
                <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
                <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
                
            </div>
        </div>
    );
}

export default App;