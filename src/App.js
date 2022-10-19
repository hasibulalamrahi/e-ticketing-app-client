import { Routes, Route } from "react-router-dom";
import HomePage from './Pages/index'
import SignUp from './Pages/signUp'
import SignIn from './Pages/signIn'
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
