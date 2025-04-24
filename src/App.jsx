// Hooks
import { useEffect, useState } from 'react'

// Images
import dice from './images/icon-dice.svg'

// Utils
import './App.css'

const API_URL = 'https://api.adviceslip.com/advice'

function App() {
  const [data, setData] = useState(null)

  const fetch_api = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(json_data => {
        setData(json_data.slip)
      })
  }

  useEffect(() => {
    fetch_api(API_URL)
  }, [])

  return (
    <>
      <main>
        {data ?
          <>
            <p className='advice_id'>ADVICE #{data.id}</p>
            <p className="quote">"{data.advice}"</p>

            <div className="separator"></div>

            <div className="btn_container">
              <button onClick={() => fetch_api(API_URL)}>
                <img src={dice} alt="Dice" width='20px' />
              </button>
            </div>
          </>
          :
          <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        }
      </main>
    </>
  )
}

export default App
