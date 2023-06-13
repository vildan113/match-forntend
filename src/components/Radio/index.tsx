import { Children, ComponentProps, cloneElement } from "react"

interface IRadioProps extends ComponentProps<"input"> {
	value: number | string
	children: React.ReactNode
}

interface IRadioGroupProps<T> extends Omit<ComponentProps<"div">, "onChange"> {
	value?: T
	onChange?: (value: T) => void
	children: React.ReactElement[]
}

const Radio: React.FC<IRadioProps> & {
	Group: React.FC<IRadioGroupProps<any>>
} = ({ value, children, ...rest }) => (
	<label>
		<input
			type="radio"
			value={value}
			{...rest}
		/>
		{children}
	</label>
)

Radio.Group = ({ value, onChange = () => {}, children, ...rest }) => {
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		onChange(event.target.value)
	}

	return (
		<div {...rest}>
			{Children.map(children, child => {
				return cloneElement(child, {
					onChange: handleChange,
					checked: value === child.props.value
				})
			})}
		</div>
	)
}

export default Radio
