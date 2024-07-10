import cn from 'classnames'
import { ButtonHTMLAttributes } from 'react'
import styles from './Button.module.scss'

const Button = ({
	children,
	type,
	className,
	onClick,
	disabled,
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
	return (
		<button
			type={type}
			className={cn(styles.button, className)}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	)
}

export default Button
