import { BarChart } from "./BarChart"
import { PieChart } from "./PieChart"
import { CardContainer } from "./styles"
import { useGetPokemonTypes } from "../../ServiceHooks"

export const ChartStats = () => {
    const { counts } = useGetPokemonTypes()

    return (
        <>
            <CardContainer>
                <BarChart counts={counts} />
            </CardContainer>
            <CardContainer>
                <PieChart counts={counts} />
            </CardContainer>
        </>
    )
}