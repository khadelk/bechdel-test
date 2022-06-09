const c = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/index.svelte"),
	() => import("../../src/routes/click-outside.svelte"),
	() => import("../../src/routes/datatest.svelte"),
	() => import("../../src/routes/about.svelte"),
	() => import("../../src/routes/data.svelte"),
	() => import("../../src/routes/test.svelte"),
	() => import("../../src/routes/[id].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/click-outside.svelte
	[/^\/click-outside\/?$/, [c[0], c[3]], [c[1]]],

	// src/routes/datatest.svelte
	[/^\/datatest\/?$/, [c[0], c[4]], [c[1]]],

	// src/routes/about.svelte
	[/^\/about\/?$/, [c[0], c[5]], [c[1]]],

	// src/routes/data.svelte
	[/^\/data\/?$/, [c[0], c[6]], [c[1]]],

	// src/routes/test.svelte
	[/^\/test\/?$/, [c[0], c[7]], [c[1]]],

	// src/routes/[id].svelte
	[/^\/([^/]+?)\/?$/, [c[0], c[8]], [c[1]], (m) => ({ id: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];