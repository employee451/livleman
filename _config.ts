import lume from "lume/mod.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
import typography from "npm:@tailwindcss/typography";

const site = lume({
	src: './src',
	location: new URL("https://post-post.dk")
});

site.use(tailwindcss({
	extensions: ['.vto', '.html'],
	options: {
		plugins: [typography],
	},
}));
site.use(postcss());
site.use(sitemap());

site.copy("billeder/baggrund.gif")
site.copy("billeder/blomster.png")

export default site;
