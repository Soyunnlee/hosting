//#region Import
//#endregion

//#region Function
export function clickOutside(node: HTMLElement) {
	const handleClick = (event: MouseEvent) => {
		if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
			node.dispatchEvent(new CustomEvent('click_outside'));
		}
	};

	document.addEventListener('click', handleClick, { passive: true, capture: true });

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}
//#endregion
