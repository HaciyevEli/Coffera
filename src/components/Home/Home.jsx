import './Home.css'
function Home() {
  return (
    <section className='home section' id='home'>
      <div className="home__container container">
        <div className="home__content">
          <span className="home__subtitle">Welcome To Coffere</span>
          <h1 className="home__title">Discover Amazing Coffe House & Get Energy</h1>
          <p className="home__description">
            There are many variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words.
          </p>
          <div className="home__btns">
            <a href="#menu" className="btn">Check Menu</a>
            <a href="#reservation" className="btn home__btn">Book table</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
