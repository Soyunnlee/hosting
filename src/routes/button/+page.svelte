<script script lang="ts">
	//#region Import
	import ButtonBase from '$lib/components/button/ButtonBase.svelte';
	import AlarmButton from '$lib/components/button/AlarmButton.svelte';
	import AlarmButtonNumber from '$lib/components/button/AlarmButtonNumber.svelte';
	import ButtonBlue from '$lib/components/button/ButtonBlue.svelte';
	import ButtonOrange from '$lib/components/button/ButtonOrange.svelte';
	import ButtonRed from '$lib/components/button/ButtonRed.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	//#endregion

	//#region Property
	// #endregion

	// #region Variable
	// #endregion

	// #region Function
	//#endregion
</script>

<!-- <ButtonBlue
	addClass=""
	addStyle=""
	type="button"
	caption="button"
	onClick={(event) => {
		console.log(event);
	}}
/>
<ButtonOrange
addClass=""
addStyle=""
type="button"
caption="button"
onClick={(event) => {
	console.log(event);
}}
/>
<ButtonRed
addClass=""
addStyle=""
type="button"
caption="button"
onClick={(event) => {
	console.log(event);
}}
/>
<AlarmButton />
<AlarmButtonNumber abnormalCount={10} /> -->

<svelte:head>
	<title>API</title>
</svelte:head>
<!-- bg-[#0E0E0E] -->
<!-- h-[calc(100vh-60px)] -->
<div class=" h-[calc(100vh-60px)] overflow-y-scroll bg-[#0E0E0E] px-8 text-white">
	<section class="mb-3 px-3 py-5">
		<!-- Intro -->
		<ButtonBase
			colorClass={'btn-blue '}
			addClass="px-10"
			addStyle=""
			type="button"
			caption="button"
			onClick={(event) => {
				console.log(event);
			}}
		/>
		<div class="mb-8">
			<h2 class="mb-1.5 text-4xl font-medium">Buttons</h2>
			<p>
				버튼들에는 각 고유의 색상 정의를 띄고 있으며 색상 정의와 특성에 따라 의미와 목적을 제공
				합니다.
			</p>
		</div>
		<!-- Article -->
		<div class="space-y-8">
			<!-- Blue Btn -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl">1. Blue ( Login, Clear , Susses 등 )</p>
					<p class="">추가 여백이나 width , padding 조절이 필요할 수 있습니다.</p>
				</div>
				<container class="flex items-center justify-start">
					<ButtonBlue
						addClass=" "
						addStyle="background:linear-gradient(270deg, #66a6ff 0%, #667eea 98.8%);"
						type="button"
						caption="button"
						onClick={(event) => {
							console.log(event);
						}}
					/>
				</container>

				<!-- ButtonBase.svelte  -->
				// colorClass 에 css 명을 넣어주고 추가 조정은 addClass (tailwind 사용) 혹은 style (각도 조절
				및 세부 조정 커스텀이 필요한 경우엔 css 사용) 을 적용해서 커스텀 해줍니다.

				<CodeBlock
					language="svelte"
					code={`<!-- ButtonBase.svelte  -->

<script>
// Button 타입
export let type: 'submit' | 'button' | 'reset';
// Button 텍스트
export let caption: string;
// 버튼 색상 타입
export let colorClass: 'btn-blue ' | 'btn-orange ' | 'btn-red ';
// 추가 클래스
export let addClass: string;
// 추가 style
export let addStyle: string;
// Button 클릭 이벤트 처리기
export let onClick: (event: MouseEvent) => void;
// #endregion
</script>

<ButtonBase 
 colorClass={'btn-blue'}		
 addClass="px-10"
 addStyle=""
 type="button"
 caption="button"
 onClick={(event) => {
 console.log(event);
 }}
/>
			`}
					class="overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white"
				/>
				<CodeBlock
					language="css"
					code={`/* app.css */

@layer components {
	.btn-blue {
		@apply rounded bg-red-900 px-4 py-1 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)];
	}
}
			`}
					class="overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white"
				/>
			</article>

			<!-- Red Btn -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl">#2. Red ( 주의 , Resister , 경고 등 )</p>
					<p class="">추가 여백이나 width , padding 조절이 필요할 수 있습니다.</p>
				</div>
				<!-- Content -->
				<container class="flex items-center justify-start">
					<ButtonRed
						addClass=""
						addStyle=""
						type="button"
						caption="button"
						onClick={(event) => {
							console.log(event);
						}}
					/>
				</container>

				<CodeBlock
					language="html"
					code={`<!-- ButtonBase.svelte  -->
// 추가 클래스
export let addClass: string;
// 추가 style
export let addStyle: string;
// Button 클릭 이벤트 처리기
export let onClick: (event: MouseEvent) => void;
// #endregion
</script>

<button {type} class={colorClass + addClass} style={addStyle} on:click={onClick}>
	{caption}
	<slot />
</button>
					`}
					class="overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white"
				/>
				<CodeBlock
					language="css"
					code={`/* app.css */

@layer components {
	.btn-red {
		@apply rounded bg-red-600  bg-opacity-80 px-4  py-1  hover:border-red-600 hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)];
	}
}
		`}
					class="overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white"
				/>
			</article>

			<!-- Orange Btn -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl">#3. Orange ( Reset , 초기화 ,정지 등 )</p>
					<p class="">추가 여백이나 width , padding 조절이 필요할 수 있습니다.</p>
				</div>
				<!-- Content -->
				<container class="flex items-center justify-start">
					<ButtonOrange
						addClass=""
						addStyle=""
						type="button"
						caption="button"
						onClick={(event) => {
							console.log(event);
						}}
					/>
				</container>

				<CodeBlock
					language="html"
					code={`
			<ButtonRed
 addClass=""
 addStyle=""
 type="button"
 caption="button"
 onClick={(event) => {
 console.log(event);
}}
/>
					`}
					class="overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white"
				/>
			</article>

			<!-- Alarm Btn _ 알람 숫자가 없는 Btn -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl">#4. Alarm Btn _ 알람 숫자가 없는 Btn</p>
					<p class="">추가 여백이나 width , padding 조절이 필요할 수 있습니다.</p>
				</div>
				<!-- Content -->
				<container class="flex items-center justify-start">
					<AlarmButton />
				</container>

				<CodeBlock
					language="html"
					code={`
<AlarmButton />
								`}
					class="overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white"
				/>
			</article>

			<!-- Alarm Btn -->
			<article class="space-y-4">
				<div class="space-y-2">
					<p class="list-none text-2xl">#5. Alarm Btn _ 알람 숫자가 있는 Btn</p>
					<p class="">추가 여백이나 width , padding 조절이 필요할 수 있습니다.</p>
				</div>
				<!-- Content -->
				<container class="flex items-center justify-start pl-2">
					<AlarmButtonNumber abnormalCount={10} />
				</container>

				<CodeBlock
					language="html"
					code={`
			<AlarmButtonNumber abnormalCount={10} />
											`}
					class="overflow-x-auto rounded-md bg-gray-800 px-5 py-2 text-white"
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
