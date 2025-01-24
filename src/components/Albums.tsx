import { motion } from "framer-motion";

const Albums = () => {
  const albumList = [
    { title: "De Mi Corazón al Aire (1991)", image: "/dmc.jpg" },
    { title: "Vivencias Imaginadas (1995)", image: "/vi.jpg" },
    { title: "Poeta (1997)", image: "/poeta.jpg" },
    { title: "Ciudad de las Ideas (2000)", image: "/cdl.jpg" },
    { title: "Paseo de Gracia (2009)", image: "/psg.jpg" },
    { title: "Tierra (2013)", image: "/tierra.jpg" },
    { title: "Memoria de los Sentidos (2017)", image: "/mds.jpg" },
    { title: "Andenes del Tiempo (2024)", image: "/ant.png" },
  ];

  return (
    <section className="albums">
      <h2>Álbumes</h2>
      {albumList.map((album, index) => (
        <motion.div
        key={index}
        className="album-item"
        initial={{ x: index % 2 === 0 ? "-100vw" : "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 4, // increase duration (e.g., from 1 to 2 or 3)
          delay: index * 2, // optional: increase to slow down the stagger
          ease: "easeInOut", // optional: choose a smoother easing
        }}
      >
        <img src={album.image} alt={album.title} className="album-image" />
        <h3>{album.title}</h3>
      </motion.div>
      
      ))}
    </section>
  );
};

export default Albums;
