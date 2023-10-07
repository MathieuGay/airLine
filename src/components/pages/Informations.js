import React, { useState, useEffect } from 'react';
import '../../styles/Informations.css'
import { Chart } from 'primereact/chart';

export default function Informations() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const data = {
            labels: ['Europe', 'America', 'Asia'],
            datasets: [
                {
                    data: [700, 555, 502],
                    backgroundColor: [
                        documentStyle.getPropertyValue('--blue-500'),
                        documentStyle.getPropertyValue('--yellow-500'),
                        documentStyle.getPropertyValue('--green-500')
                    ],
                    hoverBackgroundColor: [
                        documentStyle.getPropertyValue('--blue-400'),
                        documentStyle.getPropertyValue('--yellow-400'),
                        documentStyle.getPropertyValue('--green-400')
                    ]
                }
            ]
        }
        const options = {
            plugins: {
                legend: {
                    labels: {
                        usePointStyle: true
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);

    return (
        <>
            <section>
                <div className="informations-container">
                    <div className="chart-container border rounded p-2">
                        <Chart type="pie" data={chartData} options={chartOptions} className="w-full" style={{ height: '200px', width: '200px' }} />
                    </div>
                    <div className="chart-container border rounded p-2">
                        <Chart type="pie" data={chartData} options={chartOptions} className="w-full" style={{ height: '200px', width: '200px' }} />
                    </div>
                    <div className="chart-container border rounded p-2">
                        <Chart type="pie" data={chartData} options={chartOptions} className="w-full" style={{ height: '200px', width: '200px' }} />
                    </div>
                </div>
            </section>
        </>
    )
}
