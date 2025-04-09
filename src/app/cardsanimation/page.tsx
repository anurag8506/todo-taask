'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";

import "bootstrap/dist/css/bootstrap.min.css";

import Head from 'next/head';
import Link from "next/link";

const Home: React.FC = () => {
  const [scrolling, setScrolling] = useState(false);

  // Handle the scroll event to trigger animation state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true);  // Trigger animation when scrolled
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <Link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;700&family=DM+Mono:wght@400;500&display=swap" />
        <style>{`
          :root {
            --card-height: 40vw;
            --card-margin: 4vw;
            --card-top-offset: 1em;
            --numcards: 4;
            --outline-width: 0px;
          }

          body {
            background: #131212;
            color: beige;
            text-align: center;
            padding-bottom: 20vh;
          }

          header, main {
            width: 80vw;
            margin: 0 auto;
          }

          header {
            height: 35vh;
            display: grid;
            place-items: center;
            margin-bottom: 80px;
          }

          #cards {
            list-style: none;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(var(--numcards), var(--card-height));
            gap: var(--card-margin);
            padding-bottom: calc(var(--numcards) * var(--card-top-offset));
            margin-bottom: var(--card-margin);
          }

          .card {
            position: sticky;
            top: 0;
            padding-top: calc(var(--index) * var(--card-top-offset));
            transition: transform 1s ease-out;
          }

          .card-content {
            box-shadow: 0 0.2em 1em rgba(0, 0, 0, 0.1), 0 1em 2em rgba(0, 0, 0, 0.1);
            background: #fffaf2;
            color: #131212;
            border-radius: 2rem;
            overflow: hidden;
            display: grid;
            grid-template-areas: "text img";
            grid-template-columns: 1fr 1fr;
            padding: 1.4em;
            transform: scale(1); /* Initial state */
            transition: transform 0.5s ease-in-out; /* Smooth scaling transition */
          }

          .card-content > div {
            grid-area: text;
            width: 95%;
            max-width: 800px;
            place-self: center;
            text-align: left;
            display: grid;
            gap: 1em;
            place-items: start;
          }

          .card-content > figure {
            grid-area: img;
            overflow: hidden;
          }

          .card-content > figure > img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: .4em;
          }

          h1 {
            font-weight: 300;
            font-size: 3rem;
            margin-bottom: 1rem;
            font-family: 'Cormorant Garamond', serif;
          }

          h2 {
            font-weight: bold;
            font-size: 2.5rem;
            font-family: 'Cormorant Garamond', serif;
            margin: 0;
          }

          p {
            font-weight: 300;
            line-height: 1.42;
            font-size: 1.1rem;
          }

          /* Add animation for scaling */
          .card.scaled {
            transform: scale(1.05); /* When the card is in focus, it slightly enlarges */
          }

          @keyframes scale {
            0% {
              transform: scale(1);
            }
            100% {
              transform: scale(1.1);
            }
          }

          .card.animate {
            animation: scale 0.5s forwards;
          }
        `}</style>
      </Head>

      <body>
        <header>
          <div>
            <h1>Stacking Cards Animation</h1>
            <p>Scroll down to stack the cards. Scroll back up to unstack them.</p>
          </div>
        </header>

        <main>
          <ul id="cards">
            {['flower-9.jpg', 'flower-8.jpg', 'flower-7.jpg', 'flower-6.jpg'].map((image, index) => (
              <li 
                className={`card ${scrolling ? 'animate' : ''}`} 
                id={`card-${index + 1}`} 
                key={index}
              >
                <div className="card-content">
                  <div>
                    <h2>Card {index + 1}</h2>
                    <p>This is the content of card {index + 1}. Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                  <figure>
                    <Image 
                      src={`https://assets.codepen.io/210284/${image}`} 
                      alt={`card-${index + 1}`} 
                      width={500} 
                      height={500} 
                      layout="responsive" 
                    />
                  </figure>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </body>
    </>
  );
};

export default Home;
