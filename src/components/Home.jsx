import "../styles/Home.css";
import Data from "./Data";
import Social from "./Social";
import ScrollD from "./ScrollD";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home--content grid">
          <Social />
          <div className="home__img"></div>
          <Data />
        </div>
        <ScrollD />
      </div>
    </section>
  );
};

export default Home;
