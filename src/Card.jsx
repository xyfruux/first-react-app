function Card({ title, description, imageUrl, altText }) {
  return (
    <div className="card">
      <img src={imageUrl} alt={altText} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Card;
