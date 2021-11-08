import React, {Component} from 'react';
import {oyun1} from "./oyun";
import Container from "./container";

export class Game extends Component {
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
                <Container/>
            </div>
        );
    }
}
