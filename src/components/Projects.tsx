import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faGit,
	faGithub,
	faReact,
} from '@fortawesome/free-brands-svg-icons'
import { useContext, useState } from 'react'
import { faJs } from '@fortawesome/free-brands-svg-icons/faJs'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { NavToggleContext } from '@/lib/context/NavToggleContext'

interface ProjectProps {
	projectName?: string
	projectImg: string
	ProjectDescription: string
	ProjectTechnologies: string
	ProjectLink: string
	ProjectGit?: string
	ProjectDisabled?: boolean
	projectMobileImg: string
}
type OptionalProjectProps = Partial<ProjectProps>
export const Projects = ({
	projectName,
	projectImg,
	ProjectDescription,
	ProjectTechnologies,
	ProjectLink,
	ProjectGit,
	ProjectDisabled,
	projectMobileImg,
}: OptionalProjectProps) => {
	const [active, setActive] = useState(false)
	let { windowsWidth } = useContext(NavToggleContext)
	return (
		<>
			<section className="flex flex-col m-5 gap-10  text-center  text-gray-200 justify-center align-middle items-center md:flex-row ">
				<h2 className="text-2xl md:text-4xl tracking-wider text-center text-gray-200 ">
					{projectName}
				</h2>
				<article className="">
					<img
						className="w-[600px] md:w-[650px] rounded-xl  h-auto object-cover"
						src={
							windowsWidth < 768
								? projectMobileImg
								: projectImg
						}
						alt="fotografía del proyecto"
					/>
				</article>
				<article className="flex flex-col ">
					<h3>Project Description</h3>
					<p>{ProjectDescription}</p>
					<h3>Tecnologies used</h3>
					<p>{ProjectTechnologies}</p>
					<section className="flex justify-center text-center gap-2 mt-6 text-3xl">
						<FontAwesomeIcon icon={faGithub} />
						<FontAwesomeIcon icon={faReact} />
						<FontAwesomeIcon icon={faGit} />
						<FontAwesomeIcon icon={faJs} />
					</section>
				</article>
			</section>
		</>
	)
}
