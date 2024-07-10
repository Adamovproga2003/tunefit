import { FaApple, FaFacebookF } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

type Props = {}

const SocialsSection = (props: Props) => {
	return (
		<div className='flex gap-3 justify-center mt-5'>
			<button
				type='button'
				className='text-white bg-black w-10 h-10 flex items-center justify-center text-xl rounded-full'
			>
				<FaApple />
			</button>
			<button
				type='button'
				className='text-white bg-blue-600 w-10 h-10 flex items-center justify-center text-xl rounded-full'
			>
				<FaFacebookF />
			</button>
			<button
				type='button'
				className='text-white bg-slate-100 w-10 h-10 flex items-center justify-center text-xl rounded-full'
			>
				<FcGoogle />
			</button>
		</div>
	)
}

export default SocialsSection
