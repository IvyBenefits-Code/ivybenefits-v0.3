import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import video1 from "./1v3.mp4";
import video2 from "./2v2.mp4";
import video3 from "./3 v3.mp4";
import video4 from "./4v3.mp4";
import video5 from "./5v3.mp4";
import logo2 from "./ivy dark.png";
import Hamburger from "hamburger-react";

const videos = [
    {
        src: video1,
        text: "OUR VALUES INFORM EVERYTHING WE DO",
        logo: logo2,
    },
    {
        src: video2,
        text: "WE CREATE OPPORTUNITIES USING DATA AND AI",
        logo: logo2,
    },
    {
        src: video3,
        text: "WE PROVIDE OUTSTANDING SERVICES & EXPERIENCES",
        logo: logo2,
    },
    {
        src: video4,
        text: "WE ARE DEDICATED TO DELIVERING RESULTS",
        logo: logo2,
    },
    {
        src: video5,
        text: "WE ARE HERE TO SERVE OUR CLIENTS",
        logo: logo2,
    },
];

function App() {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [showContactScreen, setShowContactScreen] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
        startTimer();

        return () => {
            stopTimer();
        };
    }, []);

    const startTimer = () => {
        intervalRef.current = setInterval(() => {
            setCurrentVideoIndex(
                (prevIndex) => (prevIndex + 1) % videos.length
            );
        }, 10000);
    };

    const stopTimer = () => {
        clearInterval(intervalRef.current);
    };

    const toggleContactScreen = () => {
        setShowContactScreen(!showContactScreen);
    };

    const handlePaginationClick = (index) => {
        setCurrentVideoIndex(index);
        stopTimer();
        startTimer();
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
                <Hamburger
                    color="#0e3544"
                    distance="sm"
                    size={35}
                    className="btn"
                    toggled={showContactScreen}
                    toggle={toggleContactScreen}
                />
            </nav>

            {showContactScreen ? (
                <div className="contact-screen">
                    <h1>Contact Us</h1>
                    <h3>contact@ivybenefits.com</h3>
                </div>
            ) : (
                <>
                    {videos.map((video, index) => (
                        <VideoPlayer
                            key={index}
                            src={video.src}
                            isActive={index === currentVideoIndex}
                        />
                    ))}
                    {/* <VideoPlayer src={videos[currentVideoIndex].src} /> */}

                    <p>{videos[currentVideoIndex].text}</p>

                    <div className="pagination">
                        {videos.map((_, index) => (
                            <button
                                key={index}
                                className={`dot ${
                                    index === currentVideoIndex ? "active" : ""
                                }`}
                                onClick={() => handlePaginationClick(index)}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}

// function VideoPlayer({ src }) {
//     const ref = useRef();

//     useEffect(() => {
//         if (ref.current) {
//             ref.current.src = src;
//             ref.current.load();
//         }
//     }, [src]);
function VideoPlayer({ src, isActive }) {
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            ref.current.src = src;
            ref.current.load();
        }
    }, [src]);
    return (
        <video
            className={`background-video ${isActive ? "active" : ""}`}
            ref={ref}
            autoPlay
            loop
            muted
            preload="auto"
        >
            <source src={src} type="video/mp4" />
        </video>
    );
}

export default App;
