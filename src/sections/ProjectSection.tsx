import { Projects } from '../components/Projects'
import trelloProject from '../assets/projects/trello.png'
import trelloMobileProject from '../assets/projects/trelloMobile.png'
import SecretSanta from '../assets/project1.png'
import SecretSantaMobile from '../assets/project1.png'
import portfolio from '../assets/projects/portfolio.png'
import portfolioMobile from '../assets/projects/portfolioMobile.png'
import tateti from '../assets/projects/tateti.png'
import tatetiMobile from '../assets/projects/tatetiMobile.png'
import emparejar from '../assets/project12.png'
import emparejarMobile from '../assets/project12.png'
import animationData from '../assets/animation3.json'
import '../App.css'
export const ProjectSection = ({ id }: { id: string }) => {
	const defaultOptions = {
		loop: 2,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice',
		},
	}

	return (
		<div
			id={id}
			className="flex flex-col justify-center align-middle items-center"
		>
			<div className="">
				<h2 className="text-2xl md:text-4xl tracking-wider text-center text-gray-200 ">
					Checkout my latest projects
				</h2>
			</div>
			<span className="mt-3  text-gray-600 text-xs">
				Project order by most recent to oldest
			</span>
			<div
				id="PROJECTS"
				className="mt-24 flex flex-col md:flex-row md:flex-wrap justify-center align-middle items-center "
			>
				<Projects
					projectName={'Trello clone'}
					projectImg={trelloProject}
					projectMobileImg={trelloMobileProject}
					ProjectDescription={
						'The web version of secret Santa.Select the amount of players, log the details and get started, and Email will be sent with the results.'
					}
					ProjectTechnologies={
						'Used Tailwind css for the styling , react for the logic and UI, git as a version control, react router for routing . To avoid backend decided to use EmailJS to handle emails'
					}
					ProjectLink={'/InvisibleFriend'}
					ProjectGit={
						'https://github.com/GabrielPaparello/InvisibleFriend'
					}
				/>
				<Projects
					projectName={'Secret Santa'}
					projectImg={SecretSanta}
					projectMobileImg={SecretSantaMobile}
					ProjectDescription={
						'The web version of secret Santa.Select the amount of players, log the details and get started, and Email will be sent with the results.'
					}
					ProjectTechnologies={
						'Used Tailwind css for the styling , react for the logic and UI, git as a version control, react router for routing . To avoid backend decided to use EmailJS to handle emails'
					}
					ProjectLink={'/InvisibleFriend'}
					ProjectGit={
						'https://github.com/GabrielPaparello/InvisibleFriend'
					}
				/>
				<Projects
					projectName={'Position Assignment'}
					projectImg={emparejar}
					projectMobileImg={emparejarMobile}
					ProjectDescription={`This project asigns a random position, "number", to the participants`}
					ProjectTechnologies={''}
					ProjectLink={'/numberAsigner'}
					ProjectGit={
						'https://github.com/GabrielPaparello/InvisibleFriend/tree/main/src/pages/numberAsigner/invisibleApp'
					}
				/>
				<Projects
					projectName={'Portfolio for client'}
					ProjectDescription={''}
					ProjectTechnologies={''}
					projectImg={portfolio}
					projectMobileImg={portfolioMobile}
					ProjectLink={
						'https://gabrielacandio.netlify.app/'
					}
					ProjectDisabled={true}
				/>
				<Projects
					projectImg={tateti}
					projectMobileImg={tatetiMobile}
					projectName={'Tic Tac Toe'}
					ProjectLink={'/TicTacToe'}
					ProjectGit={
						'https://github.com/GabrielPaparello/tateti/tree/main'
					}
					ProjectDescription={
						'This was my first project using javascript just a simple Tic Tac Toe game.'
					}
					ProjectTechnologies={
						'This project is made fully on vanilla Javascript'
					}
				/>
			</div>
		</div>
	)
}
