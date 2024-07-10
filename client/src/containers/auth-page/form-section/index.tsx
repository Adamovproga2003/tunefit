import { Button, Field } from '@/components/core'
import { IFormValues } from '@/interfaces/auth-form-interface'
import { useMutation } from '@tanstack/react-query'
import axios, { AxiosError } from 'axios'
import { BaseSyntheticEvent } from 'react'
import { SubmitHandler, useForm, UseFormSetError } from 'react-hook-form'
import { ScaleLoader } from 'react-spinners'

type Props = {}

interface IError {
	message: string
	error: string
	statusCode: number
}

interface IResponse {
	accessToken: string
}

const signUpMutation = async ({
	data,
	setError,
}: {
	data: IFormValues
	setError: UseFormSetError<IFormValues>
}) => {
	if (data['Confirm password'] === data['Password']) {
		await axios.post<IResponse, IError>('http://localhost:3001/auth/sign-up', {
			email: data.Email,
			password: data.Password,
			fullName: data['Full name'],
		})
	} else {
		setError('Confirm password', {
			type: 'manual',
			message: 'Confirm password does not match with password.',
		})
	}
}
const FormSection = (props: Props) => {
	const {
		register,
		handleSubmit,
		watch,
		setError,
		formState: { errors },
	} = useForm<IFormValues>()

	const { mutate, isPending, isError, error } = useMutation({
		mutationFn: signUpMutation,
		onSuccess: () => {
			// Handle successful mutation, such as updating the UI or showing a success message
		},
		onError: (error: AxiosError<IError>) => {
			console.log('error', error.response?.data.error)
			// Handle errors, display an error message, or perform fallback actions
		},
	})

	const onSubmit: SubmitHandler<IFormValues> = (
		data,
		event?: BaseSyntheticEvent
	) => {
		event?.preventDefault()
		mutate({ data, setError })
	}

	return (
		<div className='mt-12'>
			<h1 className='text-2xl font-semibold mb-1'>Welcome to Tunefit!</h1>
			<p className='text-sm mb-5 max-w-60'>
				Create an account to save your workout & activity progress.
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					type='text'
					id='fullName'
					label='Full name'
					register={register}
					watch={watch}
					required
					error={errors['Full name']?.message}
				/>
				<Field
					watch={watch}
					type='email'
					id='email'
					label='Email'
					register={register}
					required
					patternField={{
						value: /\S+@\S+\.\S+/,
						message: 'Sorry, the entered email is incorrect. Please try again.',
					}}
					error={errors['Email']?.message}
				/>
				<Field
					watch={watch}
					type='password'
					id='password'
					label='Password'
					register={register}
					required
					minLengthField={{
						value: 6,
						message: 'Password must be at least 6 characters long',
					}}
					error={errors['Password']?.message}
				/>
				<Field
					watch={watch}
					type='password'
					id='confirmPassword'
					label='Confirm password'
					register={register}
					required
					minLengthField={{
						value: 6,
						message: 'Confirm password must be at least 6 characters long',
					}}
					error={errors['Confirm password']?.message}
				/>

				<p className='text-xs mb-3'>
					By continue, I agree to InFitness Terms Of Service and acknowledge the
					Privacy Policy.
				</p>
				<Button disabled={isPending}>
					{isPending ? <ScaleLoader height={11} color='#667085' /> : 'Continue'}
				</Button>
			</form>
		</div>
	)
}

export default FormSection
