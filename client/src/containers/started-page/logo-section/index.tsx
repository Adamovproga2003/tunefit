import { FaApple } from 'react-icons/fa'

type Props = {}

const LogoSection = (props: Props) => {
	return (
		<div className='flex gap-2 items-center'>
			<FaApple className='text-xl' />
			<h1 className='font-bold text-2xl'>Tunefit</h1>
		</div>
	)
}

export default LogoSection
