import React from "react";

export const Filter = (props) => {
    const filter = () => {
        var x = document.getElementById("filterList").value;
        console.log(x);
    };
    const handleChange = () => {
        var salt = document.getElementById("filterList").value;
        console.log(this);
        console.log(salt);
        props.changeSalt(salt);
    };

    return(
        <select onChange={handleChange} name="salt" id="filterList">
            <option value=""></option>
            <option value="white truffle">White Truffle Salt</option>
            <option value="garlic">Garlic Salt</option>
        </select>
    );
};
