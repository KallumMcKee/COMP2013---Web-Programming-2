// Hi Ziad I eventually got something working up to get the images to apear on screen I had to put the images in the public folder
// like we'd do in web programming 1 , I know the instruction said to put the in assests but they would appear for me.

export default function Card({ imgageSource, country, hotel, rating, price }) {
  const good = Number(rating) > 4.0;

  return (
    <article className="card">
      <img className="card__img" src={imgageSource} alt={`${country} photo`} />
      <h2 className="card__country">{country}</h2>
      <h3 className="card__hotel">{hotel}</h3>
      <p className={`card__rating ${good ? "good" : "bad"}`}>
        {rating} <span className="star">★</span>
      </p>
      <p className="card__price">{price}/night</p>
    </article>
  );
}
