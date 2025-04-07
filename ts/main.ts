import { Serie } from './serie.js';

import { series } from './data.js';

const seriesTbody: HTMLElement = document.getElementById('tv-series-list')!;
const seriesAverageNum: HTMLElement = document.getElementById('seasons-average')!;

renderSeriesTable(series); 
seriesAverageNum.innerHTML = `${getAverageSeasons(series)}`

function renderSeriesTable(series: Serie[]): void {
    series.forEach(s => {
        let tableElement = document.createElement('tr');
        tableElement.innerHTML = `<td>${s.id}</td>
                                <td>${s.title}</td>
                                <td>${s.channel}</td>
                                <td>${s.seasons}</td>`;
        seriesTbody.appendChild(tableElement);
    });
}

function getAverageSeasons(series: Serie[]): number {
    let averageSeasons: number = 0;
    series.forEach(s => {
        averageSeasons += s.seasons;
    });
    let totalSeasons: number = series.length;
    return averageSeasons / totalSeasons;
}