<script lang="ts">
	// Button 타입
	export let type: 'submit' | 'button' | 'reset';
	// Button 텍스트
	export let caption: string;
	// 추가 클래스
	export let addClass: string;
	// 추가 style
	export let addStyle: string;
	// Button 클릭 이벤트 처리기
	export let onClick: (event: MouseEvent) => void;
	// #endregion
</script>

<button {type} class={'btn-orange ' + addClass} style={addStyle} on:click={onClick}
	>{caption}
	<slot />
</button>
