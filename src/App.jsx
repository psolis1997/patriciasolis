import './App.css'
import logo from 'public/assets/logo.jpeg'

function App() {

  return (
    <>
      <div className="home">

        <img src={logo} alt=""
          style={{
            width: '900px'
          }}
        />
        <div className='text'>
          <p>
            Patricia's <span className='info'>about, works, and contact</span> will be live on
            <span className='date'>&nbsp; Monday 3 July, 2023.</span>
          </p>
        </div>
      </div>
    </>
  )
}

export default App
