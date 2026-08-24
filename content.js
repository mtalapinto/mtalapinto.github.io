/* =====================================================================
   SITE CONTENT
   ---------------------------------------------------------------------
   Edit everything in this file to update the website. You don't need
   to touch index.html at all for text changes — just edit the values
   below (keep the quotes " " around text) and save.
   ===================================================================== */

const CONTENT = {

  // ---- Hero ----------------------------------------------------------
  name: "Marcelo Tala Pinto",
  tagline: "Research · Code · Sound",

  // ---- About -----------------------------------------------------------
  about: {
    // Add or remove paragraphs freely — each string becomes its own <p>
    paragraphs: [
      "I work designing and building instruments to discover and characterize exoplanets. My work has been focused in echelle spectroscopy and the discovery of Warm Jupiters.",
      "I obtained my BSc. and MSc. in Astrophysics degrees at the Pontificia Universidad Católica de Chile, working in the development of the FIDEOS instrument for the ESO 1m Telescope in La Silla Observatory."
    ],
    // Short facts shown in the right-hand column
    stats: [
      { label: "Based in", value: "Columbus, OH, USA" },
      { label: "Focus", value: "Exoplanet instrumentation" },
      { label: "Currently", value: "Wavelength calibration of iLocater" },
      { label: "Reachable", value: "see contact below" }
    ]
  },

  // ---- Research timeline ----------------------------------------------
  // One entry per paper / project / role. Order top-to-bottom = newest first.
  // "link" is optional — remove it or leave as "" to hide the "Read the paper" link.
  research: [
    {
      year: "2026",
      title: "Title of your most recent paper or project",
      venue: "Venue / journal / conference",
      description: "One or two lines on what the work is about and why it matters — plain language, no abstract-speak.",
      link: "#"
    },
    {
      year: "2025",
      title: "Second research entry",
      venue: "Venue / journal / conference",
      description: "Short description of scope, method, or finding.",
      link: "#"
    },
    {
      year: "2023–2024",
      title: "Earlier work, thesis, or research role",
      venue: "Institution / lab",
      description: "Context on where this sits in your trajectory.",
      link: ""
    }
  ],

  // ---- Code / GitHub projects ------------------------------------------
  code: {
    githubProfileUrl: "https://github.com/mtalapinto",
    repos: [
      { name: "repo-name-one", desc: "One line describing what this project does and who it's for.", lang: "Python", stars: 12, url: "#" },
      { name: "repo-name-two", desc: "Short, plain description of the tool or experiment.", lang: "JavaScript", stars: 4, url: "#" },
      { name: "repo-name-three", desc: "What problem it solves in one sentence.", lang: "Rust", stars: 1, url: "#" }
    ]
  },

  // ---- Music -------------------------------------------------------------
  music: {
    tracks: [
      { title: "Track or video title one", url: "#" },
      { title: "Track or video title two", url: "#" },
      { title: "Track or video title three", url: "#" }
    ]
  },

  // ---- Imaging / photography --------------------------------------------
  imaging: {
    items: [
      { img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=60", caption: "Caption or location — 2026", url: "#" },
      { img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=60", caption: "Caption or location — 2025", url: "#" },
      { img: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=600&q=60", caption: "Caption or location — 2025", url: "#" }
    ]
  },

  // ---- Contact / footer ----------------------------------------------------
  contact: {
    intro: "For research collaborations, project inquiries, gigs, or anything else — reach out directly.",
    email: "mtalapinto@gmail.com / tala.1@osu.edu",
    githubUrl: "https://github.com/mtalapinto",
    youtubeUrl: "https://youtube.com/@yourchannel",
    copyrightLine: "Marcelo Tala Pinto — © 2026"
  }

};
