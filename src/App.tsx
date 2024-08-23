import { Nav } from './components/nav/Nav'
import { Header } from './sections/Header'
import { About } from './sections/About'
import { ProjectSection } from './sections/ProjectSection'
import { Contact } from './sections/Contact'
import { Footer } from './sections/Footer'
import { NavToggleProvider } from './lib/context/NavToggleProvider'
export const App = () => {
	return (
		<>
			<NavToggleProvider>
				<Nav />
				<Header id="Header" />
				<ProjectSection id="projects" />
				<About id="about" />
				<Contact id="contact" />
				<Footer />
			</NavToggleProvider>
		</>
	)
}
