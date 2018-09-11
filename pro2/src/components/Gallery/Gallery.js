import React, { Component } from 'react';
import axios from 'axios';
import Text from '../Text/Text'
import TabContainer from '../Tab/TabContainer';
import './Gallery.css'

class Gallery extends Component {
    constructor() {
        super()
        
        this.state = {
            currentPage: 0,  
        }
        this.getRegisterFile()
    }

    getRegisterFile()  {
        axios.get('/json/RegisterFile.json')
        .then(response => {
            //console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      })
    }

    render() {
        //console.log(this.state)
        return (
            <div className="content">
                <div className="galleryCategories">
                    <p> Her kommer dropdown for kategorier som komponent</p>
                </div>

                <div className="galleryTab">
                    <TabContainer></TabContainer>
                </div>

                <div className="gridContainer">   
                    <div className="galleryPic">
                        <p> Her kommer bildet som komponent</p>
                    </div>
                    <div className="galleryText">
                        <Text name="cliche0"></Text>
                    </div>
                    <div className="gallerySound">
                        <p> Her kommer lyden som komponent</p>
                    </div>
                </div>

            </div>
        );
    }
}

export default Gallery;