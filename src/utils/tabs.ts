export class TabUtils {
  static switchTab(targetId: string) {
    const tabContents = document.querySelectorAll('[data-content]');
    const tabs = document.querySelectorAll('[data-target]');
    const target = document.querySelector(targetId);

    // Remove active class from all tab contents
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('qualification__active');
    });

    // Remove active class from all tabs
    tabs.forEach(tab => {
      tab.classList.remove('qualification__active');
    });

    // Add active class to target content
    if (target) {
      target.classList.add('qualification__active');
    }

    // Add active class to clicked tab
    const clickedTab = document.querySelector(`[data-target="${targetId}"]`);
    if (clickedTab) {
      clickedTab.classList.add('qualification__active');
    }
  }

  static initializeTabs() {
    const tabs = document.querySelectorAll('[data-target]');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = (tab as HTMLElement).dataset.target;
        if (target) {
          TabUtils.switchTab(target);
        }
      });
    });
  }
}
