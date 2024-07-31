<script lang="ts">
  import Header from "./Header.svelte";
  import TaskInput from "$lib/TaskInput.svelte";
  import TaskLest from "$lib/TaskList.svelte";
</script>

<svelte:head> 
  <title> متتبع المهام </title>
</svelte:head>

<div
  class="p-2 sm:p-4 pt-8 md:p-8 lg:p-12 xl:p-16 flex flex-col gap-8 max-w-screen-lg mx-auto"
>
  <Header />
  <TaskInput />
  <TaskLest />
</div>
