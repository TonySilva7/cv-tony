export default function RedGradient() {
	return (
		<svg width='0' height='0'>
			<linearGradient id='my-red-gradient' x1='100%' y1='100%' x2='0%' y2='0%'>
				<stop stopColor='#e46b6b' offset='0%' />
				<stop stopColor='rgba(170,67,67,1)' offset='100%' />
			</linearGradient>
		</svg>
	);
}

export function RedGradientHover() {
	return (
		<svg width='0' height='0'>
			<linearGradient
				id='my-red-gradient-hover'
				x1='0%'
				y1='0%'
				x2='100%'
				y2='100%'
			>
				<stop stopColor='#ffffff' offset='0%' />
				<stop stopColor='#c7c7c7' offset='100%' />
			</linearGradient>
		</svg>
	);
}
