import '../../Styles/HomePage/cards.css'
const CardComponent = () => {
    return (
      <>
        <div className="card-container">
          <div className="box">
            <div className="card-header">
              <h3>EKOTA EXPRESS</h3>
            </div>
            <div className="ticket-content">
              <div className="ticket-info">
                <span className="info">Date of Journey</span> : <span></span>
              </div>
              <div className="ticket-info">
                <span className="info">Time</span> : <span></span>
              </div>
              <div className="ticket-info">
                <span className="info">Number of Seats</span> : <span></span>
              </div>
            </div>
            <div className="toggle-button">
              <button className="view-more"> View More</button>
            </div>
          </div>
        </div>
      </>
    );
}

export default CardComponent;