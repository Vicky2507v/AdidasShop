import "./index.css";

export const Home = () => {
    return (
        <section className="home-hero">
            <div className="hero-text">
                <h4 className="tagline"> New Arrival</h4>
                <h1 className="hero-title">
                    Step Into <span>Style</span> <br /> With Fresh Arrivals
                </h1>
                <p className="hero-desc">
                    Discover Adidas' latest collection, crafted for performance, comfort, and everyday streetwear style.
                </p>
                <button className="shop-btn">Shop Now</button>
            </div>

            <div className="hero-img-wrapper">
                <img src="src/assets/Images/home.png" alt="Adidas Hero" className="hero-img" />
            </div>
        </section>
    )
}
