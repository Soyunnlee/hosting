<script>
	import { Icon, XMark, MagnifyingGlass } from "svelte-hero-icons";
	export let handler;
	let value = "";
</script>

<div
	class="bg-[#0E0E0E] w-[11rem] rounded flex border border-[#434346] cursor-pointer xl:w-60 py-1"
>
	<div class=" px-2.5">
		<Icon src={MagnifyingGlass} class="w-4 text-[#9e9e9e] stroke-2 xl:w-5" />
	</div>
	<input placeholder="Search..." bind:value on:input={() => handler.search(value)} />
</div>

<style lang="postcss">
	input {
		@apply bg-transparent  pl-0.5 w-full xl:text-lg;
		outline: none;
	}
	input:focus {
		@apply border-transparent;
	}
	input::placeholder {
		color: #9e9e9e;
		line-height: 24px;
	}
</style>
