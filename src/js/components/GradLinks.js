import React, {Component} from 'react';
import './css/gradlinks.css';

export class GradLinks extends Component{
    render(){

        const pictures = this.props.people.map(x => x.portrait);

        const listLinks = pictures.map((image, index) => <Avatar src={image} className='avatar'/>);

        return(
            <div>
                {listLinks}
            </div>
        );
    }
};