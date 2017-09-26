import React, {Component} from 'react';
import Animate from 'grommet/components/Animate';

export class TextWindow extends Component {
    render () { 

        
        // class Grads{
        //     constructor(name, desc, team, hobby, portrait){
        //         this.name = name;
        //         this.desc = desc;
        //         this.team = team;
        //         this.hobby = hobby;
        //         this.portrait = portrait;
        //     }
        // }

        
        // var people = [
        //     new Grads('Amrit', 'Five words to describe me', 'team', 'hobby', 'http://www.petmd.com/sites/default/files/scared-kitten-shutterstock_191443322.jpg'),
        //     new Grads('Holly', 'Five words to describe me', 'blue', 'book', 'https://www.bluecross.org.uk/sites/default/files/assets/images/cat%20tick.jpg'),
        //     new Grads('Gaurav', 'Five words to describe me', 'red', 'dancing', 'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg')
        // ]
        

        /*
        var listPeople = people.map((person, i) =>

            <div id={i} className = "people">
                <h1>{person.name}</h1>
                <h2>{person.team}</h2>  
                <h3>{person.desc}</h3>
                <h3>{person.hobby}</h3> 
            </div>
        
        );
        */

    let renderPerson = (personName) => {
        let person = this.props.people.find(x => x.name === this.props.selectedPerson);
        return <div className = "people">
                    <h1>{person.name}</h1>
                    <h2>{person.team}</h2>  
                    <h3>{person.desc}</h3>
                    <h3>{person.hobby}</h3> 
                </div>;
    }
        return(
            <div id='textWindow'>
                <Animate enter={{animation: 'slide-left', duration: '1000', delay: '2s'}}>
                    <h1>Welcome to the Gradbook</h1>
                </Animate>
                {this.props.selectedPerson && renderPerson(this.props.selectedPerson)}
            </div>
        );
    }
} 