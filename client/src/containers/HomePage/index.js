import React, { Component } from 'react';
import Devleague from '../../../assets/devleague.jpg';
import Github from '../../../assets/github.png';
import GoogleMaps from '../../../assets/Google_Maps_Icon.png';
import d3Img from '../../../assets/d3.png';
import ReactImg from '../../../assets/React-icon.png';
import GulpImg from '../../../assets/gulp-vector-logo.png';
import PostgresImg from '../../../assets/postgres.png';
import SassImg from '../../../assets/sass.png';
import Contact from '../../../assets/communication.png';





class HomePage extends Component{
	render(){
		return(
			<div>

				<div className="homepage">

					<div className="homepage-first">
						<div className="homepage-title">Akahele</div>
						<div className="homepage-slogan">Wherever life may take you, travel safely</div>
					</div>
					<div className="homepage-info">
						<div className="info-detail">
							<div className="info-detail-title">About Us</div>
								<p>Akahele (“ah-ka-heh-leh”),  the Hawaiian word for “safe travels”, is an application for travelers. Like our name suggests, the aim of our application is to help you make more careful and informed decisions when traveling. We know that traveling to a new area can be scary, but with Akahele you will now have the ability to research cities’ crimes and how these crime rates have changed throughout the years. Akahele also allows users to see to their current location and any crimes that have happened in that area, along with the date that the crime occurred and what type of crime it was. By being able to visually see crimes and their times, you can see which areas have higher risk of a crime occurring and at what times these crimes tend to occur. With all of this information, users can make a more informed decision on when and where to visit a specific area. Akahele can also be used when trying to move to another state or city. With our city to city and state to state comparison charts, you can look at different cities/states and compare which one is a safer place to move to. We believe that more informed decisions are better decisions, and if we can help you make a more informed and safer decision in when and how you travel, then we have accomplished our goal in creating Akahele. 
							</p>
						</div>
					</div>

					<div className="homepage-about">
						<div className="about-detail">
							<div className="about-title"><h1>Contact Us</h1>
								<img src={Contact} className="contactImg" alt="contact" width="75" height="75"/>
							</div>



		
						</div>
						<div className="homepage-footer">
							<a href="https://facebook.github.io/react/"><img src={ReactImg} className="ReactImg" alt="reactImg" width="90" height="75"/></a>
							<a href="https://github.com/"><img src={Github} className="GithubImg" alt="github" width="75" height="75"/></a>
							<a href="https://developers.google.com/maps/documentation/javascript/"><img src={GoogleMaps} className="googleMapsImg" alt="google" width="75" height="75"/></a>
							<a href="https://d3js.org/"><img src={d3Img} className="d3Img" alt="d3Img" width="75" height="75"/></a>
							<a href="http://gulpjs.com/"><img src={GulpImg} className="GulpImg" alt="GulpImg" width="75" height="75"/></a>
							<a href="https://www.postgresql.org/"><img src={PostgresImg} className="PostgresImg" alt="PostgresImg" width="75" height="75"/></a>
							<a href="http://sass-lang.com/guide"><img src={SassImg} className="SassImg" alt="SassImg" width="75" height="50"/></a>
							<a href="http://www.devleague.com/"><img src={Devleague} className="devleagueImg" alt="devleague" width="80" height="75"/></a>


						</div>
					</div>
						
				</div>

			</div>


		);

	}
}
export default HomePage;