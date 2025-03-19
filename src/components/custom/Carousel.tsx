import React, { useState, useEffect } from "react";

const Carousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: "Recolección de Residuos Sólidos Urbanos",
      description:
        "Son aquellos residuos generados en casas habitación, que resultan de la eliminación de materiales que se utilizan en las actividades domésticas.",
      image: "/images/nuestros-servicios/servicio1.jpg",
    },
    {
      title: "Recolección de Residuos de Manejo Especial",
      description: "Son aquellos residuos generados en procesos productivos.",
      image: "/images/nuestros-servicios/servicio2.jpg",
    },
    {
      title: "Destrucción Fiscal",
      description:
        "Destrucción de mercancías de las que se tiene que tener certeza que dejaran de circular en el mercado. Destrucción de papelería fiscal.",
      image: "/images/nuestros-servicios/servicio3.jpg",
    },
    {
      title: "Reciclaje y Acopio de Residuos",
      description:
        "Recepción de materiales susceptibles de valorizar, para enviarse a un proceso posterior de reciclaje.",
      image: "/images/nuestros-servicios/servicio4.jpg",
    },
    {
      title: "Planta de Valoración de Residuos",
      description:
        "Sitio donde se realiza la separación de residuos con objeto de darles un reuso a estos materiales.",
      image: "/images/nuestros-servicios/servicio5.jpg",
    },
    {
      title: "Planes de Manejo de Residuos",
      description:
        "Instrumento que la autoridad requiere a los generadores, con objeto de verificar que estos den un manejo adecuado a los residuos.",
      image: "/images/nuestros-servicios/servicio6.jpg",
    },
    {
      title: "Asesoría Ambiental",
      description:
        "Apoyo a clientes en trámites y gestiones ante la autoridad ambiental.",
      image: "/images/nuestros-servicios/servicio7.jpg",
    },
    {
      title: "Disposición de Residuos en Rellenos Sanitarios Autorizados",
      description:
        "Proceso de entrega de residuos que ya no tienen probabilidad de uso en algún esquema de reciclaje, en sitios especializados y debidamente autorizados para este objeto.",
      image: "/images/nuestros-servicios/servicio8.jpg",
    },
  ];

  // ⬇️ Corrección del `useEffect`
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % services.length);
    }, 3000); // Cambio cada 3 segundos

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      {/* Versión para pantallas grandes */}
      <div className="hidden md:block carousel-container">
        <div className="carousel">
          <div
            className="slides"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="slide"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="carousel-text">
          {services.map((service, index) => (
            <label
              key={index}
              className={`text-item ${index === activeIndex ? "active" : ""}`}
              onClick={() => handleSlideChange(index)}
            >
              <hr className="mb-1" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </label>
          ))}
        </div>
      </div>

      {/* Versión para móviles */}
      <div className="block md:hidden">
        <div className="relative w-full h-[50vh] overflow-hidden">
          <div
            className="flex w-full h-full transition-transform duration-700"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
            <h3 className="text-lg font-semibold">{services[activeIndex].title}</h3>
            <p className="text-xs mt-2">{services[activeIndex].description}</p>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => handleSlideChange(index)}
              className={`h-2 w-2 rounded-full mx-1 transition-colors duration-300 ${
                index === activeIndex ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      {/* Estilos generales */}
      <style>{`
        .carousel-container {
          text-align: center;
          width: 100%;
          max-width: 68.5%;
          margin: auto;
        }

        .carousel {
          position: relative;
          width: 100%;
          height: 700px;
          overflow: hidden;
        }

        .slides {
          display: flex;
          transition: transform 1s ease-in-out;
          width: 100%;
          height: 100%;
        }

        .slide {
          flex: 0 0 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
        }

        .carousel-text {
          display: flex;
          justify-content: space-around;
          padding: 20px 5px;
          flex-wrap: wrap;
        }

        .text-item {
          flex: 1;
          min-width: 150px;
          text-align: center;
          padding: 5px;
          cursor: pointer;
          color: lightgray;
          transition: color 0.3s ease;
        }

        .text-item.active hr,
        .text-item.active h3 {
          color: black;
          font-weight: bold;
        }

        .text-item.active p {
          color: black;
        }

        .text-item h3 {
          font-size: 0.85em;
          font-weight: bold;
          margin-bottom: 0;
          line-height: 1.0;
        }

        .text-item p {
          font-size: 0.8em;
          line-height: 1.0;
        }

        hr {
          border: none;
          border-top: 2px solid lightgray;
        }

        .text-item.active hr {
          border-top: 2px solid black;
        }
      `}</style>
    </>
  );
};

export default Carousel;
