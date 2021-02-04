import React, { useState, useEffect } from "react";
import "./styles/app.scss";

/* Composants */
import Header from "./components/Header";
import Footer from "./components/Footer";

/* Pages & routage */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/Others/ProtectedRoute";
import Home from "./components/Pages/Home";
import Registration from "./components/Pages/Registration";
import Login from "./components/Pages/Login";
import Account from "./components/Pages/Account";
import PageNotFound from "./components/Others/PageNotFound";

/* Contexts*/
import { DataProvider } from "./Contexts/DataContext"; // Données
import { ThemeProvider } from "./Contexts/ThemeContext"; // Thème
import { AuthProvider } from "./Contexts/AuthContext"; // Authentification

/* Traduction et chargement */
import i18n from "./i18n/i18n";
import Loading from "./components/Others/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  // Executes when the component has finished rendering
  /*   useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loading />;
  else */
  return (
    <>
      {/* Passes data to all wrapped components. */}
      <ThemeProvider>
        <DataProvider>
          {/* Enables routing with all wrapped components. */}
          <Router>
            <Header />
            <main>
              {/* Enables the rendering of one component only. */}
              <Switch>
                <Route path={["/", "/home"]} exact component={Home} />
                <Route path={"/registration"} exact component={Registration} />
                <Route path={"/login"} exact component={Login} />
                {/* <Route path={"/account"} exact component={Account}/> */}
                <ProtectedRoute
                  path={"/account"}
                  component={Account}
                  isAuth={true}
                />
                <Route component={PageNotFound} />
              </Switch>
            </main>
            <Footer />
          </Router>
        </DataProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
