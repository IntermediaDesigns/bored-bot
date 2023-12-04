'use client'
import styles from './page.module.css'
import { useState, useEffect } from 'react'

export default function Home () {

  /**
  Fetch a random activity from the Bored API
  url: https://apis.scrimba.com/bored/api/activity

  Display the text of the activity in the browser
  */

  /**
  When the button is clicked, call out to the Bored API
  (URL: https://apis.scrimba.com/bored/api/activity)
  and replace the h4 with the activity from the API

  */

  // create state variable activity to store the fetched activity for click handler
  const [activity, setActivity] = useState('')

  // fetch the api and setActivity to update the state with the fetched activity and to retrieve the activity from the data
  const fetchActivity = () => {
    fetch('https://apis.scrimba.com/bored/api/activity')
      .then(response => response.json())
      .then(data => {
        setActivity(data.activity)
      })
  }

  // Fetch an activity when the component mounts
  useEffect(() => {
    fetchActivity()
  }, [])

  /**
    - Start building out the BoredBot Skeleton however you'd like. 
        That will include:
        - A title for the app ("BoredBot" might be a good start 😉)
        - A placeholder element that will be populated with the random 
          idea we get from the API
        - A button to click for triggering the GET request to the Bored API. 
          (Don't worry about implementing the button quite yet)

  - Add some styling! Be creative, play with layout a bit
    (Spoiler: I'm going to use a single-column flexbox layout)
    add some color, grab a font from Google fonts - whatever
    you'd like!
  */

  return (
    <div className={styles.botContainer}>
      <h1 className={styles.title}>🤖 BoredBot 🤖</h1>

      {/* Add the activity to render */}
      <h4 className={styles.activityResponse}>{activity}</h4>

      {/* Add the onClick handler to the button and add fetchActivity to fetch a new activity each time you click the button */}
      <button className={styles.button} onClick={fetchActivity}>Push</button>
    </div>
  )
}
