// import "./styles.css";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "first",
        uv: 60,
    },
    {
        name: "Second",
        uv: 59,

    },
    {
        name: "Third",
        uv: 60,

    },
    {
        name: "Fourth",
        uv: 57,

    },
    {
        name: "Fifth",
        uv: 54,

    },
    {
        name: "Page F",
        uv: 50,

    },
    {
        name: "Sixth",
        uv: 60,

    },
    {
        name: "Seventh",
        uv: 60,
    }
];

export default function App() {
    return (
        <div className="mx-auto">
            <h2 className="text-3xl text-center my-16">Assignment Mark</h2>
            <BarChart
                width={800}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 40,
                    left: 0,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}
