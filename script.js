const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
        legend: {
            position: 'bottom',
            labels: {
                font: {
                    family: "'Noto Sans KR', sans-serif",
                    size: 12
                }
            }
        },
        tooltip: {
            callbacks: {
                title: function(tooltipItems) {
                    const item = tooltipItems[0];
                    let label = item.chart.data.labels[item.dataIndex];
                    if (Array.isArray(label)) {
                      return label.join(' ');
                    } else {
                      return label;
                    }
                }
            }
        }
    }
};

const session1Data = {
    labels: ['도입 (5분)', '전개 1 (15분)', '전개 2 (20분)', '정리 (5분)'],
    datasets: [{
        data: [5, 15, 20, 5],
        backgroundColor: ['#FF6B6B', '#FFD166', '#06D6A0', '#118AB2'],
        borderColor: '#fff',
        borderWidth: 4,
    }]
};

const session2Data = {
    labels: ['도입 (5분)', '전개 1 (15분)', '전개 2 (20분)', '정리 (5분)'],
    datasets: [{
        data: [5, 15, 20, 5],
        backgroundColor: ['#FF6B6B', '#FFD166', '#06D6A0', '#118AB2'],
        borderColor: '#fff',
        borderWidth: 4,
    }]
};

const session3Data = {
    labels: ['도입 (5분)', '전개 (30분)', '정리 (10분)'],
    datasets: [{
        data: [5, 30, 10],
        backgroundColor: ['#FF6B6B', '#06D6A0', '#118AB2'],
        borderColor: '#fff',
        borderWidth: 4,
    }]
};

window.onload = function() {
    const ctx1 = document.getElementById('session1Chart').getContext('2d');
    new Chart(ctx1, { type: 'doughnut', data: session1Data, options: commonOptions });

    const ctx2 = document.getElementById('session2Chart').getContext('2d');
    new Chart(ctx2, { type: 'doughnut', data: session2Data, options: commonOptions });
    
    const ctx3 = document.getElementById('session3Chart').getContext('2d');
    new Chart(ctx3, { type: 'doughnut', data: session3Data, options: commonOptions });
};