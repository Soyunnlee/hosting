// just some fake data

const dataPoints = 30;
const maxValue = 140;

export default [
	{
		label: "This month",
		points: randomPoints(),
	},
	{
		label: "Last month",
		points: randomPoints(),
	},
	{
		label: "2 months ago",
		points: randomPoints(),
	},
];

function randomPoints() {
	return [...Array(dataPoints)].map((e) => Math.trunc(Math.random() * maxValue));
}
