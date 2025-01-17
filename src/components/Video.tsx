const VideoEmbed = () => {
    return (
      <section className="video-embed">
        <div className="ficha-tecnica">
          <h3>Ficha Técnica de "Mensaje (Fandangos)"</h3>
          <ul>
            <li><strong>Artista:</strong> Vicente Amigo</li>
            <li><strong>Composición:</strong> Mensaje (Fandangos)</li>
            <li><strong>Álbum:</strong> "Vivencias Imaginadas" (1995)</li>
            <li><strong>Presentaciones notables:</strong> Festival de Mont-de-Marsan (1999)</li>
          </ul>
        </div>
        <iframe
          src="https://www.youtube.com/embed/cJVtyp0ip0Q?rel=0&modestbranding=1&controls=1&showinfo=0"
          title="Mensaje (Fandangos) - Vicente Amigo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="video-frame"
        ></iframe>
      </section>
    );
  };
  
  export default VideoEmbed;
  