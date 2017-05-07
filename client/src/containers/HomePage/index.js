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
						<div className="homepage-slogan">Wherever life may take you, travel there safely</div>
					</div>
					<div className="homepage-info">
						<div className="info-detail">
							<div className="info-detail-title">About Us</div>
								<p>To be, or not to be--that is the question:
								Whether 'tis nobler in the mind to suffer
								The slings and arrows of outrageous fortune
								Or to take arms against a sea of troubles
								And by opposing end them. To die, to sleep--
								No more--and by a sleep to say we end
								The heartache, and the thousand natural shocks
								That flesh is heir to. 'Tis a consummation
								Devoutly to be wished. To die, to sleep--
								To sleep--perchance to dream: ay, there's the rub,
								For in that sleep of death what dreams may come
								When we have shuffled off this mortal coil,
								Must give us pause. There's the respect
								That makes calamity of so long life.
								For who would bear the whips and scorns of time,
								Th' oppressor's wrong, the proud man's contumely
								The pangs of despised love, the law's delay,
								The insolence of office, and the spurns
								That patient merit of th' unworthy takes,
								When he himself might his quietus make
								With a bare bodkin? Who would fardels bear,
								To grunt and sweat under a weary life,
								But that the dread of something after death,
								The undiscovered country, from whose bourn
								No traveller returns, puzzles the will,
								And makes us rather bear those ills we have
								Than fly to others that we know not of?
								Thus conscience does make cowards of us all,
								And thus the native hue of resolution
								Is sicklied o'er with the pale cast of thought,
								And enterprise of great pitch and moment
								With this regard their currents turn awry
								And lose the name of action. -- Soft you now,
								The fair Ophelia! -- Nymph, in thy orisons
								Be all my sins remembered.
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
							<a href="http://www.devleague.com/"><img src={Devleague} className="devleagueImg" alt="devleague" width="75" height="70"/></a>
							<a href="https://github.com/"><img src={Github} className="GithubImg" alt="github" width="75" height="75"/></a>
							<a href="https://developers.google.com/maps/documentation/javascript/"><img src={GoogleMaps} className="googleMapsImg" alt="google" width="75" height="75"/></a>
							<a href="https://d3js.org/"><img src={d3Img} className="d3Img" alt="d3Img" width="75" height="75"/></a>
							<a href="http://gulpjs.com/"><img src={GulpImg} className="GulpImg" alt="GulpImg" width="75" height="75"/></a>
							<a href="https://www.postgresql.org/"><img src={PostgresImg} className="PostgresImg" alt="PostgresImg" width="75" height="75"/></a>
							<a href="http://sass-lang.com/guide"><img src={SassImg} className="SassImg" alt="SassImg" width="75" height="50"/></a>
							<a href="https://facebook.github.io/react/"><img src={ReactImg} className="ReactImg" alt="reactImg" width="90" height="75"/></a>


						</div>
					</div>
						
				</div>

			</div>


		);

	}
}
export default HomePage;