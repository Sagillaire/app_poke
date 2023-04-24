import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getPokemonTypeColor, getPokemonTypeColorCard } from '../../utils';

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = ({ counts }: any) => {
    const data: number[] = [];
    const labels: string[] = [];
    const borderColor: string[] = [];
    const backgroundColor: string[] = [];
    counts?.forEach((element: any) => {
        data.push(element?.count);
        labels.push(element?.name?.toUpperCase());
        borderColor.push(getPokemonTypeColor(element?.name));
        backgroundColor.push(getPokemonTypeColorCard(element?.name));
    });

    const dataset = {
        data: data,
        borderWidth: 1,
        label: '# of Pokemons',
        borderColor: borderColor,
        backgroundColor: backgroundColor,
    };

    return <Pie data={{ datasets: [dataset], labels }} />;
}