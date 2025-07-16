import { NavLink } from 'react-router-dom';
import { IconButton, Nav, Navbar, Tag } from 'rsuite';
import HomeIcon from '@rsuite/icons/legacy/Home';
import { useAuth } from '../hooks/Auth';
import OffRoundIcon from '@rsuite/icons/OffRound';
import AdminIcon from '@rsuite/icons/Admin';

function MainNavigation() {
	const { user } = useAuth()
	const { signOut } = useAuth()

	const handleLogout = () => {
		signOut()
	}
	return (
		<Navbar>
			<Nav>
				{user ? (
					<Nav.Item as={NavLink} to="#">
					</Nav.Item>
				) : (
					<Nav.Item as={NavLink} to="/login">
					</Nav.Item>
				)}
			</Nav>
			<Nav pullRight>
			</Nav>
		</Navbar>
	);
}

export default MainNavigation;
