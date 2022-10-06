import React from 'react'
import { Link } from 'react-router-dom'
import Card from './shared/Card'

const AboutPage = () => {
  return (
    <Card>
        <h1>AboutPage</h1>
        <Link to='/'>Back to home</Link>
    </Card>
  )
}

export default AboutPage