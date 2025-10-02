import React from 'react';
import { LineChart, Line, YAxis, XAxis } from 'recharts';
const studentResults = [
    {
        "id": 1,
        "name": "Alice",
        "physics": 78,
        "chemistry": 85,
        "math": 92,
        "biology": 74,
        "total": 329
    },
    {
        "id": 2,
        "name": "Bob",
        "physics": 65,
        "chemistry": 70,
        "math": 68,
        "biology": 72,
        "total": 275
    },
    {
        "id": 3,
        "name": "Charlie",
        "physics": 90,
        "chemistry": 88,
        "math": 95,
        "biology": 80,
        "total": 353
    },
    {
        "id": 4,
        "name": "Diana",
        "physics": 82,
        "chemistry": 76,
        "math": 84,
        "biology": 79,
        "total": 321
    },
    {
        "id": 5,
        "name": "Ethan",
        "physics": 55,
        "chemistry": 60,
        "math": 50,
        "biology": 58,
        "total": 223
    },
    {
        "id": 6,
        "name": "Fiona",
        "physics": 88,
        "chemistry": 92,
        "math": 85,
        "biology": 90,
        "total": 355
    },
    {
        "id": 7,
        "name": "George",
        "physics": 72,
        "chemistry": 68,
        "math": 75,
        "biology": 70,
        "total": 285
    },
    {
        "id": 8,
        "name": "Hannah",
        "physics": 95,
        "chemistry": 90,
        "math": 98,
        "biology": 92,
        "total": 375
    },
    {
        "id": 9,
        "name": "Ian",
        "physics": 60,
        "chemistry": 65,
        "math": 70,
        "biology": 62,
        "total": 257
    },
    {
        "id": 10,
        "name": "Julia",
        "physics": 85,
        "chemistry": 88,
        "math": 82,
        "biology": 80,
        "total": 335
    }
]


const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={300} data={studentResults}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                {/* <Line dataKey="total" /> */}
                <Line dataKey="math" stroke="blue"/>
                <Line dataKey="biology" stroke="red"/>
            </LineChart>
        </div>
    );
};

export default ResultsChart;