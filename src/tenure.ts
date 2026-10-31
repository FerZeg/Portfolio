import { tenure, type Lang } from './cv';

// Keeps the build-time text correct on a static site that isn't rebuilt every month.
const lang = document.documentElement.lang as Lang;
document.querySelectorAll<HTMLElement>('[data-since]').forEach((el) => {
	el.textContent = tenure(el.dataset.since!, lang);
});
