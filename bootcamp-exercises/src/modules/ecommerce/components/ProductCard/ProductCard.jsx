import "./product-card.css";

export default function ProductCard({
  image,
  title,
  price,
  discount,
  description,
  rating,
}) {
  const priceWithDiscount = price - (price * discount) / 100;

  return (
    <>
      <li>
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
