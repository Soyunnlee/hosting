<script lang="ts">
	export let ErrorState: "Error" | "Nomal";
	let blinkInterval = 1;

	setInterval(() => {
		blinkInterval = (blinkInterval % 2) + 1;
	}, 1000);
</script>

<div>
	<!-- 정상 표시 Icon-->
	{#if ErrorState === "Nomal"}
		<div>
			{#if blinkInterval === 1}
				<div class="relative transition duration-300">
					<div
						class="absolute -inset-0.5 rounded-lg bg-white h-4 w-4 "
						style="filter: blur(5px);"
					/>
					<div
						class="relative bg-white flex items-center divide-x divide-gray-600 rounded-full h-3 w-3"
					/>
				</div>
			{:else}
				<div class="relative transition duration-300">
					<div class="h-4 w-4 absolute" />
					<div class="h-3 w-3 bg-gray-600 rounded-full relative" />
				</div>
			{/if}
		</div>
	{:else}
		<!-- 에러 표시 Icon -->
		<div>
			{#if blinkInterval === 1}
				<div class="relative transition duration-300">
					<div
						class="absolute -inset-0.5 rounded-lg bg-red-600 h-4 w-4 "
						style="filter: blur(5px);"
					/>
					<div class="relative bg-red-600 flex items-center divide-x  rounded-full h-3 w-3" />
				</div>
			{:else}
				<div class="relative transition duration-300">
					<div class="h-4 w-4 absolute" />
					<div class="h-3 w-3 bg-red-800 rounded-full relative" />
				</div>
			{/if}
		</div>
	{/if}
</div>
