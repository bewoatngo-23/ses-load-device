import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./routes/router";
import { Fragment } from "react";
import MenuHome from "./components/Menu";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import StoreProvider from "../src/store/ProviderReducer";
import "react-toastify/dist/ReactToastify.css";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";

function App() {
  return (
    <>
      <StoreProvider>
        <Router>
          <div className="App">
            <Routes>
              {publicRoutes.map((route, index) => {
                const Layout = route.Layout === null ? Fragment : MenuHome;
                const Page = route.component;
                return (
                  <Route
                    key={index}
                    path={route.path}
                    element={
                      <Layout>
                        <Page />
                      </Layout>
                    }
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
      </StoreProvider>
    </>
  );
}

export default App;
