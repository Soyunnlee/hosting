//#region Import
import {
	ComputerDesktop,
	CloudArrowDown,
	CursorArrowRipple,
	Cube,
	PlusCircle,
	ViewfinderCircle
} from 'svelte-hero-icons';
//#endregion

//#region Constant
const menu = [
	{
		title: 'API',
		icon: CloudArrowDown,
		link: '/api'
	},
	{
		title: 'Event',
		icon: CursorArrowRipple,
		link: '/event'
	},
	{
		title: 'Button',
		icon: PlusCircle,
		link: '/button'
	},
	{
		title: 'Input',
		icon: PlusCircle,
		link: '/input'
	},
	{
		title: 'Form',
		icon: Cube,
		link: '/form'
	},
	{
		title: 'Card',
		icon: ComputerDesktop,
		link: '/card'
	},
	{
		title: 'Date Picker',
		icon: ComputerDesktop,
		link: '/datepicker'
	},
	{
		title: 'Clock',
		icon: ComputerDesktop,
		link: '/clock'
	},
	{
		title: 'Chart',
		icon: ComputerDesktop,
		link: '/chart'
	},
	{
		title: 'Table',
		icon: ComputerDesktop,
		link: '/table'
	},
	{
		title: 'Grid',
		icon: ComputerDesktop,
		link: '/grid'
	},
	{
		title: 'Report',
		icon: ComputerDesktop,
		link: '/report'
	}
];

export default menu;
//#endregion
