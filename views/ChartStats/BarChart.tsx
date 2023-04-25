import { useRef } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import { getPokemonTypeColorCard } from '../../utils';
import { useRouter } from 'next/router';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['Pokemons List Type'];

export const BarChart = ({ counts }: any) => {
    const router = useRouter()
    const chartRef: any = useRef();
    const handleClick = (event: any) => {
        const element = getElementAtEvent(chartRef.current, event)
        const datasetIndex = element[0]?.datasetIndex + 1
        router.push(`/type/${datasetIndex}`)
    }

    const datasets: any[] = []
    counts?.forEach((dataSet: any) => datasets.push({
        data: [dataSet?.count],
        label: dataSet?.name?.toUpperCase(),
        backgroundColor: getPokemonTypeColorCard(dataSet?.name)
    }));

    return (
        <Bar
            ref={chartRef}
            options={options}
            onClick={handleClick}
            data={{ labels, datasets }}
        />
    )
}