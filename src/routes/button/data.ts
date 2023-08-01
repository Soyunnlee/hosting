export const blueBtn = {
	title: '#1. Blue Button ',
	info: 'Login, Clear , Susses 등 <br/>추가 여백이나 width , padding 조절이 필요할 수 있습니다.',
	code: `<button
  style="background: linear-gradient(270deg, #66a6ff 0%, #667eea 98.8%);"
  class="rounded from-cyan-500 to-blue-500 px-4 py-1 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
>
  Button
</button>
  `,
	discription: [
		// { name: 'name1', info: 'ddd' },
		// { name: 'name2', info: 'xxx' }
	]
};

export const redBtn = {
	title: '#1. Red Button',
	info: '주의 , Resister , 경고 등<br/>추가 여백이나 width , padding 조절이 필요할 수 있습니다.',
	code: `<button
  class="rounded bg-red-600 px-4 py-1 hover:bg-red-700 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,02)]"
>
  Button
</button>
  `,
	discription: [
		// { name: 'name1', info: 'ddd' },
		// { name: 'name2', info: 'xxx' }
	]
};

export const orangeBtn = {
	title: '#1. Orange Button',
	info: 'Reset , 초기화 ,정지 등<br/>추가 여백이나 width , padding 조절이 필요할 수 있습니다.',
	code: `<button
 class="rounded px-4 py-1 hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,02)]"
 style="background: linear-gradient(278.92deg, #c26b0f 0%, #d96b30 100%);">
 Button
</button>
  `,
	discription: [
		// { name: 'name1', info: 'ddd' },
		// { name: 'name2', info: 'xxx' }
	]
};

export const alarmBtn = {
	title: '#2. Alarm Btn_Dot',
	info: '알람 숫자가 없는 Btn<br/>추가 여백이나 width , padding 조절이 필요할 수 있습니다.<br/><b><i>npm i svelte-hero-icons</i></b>',
	code: `<script>
  import { Icon, Bars3 } from 'svelte-hero-icons';
</script>

<button type="button" class="relative">
  <div class="absolute -left-1 -top-0.5 rounded-full bg-red-700 px-1 py-1" />

  <div class="rounded border border-gray-700 px-2 py-0.5">
    <Icon class="h-6 w-5 stroke-2 text-indigo-600 2xl:h-7 2xl:w-8" src={Bars3} />
  </div>
</button>
`,
	discription: [
		// { name: 'name1', info: 'ddd' },
		// { name: 'name2', info: 'xxx' }
	]
};

export const alarmNumberBtn = {
	title: '#2. Alarm Btn_Number',
	info: '알람 숫자가 있는 Btn<br/>추가 여백이나 width , padding 조절이 필요할 수 있습니다.<br/><b><i>npm i svelte-hero-icons</i></b>',
	code: `<script>
  import { Icon, EllipsisHorizontal } from 'svelte-hero-icons';
</script>

<button type="button" class="relative">
  <div class="absolute -left-2 -top-1 inline-flex items-center justify-center rounded bg-red-700 px-0.5 py-0.5 text-xs leading-none text-white">
    12
  </div>

  <div class="rounded border border-gray-700 px-1.5 py-0.5">
    <Icon class="h-6 w-6  text-indigo-500 " src={EllipsisHorizontal} />
  </div>
</button>
`,
	discription: [
		// { name: 'name1', info: 'ddd' },
		// { name: 'name2', info: 'xxx' }
	]
};

export const designBtn = {
	title: '#3. Design Btn',
	info: '디자인 요소가 들어가 있는 Btn 입니다.<br/>추가 여백이나 width , padding 조절이 필요할 수 있습니다.<br/><b><i>npm i svelte-hero-icons</i></b>',
	code: `<button
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
`,
	discription: [
		{ name: 'name1', info: 'ddd' }
		// { name: 'name2', info: 'xxx' }
	]
};
