<script lang="ts">
	//#region Import
	//#endregion

	//#region Gloval Variable
	const style = {
		cardshadow: `shadow-inner shadow-gray-600 2xl:shadow-[inset_0_0_10px_#4B5563]`
	};
	//#endregion
</script>

<article class="rounded-md bg-[#141517] {style.cardshadow}">
	<div
		class="flex justify-between"
		style="background: radial-gradient(circle, rgba(45,48,52,0.7399553571428572) 4%, rgba(20,21,23,0) 50%, rgba(20,21,23,0) 100%);"
	>
		<!-- Title -->
		<div class="flex w-full items-center justify-center">
			<p class=" text-lg xl:text-2xl">title</p>
		</div>
	</div>

	<div
		class="rounded-md bg-[#0a1631] shadow-[inset_0_0_10px_#3B445B] shadow-[#797B95] xl:shadow-[inset_0_0_25px_#797B95]"
	>
		<slot />
	</div>
</article>
