import React from "react";
import ReactDOM from "react-dom";
import {oyun1} from "./oyun";
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            oyun1: oyun1(),
            oyun2: oyun2(),
            oyun3: oyun3()
        }
    }
    render() {
        return(<div>

        </div>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById("root"))