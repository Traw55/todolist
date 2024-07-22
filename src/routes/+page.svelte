<script lang="ts">
	import dayjs from 'dayjs';
	import "dayjs/locale/ar";

	dayjs.locale("ar");

	let preiod = dayjs().format("a") == "م" ? "مساء" : "صباح";
</script>

<div class="p-16">
	<header class="flex justify-between">
		<div>
			<h1 class="text-4xl mb-2"> {preiod} الخير 👋 </h1>
			<h2 class="text-2xl text-surface-900/50"> 
				{dayjs().format("اليوم ، dddd D MMM YYYY")} 
			</h2>
		</div>
		<div class="bg-white w-32 h-14 "></div>
	</header>
</div>