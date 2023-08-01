<script lang="ts">
	export let showModal: boolean;

	let dialog: any; // HTMLDialogElement

	// showModal() 이쪽은 함수여서 바꾸어 주면 작동이 안된다
	$: if (dialog && showModal) dialog.showModal();

	import { Icon, WrenchScrewdriver, EllipsisHorizontal, XMark } from "svelte-hero-icons";
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<dialog
	bind:this={dialog}
	on:close={() => (showModal = false)}
	on:click|self={() => dialog.close()}
	class="bg-[#0E0E0E] border border-white "
>
	<div on:click|stopPropagation>
		<!-- title -->
		<div class="flex justify-between items-center w-full pb-4 text-white">
			<p class="text-xl font-semibold ">이상감지 이력</p>
			<!-- svelte-ignore a11y-autofocus -->
			<button autofocus on:click={() => dialog.close()}>
				<Icon class="w-9 h-9 stroke-2" src={XMark} />
			</button>
		</div>

		<!-- section -->
		<div class="flex flex-row space-x-3" style="height:39rem">
			<div class="w-1/2 border text-white">table 영역</div>
			<div class="w-1/2 border text-white">chart 영역</div>
		</div>
	</div>
</dialog>

<style>
	dialog {
		width: 80%;
		height: 80%;
		border-radius: 0.2em;
		border: none;
		margin: auto;
		border: 1px solid #5a5a5a;
	}
	dialog::backdrop {
		background: black;
		opacity: 55%;
	}
	dialog > div {
		padding: 1em;
	}
	dialog[open] {
		animation: zoom 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
	}
	@keyframes zoom {
		from {
			transform: scale(0.95);
		}
		to {
			transform: scale(1);
		}
	}
	dialog[open]::backdrop {
		animation: fade 0.2s ease-out;
	}
	@keyframes fade {
		from {
			opacity: 0;
		}
		to {
			opacity: 0.5;
		}
	}
	button {
		display: block;
	}
</style>
