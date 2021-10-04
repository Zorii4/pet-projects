import React from "react"
import NavBar from "./components/navBar"
import { Switch, Route, Redirect } from "react-router-dom"
import GoodsList from "./components/goodsList"
import Auth from "./pages/auth"
import Basket from "./pages/basket"
import GoodPage from "./pages/goodPage"
import Male from "./pages/male"
import Female from "./pages/female"

function App() {
    return (
        <>
            <NavBar />
            <Switch>
                <Route path="/" exact component={GoodsList} />
                <Route path="/auth" exact component={Auth} />
                <Route path="/basket" exact component={Basket} />
                <Route path="/goodPage/:goodId?" component={GoodPage} />
                <Route path="/male" render={(props) => <GoodsList male={true} {...props} />} />
                <Route path="/female" render={(props) => <GoodsList female={true} {...props} />} />
                <Redirect to="/" />
            </Switch>
        </>
    )
}

export default App
