import { Container } from '@/components/core'
import {
	FormSection,
	NavigationSection,
	SocialsSection,
} from '@/containers/auth-page'
import cn from 'classnames'
import styles from './SignUpForm.module.scss'

type Props = {
	handleClick: () => void
}

const SignUpForm = ({ handleClick }: Props) => {
	return (
		<Container>
			<NavigationSection handleClick={handleClick} />
			<FormSection />
			<p className={cn('text-center w-full', styles['decorative-lines'])}>or</p>
			<SocialsSection />
		</Container>
	)
}

export default SignUpForm
