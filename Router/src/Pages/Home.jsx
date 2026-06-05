import Badge from '../Component/Badge';

const Home = () => {
  return (
    <div className="container">
      <div className="bdr hero-section">
        <Badge />
        <h1>Welcome to SoCool</h1>
        <p className="subtitle">Discover the best tools to enhance your workflow.</p>
        <button className="cta-button">Get Started</button>
      </div>
    </div>
  );
};

export default Home;