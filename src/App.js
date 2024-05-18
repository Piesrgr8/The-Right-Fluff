import './assets/css/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './comp/important/Header'
import Footer from './comp/important/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

import img1 from './assets/img/img1.png'
import img2 from './assets/img/img2.png'
import img3 from './assets/img/img3.png'
import img4 from './assets/img/img4.png'
import img5 from './assets/img/img5.png'
import img6 from './assets/img/img6.png'
import img7 from './assets/img/IMG-4220.JPG'
import img8 from './assets/img/IMG-4222.JPG'

function App() {
    const imgs = [img1, img2, img3, img4, img5, img6, img7, img8]
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home images={imgs} />} />
                    <Route path="/about" element={<About images={imgs} />} />
                    {/* <Route path="/shop" element={<Shop />} /> */}
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App
