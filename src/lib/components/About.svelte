<script lang="ts">
	interface AboutData {
		title: string;
		subtitle: string;
		description: string;
		resume: string;
	}

	let data: AboutData | null = $state(null);
	let loading = $state(true);
	let error = $state(false);

	async function fetchData() {
		try {
			const res = await fetch('/assets/data/about.json');
			if (!res.ok) throw new Error();
			data = await res.json();
		} catch {
			error = true;
		} finally {
			loading = false;
		}
	}

	$effect(() => { fetchData(); });
</script>

<section class="about section" id="about">
	{#if loading}
		<div class="container loading">Loading</div>
	{:else if error}
		<div class="container">Error loading about information.</div>
	{:else if data}
		<h2 class="section__title">{data.title || 'About Me'}</h2>

		<div class="about__container container grid">
			<div class="about__data">
				<p class="about__description">
					{data.description || 'Loading description...'}
				</p>

				<div class="about__buttons" style="display: flex; justify-content: center; width: 100%">
					{#if data.resume}
						<a
							href={data.resume}
							class="button button--flex"
							target="_blank"
							rel="noopener noreferrer"
						>
							See Full Resume<i class="uil uil-cloud-download button__icon"></i>
						</a>
					{/if}
				</div>
			</div>
		</div>
	{/if}
</section>
