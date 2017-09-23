import React, {Component} from 'react';
import './css/header.css';

export class Header extends Component{
    render() {
        return(
            <header>
                <div id="wrapper">
                    <div id="logo">
                        <img src="https://12087-presscdn-0-70-pagely.netdna-ssl.com/wp-content/uploads/2017/01/redington-logo-new.png" />
                    </div>
                </div>
            </header>
        );
    }
};