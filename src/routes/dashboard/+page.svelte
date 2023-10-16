<script>
	import StatusCard from './StatusCard.svelte';
	import OperationCard from './OperationCard.svelte';
	import ProductCard from './ProductCard.svelte';
	import MaintenanceCard from './MaintenanceCard.svelte';
	import LineChart from '$lib/components/chart/LineChart.svelte';
	import AiError from './AiError.svelte';
	const style = {
		cardshadow: `shadow-inner shadow-gray-600 2xl:shadow-[inset_0_0_10px_#4B5563]`
	};
	//#endrigion
</script>

<svelte:head>
	<title>Dashboard</title>
</svelte:head>

<!-- prettier-ignore -->
<div class="p-4 px-8 max-w-full h-[calc(100vh-60px)] overflow-auto text-white bg-[#0E0E0E] space-y-3">
	<!-- 행 1 -->
	<section class="w-full h-[30%] flex space-x-3 overflow-hidden">
		<!-- 영역 1 -->
		<!-- 로봇 상태 -->
		<article class="w-[18%] bg-[#141517] rounded-xl {style.cardshadow}">
			<StatusCard />
		</article>

		<!-- <LinkedChart { data } type="line" /> -->
	
		<!-- 가동율 -->
		<article class="bg-[#141517] w-[25%] rounded-xl {style.cardshadow}">
			<OperationCard/>https://velog.io/@zunyange/npm-install-%EC%98%A4%EB%A5%98-npm-install-%EC%95%88%EB%90%A0%EB%95%8C
		</article>
		<!-- 생산 -->
		<article class="bg-[#141517] w-[28%] rounded-lg mt-10 h-auto {style.cardshadow}">
			<ProductCard/>
		</article>

		<article class="bg-[#141517] w-[27%] rounded-xl {style.cardshadow}">
			<MaintenanceCard/>
		</article>
	</section>

	<!-- 행 2 -->
	<section class="w-full h-[35%] flex space-x-3 ">
		<article class="bg-[#141517] rounded-lg w-full pt-1 pb-2 px-2 {style.cardshadow}">
			<LineChart/>
		</article>
	</section>

	
	<!-- 행 3 -->
	<section class="w-full h-[calc(100%-65%-28px)] flex space-x-0 rounded-xl ">
    <article
	class="relative px-4 bg-[#141517] flex  divide-gray-600 rounded-lg w-full flex-col pb-3 shadow-inner shadow-gray-600 drop-shadow-lg {style.cardshadow} "
>
<AiError />

</article>
	</section>
</div>
