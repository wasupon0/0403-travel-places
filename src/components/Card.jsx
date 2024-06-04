function Card({
  title,
  location,
  googleMapsUrl,
  startDate,
  endDate,
  description,
  imageUrl,
}) {
  return (
    <section>
      <div className="card">
        <img
          className="card--img"
          src={imageUrl}
          alt={`${title.toLowerCase()} image`}
        />
        <div className="card--content">
          <div className="card--location">
            <img className="card--pin" src="pin.svg" alt="pin" />
            <p className="card--country">{location.toUpperCase()}</p>
            <a href={googleMapsUrl} className="grey underline">
              View on Google Maps
            </a>
          </div>
          <h1 className="card--title">{title}</h1>
          <p className="card--date">
            {startDate} - {endDate}
          </p>
          <p className="card--description">{description}</p>
        </div>
      </div>
      <hr />
    </section>
  );
}
export default Card;
