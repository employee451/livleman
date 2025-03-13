import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
import typography from "npm:@tailwindcss/typography";
import robots from "lume/plugins/robots.ts";
import favicon from "lume/plugins/favicon.ts";

const site = lume({
	src: './src',
	location: new URL("https://livleman.dk")
});

site.use(tailwindcss({
	extensions: ['.vto', '.html'],
	options: {
		plugins: [typography],
	},
}));
site.use(postcss());
site.use(sitemap());
site.use(robots({
	disallow: "*",
}));
site.use(favicon({
	input: "/billeder/mus.png",
}));

site.copy("billeder")

export default site;
