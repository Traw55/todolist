<script lang="ts">
  import {
    ListBox,
    ListBoxItem,
    popup,
    type PopupSettings,
  } from "@skeletonlabs/skeleton";
  import dayjs from "dayjs";
  import "dayjs/locale/ar";
  import { filter } from "$lib/stores/filter";

  dayjs.locale("ar");

  let preiod = dayjs().format("a") == "م" ? "مساء" : "صباح";

  const popupCombobox: PopupSettings = {
    event: "click",
    target: "popupCombobox",
    placement: "bottom",
    closeQuery: ".listbox-item",
    state: (e: Record<string, boolean>) => {
      if (e.state) {
        document.getElementById('arrow')?.classList.add('rotate-90');
      } else {
        document.getElementById('arrow')?.classList.remove('rotate-90');
      }
    },
  };
</script>

<header class="flex justify-between">
  <div>
    <h1 class="text-3xl lg:text-4xl mb-2">{preiod} الخير 👋</h1>
    <h2 class="text-lg text-surface-900">
      {dayjs().format("اليوم ، dddd D MMM YYYY")}
    </h2>
  </div>
  <!-- py-3 ممكن اعدله بعدين  -->
  <button
    class="btn variant-filled-secondary w-36 px-2 h-fit py-3 justify-between"
    use:popup={popupCombobox}
  >
    <span>{$filter}</span>
    <span class="!m-0">
      <svg
        id="arrow"
        class="w-8 transition-all"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        ><path
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
          d="m7 10l5 5l5-5"
        /></svg
      >
    </span>
  </button>

  <div class="card w-48 shadow-xl py-2" data-popup="popupCombobox">
    <ListBox rounded="rounded-none" active="variant-filled-primary">
      <ListBoxItem bind:group={$filter} name="medium" value="جميع المهام"
        >جميع المهام</ListBoxItem
      >
      <ListBoxItem bind:group={$filter} name="medium" value="مهام اليوم"
        >مهام اليوم</ListBoxItem
      >
    </ListBox>
    <div class="arrow bg-surface-100-800-token" />
  </div>
</header>
