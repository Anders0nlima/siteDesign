import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import video1 from '../assets/video1.mp4';
import animacao from '../assets/animacao.jpg';
import audio from '../assets/audio.jpg';
import filmes from '../assets/filmes.jpg';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import NavBar from '../compontes/NavBar';

gsap.registerPlugin(TextPlugin);

function MainPage() {
  return (
    <div className="teste-dois-container">
      
      <NavBar/>

      {/* Conteúdo principal */}
      <div className="content-wrapper">
        {/* Vídeo de fundo com gradiente de transição */}
        <div className="video-section">
          <video autoPlay loop muted className="video">
            <source src={video1} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
          <div className="video-gradient"></div>
          <div className="links-container">
            <Link to="/teste-um" className="video-link">
              <img src={animacao} alt="Teste Um" />
            </Link>
            <Link to="/teste-dois" className="video-link">
              <img src={audio} alt="Teste Dois" />
            </Link>
            <Link to="/teste-tres" className="video-link">
              <img src={filmes} alt="Teste Três" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default MainPage;


