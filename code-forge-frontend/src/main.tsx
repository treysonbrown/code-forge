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

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Landing />} />
					<Route path="login" element={<Login />} />
					<Route path="resources" element={<HelpfulResources />} />
					<Route path="leaderboard" element={<Leaderboard />} />
					<Route path="stats" element={<PersonalStats />} />
					<Route path="profile" element={<Profile />} />
					<Route path="projectsharing" element={<ProjectSharing />} />
					<Route path="problem" element={<PracticeFeed />} />

				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
