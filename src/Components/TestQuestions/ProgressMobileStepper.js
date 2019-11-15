import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import MobileStepper from "@material-ui/core/MobileStepper"
import Button from "@material-ui/core/Button"
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft"
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight"

const useStyles = makeStyles({
	root: {
		maxWidth: 400,
		flexGrow: 1
	}
})

export default function ProgressMobileStepper(props) {
	const classes = useStyles()
	const theme = useTheme()
	// const [activeStep, setActiveStep] = React.useState(0)
	const activeStep = props.activeStep
	// const handleNext = () => {
	// 	setActiveStep(prevActiveStep => prevActiveStep + 1)
	// }

	// const handleBack = () => {
	// 	setActiveStep(prevActiveStep => prevActiveStep - 1)
	// }

	return (
		<MobileStepper
			variant="progress"
			steps={10}
			position="static"
			activeStep={activeStep}
			className={classes.root}
			nextButton={
				<Button
					size="small"
					onClick={props.handleNext}
					disabled={activeStep === 9}
				>
					Next
					{theme.direction === "rtl" ? (
						<KeyboardArrowLeft />
					) : (
						<KeyboardArrowRight />
					)}
				</Button>
			}
			backButton={
				<Button
					size="small"
					onClick={props.handleBack}
					disabled={activeStep === 0}
				>
					{theme.direction === "rtl" ? (
						<KeyboardArrowRight />
					) : (
						<KeyboardArrowLeft />
					)}
					Back
				</Button>
			}
		/>
	)
}
