import './App.css';
import Header from './Header/header'
import Footer from './Footer/footer'
import Aside from './Aside/Aside'
import Main from './Main/Main'

let hero = {
  title: 'Alex',
  img: './logo192.png',
  desc: 'Lorem ipsum dolor sit amet.',
}

export default function App() {
  return (
    <div className="App">
      <Header/>
      
    <div className="main-wrapper">
      <h1>{hero.title}</h1>
      <img src={hero.img} alt="" />
      <p>{hero.desc}</p>
      <Aside/>
      <Main/>
    </div>

      <Footer/>
    </div>
  )
}