import blog, { ga, redirects } from "https://deno.land/x/blog@0.4.2/blog.tsx";

blog({
  title: "20yuteo.log",
  description: "東京でエンジニアをしています。ご連絡はtwitterで。",
  // avatar: "https://deno-avatar.deno.dev/avatar/blog.svg",
  avatar: "./favicons/eto_ushi_head.png",
  avatarClass: "rounded-full",
  author: "An author",
  links: [
    { title: "GitHub", url: "https://github.com/20yuteo" },
    { title: "Twitter", url: "https://twitter.com/20yuteo" }
  ],
  lang: "ja",
  // middlewares: [

    // If you want to set up Google Analytics, paste your GA key here.
    // ga("UA-XXXXXXXX-X"),

    // If you want to provide some redirections, you can specify them here,
    // pathname specified in a key will redirect to pathname in the value.
    // redirects({
    //  "/hello_world.html": "/hello_world",
    // }),

  // ]
});
