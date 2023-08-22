<script>
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	// 홈페이지 접속시 경로 이동
	onMount(() => {
		// window.location.href = '/dashboard';
		goto('/dashboard');
	});
</script>
