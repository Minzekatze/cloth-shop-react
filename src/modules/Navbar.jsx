import { Link } from "react-router-dom";

export const Navbar = () => {

	return (

		<nav className="footer">
			<ul>
				<li><Link to={`/products/`}>Bekleidung</Link></li>
				<li><a href="#"> Marken</a></li>
				<li><a href="#"> Premium</a></li>
				<li><a href="#"> Sale</a></li>
				<li><a href="#"> About us</a></li>
			</ul>
		</nav>
			
	)
    
}



