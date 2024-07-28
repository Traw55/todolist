<script lang="ts">
	import Header from "./Header.svelte";
	import {name} from "$lib/stores/name";

	name.update((name: String) => {
		return name +"1";
	});

	console.log($name);
</script>

<div class="p-16 flex flex-col gap-8">
	<Header />
	<div class="input-group input-group-divider flex justify-between">
		<input class="flex-1" type="search" placeholder="عنوان المهمة" />
		<button class="variant-filled-success">إضافة</button>
	</div>
</div>