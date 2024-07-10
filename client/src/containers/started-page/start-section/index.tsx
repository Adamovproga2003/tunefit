import { Button } from '@/components/core'
import Link from 'next/link'

type Props = {
	handleClick: () => void
}

const StartSection = ({ handleClick }: Props) => {
	return (
		<div>
			<h2 className='text-center text-xl font-bold mb-1'>
				Welcome to Tunefit!
			</h2>
			<p className='text-xs mb-4 text-center'>
				Monitor and Master Your Fitness Journey
			</p>
			<Button type='button' onClick={handleClick}>
				Get started
			</Button>

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

export default StartSection
