import './App.css';
import Biography from './components/Biography';
import Albums from './components/Albums';
import VideoEmbed from './components/Video';

function App() {
  return (
    <>
      <header className="hero">
        {/* Wrap hero content in .container */}
        <div className="container">
          <div className="hero-content">
            <img src="/vicente.jpg" alt="Vicente Amigo" className="hero-image" />
            <div className="hero-text">
              <h1>Vicente Amigo</h1>
              <p>
                Uno de los guitarristas flamencos más influyentes, llevando el flamenco
                a nuevas alturas con su estilo virtuoso e innovador.
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Wrap main content in the same container */}
      <main className="container">
        <Biography />
        <Albums />
        <VideoEmbed />
      </main>
    </>
  );
}

export default App;
