import React from 'react'
import MyCard from '../../components/card'
import Navbar from '../../components/navbar'
import Button from '../../components/button'

function Scholars() {
  return (
    <>
    <Navbar></Navbar>
      <h5>Meet Our Top Scholars!</h5>
      <MyCard></MyCard>
      
      <h4>Need an axie? We've got you covered</h4>
      <p>
        Our scholars enjoy access to exclusive Axie rental vouchers! Unlock your
        potential by renting the best Axies in the game and climb the
        leaderboards with ease!
      </p>
      <p>Browse our axies here!</p>
      <Button></Button>
    </>
  )
}

export default Scholars