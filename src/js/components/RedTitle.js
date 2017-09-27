import React, {Component} from 'react';
import Animate from 'grommet/components/Animate';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns'

export class RedTitle extends Component{
    render() {
        return(
            <header>
                <Box direction='row' full='horizontal' align='center' justify='center' >
                    <Box id="logo" align='center'>
                        <Animate enter={{'animation':'fade', 'duration':2000, 'delay':750}}>
                            <img src="https://image.ibb.co/iM3sm5/logo2.png" style={{height:'50px'}}/>
                        </Animate>
                    </Box>
                    <Box id="logo2" align='center'>
                        <Animate enter={{'animation':'slide-right', 'duration': 1000, 'delay':0}}>
                            <img src="https://preview.ibb.co/novyuQ/webheader.png" style={{height:'85px'}}/>
                        </Animate>
                    </Box>
                </Box>
            </header>
        );
    }
};