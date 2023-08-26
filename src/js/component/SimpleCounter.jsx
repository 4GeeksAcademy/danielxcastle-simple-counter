import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import propTypes from "prop-types";


//create your first component
const SimpleCounter = (props) => {
	return (
		<div className="counter">
			<div className="calendar"></div>
			<div className="clock"><i className="fa-regular fa-clock"></i></div>
			<div className="fourth-seconds">{props.digitFour % 10}</div>
			<div className="third-seconds">{props.digitThree % 10}</div>
			<div className="second-seconds">{props.digitTwo % 10}</div>
			<div className="first-seconds">{props.digitOne % 10}</div>

			</div>
	);
}
SimpleCounter.propTypes = {
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number

};



	


export default SimpleCounter;
