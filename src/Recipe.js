import React, {Component} from 'react';

class Recipe extends Component {
    render() {
        const title = this.props.title;
        const ingredients = this.props.ingredients.map((ing, idx) => (
            <li key={idx}>{ing}</li>
        ));
        return(
            <div>
                <div>Recipe {title}</div>
                <ul>
                    {ingredients}
                </ul>
            </div>
        );
    }

}

export default Recipe;