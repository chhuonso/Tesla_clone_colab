import SolarRoofNav from '../../components/SolarRoofComponent/SolarRoofNav'
import LandingPage from '../../components/SolarRoofComponent/Landing'
import SecondPage from '../../components/SolarRoofComponent/SecondPage'
import ThirdPage from '../../components/SolarRoofComponent/ThirdPage'
import FourthPage from '../../components/SolarRoofComponent/FourthPage'
import Efficiency from '../../components/SolarRoofComponent/Efficiency'
const SolarRoof = () => {
  return (
    <>
      <SolarRoofNav/>
      <LandingPage />
      <SecondPage />
      <ThirdPage />
      <FourthPage />
      <Efficiency />
    </>
  )
}

export default SolarRoof