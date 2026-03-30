<script lang="ts">
	interface SocialLink {
		name: string;
		url: string;
		icon: string;
	}

	interface HomeData {
		title: string;
		subtitle: string;
		description: string;
		socialLinks: SocialLink[];
		profileImage: string;
	}

	let data: HomeData | null = $state(null);
	let loading = $state(true);
	let error = $state(false);

	async function fetchData() {
		try {
			const res = await fetch('/assets/data/home.json');
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

<section class="home section" id="home">
	{#if loading}
		<div class="container loading">Loading</div>
	{:else if error}
		<div class="container">Error loading home information.</div>
	{:else if data}
		<div class="home__container container grid">
			<div class="home__content grid">
				<div class="home__social">
					{#each data.socialLinks as link}
						<a
							href={link.url}
							target="_blank"
							rel="noopener noreferrer"
							class="home__social-icon"
							aria-label={link.name}
						>
							<i class="uil {link.icon}"></i>
						</a>
					{/each}
				</div>

				<div class="home__img">
					<svg class="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
						<defs>
							<clipPath id="clip0">
								<path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
								130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
								97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
								0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"/>
							</clipPath>
						</defs>
						<path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
						165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
						129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
						-0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
						fill="var(--first-color)"/>
						<image class="home__blob-img" href={data.profileImage || '/assets/img/profile.png'} clip-path="url(#clip0)"/>
					</svg>
				</div>

				<div class="home__data">
					<h1 class="home__title">{data.title || "Hi, I'm Leonardo"}</h1>
					<h3 class="home__subtitle">{data.subtitle || 'Backend Developer'}</h3>
					<p class="home__description">
						{data.description || 'High level experience in software development knowledge, producing quality work.'}
					</p>
				</div>
			</div>
		</div>
	{/if}
</section>
