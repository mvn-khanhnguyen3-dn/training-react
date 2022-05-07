import React,{ Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Header, Footer ,Blog } from "./components/layouts";
import Account from './pages/Account'
import Login from "./pages/Auth/Login";
import PrivateRouter from './core/guards/PrivateRouter'
const Feature  = React.lazy(()=> import("./pages/Features") )


function App() {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Switch>
        <PrivateRouter path="/account">
          <Account />
        </PrivateRouter>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Feature/>
        </Route>
      </Switch>
      <Blog/>
      <Footer />
      </Suspense>
    </>
  );
}

export default App;
