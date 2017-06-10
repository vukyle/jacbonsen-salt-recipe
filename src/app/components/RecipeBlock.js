import React from 'react';
import PropTypes from 'prop-types';

export class  RecipeBlock extends React.Component {

    render() {
        return(
            <div className="recipe__container">
                {this.props.recipe.map((recipe, i) =>
                    <div className="recipe__item" key={i}>
                        <h2>{recipe.name}</h2>
                        <img src="" alt=""/>
                        <p>{recipe.description}</p>
                    </div>
                )}
            </div>
        );
    }
}

// RecipeBlock.propTypes = {
//     recipe: PropTypes.array.isRequired
// };
