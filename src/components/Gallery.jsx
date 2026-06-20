import "./Gallery.css";
import { useState, useEffect } from "react";

const galleryData = [
  {
    img: "/g1.jpg",
    text: "Exploring new ideas and building projects.",
  },
  {
    img: "/g2.jpg",
    text: "Moments from my journey in tech.",
  },
  {
    img: "/g3.jpg",
    text: "Learning, experimenting, and growing.",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [zoom, setZoom] = useState(1);

  const [zoomInterval, setZoomInterval] = useState(null);

  const openImage = (index) => {
    setCurrentIndex(index);
    setZoom(1);
  };

  const closeImage = () => {
    setCurrentIndex(null);
    setZoom(1);
  };

  const nextImage = () => {
    setCurrentIndex(
      (prev) => (prev + 1) % galleryData.length
    );
    setZoom(1);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + galleryData.length) %
        galleryData.length
    );
    setZoom(1);
  };

  /* ================= KEYBOARD CONTROLS ================= */

  useEffect(() => {
    const handleKey = (e) => {
      if (currentIndex === null) return;

      if (e.key === "Escape") closeImage();

      if (e.key === "ArrowRight")
        nextImage();

      if (e.key === "ArrowLeft")
        prevImage();
    };

    window.addEventListener(
      "keydown",
      handleKey
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKey
      );
  }, [currentIndex]);

  /* ================= HOLD TO ZOOM ================= */

  const startZoomIn = () => {
    const interval = setInterval(() => {
      setZoom((prev) =>
        Math.min(prev + 0.05, 5)
      );
    }, 25);

    setZoomInterval(interval);
  };

  const startZoomOut = () => {
    const interval = setInterval(() => {
      setZoom((prev) =>
        Math.max(prev - 0.05, 1)
      );
    }, 25);

    setZoomInterval(interval);
  };

  const stopZoom = () => {
    if (zoomInterval) {
      clearInterval(zoomInterval);
      setZoomInterval(null);
    }
  };

  /* ================= MOUSE WHEEL ================= */

  const handleWheel = (e) => {
    e.preventDefault();

    if (e.deltaY < 0) {
      setZoom((prev) =>
        Math.min(prev + 0.1, 5)
      );
    } else {
      setZoom((prev) =>
        Math.max(prev - 0.1, 1)
      );
    }
  };

  return (
    <section
      id="gallery"
      className="gallery-section"
    >
      <div className="gallery-wrapper">

        {/* HEADER */}

        <div className="gallery-header">
          <div className="gallery-accent"></div>

          <div>
            <h2>Snapshots</h2>

            <p className="gallery-sub">
              Moments, experiences, and
              memories from my journey.
            </p>
          </div>
        </div>

        {/* ITEMS */}

        {galleryData.map((item, index) => (
          <div
            key={index}
            className={`gallery-item ${index % 2 !== 0
              ? "reverse"
              : ""
              }`}
          >
            <div className="gallery-image">
              <img
                src={item.img}
                alt="snapshot"
                onClick={() =>
                  openImage(index)
                }
              />
            </div>

            <div className="gallery-text">
              <p>{item.text}</p>
            </div>
          </div>
        ))}

        {/* MODAL */}

        {currentIndex !== null && (
          <div className="gallery-modal">

            {/* CLOSE */}

            <button
              className="close-btn"
              onClick={closeImage}
            >
              ✕
            </button>

            {/* IMAGE */}

            <img
              src={
                galleryData[currentIndex].img
              }
              alt="large"
              className="modal-img"
              onWheel={handleWheel}
              style={{
                transform: `scale(${zoom})`,
              }}
            />

            {/* NAVIGATION */}

            <button
              className="nav left"
              onClick={prevImage}
            >
              ‹
            </button>

            <button
              className="nav right"
              onClick={nextImage}
            >
              ›
            </button>

            {/* CONTROLS */}

            <div className="controls">

              <button
                onMouseDown={startZoomIn}
                onMouseUp={stopZoom}
                onMouseLeave={stopZoom}
                onTouchStart={startZoomIn}
                onTouchEnd={stopZoom}
              >
                Zoom In
              </button>

              <button
                onMouseDown={startZoomOut}
                onMouseUp={stopZoom}
                onMouseLeave={stopZoom}
                onTouchStart={startZoomOut}
                onTouchEnd={stopZoom}
              >
                Zoom Out
              </button>

              <a
                href={
                  galleryData[currentIndex].img
                }
                download
              >
                <button>
                  Download
                </button>
              </a>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}