<script lang="ts">
	//#region property
	// 입력 타입
	export let type: string;
	// Element 명
	export let inputName: string;
	// CSS Style
	export let style: string;
	// placeholder 표시 문자열
	export let placeholder: string;
	export let onChange: (event: Event) => void;
	//#endregion
</script>

<div class="relative mb-5 rounded-md outline outline-1 outline-gray-300">
	<input
		class={`input-base ` + style}
		placeholder=" "
		type=""
		name={inputName}
		on:change={onChange}
	/>
	<label
		class="origin-0 absolute top-0 -z-10 p-2 pl-4 text-lg text-white duration-300"
		for={inputName}>{placeholder}</label
	>
</div>

<style lang="postcss">
	.outline input:focus-within ~ label,
	/* 라벨 위로 올라갔을때 색상 */
	.outline input:not(:placeholder-shown) ~ label {
		@apply z-0 ml-4 -translate-x-4 -translate-y-4 scale-75 transform bg-gray-700 px-1  py-0;
		/* background-color: #4d505a; */
	}

	/* Input 자동완성시 백그라운드 컬러 , Text 컬러 */
	input:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 0px inset;
		-webkit-text-fill-color: #ffffff;
	}
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
	}
</style>
