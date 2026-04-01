<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.post.title} — Leonardo Manrique</title>
	<meta name="description" content={data.post.description} />
	<meta property="og:title" content={data.post.title} />
	<meta property="og:description" content={data.post.description} />
	<meta property="og:url" content="https://www.leonardomanrique.com/blog/{data.post.slug}" />
</svelte:head>

<section class="post section">
	<div class="post__container container">
		<a href="/blog" class="post__back">&larr; Back to blog</a>
		<article class="post__content">
			<h1 class="post__title">{data.post.title}</h1>
			<div class="post__meta">
				<time class="post__date" datetime={data.post.date}>
					{new Date(data.post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
				</time>
				<div class="post__tags">
					{#each data.post.tags as tag}
						<span class="post__tag">{tag}</span>
					{/each}
				</div>
			</div>
			<div class="prose">
				<data.post.content />
			</div>
		</article>
	</div>
</section>
