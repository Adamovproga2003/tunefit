'use client'
import { SignUpForm } from '@/components/forms'
import { LogoSection, StartSection } from '@/containers/started-page'
import cn from 'classnames'
import { useState } from 'react'
import styles from './Login.module.scss'

type Props = {}

const LoginPage = (props: Props) => {
	const [isStarted, setStarted] = useState(true)

	const handleClick = () => {
		setStarted(prev => !prev)
	}

	return (
		<div className={cn(styles.container, 'text-white')}>
			<LogoSection />
			<StartSection handleClick={handleClick} />
			<div
				className={cn(
					{
						[styles.signUpFormContainer__active]: isStarted,
					},
					styles.signUpFormContainer
				)}
			>
				<SignUpForm handleClick={handleClick} />
			</div>
		</div>
	)
}

export default LoginPage
