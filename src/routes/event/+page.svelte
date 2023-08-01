<script lnag="ts">
	import Intro from '$lib/components/article/Intro.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Icon, EllipsisHorizontal, Bars3 } from 'svelte-hero-icons';

	// #region Blink Interval Funtion
	let blinkInterval = 1;
	// Interval Function
	setInterval(() => {
		blinkInterval = (blinkInterval % 2) + 1;
	}, 1000);

	export const style = {
		descriptionWrap: `flex flex-row space-x-1 py-4`,
		descriptionTitleWrap: `text-left w-[15%] border-r-[0.08rem] border-gray-400  flex items-center justify-center`,
		// bg-[#ABD2C9] text-[#195239]
		descriptionTitle: `rounded px-1.5  text-sm bg-[#aad3cb] text-emerald-800`,
		description: `pl-3 leading-7`,
		codeBlock: `overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white`
	};
	// #endregion
</script>

<svelte:head>
	<title>Event</title>
</svelte:head>

<div class="h-[calc(100vh-60px)] overflow-y-scroll bg-[#0E0E0E] px-8 text-white">
	<section class="px-3 pt-3 py-5">
		<!-- Intro -->
		<Intro title="Effect" intro="UI Effect 를 제공합니다." />

		<!-- Article -->
		<div class="space-y-8">
			<!-- 1. White Blink Effec -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="text-3xl">#1. White Blink Effect</p>
					<div class=" text-lg leading-7 text-gray-300">
						<p>
							Websoket 또는 데이터 신호에 따른 Ui 효과<br />색상 정의에 따라 ( 정상연결 , 작동중 ,
							에러 등 ) 통신상태 UI 효과를 나타냅니다.
						</p>
					</div>
				</div>

				<container
					class="flex flex-row items-center justify-center space-x-5 rounded border border-gray-600 py-6"
				>
					{#if blinkInterval === 1}
						<div class="relative transition duration-300">
							<div
								class="absolute -inset-0.5 h-4 w-4 rounded-lg bg-white"
								style="filter: blur(4px);"
							/>
							<div
								class="relative flex h-3 w-3 items-center divide-x divide-gray-600 rounded-full bg-white"
							/>
						</div>
					{:else}
						<div class="relative transition duration-300">
							<div class="absolute h-4 w-4" />
							<div class="relative h-3 w-3 rounded-full bg-gray-600" />
						</div>
					{/if}
				</container>
				<CodeBlock
					language="svelte"
					code={`{#if blinkInterval === 1}
<div class="relative transition duration-300">
 <div class="absolute -inset-0.5 h-4 w-4 rounded-lg bg-white" style="filter: blur(4px);"/>
 <div class="relative flex h-3 w-3 items-center divide-x divide-gray-600 rounded-full bg-white" />
</div>
{:else}
<div class="relative transition duration-300">
 <div class="absolute h-4 w-4" />
 <div class="relative h-3 w-3 rounded-full bg-gray-600" />
</div>
{/if}`}
					class="overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white"
				/>

				<!-- Description -->
				<div class="h-auto w-full space-y-0 divide-y divide-gray-600 rounded-md bg-gray-800 px-8">
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>dotSize</p>
						</li>
						<span class={style.description}> 기본 Dot Size 를 커스텀 할 수 있습니다.</span>
					</div>

					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>dotColor</p>
						</li>
						<span class={style.description}>Dot Color 를 커스텀 할 수 있습니다.</span>
					</div>
				</div>
			</article>

			<!-- 2. Red Blink Effec -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="text-3xl">#2. Red Blink Effect</p>
					<div class=" text-lg leading-7 text-gray-300">
						<p>
							Websoket 또는 데이터 신호에 따른 Ui 효과<br />색상 정의에 따라 ( 정상연결 , 작동중 ,
							에러 등 ) 통신상태 UI 효과를 나타냅니다.
						</p>
					</div>
				</div>

				<container
					class="flex flex-row items-center justify-center space-x-5 rounded border border-gray-600 py-6"
				>
					{#if blinkInterval === 1}
						<div class="relative transition duration-300">
							<div
								class="absolute -inset-0.5 h-4 w-4 rounded-lg bg-red-600"
								style="filter: blur(7px);"
							/>
							<div class="relative flex h-3 w-3 items-center divide-x rounded-full bg-red-600" />
						</div>
					{:else}
						<div class="relative transition duration-300">
							<div class="absolute h-5 w-5" />
							<div class="relative h-3 w-3 rounded-full bg-red-800" />
						</div>
					{/if}
				</container>
				<CodeBlock
					language="svelte"
					code={`{#if blinkInterval === 1}
	<div class="relative transition duration-300">
	 <div class="absolute -inset-0.5 h-4 w-4 rounded-lg bg-white" style="filter: blur(4px);"/>
	 <div class="relative flex h-3 w-3 items-center divide-x divide-gray-600 rounded-full bg-white" />
	</div>
	{:else}
	<div class="relative transition duration-300">
	 <div class="absolute h-4 w-4" />
	 <div class="relative h-3 w-3 rounded-full bg-gray-600" />
	</div>
	{/if}`}
					class="overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white"
				/>

				<!-- Description -->
				<div class="h-auto w-full space-y-0 divide-y divide-gray-600 rounded-md bg-gray-800 px-8">
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>dotSize</p>
						</li>
						<span class={style.description}> 기본 Dot Size 를 커스텀 할 수 있습니다.</span>
					</div>

					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>dotColor</p>
						</li>
						<span class={style.description}>Dot Color 를 커스텀 할 수 있습니다.</span>
					</div>
				</div>
			</article>

			<!-- 1. White Blink Effec -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="text-3xl">#3. Defualt Dot</p>
					<div class=" text-lg leading-7 text-gray-300">
						<p>
							Websoket 또는 데이터 신호에 따른 Ui 효과<br />색상 정의에 따라 ( 정상연결 , 작동중 ,
							에러 등 ) 통신상태 UI 효과를 나타냅니다.
						</p>
					</div>
				</div>

				<container
					class="flex flex-row items-center justify-center space-x-5 rounded border border-gray-600 py-6"
				>
					<div>
						<div class="r h-3 w-3 items-center rounded-full bg-green-800" />
					</div>
				</container>
				<CodeBlock
					language="svelte"
					code={`{#if blinkInterval === 1}
<div class="relative transition duration-300">
 <div class="absolute -inset-0.5 h-4 w-4 rounded-lg bg-white" style="filter: blur(4px);"/>
 <div class="relative flex h-3 w-3 items-center divide-x divide-gray-600 rounded-full bg-white" />
</div>
{:else}
<div class="relative transition duration-300">
 <div class="absolute h-4 w-4" />
 <div class="relative h-3 w-3 rounded-full bg-gray-600" />
</div>
{/if}`}
					class="overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white"
				/>

				<!-- Description -->
				<div class="h-auto w-full space-y-0 divide-y divide-gray-600 rounded-md bg-gray-800 px-8">
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>dotSize</p>
						</li>
						<span class={style.description}> 기본 Dot Size 를 커스텀 할 수 있습니다.</span>
					</div>

					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>dotColor</p>
						</li>
						<span class={style.description}>Dot Color 를 커스텀 할 수 있습니다.</span>
					</div>
				</div>
			</article>
		</div>
	</section>
</div>

<style>
	::-webkit-scrollbar {
		width: 8px;
		/* display: block; */
	}

	::-webkit-scrollbar-track {
		background: #615c5c;
	}
	::-webkit-scrollbar-thumb {
		background: #837d7d;
		border-radius: 40px;
	}
</style>
