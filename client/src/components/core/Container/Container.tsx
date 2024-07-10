import cn from 'classnames'
import { HTMLAttributes } from 'react'
import styles from './Container.module.scss'

const Container = ({ className, children }: HTMLAttributes<HTMLDivElement>) => {
	return <div className={cn(styles.container, className)}>{children}</div>
}

export default Container
