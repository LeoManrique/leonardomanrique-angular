<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Portfolio — Leonardo Manrique</title>
	<meta name="description" content="Projects and recent work by Leonardo Manrique." />
	<meta property="og:title" content="Portfolio — Leonardo Manrique" />
	<meta property="og:description" content="Projects and recent work by Leonardo Manrique." />
	<meta property="og:url" content="https://www.leonardomanrique.com/portfolio" />
</svelte:head>

<section class="portfolio section" id="portfolio">
	<h2 class="section__title">Portfolio</h2>
	<span class="section__subtitle">My recent work</span>

	<div class="portfolio__container container">
		{#if data.projects.length === 0}
			<p class="portfolio__empty">No projects yet.</p>
		{:else}
			<div class="portfolio__grid">
				{#each data.projects as project}
					<a href="/portfolio/{project.slug}" class="portfolio__link">
						<article class="portfolio__card">
							<h3 class="portfolio__title">{project.title}</h3>
							<p class="portfolio__description">{project.description}</p>
							<div class="portfolio__tech">
								{#each project.tech as t}
									<span class="portfolio__tech-tag">{t}</span>
								{/each}
							</div>
						</article>
					</a>
				{/each}
			</div>
		{/if}
	</div>
</section>
