<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.project.title} — Leonardo Manrique</title>
	<meta name="description" content={data.project.description} />
	<meta property="og:title" content={data.project.title} />
	<meta property="og:description" content={data.project.description} />
	<meta property="og:url" content="https://www.leonardomanrique.com/portfolio/{data.project.slug}" />
</svelte:head>

<section class="project section">
	<div class="project__container container">
		<a href="/portfolio" class="project__back">&larr; Back to portfolio</a>
		<article class="project__content">
			<h1 class="project__title">{data.project.title}</h1>
			<div class="project__meta">
				<div class="project__tech">
					{#each data.project.tech as t}
						<span class="project__tech-tag">{t}</span>
					{/each}
				</div>
				<div class="project__links">
					{#if data.project.repo}
						<a href={data.project.repo} target="_blank" rel="noopener noreferrer" class="project__ext-link">
							<i class="uil uil-github-alt"></i> Repository
						</a>
					{/if}
					{#if data.project.live}
						<a href={data.project.live} target="_blank" rel="noopener noreferrer" class="project__ext-link">
							<i class="uil uil-external-link-alt"></i> Live site
						</a>
					{/if}
				</div>
			</div>
			<div class="prose">
				<data.project.content />
			</div>
		</article>
	</div>
</section>
