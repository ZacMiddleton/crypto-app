import { Triangle, Percentage } from "./PercentageDisplay.styles";

const PercentageDisplay = ({percentage}) => {
    const positive = percentage >= 0;

    return (
        <Percentage positive={positive} >
            <Triangle positive={positive} />
            {Math.abs(percentage).toFixed(2)}
        </Percentage>
    )
}

export default PercentageDisplay;