import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import video1 from "./demo.mp4";
import video2 from "./demo2.mp4";
import video3 from "./demo3.mp4";
import video4 from "./demo4.mp4";
import video5 from "./demo5.mp4";
import logo1 from "./ivy dark.png";
import logo2 from "./ivy white.png";
import Hamburger from "hamburger-react";

const videos = [
    {
        src: video1,
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        logo: logo1,
    },
    {
        src: video2,
        text: "dolor sit amet consectetur adipisicing elit.",
        logo: logo2,
    },
    {
        src: video3,
        text: "orem ipsum, dolor sit amet consectetur ",
        logo: logo1,
    },
    {
        src: video4,
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
        logo: logo2,
    },
    {
        src: video5,
        text: ", dolor sit amet consectetur adipisicing elit.",
        logo: logo1,
    },
];

function App() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [showContactScreen, setShowContactScreen] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex(
                (prevIndex) => (prevIndex + 1) % videos.length
            );
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const toggleContactScreen = () => {
        setShowContactScreen(!showContactScreen);
    };

    return (
        <div className="App">
            <nav>
                <div className="image-container">
                    <img
                        className="fit-content"
                        src={videos[currentVideoIndex].logo}
                        alt="Logo"
                    />
                </div>
                {/* <h2 className="logo">IVY BENEFITS</h2> */}
                <Hamburger
                    distance="sm"
                    size={30}
                    className="btn"
                    toggled={showContactScreen}
                    toggle={toggleContactScreen}
                ></Hamburger>
            </nav>

            {showContactScreen ? (
                <div className="contact-screen">
                    <h1>Contact Us</h1>
                    <h3>contact@ivybenefits.com</h3>
                </div>
            ) : (
                <>
                    <VideoPlayer src={videos[currentVideoIndex].src} />

                    <p>{videos[currentVideoIndex].text}</p>

                    <div className="pagination">
                        {videos.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${
                                    index === currentVideoIndex ? "active" : ""
                                }`}
                                onClick={() => setCurrentVideoIndex(index)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

function VideoPlayer({ src }) {
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.src = src;
            ref.current.load();
        }
    }, [src]);

    return (
        <video className="background-video" ref={ref} autoPlay loop muted>
            <source src={src} type="video/mp4" />
        </video>
    );
}

export default App;
