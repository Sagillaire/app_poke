import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { getPokemonTypeColorCard } from '../../utils';

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
    const datasets: any[] = []
    counts?.forEach((dataSet: any) => datasets.push({
        data: [dataSet?.count],
        label: dataSet?.name?.toUpperCase(),
        backgroundColor: getPokemonTypeColorCard(dataSet?.name)
    }));

    return <Bar options={options} data={{labels, datasets}} />;
}