import React from "react"
import Header from '../components/Header/Header';
import Memberships from '../components/Membership/Membership';
import Footer from '../components/Footer/Footer';
// Membership Data
import membership from '../Data/Membership.json';

const Membership = () => (
  <div>
    <Header />
    <Memberships memberObj={membership}/>
    <Footer />
  </div>
)

export default Membership;