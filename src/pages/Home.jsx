import background from '../assets/background.png'

const Home = () => {
  return (
    <div className="home-container"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }} >
      <div className="home-content">
        <h1>tailored with love, just for you.</h1>
        <p>
          Our goal is to provide excellent workmanship with personal customer service. There is no job too large or small.
          <br />
          <br />
          Visit our branch and our friendly, skilled staff can assess your requirements, take your measurements and recommend alteration solutions.
        </p>
      </div>
    </div>
  )
}

export default Home