import { Route, Routes } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/auth/auth.component";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<h1>teste</h1>}/>
        <Route path="/sing-in" element={<SignIn />}/>
      </Route>   
    </Routes>
  );
};

export default App;
