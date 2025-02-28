import { getToday } from '../../services/matchesService.js';
import Game from './gamesCard/GamesCard.jsx';
import './Games.css';

const options = {
  weekday: 'long',
  day: '2-digit',
  month: 'long',
  year: 'numeric',
};

function Games() {
  // Obtener y ordenar los partidos por la fecha
  const sortedMatches = getToday().sort((a, b) => {
    const [aHours, aMinutes] = a.date.split(':').map(Number);
    const [bHours, bMinutes] = b.date.split(':').map(Number);

    return (aHours * 60 + aMinutes) - (bHours * 60 + bMinutes);
  });

  return (
    <>
      <div className="games-background">
        <div className="games-title">
          <a>Ponte al día con tus partidos favoritos</a>
        </div>
        <div className="games-date-container">
          <div className="games-date">
            <a>Partidos del {new Date().toLocaleDateString('es-ES', options).charAt(0).toUpperCase() + new Date().toLocaleDateString('es-ES', options).slice(1)}</a>
          </div>
        </div>
        <div className="games-array">
          {
            sortedMatches.map((match) => (
              <Game image={match.image} name={match.name} date={match.date} />
            ))
          }
        </div>
      </div>
    </>
  );
}

export default Games;