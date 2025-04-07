import { series } from './data.js';
const seriesTbody = document.getElementById('tv-series-list');
const seriesAverageNum = document.getElementById('seasons-average');
renderSeriesTable(series);
seriesAverageNum.innerHTML = `${getAverageSeasons(series)}`;
function renderSeriesTable(series) {
    series.forEach(s => {
        let tableElement = document.createElement('tr');
        tableElement.innerHTML = `<td>${s.id}</td>
                                <td>${s.title}</td>
                                <td>${s.channel}</td>
                                <td>${s.seasons}</td>`;
        seriesTbody.appendChild(tableElement);
    });
}
function getAverageSeasons(series) {
    let averageSeasons = 0;
    series.forEach(s => {
        averageSeasons += s.seasons;
    });
    let totalSeasons = series.length;
    return averageSeasons / totalSeasons;
}
