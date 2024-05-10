import React from 'react';

const Carousel: React.FC = () => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        <input className="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden={true} checked={true} />
        <div className="carousel-item">
          <img src="http://fakeimg.pl/2000x800/0079D8/fff/?text=Without" alt="Without" />
        </div>
        <input className="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden={true} />
        <div className="carousel-item">
          <img src="http://fakeimg.pl/2000x800/DA5930/fff/?text=JavaScript" alt="JavaScript" />
        </div>
        <input className="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden={true} />
        <div className="carousel-item">
          <img src="http://fakeimg.pl/2000x800/F90/fff/?text=Carousel" alt="Carousel" />
        </div>
        <label htmlFor="carousel-3" className="carousel-control prev control-1">‹</label>
        <label htmlFor="carousel-2" className="carousel-control next control-1">›</label>
        <label htmlFor="carousel-1" className="carousel-control prev control-2">‹</label>
        <label htmlFor="carousel-3" className="carousel-control next control-2">›</label>
        <label htmlFor="carousel-2" className="carousel-control prev control-3">‹</label>
        <label htmlFor="carousel-1" className="carousel-control next control-3">›</label>
        <ol className="carousel-indicators">
          <li>
            <label htmlFor="carousel-1" className="carousel-bullet">•</label>
          </li>
          <li>
            <label htmlFor="carousel-2" className="carousel-bullet">•</label>
          </li>
          <li>
            <label htmlFor="carousel-3" className="carousel-bullet">•</label>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Carousel;