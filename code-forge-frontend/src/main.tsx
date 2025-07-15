import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../src/pages/Landing.tsx'
import Login from './components/Login.tsx'
import HelpfulResources from './pages/HelpfulResources.tsx'
import Leaderboard from './pages/Leaderboard.tsx'
import PersonalStats from './pages/PersonalStats.tsx'
import Profile from './pages/Profile.tsx'
import ProjectSharing from './pages/ProjectSharing.tsx'
import PracticeFeed from './pages/PracticeFeed.tsx'
import About from './pages/About.tsx'
import NotFound from './pages/NotFound.tsx'
import SignUpPage from './pages/SignUpPage.tsx'
import { AuthProvider } from './hooks/Auth.tsx'
import ProtectedRoute from './components/ProctedRoute.tsx'
import RootLayout from './components/RootLayout.tsx'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<AuthProvider>
				<RootLayout>
					<Routes>
						<Route path="/" element={<App />}>
							<Route index element={<Landing />} />
							<Route path="login" element={<Login />} />
							<Route path="signup" element={<SignUpPage />} />
							<Route path="resources" element={
								<ProtectedRoute>
									<HelpfulResources />
								</ProtectedRoute>
							} />
							<Route path="leaderboard" element={
								<ProtectedRoute>
									<Leaderboard />
								</ProtectedRoute>
							} />
							<Route path="stats" element={
								<ProtectedRoute>
									<PersonalStats />
								</ProtectedRoute>
							} />
							<Route path="profile" element={
								<ProtectedRoute>
									<Profile />
								</ProtectedRoute>
							} />
							<Route path="projectsharing" element={
								<ProtectedRoute>
									<ProjectSharing />
								</ProtectedRoute>
							} />
							<Route path="practicefeed" element={
								<ProtectedRoute>
									<PracticeFeed />
								</ProtectedRoute>
							} />
							<Route path="about" element={<About />} />
							<Route path="*" element={<NotFound />} />
						</Route>
					</Routes>
				</RootLayout>
			</AuthProvider>
		</BrowserRouter>
	</StrictMode>,
)
