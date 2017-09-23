import React, {Component} from 'react';
import './css/scrollbar.css';

export class ScrollBar extends Component {
    render() {

        const pictures = ['http://www.petmd.com/sites/default/files/scared-kitten-shutterstock_191443322.jpg', 
                            'https://www.bluecross.org.uk/sites/default/files/assets/images/cat%20tick.jpg', 
                                'http://www.catster.com/wp-content/uploads/2016/05/cats-politics-TN.jpg']
        
        const listPictures = pictures.map((image) => <img src={image} />);

        return (
            <div id="scrollBar">
                <div id='imagewrapper'> 
                    {listPictures}
                </div>
            </div>
        );
    }
}