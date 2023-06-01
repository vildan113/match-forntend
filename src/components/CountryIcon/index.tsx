import { ReactComponent as CupIcon } from "assets/icons/cup-icon.svg"
import { getCode } from "iso-3166-1-alpha-2"
import { FC, memo } from "react"
import FlagIcon from "react-country-flag"

interface ICountryIconProps extends React.ComponentProps<"img"> {
	country: string
}

const CountryIcon: FC<ICountryIconProps> = memo(({ country, className }) => {
	const CountryCode = getCode(country)

	if (!CountryCode)
		return (
			<CupIcon
				className={className}
				style={{ fontSize: 16 }}
			/>
		)

	return (
		<FlagIcon
			className={className}
			countryCode={CountryCode}
			svg
		/>
	)
})

export default CountryIcon
