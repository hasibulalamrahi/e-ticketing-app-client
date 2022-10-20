import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/index'
import SignUp from './Pages/signUp'
import SignIn from './Pages/signIn'
import Header from './Components/NavBars/Header/header'
import Footer from './Components/NavBars/Footer/footer'
import './Styles/Global/App.css'
function App() {
  return (
    <div className="bg-image">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
