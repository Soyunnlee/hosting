<script lang="ts">
	// Button 타입
	export let type: 'submit' | 'button' | 'reset';
	// Button 텍스트
	export let caption: string;
	// 버튼 색상 타입
	export let colorClass: 'btn-blue' | 'btn-orange' | 'btn-red';
	// 추가 클래스
	export let addClass: string;
	// 추가 style
	export let addStyle: string;
	// Button 클릭 이벤트 처리기
	export let onClick: (event: MouseEvent) => void;
	// #endregion

	//#region Global Variable
	const className: string = `${colorClass} ${addClass}`;
</script>

<button {type} class={className} style={addStyle} on:click={onClick}>
	{caption}
	<slot />
</button>
