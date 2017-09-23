import React, {Component} from 'react';
import './css/textwindow.css';

export class TextWindow extends Component {
    render () { 
        
        class Grads{
            constructor(name, desc, team, hobby, portrait){
                this.name = name;
                this.desc = desc;
                this.team = team;
                this.hobby = hobby;
                this.portrait = portrait;
            }
        }

        const people = [
            new Grads('Amrit', 'desc', 'team', 'hobby', 'portrait'),
            new Grads('Holly', 'desc', 'blue', 'book', 'portrait'),
            new Grads('Gaurav', 'meat', 'red', 'dancing', 'portrait')
    ]

        const listPeople = people.map((person) =>
            <div>
                <h1>{person.name}</h1>
                <h2>{person.team}</h2>  
                <h3>{person.desc}</h3>
                <h3>{person.hobby}</h3>
                <img src={person.portrait} />  
            </div>
    );

        return(
            <div id='textWindow'>
                <h1>Welcome to the Gradbook</h1>
                {listPeople};
            </div>
        );
    }
} 