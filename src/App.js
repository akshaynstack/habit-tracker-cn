import Header from './components/Header'
import Overview from './components/Overview'
import HabitDisplay from './components/HabitDisplay'

import { Row, Col, Container } from 'react-bootstrap'
import { useEffect } from 'react'

import Typed from 'typed.js'

function App() {
  // code for typed.js library
  useEffect(() => {
    const typed = new Typed('.tag', {
      strings: [
        "A habit cannot be tossed out the window; it must be coaxed down the stairs a step at a time. -Mark Twain",
        "And once you understand that habits can change, you have the freedom and the responsibility to remake them. -Charles Duhigg",
        'Discipline is choosing between what you want now and what you want most. -Abraham Lincoln',
        'Drop by drop is the water pot filled. -Buddha',
        'Feeling sorry for yourself, and your present condition is not only a waste of energy but the worst habit you could possibly have. -Dale Carnegie',
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 2000,
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 5000,
      loop: true,
    })

    // Destroying
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <Header />
      <Container>
        <Row className='mt-5'>
          <Col md={3}>
            {/* Overview component */}
            <Overview />
          </Col>
          <Col md={9}>
            {/*  HabitDetails Component*/}
            <HabitDisplay />
          </Col>
        </Row>
        <h4 className='text-light d-flex  mt-5  justify-content-center'>
          <span className='tag'></span>
        </h4>
      </Container>
    </>
  )
}

export default App
