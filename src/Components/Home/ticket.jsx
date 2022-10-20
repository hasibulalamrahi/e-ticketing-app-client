import "../../Styles/HomePage/ticket.css";
import CardComponent from './cards'
function TicketSection() {
  return (
    <>
      <div className="best">
        <h1>
          <span>Find Your Tickets</span>
        </h1>
        <div className="attributes">
          <p>
            <span className="bold">All</span>
          </p>
          <p>Train</p>
          <p>Bus</p>
          <p>Air</p>
        </div>
      </div>
      <div className="ticket-cards">
        <CardComponent />
      </div>
    </>
  );
}

export default TicketSection;
