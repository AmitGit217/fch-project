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
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Autoplay delay in milliseconds
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Show 1 slide on small screens
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
