import React, {Component} from 'react';
import CategoryContent from './CategoryContent';
import './CategoryMenu.css';

class CategoryMenu extends Component {
    
    //Source: https://www.youtube.com/watch?v=Mo2_UPkZjJU
    
    constructor(props){
        super(props);

        this.state = { showMenu : false };

        this.toggleDiv = this.toggleDiv.bind(this);
    }

    //Show or hide menu content
    toggleDiv = () => {
        const { showMenu} = this.state;
        this.setState( { showMenu : !showMenu})
    }

    render() {
        return( 
            <div>
                <button className="menuButton" onClick={this.toggleDiv}><h1>Kategorier</h1></button>

                {this.state.showMenu && 
                <CategoryContent 
                selectPictureCategory = {this.props.selectPictureCategory}
                selectTextCategory = {this.props.selectTextCategory}
                selectSoundCategory = {this.props.selectSoundCategory} 
                pic={this.props.pic} 
                soun = {this.props.soun}
                txt={this.props.txt}>
                </CategoryContent>}
            </div>
        )
    }
}

export default CategoryMenu;