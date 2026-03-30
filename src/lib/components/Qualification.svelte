<script lang="ts">
	interface QualificationItem {
		title: string;
		subtitle: string;
		date: string;
		position: 'left' | 'right';
	}

	interface QualificationData {
		work: QualificationItem[];
		education: QualificationItem[];
	}

	type TabType = 'work' | 'education';

	let data: QualificationData | null = $state(null);
	let loading = $state(true);
	let error = $state(false);
	let activeTab: TabType = $state('work');

	async function fetchData() {
		try {
			const res = await fetch('/assets/data/qualification.json');
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

<section class="qualification section" id="qualification">
	{#if loading}
		<div class="container loading">Loading qualifications</div>
	{:else if error}
		<div class="container">Error loading qualification information.</div>
	{:else if data}
		<h2 class="section__title">Qualification</h2>

		<div class="qualification__container container">
			<div class="qualification__tabs">
				<div
					class="qualification__button button--flex"
					class:qualification__active={activeTab === 'work'}
					onclick={() => activeTab = 'work'}
					onkeypress={() => activeTab = 'work'}
					role="button"
					tabindex="0"
				>
					<i class="uil uil-briefcase-alt qualification__icon"></i>
					Work experience
				</div>
				<div
					class="qualification__button button--flex"
					class:qualification__active={activeTab === 'education'}
					onclick={() => activeTab = 'education'}
					onkeypress={() => activeTab = 'education'}
					role="button"
					tabindex="0"
				>
					<i class="uil uil-graduation-cap qualification__icon"></i>
					Education
				</div>
			</div>

			<div class="qualification__sections">
				<div class="qualification__content" class:qualification__active={activeTab === 'work'} data-content>
					{#each data.work as item, index}
						{@const isLast = index === data.work.length - 1}
						{#if item.position === 'left'}
							<div class="qualification__data qualification__left">
								<div>
									<h3 class="qualification__title">{item.title}</h3>
									<span class="qualification__subtitle">{item.subtitle}</span>
									<div class="qualification__calendar">
										<i class="uil uil-calendar-alt"></i>
										{item.date}
									</div>
								</div>
								<div>
									<span class="qualification__rounder"></span>
									{#if !isLast}<span class="qualification__line"></span>{/if}
								</div>
							</div>
						{:else}
							<div class="qualification__data qualification__right">
								<div></div>
								<div>
									<span class="qualification__rounder"></span>
									{#if !isLast}<span class="qualification__line"></span>{/if}
								</div>
								<div>
									<h3 class="qualification__title">{item.title}</h3>
									<span class="qualification__subtitle">{item.subtitle}</span>
									<div class="qualification__calendar">
										<i class="uil uil-calendar-alt"></i>
										{item.date}
									</div>
								</div>
							</div>
						{/if}
					{/each}
				</div>

				<div class="qualification__content" class:qualification__active={activeTab === 'education'} data-content>
					{#each data.education as item, index}
						{@const isLast = index === data.education.length - 1}
						{#if item.position === 'left'}
							<div class="qualification__data qualification__left">
								<div>
									<h3 class="qualification__title">{item.title}</h3>
									<span class="qualification__subtitle">{item.subtitle}</span>
									<div class="qualification__calendar">
										<i class="uil uil-calendar-alt"></i>
										{item.date}
									</div>
								</div>
								<div>
									<span class="qualification__rounder"></span>
									{#if !isLast}<span class="qualification__line"></span>{/if}
								</div>
							</div>
						{:else}
							<div class="qualification__data qualification__right">
								<div></div>
								<div>
									<span class="qualification__rounder"></span>
									{#if !isLast}<span class="qualification__line"></span>{/if}
								</div>
								<div>
									<h3 class="qualification__title">{item.title}</h3>
									<span class="qualification__subtitle">{item.subtitle}</span>
									<div class="qualification__calendar">
										<i class="uil uil-calendar-alt"></i>
										{item.date}
									</div>
								</div>
							</div>
						{/if}
					{/each}
				</div>
			</div>
		</div>
	{/if}
</section>
