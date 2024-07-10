import { IFormValues } from '@/interfaces/auth-form-interface'
import cn from 'classnames'
import { InputHTMLAttributes, useState } from 'react'
import { Path, UseFormRegister, UseFormWatch } from 'react-hook-form'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import styles from './Field.module.scss'

interface IFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: Path<IFormValues>
	register: UseFormRegister<IFormValues>
	watch: UseFormWatch<IFormValues>
	patternField?: {
		value: RegExp
		message: string
	}
	minLengthField?: {
		value: number
		message: string
	}
	error?: string | undefined
}
const Field = ({
	type,
	label,
	onChange,
	className,
	name,
	id,
	value,
	register,
	watch,
	required,
	patternField,
	minLengthField,
	error,
}: IFieldProps) => {
	const [isPasswordSeen, setPasswordSeen] = useState(false)

	const togglePasswordShow = () => {
		setPasswordSeen(prev => !prev)
	}

	return (
		<div className={styles.controller}>
			<div className={styles.controller_wrapper}>
				<input
					type={!isPasswordSeen ? type : 'text'}
					id={id}
					value={value}
					className={cn(
						'w-full px-3 py-2 text-sm text-gray-700 border rounded-md focus:outline-none focus:ring-blue-500',
						className,
						{
							[styles.errorInput]: !!error,
						}
					)}
					required={required}
					{...register(label || 'Full name', {
						required,
						pattern: patternField,
						minLength: minLengthField,
					})}
				/>
				<label
					className={cn({
						[styles.active]: !!watch(label || 'Full name'),
					})}
					htmlFor={id}
				>
					{label}
				</label>

				{type === 'password' && (
					<button type='button' onClick={togglePasswordShow}>
						{!isPasswordSeen ? <FiEye /> : <FiEyeOff />}
					</button>
				)}
			</div>
			{!!error && <span className={styles.controller_error}>{error}</span>}
		</div>
	)
}

export default Field
