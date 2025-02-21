import './News.css'

function News() {
  return (
    <>
      <div className="entire-news-container">
        <div className="news">
          <a>NOTICIAS</a>
        </div>
        <div className="news-container">
          <div className="news-item">
            <div className="news-img-container">
              <img src="new-1.jpg" alt="new-1" className="news-img" />              
            </div>
            <div className="news-title">
              <a>¿Un 'Clásico' en la final de UCL? El recorrido es largo: primero, el Benfica</a>
              <div className="news-content">
                <a>El entrenador del Barcelona, Hansi Flick, advirtió de que el Benfica, es "un rival muy fuerte".</a>
              </div>
            </div>
          </div>
          <div className="news-item">
            <div className="news-img-container">
              <img src="new-2.jpg" alt="new-2" className="news-img" />              
            </div>
            <div className="news-title">
              <a>Sorteo de los octavos de final de la Champions League: Real Madrid - Atleti, Benfica - Barcelona</a>
              <div className="news-content">
                <a>Los aspirantes a la gloria en la Champions League ya conocen su camino a Múnich tras los sorteos de octavos, cuartos y semifinales.</a>
              </div>
            </div>
          </div>
          <div className="news-item">
          <div className="news-img-container">
              <img src="new-3.jpg" alt="new-3" className="news-img" />              
            </div>
            <div className="news-title">
              <a>Roma y United, vaya escollos para Athletic y la Real</a>
              <div className="news-content">
                <a>Se llevó a cabo también el sorteo en la UEFA Europa League, Roma y Manchester United serán atractivos escollos para Athletic y Real Sociedad</a>
              </div>
            </div>
          </div>
          <div className="news-item">
          <div className="news-img-container">
              <img src="new-4.jpg" alt="new-4" className="news-img" />              
            </div>
            <div className="news-title">
              <a>El Chelsea quiere fichar a 3 cracks de LaLiga en verano</a>
              <div className="news-content">
                <a>El Chelsea ya trabaja en la planificación de la próxima temporada y ha puesto su mirada en tres futbolistas destacados de LaLiga.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
