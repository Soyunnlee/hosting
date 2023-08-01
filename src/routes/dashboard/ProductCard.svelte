<script lang="ts">
	import { tweened } from "svelte/motion";

	//#region Style
	const style = {
		cardgradient: `background: linear-gradient(106.15deg, #282828 1.61%, #0B0B0B 93.48%)`,
		cardtitle: `text-lg text-[#B7B9D2] mb-1 2xl:text-2xl 2xl:mb-3 text-xl`,
	};
	//#endregion

	let value = tweened(20);

	setInterval(() => {
		value.set(Math.floor(Math.random() * 100 + 1));
	}, 5000);

	let productTitle = ["제품 투입량", "박스 패킹 수량"];

	//region Interval Num
	let productNum = 0;
	let boxNum = 0;

	setInterval(() => {
		productNum = Math.floor(Math.random() * 101);
		boxNum = Math.floor(Math.random() * 101);
	}, 1000);
</script>

<!-- prettier-ignore -->
<div class="-mt-10  px-5 shadow-lg h-[-webkit-fill-available] whitespace-nowrap">
	<!-- 카드 1,2 -->
	
	<div class="flex space-x-3 h-full pb-3 2xl:space-x-8">
		{#each productTitle as title, i}
			<div
				class="relative block overflow-hidden rounded  border-gray-100 w-1/2 "
				style={style.cardgradient}
			>
				<!-- Gradient Line -->
				<span
					class="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-opacity-100"
				/>
				<!-- Content -->
				<div class=" h-full justify-center flex flex-col text-center ">
					<span class={style.cardtitle}>{title}</span>
					<!-- 수량 -->
					<div class="mt-2 border-t-2 border-gray-400 pt-4 2xl:pt-12 mx-6">
						<p class="uppercase text-4xl font-normal 2xl:text-7xl">
							{#if i === 0}
								{productNum}
							{:else}
								{boxNum}
							{/if}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
