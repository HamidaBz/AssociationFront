import "../style/Story.css";

function Story() {
  return (
    <div className="stories">
      <div className="stories-head">
        <h3>Evènements passés</h3>
      </div>
      <div className="story-line">
        <div className="story"></div>
        <div className="story">
          <div className="story-plus d-flex justify-content-center pt-3">
            <p> Voir toute l'historique</p>
          </div>
        </div>
        <div className="story"></div>
      </div>
    </div>
  );
}

export default Story;
