import React from 'react';
// import logo from './logo.svg';
import './App.css';
import data from './data/dataMovies';
import Header from './components/Header';
import Movie from './components/Movie';


class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Header />
                <main>
                    {
                        data.map(m => <Movie {...m} />)
                    }
                </main>
            </div>
        );
    }
}

export default App;
