import MainNavigation from './MainNavigation';

function RootLayout({ children }: { children: any }) {
	return (
		<>
			<MainNavigation />
			<main>{children}</main>
		</>
	);
}

export default RootLayout;
