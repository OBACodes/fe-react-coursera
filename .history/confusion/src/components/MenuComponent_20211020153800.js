import React, { Component } from "react";
import { Media } from "reactstrap";

class Menu extends Component {
	constructor(props) {
		super(props);

		this.state = {
			dishes: [
				{
					id: 0,
					name: "Uthappizza",
					image: "assets/images/uthappizza.png",
					category: "mains",
					label: "Hot",
					price: "4.99",
					description:
						"A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.",
				},
				{
					id: 1,
					name: "Zucchipakoda",
					image: "assets/images/zucchipakoda.png",
					category: "appetizer",
					label: "",
					price: "1.99",
					description:
						"Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce",
				},
				{
					id: 2,
					name: "Vadonut",
					image: "assets/images/vadonut.png",
					category: "appetizer",
					label: "New",
					price: "1.99",
					description:
						"A quintessential ConFusion experience, is it a vada or is it a donut?",
				},
			],
		};
	}
	render() {
		const menu = this.state.menu;
		return (
			<div className="container">
				<div className="row">
					<Media list>{menu}</Media>
				</div>
			</div>
		);
	}
}

export default Menu;
