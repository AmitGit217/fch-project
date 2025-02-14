import './App.css';
import Albums from './components/Albums';
import VideoEmbed from './components/Video';
import vicente from './assets/vicente-min.jpg';

function App() {
  return (
    <>
      <header className="hero">
        {/* Wrap hero content in .container */}
        <div className="container">
          <div className="hero-content">
            <img src={vicente} alt="Vicente Amigo" className="hero-image" />
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
        <Albums />
        <VideoEmbed />
      </main>
    </>
  );
}

export default App;
