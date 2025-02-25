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
          <div className="big-news-item">
            <div className="big-news-img-container">
              <img src="big-new-1.jpg" alt="big-news" className="big-news-img" />
            </div>
            <div className="big-news-title">
              <a>Pronta respuesta de Tebas a Ancelotti: »Con la experiencia que tienes, que te usen para esto es una pena»</a>
              <div className="big-news-content">
                <a>El fuego cruzado entre Javier Tebas y el Real Madrid no cesa. Esta vez, el foco de la polémica se centra en Carlo Ancelotti, quien no dudó en responder a Tebas.</a>
              </div>
            </div>
          </div>
          <div className="medium-news-item">
            <div className="medium-news-img-container">
              <img src="medium-new-1.jpg" alt="medium-news" className="medium-news-img" />
            </div>
            <div className="medium-news-title">
              <a>Atleti y Barça más que el Madrid: revelan los 10 equipos que más gastaron en fichajes en la última década</a>
              <div className="medium-news-content">
                <a>Marca reveló los 10 clubes que más han gastado en fichajes en los últimos 10 años. El Real Madrid está fuera del top.</a>
              </div>
            </div>
          </div>
          <div className="medium-news-item">
            <div className="medium-news-img-container">
              <img src="medium-new-2.jpg" alt="medium-news" className="medium-news-img" />
            </div>
            <div className="medium-news-title">
              <a>El dardo de Piqué a Lamine Yamal: «En mi generación, no estaría jugando»</a>
              <div className="medium-news-content">
                <a>El ex-futbolista afirma que la plantilla actual no tiene el nivel de aquel entonces.</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
