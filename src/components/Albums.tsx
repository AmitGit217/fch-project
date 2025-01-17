const Albums = () => {
    const albumList = [
      'De Mi Corazón al Aire (1991)',
      'Vivencias Imaginadas (1995)',
      'Ciudad de las Ideas (2000)',
      'Paseo de Gracia (2009)',
      'Memoria de los Sentidos (2017)',
    ];
  
    return (
      <section className="albums">
        <h2>Álbumes</h2>
        <ul>
          {albumList.map((album, index) => (
            <li key={index}>{album}</li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default Albums;
  