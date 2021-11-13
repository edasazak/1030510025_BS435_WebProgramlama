import React from "react";
import ReactDOM from "react-dom";
import {oyun1} from "./oyun";
import {HashRouter, Switch} from "react-router-dom";
import {Route} from "react-router";
import {Game} from "./Game";
import Home from "./home";

const notFound = () => {
    return(
        <div>
            <h2>
                Sayfa bulunamadı: 404
            </h2>
        </div>
    )
}
class App extends React.Component{
    render() {
        return(
            <HashRouter>
                <div>
                <Switch>
                    <Route exact path = '/Game' component = {Game}/>
                    <Route exact path= '/' component={Home}/>
                    <Route component = {notFound}/>
                </Switch>
                </div>
            </HashRouter>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("root"))