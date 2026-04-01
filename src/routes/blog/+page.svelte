<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>Blog — Leonardo Manrique</title>
	<meta name="description" content="Thoughts and learnings from Leonardo Manrique on software development." />
	<meta property="og:title" content="Blog — Leonardo Manrique" />
	<meta property="og:description" content="Thoughts and learnings from Leonardo Manrique on software development." />
	<meta property="og:url" content="https://www.leonardomanrique.com/blog" />
</svelte:head>

<section class="blog section" id="blog">
	<h2 class="section__title">Blog</h2>
	<span class="section__subtitle">Thoughts and learnings</span>

	<div class="blog__container container">
		{#if data.posts.length === 0}
			<p class="blog__empty">No posts yet.</p>
		{:else}
			<ul class="blog__list">
				{#each data.posts as post}
					<li class="blog__item">
						<a href="/blog/{post.slug}" class="blog__link">
							<article class="blog__card">
								<h3 class="blog__title">{post.title}</h3>
								<p class="blog__description">{post.description}</p>
								<div class="blog__meta">
									<time class="blog__date" datetime={post.date}>
										{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
									</time>
									<div class="blog__tags">
										{#each post.tags as tag}
											<span class="blog__tag">{tag}</span>
										{/each}
									</div>
								</div>
							</article>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</section>
