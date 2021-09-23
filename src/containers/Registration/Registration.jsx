import React from 'react'
import classes from './Registration.css'

const Registration = () => {
  return (
    <section className={classes.registration}>
      <div className={classes.formGroup}>
        <input
          type="text"
          placeholder="Login"
          className={classes.formControl}
        />
        <input
          type="text"
          placeholder="Password"
          className={classes.formControl}
        />
      </div>
    </section>
  )
}

export default Registration
