/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import '../styles/carrusel.css';
import cajero from "../assets/cajero.png";
import agente from "../assets/Kasnet.png";
import agencia from "../assets/BCP.png";

// eslint-disable-next-line react/prop-types
const CarouselItem = ({ image, altText, title, info }) => (
    <div className="carousel-item-principal">
        <img className="carousel-item-img" src={image} alt={altText} width="100%" />
        <div className="carousel-item-overlay">  {/* Añadiendo un contenedor para el título */}
            <h3 className="carousel-item-title">{title}</h3>
        </div>
        {info && (
            <div className="carousel-info">
                {info.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
            </div>
        )}
    </div>
);


const Carrusel = () => {
    const slides = [
        {
            image: "./src/assets/BCP.png",
            altText: "Agencias",
            title: "Agencias",
            info: [
                "Haz tus operaciones con total seguridad en más de 2.300 cajeros BCP en todo el Perú.",
                "Retira de S/20 a S/3000 o $20 hasta $800 por día.",
                "Consulta de saldos."
            ]
        },
        {
            image: agente,
            altText: "Kasnet",
            title: "Agentes BCP y Kasnet",
            info: [
                "Realiza pagos y retiros sin ir al banco, ubícanos en bodegas, farmacias y más.",
                "Paga tu préstamo.",
                "Realiza depósitos.",
                "Retira hasta S/1000 en agentes BCP y S/500 en agentes Kasnet."
            ]
        },
        {
            image: "./src/assets/cajero.png",
            altText: "BCP",
            title: "Cajeros BCP",
            info: [
                "Haz tus operaciones con total seguridad en más de 2.300 cajeros BCP en todo el Perú.",
                "Retira de S/20 a S/3000 o $20 hasta $800 por día.",
                "Consulta de saldos.",
            ]
        }
    ];

    const [activeSlide, setActiveSlide] = useState(0);
    const [startX, setStartX] = useState(0);
    const containerRef = useRef(null);

    const handleSwipeStart = (e) => {
        if (e.type === 'touchstart') {
            setStartX(e.touches[0].clientX);
        } else {
            setStartX(e.clientX);
            containerRef.current.addEventListener('mousemove', handleSwipeMove);
        }
    };

    const handleSwipeEnd = () => {
        containerRef.current.removeEventListener('mousemove', handleSwipeMove);
    };

    const handleSwipeMove = (e) => {
        const currentX = e.type === 'touchmove' ? e.touches[0].clientX : e.clientX;
        if (currentX - startX > 50) {  // swipe right
            setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
            handleSwipeEnd();
        } else if (startX - currentX > 50) {  // swipe left
            setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
            handleSwipeEnd();
        }
    };

    return (
        <>
            <h2 className="carousel-title">Canales de Atención</h2> {/* Aquí agregas el título */}
            <div className="carousel-container" ref={containerRef}
                onTouchStart={handleSwipeStart}
                onTouchMove={handleSwipeMove}
                onMouseDown={handleSwipeStart}
                onMouseUp={handleSwipeEnd}
                onMouseLeave={handleSwipeEnd}>
                <div
                    className="carousel-wrapper"
                    style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <CarouselItem key={index} {...slide} />
                    ))}
                </div>
                <div className="carousel-dots">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`carousel-dot ${activeSlide === index ? 'active' : ''}`}
                            onClick={() => setActiveSlide(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carrusel;


