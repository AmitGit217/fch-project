import video from '../assets/mensaje.mp4';

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
      {/* Use the <video> tag instead of <iframe> */}
      <video className="video-frame" controls>
        <source src={video} type="video/mp4" />
        {/* Fallback for browsers that do not support the video tag */}
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default VideoEmbed;
