<script lang="ts">
  import type { PageProps } from './$types';
  interface ReferenceItem {
    title: string;
    date: string;
    location: string;
    href: string;
  }

  const { data }: PageProps = $props();
  const referenceItems: ReferenceItem[] = data.references;
</script> 

<h1>Johannes Abendroth</h1>

<div class="flex gap-1 flex-wrap">
	{#each referenceItems as item}
		<a class="bg-yellow-200 hover:bg-neutral-100 rounded px-1" href={item.href}>{item.title}</a>
	{/each}
</div>

