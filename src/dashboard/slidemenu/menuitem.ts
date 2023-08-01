//#region Import
import {
	ComputerDesktop,
	CursorArrowRays,
	Cube,
	PencilSquare,
	QueueList,
	CloudArrowDown,
	Identification
} from 'svelte-hero-icons';
//#endregion

//#region Constant
const menu = [
	{
		title: 'DashBord',
		icon: ComputerDesktop,
		link: '/dashboard',
		isdepthMenu: false
	},
	// {
	// 	title: 'API',
	// 	icon: CloudArrowDown,
	// 	link: '/api',
	// 	isdepthMenu: true,
	// 	isdepthMenuOpen: false,
	// 	depthMenu: [
	// 		{ title: 'bulletin1', link: '/api/bulletin1' },
	// 		{ title: 'bulletin2', link: '/api/bulletin2' }
	// 	]
	// },
	{
		title: 'Button',
		icon: Cube,
		link: '/button',
		isdepthMenu: true,
		depthMenu: [
			{ title: 'Buttons', link: '/button/buttons' },
			{ title: 'designbtn', link: '/button/designbtn' },
			{ title: 'alarmbtn', link: '/button/alarmbtn' }
		]
	},
	{
		title: 'Card',
		icon: Identification,
		link: '/card',
		isdepthMenu: true,
		isdepthMenuOpen: false,
		depthMenu: [{ title: 'chart1', link: '/admin/chart/chart1' }]
	},
	{
		title: 'Input',
		icon: PencilSquare,
		link: '/input',
		isdepthMenu: true,
		isdepthMenuOpen: false,
		depthMenu: [{ title: 'chart1', link: '/admin/chart/chart1' }]
	},
	{
		title: 'Form',
		icon: QueueList,
		link: '/form',
		isdepthMenu: false
	},
	{
		title: 'Event',
		icon: CursorArrowRays,
		link: '/event',
		isdepthMenu: true,
		isdepthMenuOpen: false,
		depthMenu: [
			{ title: 'Slidemenu', link: '/event/slidemenu' },
			{ title: 'Modal', link: '/event/modal' }
		]
	}

	// {
	// 	title: 'Date Picker',
	// 	icon: ComputerDesktop,
	// 	link: '/datepicker'
	// },
	// {
	// 	title: 'Clock',
	// 	icon: ComputerDesktop,
	// 	link: '/clock'
	// },
	// {
	// 	title: 'Chart',
	// 	icon: ComputerDesktop,
	// 	link: '/chart'
	// },
	// {
	// 	title: 'Table',
	// 	icon: ComputerDesktop,
	// 	link: '/table'
	// },
	// {
	// 	title: 'Grid',
	// 	icon: ComputerDesktop,
	// 	link: '/grid'
	// },
	// {
	// 	title: 'Report',
	// 	icon: ComputerDesktop,
	// 	link: '/report'
	// }
];

export default menu;
//#endregion
