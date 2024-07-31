<script lang="ts">
  import dayjs from "dayjs";
  import { tasks } from "./stores/tasks";
  import relativeTime from "dayjs/plugin/relativeTime";
  import TaskListItems from "./TaskListItems.svelte";

  dayjs.extend(relativeTime);
</script>

<ol class="gap-2 flex flex-col">
    <h3> المهام المتبقية: </h3>
    <TaskListItems doneTask ={false}/> 
</ol>
<ol class="gap-2 flex flex-col">
    <h3> المهام المكتملة: </h3>
    <TaskListItems doneTask ={true}/>
 </ol>
