<script>
	import { Icon, EllipsisHorizontal, Bars3 } from 'svelte-hero-icons';
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import Intro from '$lib/components/article/Intro.svelte';
	import Article from '$lib/components/article/Article.svelte';
	import { blueBtn, redBtn, orangeBtn, alarmBtn, alarmNumberBtn, designBtn } from './data';

	let i = 0;
	let k = 0;
	let j = 0;
	let btnList = [blueBtn, redBtn, orangeBtn];
	let alarmBtnList = [alarmBtn, alarmNumberBtn];
	let designBtnList = [];
</script>

<svelte:head>
	<title>Button</title>
</svelte:head>
<!-- overflow-y-scroll  -->
<div class="h-[calc(100vh-60px)] px-8">
	<section class="mb-3 px-3 py-5">
		<!-- Intro -->
		<Intro
			title="Button"
			intro="버튼들에는 각 고유의 색상정의 를 띄고 있으며 색상 정의의 특성에 따라 의미론적 목적을 제공
		합니다."
		/>
		<!-- Article -->
		<div class="space-y-8">
			<!-- Color Btn -->
			<Article
				title={btnList[i].title}
				info={btnList[i].info}
				code={btnList[i].code}
				discription={btnList[i].discription}
			>
				<!-- Blue -->
				<button
					style="background: linear-gradient(270deg, #66a6ff 0%, #667eea 98.8%);"
					class="rounded px-4 py-1 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] text-white"
					on:click={() => {
						i = 0;
					}}
				>
					Button
				</button>
				<!-- Red -->
				<!-- bg-red-600 -->
				<button
					class="rounded bg-gradient-to-tl from-red-700 to-red-600 px-4 py-1 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] text-white"
					on:click={() => {
						i = 1;
					}}
				>
					Button
				</button>
				<!-- Orange -->
				<button
					class="rounded px-4 py-1 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] text-white"
					style="background: linear-gradient(278.92deg, #c26b0f 0%, #d96b30 100%);"
					on:click={() => {
						i = 2;
					}}>Button</button
				>
			</Article>

			<!-- Alarm Btn -->
			<Article
				title={alarmBtnList[k].title}
				info={alarmBtnList[k].info}
				code={alarmBtnList[k].code}
				discription={alarmBtnList[k].discription}
			>
				<div class="space-x-9 flex">
					<!-- 숫자가 없는 Alarm Btn -->
					<div>
						<button
							type="button"
							class="relative"
							on:click={() => {
								k = 0;
							}}
						>
							<div
								class="absolute -left-1 -top-0.5 rounded-full bg-[#AE0019] dark:bg-red-700 px-1 py-1"
							/>

							<div
								class="rounded border border-[#B3BAD0] dark:border-gray-700 px-2 py-0.5 hover:bg-slate-100 hover:shadow-lg"
							>
								<Icon class="h-6 w-5 stroke-2 text-indigo-600 2xl:h-7 2xl:w-8" src={Bars3} />
							</div>
						</button>
					</div>
					<!-- 숫자가 있는 Alarm Btn -->
					<div>
						<button
							type="button"
							class="relative"
							on:click={() => {
								k = 1;
							}}
						>
							<div
								class="absolute -left-2 -top-1 inline-flex items-center justify-center rounded bg-[#AE0019] dark:bg-red-700 px-0.5 py-0.5 text-xs leading-none text-white"
							>
								12
							</div>

							<div
								class="rounded border border-[#B3BAD0] dark:border-gray-700 px-1.5 py-0.5 hover:bg-slate-100 hover:shadow-lg"
							>
								<Icon class="h-6 w-6  text-indigo-500 " src={EllipsisHorizontal} />
							</div>
						</button>
					</div>
				</div>
			</Article>

			<!-- Design Btn -->
			<Article
				title={designBtn.title}
				info={designBtn.info}
				code={designBtn.code}
				discription={designBtn.discription}
			>
				<div class="space-x-9 flex">
					<!-- 숫자가 있는 Alarm Btn -->
					<button
						class="w-auto flex items-center rounded-md border border-[#B3BAD0] dark:border-[#434346] dark:bg-[#131316] py-0.5 2xl:py-1.5 2xl:text-xl hover:bg-slate-100 hover:shadow-lg"
					>
						<div class="border-r border-gray-600 px-2 2xl:px-3">
							<!-- Icon -->
							<img
								src="https://i.esdrop.com/d/f/KRQCESGJO3/CRdI3xWEaW.png"
								alt=""
								class="h-4 w-4 2xl:h-5 2xl:w-5"
							/>
						</div>
						<!-- Select Box -->
						<div class="px-3 text-gray-600 dark:text-white">text</div>
					</button>
				</div>
			</Article>
		</div>
	</section>
</div>
