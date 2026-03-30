<script lang="ts">
	const THEME_KEY = 'selected-theme';
	const DARK_THEME = 'dark-theme';

	let isDark = $state(getInitialTheme());

	function getInitialTheme(): boolean {
		if (typeof window === 'undefined') return true;
		const saved = localStorage.getItem(THEME_KEY);
		if (saved) return saved === 'dark';
		if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) return true;
		if (window.matchMedia?.('(prefers-color-scheme: light)').matches) return false;
		return true;
	}

	function toggleTheme() {
		isDark = !isDark;
		document.documentElement.classList.toggle(DARK_THEME, isDark);
		localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
	}

	$effect(() => {
		document.documentElement.classList.toggle(DARK_THEME, isDark);
		localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
	});
</script>

<i
	class="uil {isDark ? 'uil-sun' : 'uil-moon'} change-theme"
	onclick={toggleTheme}
	onkeypress={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleTheme(); }}
	aria-label="Toggle theme"
	role="button"
	tabindex="0"
></i>
