import "./index.css";

export const OurProducts = () => {
  const products = [
    { img: "Images/p1.jpg", old: 1390, new: 1100 },
    { img: "Images/p2.jpg", old: 1270, new: 1000 },
    { img: "Images/p3.jpg", old: 990, new: 800 },
    { img: "Images/p4.jpg", old: 1300, new: 1150 },
    { img: "Images/p5.jpg", old: 1250, new: 1050 },
    { img: "Images/p6.jpg", old: 1390, new: 1100 },
    { img: "Images/p7.jpg", old: 1400, new: 1100 },
    { img: "Images/p8.jpg", old: 1500, new: 1300 },
  ];

  return (
    <section id="Products" className="products-section">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((item, i) => (
          <div className="product-card" key={i}>
            <img src={item.img} alt={`product-${i}`} />
            <div className="product-info">
              <p className="price">
                <s>₹{item.old}</s>{" "}
                <span className="discount">₹{item.new}</span>
              </p>
              <p className="save">Save up to 15%</p>
              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
