import React from "react";
import { render } from "react-dom";

import { Filter } from "./components/Filter";
import { RecipeBlock } from "./components/RecipeBlock";

const recipe = [
    {
        name: "Winter  Sqaush",
        description: "This Heirloom Winter Squash Soup is silky, rich, and vibrant in color. Our Jacobsen Garlic Salt adds an extra layer of complexity with bursts of salinity.",
        salt: "garlic"
    },
    {
        name: "Grilled Beef with Jacobsen White Truffle Salt",
        description: "Infused with Italian white truffle and white truffle tincture, our decadent White Truffle Salt adds the unique and powerful flavor of truffle to all manner of dishes - including this one. Seared or grilled beef combined with White Truffle - a match made in heaven. You can use flank steak, tenderloin, rib eye, or similar cuts of premium bee",
        salt: "white truffle"
    },
    {
        name: "Chicken Pie",
        description: "Infused with Italian white truffle and white truffle tincture, our decadent White Truffle Salt adds the unique and powerful flavor of truffle to all manner of dishes - including this one. Seared or grilled beef combined with White Truffle - a match made in heaven. You can use flank steak, tenderloin, rib eye, or similar cuts of premium bee",
        salt: "white truffle"
    }
];

class App extends React.Component {

    constructor() {
        super();
        this.state = {
            saltType: function(recipe) {
                return recipe.salt ;
            },
            name: "Vu"
        };
    }

    changeSalt(saltType) {
        this.setState({
            saltType: function(recipe) {
                if (saltType === "") {
                    return recipe.salt;
                } else {
                    return recipe.salt === saltType;
                }
            }
        });
    }

    render() {

        return (
            <div>
                <Filter
                    greet={this.onGreet}
                    changeSalt={this.changeSalt.bind(this)}
                    //changeSalt={() => this.changeSalt()}
                />
                <RecipeBlock
                    recipe={recipe.filter(this.state.saltType)}
                />
            </div>
        );
    }
}

render(<App/>, window.document.getElementById('app'));
