export const Reviews = () => {
  const reviews = [
    { name: "John Doe", avatar: "Images/r1.jpg", rating: 5, comment: "Amazing products!" },
    { name: "Jane Smith", avatar: "Images/r2.jpg", rating: 4, comment: "Loved the shoes." },
    { name: "Mark Wilson", avatar: "Images/r3.jpg", rating: 5, comment: "Great quality and delivery." },
  ];

  return (
    <section className="reviews-section">
      <h2> Customer Reviews</h2>
      <div className="review-grid">
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <img src={r.avatar} alt={r.name} className="avatar" />
            <h4>{r.name}</h4>
            <p className="rating">{"★".repeat(r.rating)}</p>
            <p className="comment">{r.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
