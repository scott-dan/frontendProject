import React from 'react';
import OffcanvasMenu from 'react-offcanvas-menu-component';

const mtgLogo = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Magicthegathering-logo.svg/768px-Magicthegathering-logo.svg.png?20160501122627"

function Sidenav() {
	return(
		<OffcanvasMenu
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
			]}
			header={
				<img src={mtgLogo} className="App-logo menu-logo" alt="logo" width="250" height="75" />
			}
		/>
	);
}

export default Sidenav;