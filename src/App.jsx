import Modal from "./components/Modal"
import './components/index.css'
import Content from '../feature-content'
import FeatureCard from "./components/FeatureCard"
import Feature from "./components/Feature"
import { nanoid } from "nanoid"
import Footer from "./components/Footer"

function App() {

  const {cards, pointers} = Content

  const cardComponents = cards.map((card) => {
    return <FeatureCard
            key={nanoid()}
            heading={card.heading}
            paragraph={card.paragraph}
            image={card.image}
            />
  })

  const pointerComponents = pointers.map((point) => {
    return <Feature key={nanoid()} icon={point.icon} point={point.point} heading={point.heading}/>
  })

  return (
    <div>
      <Modal/>
      {cardComponents}
      {pointerComponents}
      <Footer/>
    </div>
  )
}

export default App
