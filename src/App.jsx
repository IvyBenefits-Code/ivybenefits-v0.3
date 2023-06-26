// import React, { useState, useEffect, useRef } from "react";
// import "./App.css";
// import video1 from "./demo.mp4";
// import video2 from "./demo2.mp4";
// import video3 from "./demo3.mp4";
// import video4 from "./demo4.mp4";
// import video5 from "./demo5.mp4";
// import logo2 from "./ivy dark.png";
// import logo1 from "./ivy white.png";
// import Hamburger from "hamburger-react";

// const videos = [
//     {
//         src: video1,
//         text: "OUR VALUES INFORM EVERYHTING WE DO",
//         logo: logo2,
//     },
//     {
//         src: video2,
//         text: "WE CREATE OPPORTUNITIES USING DATA AND AI",
//         logo: logo2,
//     },
//     {
//         src: video3,
//         text: "WE PROVIDE OUTSTADING SERVICES & EXPERIENCES",
//         logo: logo2,
//     },
//     {
//         src: video4,
//         text: "WE ARE DEDICATED TO DELIVERING RESULTS FOR OUR CLIENTS",
//         logo: logo2,
//     },
//     {
//         src: video5,
//         text: "WE ARE HERE TO SERVE THE COMMUNITY",
//         logo: logo2,
//     },
// ];

// function App() {
//     const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//     const [showContactScreen, setShowContactScreen] = useState(false);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentVideoIndex(
//                 (prevIndex) => (prevIndex + 1) % videos.length
//             );
//         }, 5000);

//         return () => clearInterval(interval);
//     }, []);

//     const toggleContactScreen = () => {
//         setShowContactScreen(!showContactScreen);
//     };

//     return (
//         <div className="App">
//             <nav>
//                 <div className="image-container">
//                     <img
//                         className="fit-content"
//                         src={videos[currentVideoIndex].logo}
//                         alt="Logo"
//                     />
//                 </div>

//                 <Hamburger
//                     color="#0e3544"
//                     distance="sm"
//                     size={35}
//                     className="btn"
//                     toggled={showContactScreen}
//                     toggle={toggleContactScreen}
//                 ></Hamburger>
//             </nav>

//             {showContactScreen ? (
//                 <div className="contact-screen">
//                     <h1>Contact Us</h1>
//                     <h3>contact@ivybenefits.com</h3>
//                 </div>
//             ) : (
//                 <>
//                     <VideoPlayer src={videos[currentVideoIndex].src} />

//                     <p>{videos[currentVideoIndex].text}</p>

//                     <div className="pagination">
//                         {videos.map((_, index) => (
//                             <button
//                                 key={index}
//                                 className={`dot ${
//                                     index === currentVideoIndex ? "active" : ""
//                                 }`}
//                                 onClick={() => setCurrentVideoIndex(index)}
//                             />
//                         ))}
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// function VideoPlayer({ src }) {
//     const ref = useRef();

//     useEffect(() => {
//         if (ref.current) {
//             ref.current.src = src;
//             ref.current.load();
//         }
//     }, [src]);

//     return (
//         <video className="background-video" ref={ref} autoPlay loop muted>
//             <source src={src} type="video/mp4" />
//         </video>
//     );
// }

// export default App;

import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import video1 from "./demo.mp4";
import video2 from "./demo2.mp4";
import video3 from "./demo3.mp4";
import video4 from "./demo4.mp4";
import video5 from "./demo5.mp4";
import logo2 from "./ivy dark.png";
import logo1 from "./ivy white.png";
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
        text: "WE ARE DEDICATED TO DELIVERING RESULTS FOR OUR CLIENTS",
        logo: logo2,
    },
    {
        src: video5,
        text: "WE ARE HERE TO SERVE THE COMMUNITY",
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
                    <VideoPlayer src={videos[currentVideoIndex].src} />

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
