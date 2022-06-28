import './Menu.css';
import Header from "../../Partials/Header/Header";
import Drinks from './Drinks';
import Desserts from './Desserts';
import Maincourse from './Maincourse';
import Order from './order';

const Menu = () => {
	

	return(
		<>
		<Header />
		<section class="menu-container">
			
			<div class="chillies-img"><img src="Images/chillies.png" alt="chillies"/></div>            
			<section class="inner-container">
					<div class="menu-heading">
						<div class="menu-heading-1"><img src="Images/amazing.png" alt="amazing"/></div>
						</div>
		<Drinks />
		 <Maincourse />
		<Desserts /> 
			</section>
			</section>
		<Order />
		
			
		</>
	)
}
export default Menu;