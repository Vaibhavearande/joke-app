// Homepage.js
import React, {useState, useEffect} from 'react'
import './index.css'

function Homepage() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    fetchJokes()
  }, [])

  const fetchJokes = () => {
    fetch(
      'https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10',
    )
      .then(response => response.json())
      .then(data => {
        if (!data.error) {
          setJokes(data.jokes)
        } else {
          console.error('Error fetching jokes:', data)
        }
      })
      .catch(error => {
        console.error('Error fetching jokes:', error)
      })
  }

  return (
    <div className="container">
      <h2 className="heading">Jokes</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Joke</th>
          </tr>
        </thead>
        <tbody>
          {jokes.map((joke, index) => (
            <tr key={index}>
              <td>{joke.category}</td>
              <td>{joke.joke}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Homepage
