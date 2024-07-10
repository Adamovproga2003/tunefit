import Link from 'next/link'
import { RiArrowLeftSLine } from 'react-icons/ri'

type Props = {
	handleClick: () => void
}

const NavigationSection = ({ handleClick }: Props) => {
	return (
		<div className='flex items-center justify-between '>
			<button type='button' onClick={handleClick}>
				<RiArrowLeftSLine className='text-2xl font-thin' />
			</button>
			<p className='text-xs text-center'>
				Already have an account?{' '}
				<Link
					className='underline underline-offset-2 hover:no-underline'
					href='#'
				>
					Log in
				</Link>
			</p>
		</div>
	)
}

export default NavigationSection
