<script lang="ts">
	//#region Import
	import { enhance } from '$app/forms';

	//#endregion

	//#region State
	//#endregion

	//#region Variable
	//#endregion

	//#region Event Listener
	//#endregion
</script>

<!-- Form Background Color -->
<div
	class="rounded-xl bg-gray-700 px-16 py-10 shadow-lg backdrop-blur-md"
	style="min-width:450px; width:31%; max-width:510px"
>
	<!-- Form Text Size, Color -->
	<div class="text-lg text-white">
		<form use:enhance method="POST">
			<div class="my-12 text-center">
				<img
					class="mx-auto w-72"
					src="https://i.esdrop.com/d/f/KRQCESGJO3/POBFgSGKVB.png"
					alt="logo"
				/>
			</div>
			<p class="mb-4">Please login to your account</p>

			<!-- Id Input -->
			<div class="relative mb-5 rounded-md outline outline-1 outline-gray-300">
				<input
					placeholder=" "
					type="text"
					name="userId"
					class="block w-full appearance-none rounded-md border-0 bg-transparent p-2 pl-3 text-lg focus:outline-none"
				/>

				<label
					class="origin-0 absolute top-0 -z-10 p-2 pl-4 text-lg text-white duration-300"
					for="userId">ID</label
				>
			</div>
			<!-- PassWord Input -->
			<div class="relative mb-5 rounded-md outline outline-1 outline-gray-300">
				<input
					placeholder=" "
					type="password"
					name="password"
					class="block w-full appearance-none rounded-md border-0 bg-transparent p-2 pl-3 text-lg focus:outline-none"
				/>
				<label
					class="origin-0 absolute top-0 -z-10 p-2 pl-4 text-lg text-white duration-300"
					for="userId">Password</label
				>
			</div>

			<!-- <LABEL_INPUT placeholder="ID" style="labelinput" type="text" inputName="userId" />
				<LABEL_INPUT
					placeholder="Password"
					style="labelinput"
					type="password"
					inputName="password"
				/> -->

			<!-- {#if form?.error}
					<div
						class="text-base text-pink-700"
						style="background: #f8d7da;border-color: #f5c6cb;padding: 0.5rem;border-radius: 0.5rem;margin-bottom: 0.7rem;padding-left:1rem;"
					>
						{form.error}
					</div>
				{/if} -->

			<!-- prettier-ignore -->
			<div class="mb-12 pt-1 pb-1 text-center ">
					<!-- 로그인 버튼 -->	
					<button type="submit" class="loginbtn" style="background: linear-gradient(270deg, #66a6ff 0%, #667eea 98.8%)">LOG IN</button>
					<!-- <ROUND_BTN style="loginbtn" caption="LOG IN" type="submit" onClick={null} /> -->

					<a href="#!">Forgot password?</a>
				</div>

			<div class="flex items-center justify-between pb-6">
				<p class="mb-0 mr-2">Don't have an account?</p>
				<!-- 레지스터 버튼 -->
				<button
					type="submit"
					class="inline-block rounded bg-red-600 bg-opacity-80 px-6 py-2.5 text-sm font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-red-600 hover:bg-red-700"
					>RESISTER</button
				>
				<!-- <ROUND_BTN style="registerbtn" caption="REGISTER" type="submit" onClick={null} /> -->
			</div>
		</form>
	</div>
</div>

<style lang="postcss">
	.outline input:focus-within ~ label,
	/* 라벨 위로 올라갔을때 색상 */
	.outline input:not(:placeholder-shown) ~ label {
		@apply z-0 ml-4 -translate-x-4 -translate-y-4 scale-75 transform bg-gray-700 px-1  py-0;
		/* background-color: #4d505a; */
	}

	/* Input 자동완성시 백그라운드 컬러 , Text 컬러 */
	input:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 0px inset;
		-webkit-text-fill-color: #ffffff;
	}
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		transition: background-color 5000s ease-in-out 0s;
	}
</style>
