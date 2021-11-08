import React from "react";
import ReactDOM from "react-dom";
import {oyun1} from "./oyun";
import Container from "./container";
class App extends React.Component{
    render() {
        return(<div>
            <Game/>
            <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. İlk tercihte Kedi kartını bulamaz isen
                2. seçim hakkı tanınacaktır.</p>
            <img className="kart" src={kart[0]} onClick={()=>{this.kediSec(0)}}/>
            <img className="kart" src={kart[1]} onClick={()=>{this.kediSec(1)}}/>
            <img className="kart" src={kart[2]} onClick={()=>{this.kediSec(2)}}/>
            <div className="mesaj">
                <p>{durum?durum:"Kedi kartını bulmak için kartın üzerine tıklamalısın."}</p>
                {durum && <p>
                    Yeni bir oyun oynamak istersen <span onClick={this.yeniOyun} className='link'>buraya</span> tıklayabilirsin.
                </p>}
            </div>
        </div>)
    }
}
ReactDOM.render(<App/>, document.getElementById("root"))