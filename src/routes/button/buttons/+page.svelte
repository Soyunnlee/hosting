<script>
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { Icon, EllipsisHorizontal, Bars3 } from 'svelte-hero-icons';

	export const style = {
		descriptionWrap: `flex flex-row space-x-1 py-4`,
		descriptionTitleWrap: `text-left w-[15%] border-r-[0.08rem] border-gray-400  flex items-center justify-center`,
		// bg-[#ABD2C9] text-[#195239]
		descriptionTitle: `rounded px-1.5  text-sm bg-[#aad3cb] text-emerald-800`,
		description: `pl-3 leading-7`,
		codeBlock: `overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white`
	};
</script>


<svelte:head>
	<title>Button</title>
</svelte:head>

<div class="h-[calc(100vh-60px)] overflow-y-scroll bg-[#0E0E0E] px-8 text-white">
	<section class="px-3 pt-5">
		<!-- Intro -->
		<div class="mb-8">
			<h2 class="mb-1.5 text-4xl font-medium">Buttons</h2>
			<p>
				버튼들에는 각 고유의 색상정의 를 띄고 있으며 색상 정의의 특성에 따라 의미론적 목적을 제공
				합니다.
			</p>
		</div>
		<!-- Article -->
		<div class="space-y-8">
			<!-- Blue Btn -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl">#1. Blue ( Login, Clear , Susses 등 )</p>
					<p class="">추가 여백이나 width , padding 조절이 필요할 수 있습니다.</p>
				</div>
				<container class="flex items-center justify-start">
					<button
						style="background: linear-gradient(270deg, #66a6ff 0%, #667eea 98.8%);"
						class="rounded from-cyan-500 to-blue-500 px-4 py-1 hover:bg-gradient-to-r hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,02)]"
					>
						Button
					</button>
				</container>
				<CodeBlock
					language="svelte"
					code={`
<button 
 style="background: linear-gradient(270deg, #66a6ff 0%, #667eea 98.8%);"
 class="rounded hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,02)] py-1 px-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
Button
</button>
				`}
					class="overflow-x-auto rounded-md bg-gray-800 px-2 text-white"
					style="white-space: pre-wrap"
				/>

				<!-- Description -->
				<div class="h-auto w-full space-y-0 divide-y divide-gray-600 rounded-md bg-gray-800 px-8">
					<div class={style.descriptionWrap}>
						<li class={style.descriptionTitleWrap}>
							<p class={style.descriptionTitle}>ddddddddd</p>
						</li>
						<span class={style.description}> dd</span>
					</div>
				</div>
			</article>

			<!-- Red Btn -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl">#2. Red ( 주의 , Resister , 경고 등 )</p>
					<p class="">추가 여백이나 width , padding 조절이 필요할 수 있습니다.</p>
				</div>
				<!-- Content -->
				<container class="flex items-center justify-start">
					<button
						class="rounded bg-red-600 px-4 py-1 hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,02)]"
					>
						Button
					</button>
				</container>

				<CodeBlock
					language="html"
					code={`
					<button 
	 style="background: linear-gradient(270deg, #66a6ff 0%, #667eea 98.8%);"
	 class="rounded hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,02)] py-1 px-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
	Button
	</button>
					`}
					class="rounded-md bg-gray-800 px-2 text-white"
					style="white-space: pre-wrap"
				/>
			</article>

			<!-- Orange Btn -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl">#3. Orange ( 주의 , Resister , 경고 등 )</p>
					<p class="">추가 여백이나 width , padding 조절이 필요할 수 있습니다.</p>
				</div>
				<!-- Content -->
				<container class="flex items-center justify-start">
					<div>
						<button
							class="rounded px-4 py-1 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,02)]"
							style="background: linear-gradient(278.92deg, #c26b0f 0%, #d96b30 100%);"
							>RESET</button
						>
						<!-- <ROUND_BTN style="resetbtn" caption="RESET" type="submit" onClick={onClickReset} /> -->
					</div>
				</container>

				<CodeBlock
					language="html"
					code={`
								<button 
				 style="background: linear-gradient(270deg, #66a6ff 0%, #667eea 98.8%);"
				 class="rounded hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,02)] py-1 px-4 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
				Button
				</button>
								`}
					class="rounded-md bg-gray-800 px-2 text-white"
					style="white-space: pre-wrap"
				/>
			</article>

			<!-- Alarm Btn -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl">#4. Alarm Btn _ 알람 숫자가 없는 Btn</p>
					<p class="">추가 여백이나 width , padding 조절이 필요할 수 있습니다.</p>
					<p class=""><i><b>npm i svelte-hero-icons </b></i></p>
				</div>
				<!-- Content -->
				<container class="flex items-center justify-start pl-1">
					<div>
						<button type="button" class="relative">
							<div class="absolute -left-1 -top-0.5 rounded-full bg-red-700 px-1 py-1" />

							<div class="rounded border border-gray-700 px-2 py-0.5">
								<Icon class="h-6 w-5 stroke-2 text-indigo-600 2xl:h-7 2xl:w-8" src={Bars3} />
							</div>
						</button>
					</div>
				</container>

				<CodeBlock
					language="html"
					code={`
// 아이콘들은 바뀔수 있습니다.
<script>
	import { Icon, Bars3 } from "svelte-hero-icons";
</script>

<button type="button" class="relative" >
  <div class="absolute -top-0.5 -left-1 rounded-full bg-red-700 py-1 px-1  " />

  <div class="rounded border-gray-700 border">
    <Icon class="w-5 h-6 stroke-2 text-indigo-600 2xl:w-8 2xl:h-7" src={Bars3} />
  </div>
</button>
										`}
					class="rounded-md bg-gray-800 px-2 text-white"
					style="white-space: pre-wrap"
				/>
			</article>

			<!-- Alarm Btn -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl">#5. Alarm Btn _ 알람 숫자가 있는 Btn</p>
					<p class="">추가 여백이나 width , padding 조절이 필요할 수 있습니다.</p>
					<p class=""><i><b>npm i svelte-hero-icons </b></i></p>
				</div>
				<!-- Content -->
				<container class="flex items-center justify-start pl-1">
					<button type="button" class="relative">
						<div
							class="absolute -left-2 -top-1 inline-flex items-center justify-center rounded bg-red-700 px-0.5 py-0.5 text-xs leading-none text-white"
						>
							12
						</div>

						<div class="rounded border border-gray-700 px-1.5 py-0.5">
							<Icon class="h-6 w-6  text-indigo-500 " src={EllipsisHorizontal} />
						</div>
					</button>
				</container>

				<CodeBlock
					language="html"
					code={`
			// 아이콘들은 바뀔수 있습니다.
<script>
	import { Icon, EllipsisHorizontal } from "svelte-hero-icons";
</script>
			
<button type="button" class="relative">
 <div
 	class="absolute -top-1 -left-2 bg-red-700 text-white inline-flex items-center justify-center leading-none  text-sm rounded px-1"
 >
 	12
 </div>
 
 <div class="rounded border-gray-700 border">
 	<Icon class="w-6 h-6  text-indigo-500 " src={EllipsisHorizontal} />
 </div>
</button>
													`}
					class="rounded-md bg-gray-800 px-2 text-white"
					style="white-space: pre-wrap"
				/>
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
