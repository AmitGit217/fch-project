import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Albums = () => {
  const albumList = [
    { title: "De Mi Corazón al Aire (1991)", image: "/dmc.jpg" },
    { title: "Vivencias Imaginadas (1995)", image: "/vi.jpg" },
    { title: "Poeta (1997, con la Orquesta de Córdoba)", image: "/poeta.jpg" },
    { title: "Ciudad de las Ideas (2000)", image: "/cdl.jpg" },
    { title: "Paseo de Gracia (2009)", image: "/psg.jpg" },
    { title: "Tierra (2013)", image: "/tierra.jpg" },
    { title: "Memoria de los Sentidos (2017)", image: "/mds.jpg" },
    { title: "Andenes del Tiempo (2024)", image: "/ant.png" },
  ];

  const settings = {
    dots: false,        // Hide nav dots
    arrows: false,      // Hide prev/next arrows
    infinite: true,     // Loop slides infinitely
    slidesToShow: 3,    // Show 3 slides at a time on large screens
    slidesToScroll: 1,
    // -- Continuous auto-scroll settings --
    autoplay: true,
    autoplaySpeed: 0,   // No waiting time between transitions
    speed: 3500,       // How long each sliding transition takes (in ms)
    cssEase: "linear",  // Makes the sliding motion linear and continuous

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // 2 slides on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // 1 slide on smaller screens
        },
      },
    ],
  };

  return (
    <section className="albums">
      <h2>Álbumes</h2>
      <Slider {...settings}>
        {albumList.map((album, index) => (
          <div key={index} className="album-item">
            <img src={album.image} alt={album.title} className="album-image" />
            <p className="album-title">{album.title}</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Albums;
