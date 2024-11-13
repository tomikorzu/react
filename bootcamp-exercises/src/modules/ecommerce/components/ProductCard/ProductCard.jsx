import "./product-card.css";

export default function ProductCard({
  id,
  image,
  title,
  price,
  discount,
  description,
  rating,
  action,
}) {
  const priceWithDiscount = price - (price * discount) / 100;

  return (
    <>
      <li onClick={() => action(id)}>
        <article className="product-card">
          <figure>
            <img src={image} alt={title} />
          </figure>
          <div className="container-card">
            <h3>{title}</h3>
            <span>{priceWithDiscount.toFixed(2)}</span>
            <span className="price-with-discount">{price}</span>
            <p>{description}</p>
            <span className="rating">
              <i className="fa-solid fa-star"></i>
              {rating}
            </span>
          </div>
        </article>
      </li>
    </>
  );
}
