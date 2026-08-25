/* =====================================================================
   IMAGING CONTENT — registers each album into a single list.
   To add a new album:
     1. Create a new content-imaging-yourname.js file (copy the pattern
        in content-imaging-travel.js) and load it in index.html.
     2. Add a line below pointing to it: { name: "Your Album", items: ALBUM_YOURNAME }
   ===================================================================== */
const CONTENT_IMAGING = {
  albums: [
    { name: "Travel", items: ALBUM_TRAVEL },
    { name: "Astro", items: ALBUM_ASTRO }
  ]
};
