import "./App.css";
import { Route, Routes } from "react-router-dom";
import { router } from "./config/config";
import NavBar from "./components/NavBar/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import News from "./components/News/News";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {router.map((path) => (
          <Route
            exact
            path={path.path}
            element={
              <News
                key={path.key}
                newscategory={path.category}
                country={path.country}
              />
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;