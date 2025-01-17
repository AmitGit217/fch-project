import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Albums = () => {
  const albumList = [
    {
      title: "De Mi Corazón al Aire (1991)",
      image: "/images/de-mi-corazon-al-aire.jpg",
    },
    {
      title: "Vivencias Imaginadas (1995)",
      image: "/images/vivencias-imaginadas.jpg",
    },
    {
      title: "Poeta (1997, con la Orquesta de Córdoba)",
      image: "/images/poeta.jpg",
    },
    {
      title: "Ciudad de las Ideas (2000)",
      image: "/images/ciudad-de-las-ideas.jpg",
    },
    {
      title: "Paseo de Gracia (2009)",
      image: "/images/paseo-de-gracia.jpg",
    },
    {
      title: "Tierra (2013)",
      image: "/images/tierra.jpg",
    },
    {
      title: "Memoria de los Sentidos (2017)",
      image: "/images/memoria-de-los-sentidos.jpg",
    },
    {
      title: "Andenes del Tiempo (2024)",
      image: "/images/andenes-del-tiempo.jpg",
    },
  ];

  const settings = {
    dots: false, // Remove navigation dots
    arrows: false, // Remove navigation arrows
    infinite: true, // Enable infinite looping
    speed: 5000, // Slow down the transition speed
    slidesToShow: 3, // Show 3 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 0, // Set autoplay delay to 5 seconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller screens
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2, // Show 2 slides on medium screens
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
