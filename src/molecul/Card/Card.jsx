import { Component } from "react";
import Axios from 'axios';
import Label from '../../atom/Label';
import './Card.css';

class Card extends Component{
    constructor(){
        super();
        this.state = {
            name:'React'
        }
        this.getPlanet = this.getPlanet.bind(this);
    }

    async getPlanet () {
        let data = await Axios
                .get("https://swapi.dev/api/planets")
                .then(function(response){
                    return response;
                })
                .catch(function(error){
                    console.log(error);
                })
        this.setState({planets: data.data});
    }

    componentDidMount(){
        this.getPlanet();
    }

    formatDate = (valDate) => {
        var unix = Date.parse(valDate);
        var date = new Date(unix);
        var dayName = ["Jan","Feb","March","April","May","June","July","Aug","Sep","Okt","Nov","Dec"];
        return date.getDate() +" "+dayName[date.getMonth()] + " " + date.getFullYear();
    }


    render(){
        const { planets } = this.state;
        console.log(this.state);
        return(
            <div className="container">
                <h3>Name Of Planets</h3>
             {
                 planets && 
                    planets.results.map(planet => {
                        return(
                            <div className="card">
                                <div className="card-title">
                                  
                                </div>
                                <div className="card-body">
                                    <Label type="title">{ planet.name }</Label>
                                    <p>Diameter: {planet.diameter } KM</p>
                                    <p>Population:{planet.population }/ people</p>
                                    <p>Gravity: {planet.gravity }</p>
                                    <p>Created: {this.formatDate(planet.created) }</p>
                                </div>
                            </div>
                        )
                    })
             }
            </div>
        )
    }
}
export default Card;