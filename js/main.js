import { series } from './data.js';
const seriesTbody = document.getElementById('tv-series-list');
const seriesAverageNum = document.getElementById('seasons-average');
const seriesCardDetail = document.getElementById('series-details-card');
renderSeriesTable(series);
seriesAverageNum.innerHTML = `${getAverageSeasons(series)}`;
function renderSeriesTable(series) {
    series.forEach(s => {
        let tableElement = document.createElement('tr');
        tableElement.innerHTML = `<td>${s.id}</td>
                                <td><a href="#" class="series-title" style="cursor:pointer; color:blue;">${s.title}</a></td>
                                <td>${s.channel}</td>
                                <td>${s.seasons}</td>`;
        let seriesTitleElement = tableElement.querySelector('.series-title');
        seriesTitleElement.addEventListener('click', () => {
            renderSeriesCard(s);
        });
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
function renderSeriesCard(s) {
    seriesCardDetail.classList.remove('d-none');
    seriesCardDetail.innerHTML = `
                                <img src="${s.image}" alt="${s.title}">
                                <h2 style="padding-top: 1rem">${s.title}</h2>
                                <p>${s.description}</p>
                                <a href="${s.url}" target="_blank">Website</a>`;
}
