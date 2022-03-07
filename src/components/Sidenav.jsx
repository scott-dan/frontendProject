import React from 'react';

import OffcanvasMenu from 'react-offcanvas-menu-component';

function Sidenav({location}) {
	return(
		<OffcanvasMenu
			location={location}
			config={{
				push: true
			}}
			menu={[
				{text: 'Home', link: '/'},
				{text: 'Card Search', link: '/search'},
				{text: 'Contact Us', link: '/contact'},
                {text: 'Card Randomizer', link: '/random'},
                {text: 'Cards By Dan', link: '/cardsByDan'},
                {text: 'Statistics', link: '/statistics'},
                {text: 'About', link: '/about'},
                {text: 'Language Map', link: '/languageMap'},
                {text: 'Mana', link: '/mana'},
			]}/* 
			header={
				<img src={logo} className="App-logo menu-logo" alt="logo" width="250" height="100" />
			} */
			/* footer={<Footer />} */
		/>
	)
}

/* const Footer = () => {
	return(
		<div className="social-wrap">
			<h4>Socia Networks Footer</h4>
			<ul className="social">
				<li>
					<img src={facebook} alt="facebook" />
				</li>
				<li>
					<img src={twitter} alt="twitter" />
				</li>
				<li>
					<img src={linkedin} alt="linkedin" />
				</li>
				<li>
					<img src={stackoverflow} alt="stackoverflow" />
				</li>
			</ul>
		</div>
	)
} */

export default Sidenav;