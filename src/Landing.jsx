// import React from "react";
import ShippingCalculator from "./Card";
import "./Landing.css";
import "./App.css";
import "./index.css";
import { Header } from "./components/header/Header";
import courierBoteWhiteText from './assets/courierbote logo white transparent.png';
import logistics from './assets/logistics.png';

import { Working } from './components/howDoesCourierboteWork/HowDoesCourierboteWork';
import { People } from "./components/dearPeople/DearPeople";
// import { BestRecipes } from "./components/ourBestRecipes/BestRecipes";
import { WorkFor } from './components/whoWeWorkFor/WhoWeWorkFor';
import { Results } from './components/results/results';
import { Footer } from './components/footer/Footer';
import { Review } from './components/review/Review';
import Privacy from '../src/pages/privacy';
import TermsAndConditions from './pages/termsAndCondition';
import React, { useRef } from 'react';

function LandingPage({ Active }) {
	const scrollToWorkForElementRef = useRef(null);
	const scrollToHowWeWorkElementRef = useRef(null);


	const scrollToElement = (target) => {
		console.log("target", target)

		switch (target) {
			case 'scrollToWorkForElementRef':
				if (scrollToWorkForElementRef.current) {
					scrollToWorkForElementRef.current.scrollIntoView({ behavior: 'smooth' });
				}
				break;
			case 'scrollToHowWeWorkElementRef':
				if (scrollToHowWeWorkElementRef.current) {
					scrollToHowWeWorkElementRef.current.scrollIntoView({ behavior: 'smooth' });
				}
				break;
		}


	};
	return (
		<div className='landing-page'  >
			<Header scrollToElement={scrollToElement} />
			<main>
				{Active === 'normalLanding' && <div>
					<div className="landing-page-start">

						<span className="landing-page-Text" >
							<h2 >
								Serving
							</h2>
							<h2 >
								with  Care
							</h2>
							<h2 >
								Always
							</h2>
							<p style={{ color: 'grey' }}>Express Transit</p>
						</span>

						< img src={courierBoteWhiteText} alt="logo" className="courierbotelogo" />
						<img src={logistics} alt="new" className="logisticslogo" />
						<h3 className="courierbote" >CourierBote</h3>
						<ShippingCalculator />
					</div>
					<Results />
					<People />
					<WorkFor scrollToElementRef={scrollToWorkForElementRef} />
					{/* <BestRecipes/> */}
					<Working scrollToElementRef={scrollToHowWeWorkElementRef} />
					<Review /></div>}

				{Active === "privacyPolicy" && <div>
					<Privacy />
				</div>}
				{Active === "termsAndCondition" && <div>
					<TermsAndConditions />
				</div>}
				<Footer />

			</main>
		</div>
	);
}

export default LandingPage;
