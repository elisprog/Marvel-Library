import "./Card.css"
function Card(props) {
    const {name, superpowers, image } = props;
  return (
    <div className="card">
        <h2 className="card__name">{name}</h2>
        <p className="card__superpowers">{superpowers}</p>
        <img src={image} alt={name} className="image"></img>
    </div>
  
   
  );
}

export default Card;