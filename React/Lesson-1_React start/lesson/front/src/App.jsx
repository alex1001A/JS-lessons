import Header from "./header/header";

import logo from './icons/logo512.png'

export default function App() {
    return (
        <div className="wrapper">
           <Header/> 

           <img src="./img/logo192.png" alt="" />
           <img src={logo} alt="" />
        </div>
    )
}