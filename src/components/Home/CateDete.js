import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { ACCESS_TOKEN_NAME, API_BASE_URL } from '../../constants/apiContants';
import axios from 'axios';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class CateDete extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class="row">
				<Carousel>
                <div>
                    <img src="https://anphat.com.vn/media/banner/09_Octc79319087b28ebd05dc37b122e3036a3.jpg" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="https://anphat.com.vn/media/banner/17_Augd9c80757d5585d6868c00eae4f6f3604.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
            </Carousel>
			</div>
		)
	}
}

export default withRouter(CateDete);