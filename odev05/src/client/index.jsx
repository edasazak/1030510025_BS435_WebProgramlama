import React from "react";
import ReactDOM from "react-dom";
import {Game} from "./game";
import Home from "./home";
import {HashRouter} from "react-router-dom";
import {Route, Routes} from "react-router";
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
                <Routes>
                    <Route exact path = '/game' component={Game}/>
                    <Route exact path='/welcome' element={<Home/>}/>
                    <Route component = {notFound}/>
                </Routes>
                </div>
            </HashRouter>
        )
    }
}
ReactDOM.render(<App/>, document.getElementById("root"))