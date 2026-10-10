// --------------------
// WORD DATA
// --------------------
const wordSets = {
  controlled_or: [
    { word: "fort", parts: ["f", "or", "t"], image: "zimages/controlledr_or/fort" },
    { word: "porch", parts: ["p", "or", "ch"], image: "zimages/controlledr_or/porch" },
    { word: "short", parts: ["sh", "or", "t"], image: "zimages/controlledr_or/short" },
    { word: "sport", parts: ["sp", "or", "t"], image: "zimages/controlledr_or/sport" },
    { word: "stork", parts: ["st", "or", "k"], image: "zimages/controlledr_or/stork" },
    { word: "storm", parts: ["st", "or", "m"], image: "zimages/controlledr_or/storm" },
    { word: "sword", parts: ["s", "w", "or", "d"], image: "zimages/controlledr_or/sword" },
    { word: "thorn", parts: ["th", "or", "n"], image: "zimages/controlledr_or/thorn" },

    // -------------------------
    // ⭐ NEW WORDS — OR
    // -------------------------
    { word: "corn", parts: ["c", "or", "n"], image: "zimages/controlledr_or/corn" },              // new word
    { word: "fork", parts: ["f", "or", "k"], image: "zimages/controlledr_or/fork" },              // new word
    { word: "horn", parts: ["h", "or", "n"], image: "zimages/controlledr_or/horn" },              // new word
    { word: "north", parts: ["n", "or", "th"], image: "zimages/controlledr_or/north" },          // new word
    { word: "torch", parts: ["t", "or", "ch"], image: "zimages/controlledr_or/torch" },          // new word
    { word: "torn", parts: ["t", "or", "n"], image: "zimages/controlledr_or/torn" },              // new word
    { word: "worn", parts: ["w", "or", "n"], image: "zimages/controlledr_or/worn" },              // new word
    { word: "pork", parts: ["p", "or", "k"], image: "zimages/controlledr_or/pork" },              // new word
    { word: "cord", parts: ["c", "or", "d"], image: "zimages/controlledr_or/cord" },              // new word
    { word: "sort", parts: ["s", "or", "t"], image: "zimages/controlledr_or/sort" },              // new word
    { word: "snort", parts: ["sn", "or", "t"], image: "zimages/controlledr_or/snort" },          // new word
    { word: "stormy", parts: ["st", "or", "m", "y"], image: "zimages/controlledr_or/stormy" },   // new word

    // -------------------------
    // ⭐ EXTRA NEW WORDS — OR
    // -------------------------
    { word: "born", parts: ["b", "or", "n"], image: "zimages/controlledr_or/born" }, // new word
    { word: "form", parts: ["f", "or", "m"], image: "zimages/controlledr_or/form" }, // new word
    { word: "story", parts: ["st", "or", "y"], image: "zimages/controlledr_or/story" }, // new word
    { word: "store", parts: ["st", "or", "e"], image: "zimages/controlledr_or/store" }, // new word
    { word: "more", parts: ["m", "or", "e"], image: "zimages/controlledr_or/more" }, // new word
    { word: "ignore", parts: ["i", "g", "n", "or", "e"], image: "zimages/controlledr_or/ignore" }, // new word
    { word: "explore", parts: ["e", "x", "pl", "or", "e"], image: "zimages/controlledr_or/explore" }, // new word
    { word: "score", parts: ["sc", "or", "e"], image: "zimages/controlledr_or/score" }, // new word
    { word: "adore", parts: ["a", "d", "or", "e"], image: "zimages/controlledr_or/adore" } // new word
  ],

  controlled_ir: [
    { word: "dirt", parts: ["d", "ir", "t"], image: "zimages/controlledr_ir/dirt" },
    { word: "first", parts: ["f", "ir", "s", "t"], image: "zimages/controlledr_ir/first" },
    { word: "shirt", parts: ["sh", "ir", "t"], image: "zimages/controlledr_ir/shirt" },
    { word: "skirt", parts: ["sk", "ir", "t"], image: "zimages/controlledr_ir/skirt" },
    { word: "stir", parts: ["s", "t", "ir"], image: "zimages/controlledr_ir/stir" },
    { word: "third", parts: ["th", "ir", "d"], image: "zimages/controlledr_ir/third" },
    { word: "twirl", parts: ["tw", "ir", "l"], image: "zimages/controlledr_ir/twirl" },
    { word: "squirt", parts: ["squ", "ir", "t"], image: "zimages/controlledr_ir/squirt" },

    // -------------------------
    // ⭐ NEW WORDS — IR
    // -------------------------
    { word: "bird", parts: ["b", "ir", "d"], image: "zimages/controlledr_ir/bird" },              // new word
    { word: "girl", parts: ["g", "ir", "l"], image: "zimages/controlledr_ir/girl" },              // new word
    { word: "firm", parts: ["f", "ir", "m"], image: "zimages/controlledr_ir/firm" },              // new word
    { word: "chirp", parts: ["ch", "ir", "p"], image: "zimages/controlledr_ir/chirp" },          // new word
    { word: "birth", parts: ["b", "ir", "th"], image: "zimages/controlledr_ir/birth" },          // new word
    { word: "circle", parts: ["c", "ir", "c", "l", "e"], image: "zimages/controlledr_ir/circle" },   // new word
    { word: "dirty", parts: ["d", "ir", "t", "y"], image: "zimages/controlledr_ir/dirty" },      // new word
    { word: "thirst", parts: ["th", "ir", "s", "t"], image: "zimages/controlledr_ir/thirst" },       // new word
    { word: "swirl", parts: ["sw", "ir", "l"], image: "zimages/controlledr_ir/swirl" },          // new word
    { word: "thirty", parts: ["th", "ir", "t", "y"], image: "zimages/controlledr_ir/thirty" }, // new word
    { word: "dirty", parts: ["d", "ir", "t", "y"], image: "zimages/controlledr_ir/dirty" } // new word
  ],


  // --------------------
  // CONTROLLED R — AR
  // --------------------
  controlled_ar: [
    { word: "car", parts: ["c", "ar"], image: "zimages/controlledr_ar/car" },
    { word: "jar", parts: ["j", "ar"], image: "zimages/controlledr_ar/jar" },
    { word: "star", parts: ["st", "ar"], image: "zimages/controlledr_ar/star" },
    { word: "bar", parts: ["b", "ar"], image: "zimages/controlledr_ar/bar" },
    { word: "far", parts: ["f", "ar"], image: "zimages/controlledr_ar/far" },
    { word: "arm", parts: ["ar", "m"], image: "zimages/controlledr_ar/arm" },
    { word: "art", parts: ["ar", "t"], image: "zimages/controlledr_ar/art" },
    { word: "cart", parts: ["c", "ar", "t"], image: "zimages/controlledr_ar/cart" },
    { word: "card", parts: ["c", "ar", "d"], image: "zimages/controlledr_ar/card" },
    { word: "yard", parts: ["y", "ar", "d"], image: "zimages/controlledr_ar/yard" },
    { word: "hard", parts: ["h", "ar", "d"], image: "zimages/controlledr_ar/hard" },
    { word: "park", parts: ["p", "ar", "k"], image: "zimages/controlledr_ar/park" },
    { word: "dark", parts: ["d", "ar", "k"], image: "zimages/controlledr_ar/dark" },
    { word: "bark", parts: ["b", "ar", "k"], image: "zimages/controlledr_ar/bark" },
    { word: "shark", parts: ["sh", "ar", "k"], image: "zimages/controlledr_ar/shark" },
    { word: "spark", parts: ["sp", "ar", "k"], image: "zimages/controlledr_ar/spark" },
    { word: "farm", parts: ["f", "ar", "m"], image: "zimages/controlledr_ar/farm" },
    { word: "harp", parts: ["h", "ar", "p"], image: "zimages/controlledr_ar/harp" },
    { word: "sharp", parts: ["sh", "ar", "p"], image: "zimages/controlledr_ar/sharp" },
    { word: "scarf", parts: ["sc", "ar", "f"], image: "zimages/controlledr_ar/scarf" },
    { word: "barn", parts: ["b", "ar", "n"], image: "zimages/controlledr_ar/barn" },
    { word: "yarn", parts: ["y", "ar", "n"], image: "zimages/controlledr_ar/yarn" },
    { word: "chart", parts: ["ch", "ar", "t"], image: "zimages/controlledr_ar/chart" },
    { word: "smart", parts: ["sm", "ar", "t"], image: "zimages/controlledr_ar/smart" },
    { word: "start", parts: ["st", "ar", "t"], image: "zimages/controlledr_ar/start" },
    { word: "march", parts: ["m", "ar", "ch"], image: "zimages/controlledr_ar/march" },
    { word: "arch", parts: ["ar", "ch"], image: "zimages/controlledr_ar/arch" },
    { word: "tart", parts: ["t", "ar", "t"], image: "zimages/controlledr_ar/tart" }
  ],

  // --------------------
  // CONTROLLED R — ER
  // --------------------
  controlled_er: [
    { word: "her", parts: ["h", "er"], image: "zimages/controlledr_er/her" },
    { word: "fern", parts: ["f", "er", "n"], image: "zimages/controlledr_er/fern" },
    { word: "herd", parts: ["h", "er", "d"], image: "zimages/controlledr_er/herd" },
    { word: "perch", parts: ["p", "er", "ch"], image: "zimages/controlledr_er/perch" },
    { word: "verb", parts: ["v", "er", "b"], image: "zimages/controlledr_er/verb" },
    { word: "stern", parts: ["st", "er", "n"], image: "zimages/controlledr_er/stern" },
    { word: "clerk", parts: ["cl", "er", "k"], image: "zimages/controlledr_er/clerk" },
    { word: "germ", parts: ["g", "er", "m"], image: "zimages/controlledr_er/germ" },
    { word: "term", parts: ["t", "er", "m"], image: "zimages/controlledr_er/term" },
    { word: "serve", parts: ["s", "er", "v", "e"], image: "zimages/controlledr_er/serve" },
    { word: "nerve", parts: ["n", "er", "v", "e"], image: "zimages/controlledr_er/nerve" },
    { word: "swerve", parts: ["sw", "er", "v", "e"], image: "zimages/controlledr_er/swerve" },
    { word: "tiger", parts: ["t", "i", "g", "er"], image: "zimages/controlledr_er/tiger" },
    { word: "letter", parts: ["l", "e", "tt", "er"], image: "zimages/controlledr_er/letter" },
    { word: "butter", parts: ["b", "u", "tt", "er"], image: "zimages/controlledr_er/butter" },
    { word: "ladder", parts: ["l", "a", "dd", "er"], image: "zimages/controlledr_er/ladder" },
    { word: "hammer", parts: ["h", "a", "mm", "er"], image: "zimages/controlledr_er/hammer" },
    { word: "river", parts: ["r", "i", "v", "er"], image: "zimages/controlledr_er/river" },
    { word: "sister", parts: ["s", "i", "s", "t", "er"], image: "zimages/controlledr_er/sister" },
    { word: "winter", parts: ["w", "i", "n", "t", "er"], image: "zimages/controlledr_er/winter" },
    { word: "spider", parts: ["sp", "i", "d", "er"], image: "zimages/controlledr_er/spider" },
    { word: "flower", parts: ["fl", "ow", "er"], image: "zimages/controlledr_er/flower" },
    { word: "dinner", parts: ["d", "i", "nn", "er"], image: "zimages/controlledr_er/dinner" },
    { word: "number", parts: ["n", "u", "m", "b", "er"], image: "zimages/controlledr_er/number" },
    { word: "silver", parts: ["s", "i", "l", "v", "er"], image: "zimages/controlledr_er/silver" },
    { word: "zipper", parts: ["z", "i", "pp", "er"], image: "zimages/controlledr_er/zipper" },
    { word: "monster", parts: ["m", "o", "n", "st", "er"], image: "zimages/controlledr_er/monster" },
    { word: "finger", parts: ["f", "i", "ng", "er"], image: "zimages/controlledr_er/finger" }
  ],

  // --------------------
  // CONTROLLED R — UR
  // --------------------
  controlled_ur: [
    { word: "fur", parts: ["f", "ur"], image: "zimages/controlledr_ur/fur" },
    { word: "burn", parts: ["b", "ur", "n"], image: "zimages/controlledr_ur/burn" },
    { word: "turn", parts: ["t", "ur", "n"], image: "zimages/controlledr_ur/turn" },
    { word: "hurt", parts: ["h", "ur", "t"], image: "zimages/controlledr_ur/hurt" },
    { word: "curl", parts: ["c", "ur", "l"], image: "zimages/controlledr_ur/curl" },
    { word: "surf", parts: ["s", "ur", "f"], image: "zimages/controlledr_ur/surf" },
    { word: "church", parts: ["ch", "ur", "ch"], image: "zimages/controlledr_ur/church" },
    { word: "churn", parts: ["ch", "ur", "n"], image: "zimages/controlledr_ur/churn" },
    { word: "burp", parts: ["b", "ur", "p"], image: "zimages/controlledr_ur/burp" },
    { word: "purr", parts: ["p", "ur", "r"], image: "zimages/controlledr_ur/purr" },
    { word: "purse", parts: ["p", "ur", "s", "e"], image: "zimages/controlledr_ur/purse" },
    { word: "nurse", parts: ["n", "ur", "s", "e"], image: "zimages/controlledr_ur/nurse" },
    { word: "curve", parts: ["c", "ur", "v", "e"], image: "zimages/controlledr_ur/curve" },
    { word: "blur", parts: ["bl", "ur"], image: "zimages/controlledr_ur/blur" },
    { word: "curb", parts: ["c", "ur", "b"], image: "zimages/controlledr_ur/curb" },
    { word: "turtle", parts: ["t", "ur", "t", "l", "e"], image: "zimages/controlledr_ur/turtle" },
    { word: "purple", parts: ["p", "ur", "p", "l", "e"], image: "zimages/controlledr_ur/purple" },
    { word: "burger", parts: ["b", "ur", "g", "er"], image: "zimages/controlledr_ur/burger" },
    { word: "turkey", parts: ["t", "ur", "k", "ey"], image: "zimages/controlledr_ur/turkey" },
    { word: "turf", parts: ["t", "ur", "f"], image: "zimages/controlledr_ur/turf" },
    { word: "burst", parts: ["b", "ur", "s", "t"], image: "zimages/controlledr_ur/burst" },
    { word: "slurp", parts: ["sl", "ur", "p"], image: "zimages/controlledr_ur/slurp" },
    { word: "hurdle", parts: ["h", "ur", "d", "l", "e"], image: "zimages/controlledr_ur/hurdle" },
    { word: "return", parts: ["r", "e", "t", "ur", "n"], image: "zimages/controlledr_ur/return" },
    { word: "curly", parts: ["c", "ur", "l", "y"], image: "zimages/controlledr_ur/curly" },
    { word: "turnip", parts: ["t", "ur", "n", "i", "p"], image: "zimages/controlledr_ur/turnip" }
  ],


  // --------------------
  // LONG VOWELS
  // --------------------
  longvowels_a: [
    { word: "brake", parts: ["br", "a", "k", "e"], image: "zimages/longvowels/a_brake" },
    { word: "cape", parts: ["c", "a", "p", "e"], image: "zimages/longvowels/a_cape" },
    { word: "chase", parts: ["ch", "a", "s", "e"], image: "zimages/longvowels/a_chase" },
    { word: "crate", parts: ["cr", "a", "t", "e"], image: "zimages/longvowels/a_crate" },
    { word: "grade", parts: ["gr", "a", "d", "e"], image: "zimages/longvowels/a_grade" },
    { word: "lame", parts: ["l", "a", "m", "e"], image: "zimages/longvowels/a_lame" },
    { word: "mane", parts: ["m", "a", "n", "e"], image: "zimages/longvowels/a_mane" },
    { word: "pane", parts: ["p", "a", "n", "e"], image: "zimages/longvowels/a_pane" },
    { word: "paste", parts: ["p", "a", "s", "t", "e"], image: "zimages/longvowels/a_paste" },
    { word: "save", parts: ["s", "a", "v", "e"], image: "zimages/longvowels/a_save" },
    { word: "tape", parts: ["t", "a", "p", "e"], image: "zimages/longvowels/a_tape" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — A
    // -------------------------
    { word: "grape", parts: ["gr", "a", "p", "e"], image: "zimages/longvowels/a_grape" }, // new word
    { word: "shape", parts: ["sh", "a", "p", "e"], image: "zimages/longvowels/a_shape" }, // new word
    { word: "scale", parts: ["sc", "a", "l", "e"], image: "zimages/longvowels/a_scale" }, // new word
    { word: "plane", parts: ["pl", "a", "n", "e"], image: "zimages/longvowels/a_plane" } // new word
  ],


  // --------------------
  // LONG VOWEL — E  (e_e, open e, ee, ea)  — max 5 sounds
  // --------------------
  longvowels_e: [
    { word: "these", parts: ["th", "e", "s", "e"], image: "zimages/longvowels/e_these" },
    { word: "theme", parts: ["th", "e", "m", "e"], image: "zimages/longvowels/e_theme" },
    { word: "scene", parts: ["sc", "e", "n", "e"], image: "zimages/longvowels/e_scene" },
    { word: "me", parts: ["m", "e"], image: "zimages/longvowels/e_me" },
    { word: "he", parts: ["h", "e"], image: "zimages/longvowels/e_he" },
    { word: "we", parts: ["w", "e"], image: "zimages/longvowels/e_we" },
    { word: "she", parts: ["sh", "e"], image: "zimages/longvowels/e_she" },
    { word: "bee", parts: ["b", "ee"], image: "zimages/longvowels/e_bee" },
    { word: "tree", parts: ["tr", "ee"], image: "zimages/longvowels/e_tree" },
    { word: "feet", parts: ["f", "ee", "t"], image: "zimages/longvowels/e_feet" },
    { word: "seed", parts: ["s", "ee", "d"], image: "zimages/longvowels/e_seed" },
    { word: "sheep", parts: ["sh", "ee", "p"], image: "zimages/longvowels/e_sheep" },
    { word: "green", parts: ["gr", "ee", "n"], image: "zimages/longvowels/e_green" },
    { word: "queen", parts: ["qu", "ee", "n"], image: "zimages/longvowels/e_queen" },
    { word: "wheel", parts: ["wh", "ee", "l"], image: "zimages/longvowels/e_wheel" },
    { word: "teeth", parts: ["t", "ee", "th"], image: "zimages/longvowels/e_teeth" },
    { word: "cheese", parts: ["ch", "ee", "s", "e"], image: "zimages/longvowels/e_cheese" },
    { word: "sleep", parts: ["sl", "ee", "p"], image: "zimages/longvowels/e_sleep" },
    { word: "leaf", parts: ["l", "ea", "f"], image: "zimages/longvowels/e_leaf" },
    { word: "seal", parts: ["s", "ea", "l"], image: "zimages/longvowels/e_seal" },
    { word: "beach", parts: ["b", "ea", "ch"], image: "zimages/longvowels/e_beach" },
    { word: "peach", parts: ["p", "ea", "ch"], image: "zimages/longvowels/e_peach" },
    { word: "eat", parts: ["ea", "t"], image: "zimages/longvowels/e_eat" },
    { word: "sweet", parts: ["sw", "ee", "t"], image: "zimages/longvowels/e_sweet" },
    { word: "meat", parts: ["m", "ea", "t"], image: "zimages/longvowels/e_meat" },
    { word: "sea", parts: ["s", "ea"], image: "zimages/longvowels/e_sea" },
    { word: "team", parts: ["t", "ea", "m"], image: "zimages/longvowels/e_team" },
    { word: "dream", parts: ["dr", "ea", "m"], image: "zimages/longvowels/e_dream" }
  ],

  longvowels_i: [
    { word: "bride", parts: ["br", "i", "d", "e"], image: "zimages/longvowels/i_bride" },
    { word: "pine", parts: ["p", "i", "n", "e"], image: "zimages/longvowels/i_pine" },
    { word: "shine", parts: ["sh", "i", "n", "e"], image: "zimages/longvowels/i_shine" },
    { word: "spine", parts: ["sp", "i", "n", "e"], image: "zimages/longvowels/i_spine" },
    { word: "stripe", parts: ["str", "i", "p", "e"], image: "zimages/longvowels/i_stripe" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — I
    // -------------------------
    { word: "slide", parts: ["sl", "i", "d", "e"], image: "zimages/longvowels/i_slide" }, // new word
    { word: "smile", parts: ["sm", "i", "l", "e"], image: "zimages/longvowels/i_smile" }, // new word
    { word: "while", parts: ["wh", "i", "l", "e"], image: "zimages/longvowels/i_while" }, // new word
    { word: "bribe", parts: ["br", "i", "b", "e"], image: "zimages/longvowels/i_bribe" } // new word
  ],


  longvowels_o: [
    { word: "choke", parts: ["ch", "o", "k", "e"], image: "zimages/longvowels/o_choke" },
    { word: "dome", parts: ["d", "o", "m", "e"], image: "zimages/longvowels/o_dome" },
    { word: "globe", parts: ["gl", "o", "b", "e"], image: "zimages/longvowels/o_globe" },
    { word: "smoke", parts: ["sm", "o", "k", "e"], image: "zimages/longvowels/o_smoke" },
    { word: "stove", parts: ["st", "o", "v", "e"], image: "zimages/longvowels/o_stove" },

    // -------------------------
    // ⭐ EXTRA NEW WORDS — O
    // -------------------------
    { word: "rope", parts: ["r", "o", "p", "e"], image: "zimages/longvowels/o_rope" }, // new word
    { word: "stone", parts: ["st", "o", "n", "e"], image: "zimages/longvowels/o_stone" }, // new word
    { word: "phone", parts: ["ph", "o", "n", "e"], image: "zimages/longvowels/o_phone" }, // new word
    { word: "throne", parts: ["thr", "o", "n", "e"], image: "zimages/longvowels/o_throne" } // new word
  ],


  longvowels_u: [
    { word: "dune", parts: ["d", "u", "n", "e"], image: "zimages/longvowels/u_dune" },
    { word: "flute", parts: ["fl", "u", "t", "e"], image: "zimages/longvowels/u_flute" },
    { word: "mule", parts: ["m", "u", "l", "e"], image: "zimages/longvowels/u_mule" },
    { word: "mute", parts: ["m", "u", "t", "e"], image: "zimages/longvowels/u_mute" },
    { word: "plume", parts: ["pl", "u", "m", "e"], image: "zimages/longvowels/u_plume" },
    { word: "prune", parts: ["pr", "u", "n", "e"], image: "zimages/longvowels/u_prune" },
    { word: "tune", parts: ["t", "u", "n", "e"], image: "zimages/longvowels/u_tune" },
    
    // -------------------------
    // ⭐ EXTRA NEW WORDS — U
    // -------------------------
    { word: "cube", parts: ["c", "u", "b", "e"], image: "zimages/longvowels/u_cube" }, // new word
    { word: "cute", parts: ["c", "u", "t", "e"], image: "zimages/longvowels/u_cute" }, // new word
    { word: "huge", parts: ["h", "u", "g", "e"], image: "zimages/longvowels/u_huge" }, // new word
    { word: "rude", parts: ["r", "u", "d", "e"], image: "zimages/longvowels/u_rude" } // new word
  ],



  // --------------------
  // CONSONANT BLEND L
  // --------------------
  consonantblend_l: [
    { word: "blimp", parts: ["bl", "i", "m", "p"], image: "zimages/consonantblend_l/blimp" },
    { word: "clam", parts: ["cl", "a", "m"], image: "zimages/consonantblend_l/clam" },
    { word: "clap", parts: ["cl", "a", "p"], image: "zimages/consonantblend_l/clap" },
    { word: "clock", parts: ["cl", "o", "ck"], image: "zimages/consonantblend_l/clock" },
    { word: "flag", parts: ["fl", "a", "g"], image: "zimages/consonantblend_l/flag" },
    { word: "flame", parts: ["fl", "a", "m", "e"], image: "zimages/consonantblend_l/flame" },
    { word: "flap", parts: ["fl", "a", "p"], image: "zimages/consonantblend_l/flap" },
    { word: "floss", parts: ["fl", "o", "ss"], image: "zimages/consonantblend_l/floss" },
    { word: "glad", parts: ["gl", "a", "d"], image: "zimages/consonantblend_l/glad" },
    { word: "glass", parts: ["gl", "a", "ss"], image: "zimages/consonantblend_l/glass" },
    { word: "globe", parts: ["gl", "o", "b", "e"], image: "zimages/consonantblend_l/globe" },
    { word: "plug", parts: ["pl", "u", "g"], image: "zimages/consonantblend_l/plug" },
    { word: "sled", parts: ["sl", "e", "d"], image: "zimages/consonantblend_l/sled" },
    { word: "sleep", parts: ["sl", "ee", "p"], image: "zimages/consonantblend_l/sleep" },
    { word: "sleeve", parts: ["sl", "ee", "v", "e"], image: "zimages/consonantblend_l/sleeve" },
    { word: "slide", parts: ["sl", "i", "d", "e"], image: "zimages/consonantblend_l/slide" },
    { word: "slime", parts: ["sl", "i", "m", "e"], image: "zimages/consonantblend_l/slime" },


    { word: "black", parts: ["bl", "a", "ck"], image: "zimages/consonantblend_l/black" }, // new
    { word: "blast", parts: ["bl", "a", "s", "t"], image: "zimages/consonantblend_l/blast" }, // new
    { word: "blend", parts: ["bl", "e", "n", "d"], image: "zimages/consonantblend_l/blend" }, // new
    { word: "blink", parts: ["bl", "i", "n", "k"], image: "zimages/consonantblend_l/blink" }, // new
    { word: "block", parts: ["bl", "o", "ck"], image: "zimages/consonantblend_l/block" }, // new
    { word: "blaze", parts: ["bl", "a", "z", "e"], image: "zimages/consonantblend_l/blaze" }, // new

    { word: "cliff", parts: ["cl", "i", "ff"], image: "zimages/consonantblend_l/cliff" }, // new
    { word: "cling", parts: ["cl", "i", "ng"], image: "zimages/consonantblend_l/cling" }, // new
    { word: "clip", parts: ["cl", "i", "p"], image: "zimages/consonantblend_l/clip" }, // new
    { word: "climb", parts: ["cl", "i", "m", "b"], image: "zimages/consonantblend_l/climb" }, // new
    { word: "clown", parts: ["cl", "ow", "n"], image: "zimages/consonantblend_l/clown" }, // new
    { word: "close", parts: ["cl", "o", "s", "e"], image: "zimages/consonantblend_l/close" }, // new

    { word: "flake", parts: ["fl", "a", "k", "e"], image: "zimages/consonantblend_l/flake" }, // new
    { word: "fling", parts: ["fl", "i", "ng"], image: "zimages/consonantblend_l/fling" }, // new
    { word: "float", parts: ["fl", "oa", "t"], image: "zimages/consonantblend_l/float" }, // new
    { word: "flock", parts: ["fl", "o", "ck"], image: "zimages/consonantblend_l/flock" }, // new
    { word: "flute", parts: ["fl", "u", "t", "e"], image: "zimages/consonantblend_l/flute" }, // new
    { word: "flint", parts: ["fl", "i", "n", "t"], image: "zimages/consonantblend_l/flint" }, // new

    { word: "glove", parts: ["gl", "o", "v", "e"], image: "zimages/consonantblend_l/glove" }, // new
    { word: "glide", parts: ["gl", "i", "d", "e"], image: "zimages/consonantblend_l/glide" }, // new
    { word: "glow", parts: ["gl", "ow"], image: "zimages/consonantblend_l/glow" }, // new
    { word: "gleam", parts: ["gl", "ea", "m"], image: "zimages/consonantblend_l/gleam" }, // new
    { word: "glare", parts: ["gl", "a", "r", "e"], image: "zimages/consonantblend_l/glare" }, // new
    { word: "gloss", parts: ["gl", "o", "ss"], image: "zimages/consonantblend_l/gloss" }, // new

    { word: "place", parts: ["pl", "a", "c", "e"], image: "zimages/consonantblend_l/place" }, // new
    { word: "plant", parts: ["pl", "a", "n", "t"], image: "zimages/consonantblend_l/plant" }, // new
    { word: "plate", parts: ["pl", "a", "t", "e"], image: "zimages/consonantblend_l/plate" }, // new
    { word: "plank", parts: ["pl", "a", "n", "k"], image: "zimages/consonantblend_l/plank" }, // new
    { word: "pluck", parts: ["pl", "u", "ck"], image: "zimages/consonantblend_l/pluck" }, // new
    { word: "plain", parts: ["pl", "ai", "n"], image: "zimages/consonantblend_l/plain" }, // new

    { word: "slam", parts: ["sl", "a", "m"], image: "zimages/consonantblend_l/slam" }, // new
    { word: "slap", parts: ["sl", "a", "p"], image: "zimages/consonantblend_l/slap" }, // new
    { word: "slant", parts: ["sl", "a", "n", "t"], image: "zimages/consonantblend_l/slant" }, // new
    { word: "slick", parts: ["sl", "i", "ck"], image: "zimages/consonantblend_l/slick" }, // new
    { word: "slip", parts: ["sl", "i", "p"], image: "zimages/consonantblend_l/slip" }, // new
    { word: "sloth", parts: ["sl", "o", "th"], image: "zimages/consonantblend_l/sloth" } // new
  ],

  // --------------------
  // CONSONANT BLEND R
  // --------------------
  consonantblend_r: [
    { word: "braid", parts: ["br", "ai", "d"], image: "zimages/consonantblend_r/braid" },
    { word: "brick", parts: ["br", "i", "ck"], image: "zimages/consonantblend_r/brick" },
    { word: "broom", parts: ["br", "oo", "m"], image: "zimages/consonantblend_r/broom" },
    { word: "crate", parts: ["cr", "a", "t", "e"], image: "zimages/consonantblend_r/crate" },
    { word: "cross", parts: ["cr", "o", "ss"], image: "zimages/consonantblend_r/cross" },
    { word: "dress", parts: ["dr", "e", "ss"], image: "zimages/consonantblend_r/dress" },
    { word: "drill", parts: ["dr", "i", "ll"], image: "zimages/consonantblend_r/drill" },
    { word: "drink", parts: ["dr", "i", "n", "k"], image: "zimages/consonantblend_r/drink" },
    { word: "frame", parts: ["fr", "a", "m", "e"], image: "zimages/consonantblend_r/frame" },
    { word: "frost", parts: ["fr", "o", "s", "t"], image: "zimages/consonantblend_r/frost" },
    { word: "grill", parts: ["gr", "i", "ll"], image: "zimages/consonantblend_r/grill" },
    { word: "print", parts: ["pr", "i", "n", "t"], image: "zimages/consonantblend_r/print" },
    { word: "prize", parts: ["pr", "i", "z", "e"], image: "zimages/consonantblend_r/prize" },
    { word: "train", parts: ["tr", "ai", "n"], image: "zimages/consonantblend_r/train" },
    { word: "trash", parts: ["tr", "a", "sh"], image: "zimages/consonantblend_r/trash" },
    { word: "trunk", parts: ["tr", "u", "n", "k"], image: "zimages/consonantblend_r/trunk" },

    { word: "brag", parts: ["br", "a", "g"], image: "zimages/consonantblend_r/brag" }, // new
    { word: "brim", parts: ["br", "i", "m"], image: "zimages/consonantblend_r/brim" }, // new
    { word: "brush", parts: ["br", "u", "sh"], image: "zimages/consonantblend_r/brush" }, // new
    { word: "brass", parts: ["br", "a", "ss"], image: "zimages/consonantblend_r/brass" }, // new
    { word: "bread", parts: ["br", "ea", "d"], image: "zimages/consonantblend_r/bread" }, // new

    { word: "crab", parts: ["cr", "a", "b"], image: "zimages/consonantblend_r/crab" }, // new
    { word: "crack", parts: ["cr", "a", "ck"], image: "zimages/consonantblend_r/crack" }, // new
    { word: "crisp", parts: ["cr", "i", "s", "p"], image: "zimages/consonantblend_r/crisp" }, // new
    { word: "crow", parts: ["cr", "ow"], image: "zimages/consonantblend_r/crow" }, // new
    { word: "crust", parts: ["cr", "u", "s", "t"], image: "zimages/consonantblend_r/crust" }, // new

    { word: "drag", parts: ["dr", "a", "g"], image: "zimages/consonantblend_r/drag" }, // new
    { word: "drip", parts: ["dr", "i", "p"], image: "zimages/consonantblend_r/drip" }, // new
    { word: "droop", parts: ["dr", "oo", "p"], image: "zimages/consonantblend_r/droop" }, // new
    { word: "drain", parts: ["dr", "ai", "n"], image: "zimages/consonantblend_r/drain" }, // new
    { word: "draft", parts: ["dr", "a", "f", "t"], image: "zimages/consonantblend_r/draft" }, // new

    { word: "crab", parts: ["cr", "a", "b"], image: "zimages/consonantblend_r/crab" }, // new
    { word: "crack", parts: ["cr", "a", "ck"], image: "zimages/consonantblend_r/crack" }, // new
    { word: "crisp", parts: ["cr", "i", "s", "p"], image: "zimages/consonantblend_r/crisp" }, // new
    { word: "crow", parts: ["cr", "ow"], image: "zimages/consonantblend_r/crow" }, // new
    { word: "crust", parts: ["cr", "u", "s", "t"], image: "zimages/consonantblend_r/crust" }, // new

    { word: "drag", parts: ["dr", "a", "g"], image: "zimages/consonantblend_r/drag" }, // new
    { word: "drip", parts: ["dr", "i", "p"], image: "zimages/consonantblend_r/drip" }, // new
    { word: "droop", parts: ["dr", "oo", "p"], image: "zimages/consonantblend_r/droop" }, // new
    { word: "drain", parts: ["dr", "ai", "n"], image: "zimages/consonantblend_r/drain" }, // new
    { word: "draft", parts: ["dr", "a", "f", "t"], image: "zimages/consonantblend_r/draft" }, // new

    { word: "fry", parts: ["fr", "y"], image: "zimages/consonantblend_r/fry" }, // new
    { word: "fresh", parts: ["fr", "e", "sh"], image: "zimages/consonantblend_r/fresh" }, // new
    { word: "friend", parts: ["fr", "ie", "nd"], image: "zimages/consonantblend_r/friend" }, // new
    { word: "freight", parts: ["fr", "ei", "gh", "t"], image: "zimages/consonantblend_r/freight" }, // new
    { word: "fruit", parts: ["fr", "ui", "t"], image: "zimages/consonantblend_r/fruit" }, // new

    { word: "grab", parts: ["gr", "a", "b"], image: "zimages/consonantblend_r/grab" }, // new
    { word: "grain", parts: ["gr", "ai", "n"], image: "zimages/consonantblend_r/grain" }, // new
    { word: "grew", parts: ["gr", "ew"], image: "zimages/consonantblend_r/grew" }, // new
    { word: "grip", parts: ["gr", "i", "p"], image: "zimages/consonantblend_r/grip" }, // new
    { word: "groan", parts: ["gr", "oa", "n"], image: "zimages/consonantblend_r/groan" }, // new

    { word: "pram", parts: ["pr", "a", "m"], image: "zimages/consonantblend_r/pram" }, // new
    { word: "press", parts: ["pr", "e", "ss"], image: "zimages/consonantblend_r/press" }, // new
    { word: "pride", parts: ["pr", "i", "d", "e"], image: "zimages/consonantblend_r/pride" }, // new
    { word: "prank", parts: ["pr", "a", "n", "k"], image: "zimages/consonantblend_r/prank" }, // new
    { word: "prove", parts: ["pr", "o", "v", "e"], image: "zimages/consonantblend_r/prove" }, // new

    { word: "track", parts: ["tr", "a", "ck"], image: "zimages/consonantblend_r/track" }, // new
    { word: "trap", parts: ["tr", "a", "p"], image: "zimages/consonantblend_r/trap" }, // new
    { word: "tread", parts: ["tr", "ea", "d"], image: "zimages/consonantblend_r/tread" }, // new
    { word: "treat", parts: ["tr", "ea", "t"], image: "zimages/consonantblend_r/treat" }, // new
    { word: "trout", parts: ["tr", "ou", "t"], image: "zimages/consonantblend_r/trout" } // new
  ],

  // --------------------
  // CONSONANT BLEND S
  // --------------------
  consonantblend_s: [
    { word: "scab", parts: ["sc", "a", "b"], image: "zimages/consonantblend_s/scab" },
    { word: "scarf", parts: ["sc", "ar", "f"], image: "zimages/consonantblend_s/scarf" },
    { word: "scoop", parts: ["sc", "oo", "p"], image: "zimages/consonantblend_s/scoop" },
    { word: "skate", parts: ["sk", "a", "t", "e"], image: "zimages/consonantblend_s/skate" },
    { word: "skull", parts: ["sk", "u", "ll"], image: "zimages/consonantblend_s/skull" },
    { word: "skunk", parts: ["sk", "u", "n", "k"], image: "zimages/consonantblend_s/skunk" },
    { word: "smell", parts: ["sm", "e", "ll"], image: "zimages/consonantblend_s/smell" },
    { word: "smock", parts: ["sm", "o", "ck"], image: "zimages/consonantblend_s/smock" },
    { word: "sneeze", parts: ["sn", "ee", "z", "e"], image: "zimages/consonantblend_s/sneeze" },
    { word: "snip", parts: ["sn", "i", "p"], image: "zimages/consonantblend_s/snip" },
    { word: "snore", parts: ["sn", "or", "e"], image: "zimages/consonantblend_s/snore" },
    { word: "snout", parts: ["sn", "ou", "t"], image: "zimages/consonantblend_s/snout" },
    { word: "stack", parts: ["st", "a", "ck"], image: "zimages/consonantblend_s/stack" },
    { word: "stem", parts: ["st", "e", "m"], image: "zimages/consonantblend_s/stem" },
    { word: "sting", parts: ["st", "i", "ng"], image: "zimages/consonantblend_s/sting" },
    { word: "storm", parts: ["st", "or", "m"], image: "zimages/consonantblend_s/storm" },
    { word: "sweet", parts: ["sw", "ee", "t"], image: "zimages/consonantblend_s/sweet" },
    { word: "swim", parts: ["sw", "i", "m"], image: "zimages/consonantblend_s/swim" },

    { word: "scale", parts: ["sc", "a", "l", "e"], image: "zimages/consonantblend_s/scale" }, // new
    { word: "scold", parts: ["sc", "o", "l", "d"], image: "zimages/consonantblend_s/scold" }, // new
    { word: "scout", parts: ["sc", "ou", "t"], image: "zimages/consonantblend_s/scout" }, // new
    { word: "screen", parts: ["scr", "ee", "n"], image: "zimages/consonantblend_s/screen" }, // new
    { word: "scrap", parts: ["scr", "a", "p"], image: "zimages/consonantblend_s/scrap" }, // new

    { word: "skid", parts: ["sk", "i", "d"], image: "zimages/consonantblend_s/skid" }, // new
    { word: "skill", parts: ["sk", "i", "ll"], image: "zimages/consonantblend_s/skill" }, // new
    { word: "skip", parts: ["sk", "i", "p"], image: "zimages/consonantblend_s/skip" }, // new
    { word: "skirt", parts: ["sk", "ir", "t"], image: "zimages/consonantblend_s/skirt" }, // new
    { word: "skate", parts: ["sk", "a", "t", "e"], image: "zimages/consonantblend_s/skate" }, // new

    { word: "smart", parts: ["sm", "ar", "t"], image: "zimages/consonantblend_s/smart" }, // new
    { word: "smash", parts: ["sm", "a", "sh"], image: "zimages/consonantblend_s/smash" }, // new
    { word: "smirk", parts: ["sm", "ir", "k"], image: "zimages/consonantblend_s/smirk" }, // new
    { word: "smoke", parts: ["sm", "o", "k", "e"], image: "zimages/consonantblend_s/smoke" }, // new

    { word: "snack", parts: ["sn", "a", "ck"], image: "zimages/consonantblend_s/snack" }, // new
    { word: "snap", parts: ["sn", "a", "p"], image: "zimages/consonantblend_s/snap" }, // new
    { word: "snake", parts: ["sn", "a", "k", "e"], image: "zimages/consonantblend_s/snake" }, // new
    { word: "snoop", parts: ["sn", "oo", "p"], image: "zimages/consonantblend_s/snoop" }, // new
    { word: "snow", parts: ["sn", "ow"], image: "zimages/consonantblend_s/snow" }, // new

    { word: "space", parts: ["sp", "a", "c", "e"], image: "zimages/consonantblend_s/space" }, // new
    { word: "spade", parts: ["sp", "a", "d", "e"], image: "zimages/consonantblend_s/spade" }, // new
    { word: "spend", parts: ["sp", "e", "n", "d"], image: "zimages/consonantblend_s/spend" }, // new
    { word: "spice", parts: ["sp", "i", "c", "e"], image: "zimages/consonantblend_s/spice" }, // new
    { word: "spoon", parts: ["sp", "oo", "n"], image: "zimages/consonantblend_s/spoon" }, // new

    { word: "stage", parts: ["st", "a", "g", "e"], image: "zimages/consonantblend_s/stage" }, // new
    { word: "stair", parts: ["st", "ai", "r"], image: "zimages/consonantblend_s/stair" }, // new
    { word: "straw", parts: ["st", "r", "aw"], image: "zimages/consonantblend_s/straw" }, // new
    { word: "string", parts: ["st", "r", "i", "ng"], image: "zimages/consonantblend_s/string" }, // new
    { word: "stone", parts: ["st", "o", "n", "e"], image: "zimages/consonantblend_s/stone" }, // new

    { word: "swirl", parts: ["sw", "ir", "l"], image: "zimages/consonantblend_s/swirl" }, // new
    { word: "swing", parts: ["sw", "i", "ng"], image: "zimages/consonantblend_s/swing" }, // new
    { word: "swarm", parts: ["sw", "ar", "m"], image: "zimages/consonantblend_s/swarm" }, // new
    { word: "swipe", parts: ["sw", "i", "p", "e"], image: "zimages/consonantblend_s/swipe" }, // new
    { word: "swoop", parts: ["sw", "oo", "p"], image: "zimages/consonantblend_s/swoop" } // new
  ],

  // --------------------
  // DIAGRAPHS
  // --------------------
  diagraphs_ch: [
    { word: "beach", parts: ["b", "ea", "ch"], image: "zimages/diagraphs/ch/beach" },
    { word: "bunch", parts: ["b", "u", "n", "ch"], image: "zimages/diagraphs/ch/bunch" },
    { word: "chat", parts: ["ch", "a", "t"], image: "zimages/diagraphs/ch/chat" },
    { word: "cheek", parts: ["ch", "ee", "k"], image: "zimages/diagraphs/ch/cheek" },
    { word: "cheese", parts: ["ch", "ee", "s", "e"], image: "zimages/diagraphs/ch/cheese" },
    { word: "chest", parts: ["ch", "e", "s", "t"], image: "zimages/diagraphs/ch/chest" },
    { word: "chimp", parts: ["ch", "i", "m", "p"], image: "zimages/diagraphs/ch/chimp" },
    { word: "chip", parts: ["ch", "i", "p"], image: "zimages/diagraphs/ch/chip" },
    { word: "chop", parts: ["ch", "o", "p"], image: "zimages/diagraphs/ch/chop" },
    { word: "church", parts: ["ch", "ur", "ch"], image: "zimages/diagraphs/ch/church" },
    { word: "couch", parts: ["c", "ou", "ch"], image: "zimages/diagraphs/ch/couch" },
    { word: "lunch", parts: ["l", "u", "n", "ch"], image: "zimages/diagraphs/ch/lunch" },
    { word: "march", parts: ["m", "ar", "ch"], image: "zimages/diagraphs/ch/march" },
    { word: "peach", parts: ["p", "ea", "ch"], image: "zimages/diagraphs/ch/peach" },
    { word: "pinch", parts: ["p", "i", "n", "ch"], image: "zimages/diagraphs/ch/pinch" },
    { word: "punch", parts: ["p", "u", "n", "ch"], image: "zimages/diagraphs/ch/punch" },
    { word: "search", parts: ["s", "ear", "ch"], image: "zimages/diagraphs/ch/search" },
    { word: "teach", parts: ["t", "ea", "ch"], image: "zimages/diagraphs/ch/teach" },
    { word: "torch", parts: ["t", "or", "ch"], image: "zimages/diagraphs/ch/torch" },

    { word: "chin", parts: ["ch", "i", "n"], image: "zimages/diagraphs/ch/chin" }, // new
    { word: "chef", parts: ["ch", "e", "f"], image: "zimages/diagraphs/ch/chef" }, // new
    { word: "chess", parts: ["ch", "e", "ss"], image: "zimages/diagraphs/ch/chess" }, // new
    { word: "check", parts: ["ch", "e", "ck"], image: "zimages/diagraphs/ch/check" }, // new
    { word: "chick", parts: ["ch", "i", "ck"], image: "zimages/diagraphs/ch/chick" }, // new
    { word: "champ", parts: ["ch", "a", "m", "p"], image: "zimages/diagraphs/ch/champ" }, // new
    { word: "chunk", parts: ["ch", "u", "n", "k"], image: "zimages/diagraphs/ch/chunk" }, // new
    
    { word: "chase", parts: ["ch", "a", "s", "e"], image: "zimages/diagraphs/ch/chase" }, // new
    { word: "chore", parts: ["ch", "or", "e"], image: "zimages/diagraphs/ch/chore" }, // new
    { word: "chime", parts: ["ch", "i", "m", "e"], image: "zimages/diagraphs/ch/chime" }, // new

    { word: "chain", parts: ["ch", "ai", "n"], image: "zimages/diagraphs/ch/chain" }, // new
    { word: "chair", parts: ["ch", "air"], image: "zimages/diagraphs/ch/chair" }, // new
    { word: "chart", parts: ["ch", "ar", "t"], image: "zimages/diagraphs/ch/chart" }, // new
    { word: "cheap", parts: ["ch", "ea", "p"], image: "zimages/diagraphs/ch/cheap" }, // new
    { word: "cheat", parts: ["ch", "ea", "t"], image: "zimages/diagraphs/ch/cheat" }, // new

    { word: "chew", parts: ["ch", "ew"], image: "zimages/diagraphs/ch/chew" }, // new
    { word: "chili", parts: ["ch", "i", "l", "i"], image: "zimages/diagraphs/ch/chili" }, // new
    { word: "churn", parts: ["ch", "ur", "n"], image: "zimages/diagraphs/ch/churn" }, // new

    { word: "bench", parts: ["b", "e", "n", "ch"], image: "zimages/diagraphs/ch/bench" }, // new
    { word: "branch", parts: ["br", "a", "n", "ch"], image: "zimages/diagraphs/ch/branch" }, // new
    { word: "catch", parts: ["c", "a", "t", "ch"], image: "zimages/diagraphs/ch/catch" }, // new
    { word: "cinch", parts: ["c", "i", "n", "ch"], image: "zimages/diagraphs/ch/cinch" }, // new
    { word: "ditch", parts: ["d", "i", "t", "ch"], image: "zimages/diagraphs/ch/ditch" }, // new
    { word: "finch", parts: ["f", "i", "n", "ch"], image: "zimages/diagraphs/ch/finch" }, // new
    { word: "hatch", parts: ["h", "a", "t", "ch"], image: "zimages/diagraphs/ch/hatch" }, // new
    { word: "latch", parts: ["l", "a", "t", "ch"], image: "zimages/diagraphs/ch/latch" }, // new
    { word: "match", parts: ["m", "a", "t", "ch"], image: "zimages/diagraphs/ch/match" }, // new
    { word: "stretch", parts: ["str", "e", "t", "ch"], image: "zimages/diagraphs/ch/stretch" } // new
  ],

  diagraphs_ng: [
    { word: "bang", parts: ["b", "a", "ng"], image: "zimages/diagraphs/ng/bang" },
    { word: "fang", parts: ["f", "a", "ng"], image: "zimages/diagraphs/ng/fang" },
    { word: "gong", parts: ["g", "o", "ng"], image: "zimages/diagraphs/ng/gong" },
    { word: "king", parts: ["k", "i", "ng"], image: "zimages/diagraphs/ng/king" },
    { word: "long", parts: ["l", "o", "ng"], image: "zimages/diagraphs/ng/long" },
    { word: "lung", parts: ["l", "u", "ng"], image: "zimages/diagraphs/ng/lung" },
    { word: "pong", parts: ["p", "o", "ng"], image: "zimages/diagraphs/ng/pong" },
    { word: "ring", parts: ["r", "i", "ng"], image: "zimages/diagraphs/ng/ring" },
    { word: "rung", parts: ["r", "u", "ng"], image: "zimages/diagraphs/ng/rung" },
    { word: "sing", parts: ["s", "i", "ng"], image: "zimages/diagraphs/ng/sing" },
    { word: "song", parts: ["s", "o", "ng"], image: "zimages/diagraphs/ng/song" },
    { word: "spring", parts: ["sp", "r", "i", "ng"], image: "zimages/diagraphs/ng/spring" },
    { word: "sting", parts: ["st", "i", "ng"], image: "zimages/diagraphs/ng/sting" },
    { word: "string", parts: ["str", "i", "ng"], image: "zimages/diagraphs/ng/string" },
    { word: "strong", parts: ["str", "o", "ng"], image: "zimages/diagraphs/ng/strong" },
    { word: "swing", parts: ["sw", "i", "ng"], image: "zimages/diagraphs/ng/swing" },
    { word: "tong", parts: ["t", "o", "ng"], image: "zimages/diagraphs/ng/tong" },
    { word: "wing", parts: ["w", "i", "ng"], image: "zimages/diagraphs/ng/wing" },

    { word: "hang", parts: ["h", "a", "ng"], image: "zimages/diagraphs/ng/hang" }, // new
    { word: "sang", parts: ["s", "a", "ng"], image: "zimages/diagraphs/ng/sang" }, // new
    { word: "sung", parts: ["s", "u", "ng"], image: "zimages/diagraphs/ng/sung" }, // new
    { word: "gang", parts: ["g", "a", "ng"], image: "zimages/diagraphs/ng/gang" }, // new

    { word: "clang", parts: ["cl", "a", "ng"], image: "zimages/diagraphs/ng/clang" }, // new
    { word: "slang", parts: ["sl", "a", "ng"], image: "zimages/diagraphs/ng/slang" }, // new
    { word: "cling", parts: ["cl", "i", "ng"], image: "zimages/diagraphs/ng/cling" }, // new
    { word: "sling", parts: ["sl", "i", "ng"], image: "zimages/diagraphs/ng/sling" }, // new
    { word: "fling", parts: ["fl", "i", "ng"], image: "zimages/diagraphs/ng/fling" }, // new
    { word: "flung", parts: ["fl", "u", "ng"], image: "zimages/diagraphs/ng/flung" }, // new

    { word: "bring", parts: ["br", "i", "ng"], image: "zimages/diagraphs/ng/bring" }, // new
    { word: "wring", parts: ["wr", "i", "ng"], image: "zimages/diagraphs/ng/wring" }, // new
    { word: "wrong", parts: ["wr", "o", "ng"], image: "zimages/diagraphs/ng/wrong" }, // new
    { word: "stung", parts: ["st", "u", "ng"], image: "zimages/diagraphs/ng/stung" }, // new
    { word: "sprung", parts: ["spr", "u", "ng"], image: "zimages/diagraphs/ng/sprung" }, // new

    { word: "thong", parts: ["th", "o", "ng"], image: "zimages/diagraphs/ng/thong" }, // new
    { word: "along", parts: ["a", "l", "o", "ng"], image: "zimages/diagraphs/ng/along" }, // new
    { word: "young", parts: ["y", "ou", "ng"], image: "zimages/diagraphs/ng/young" }, // new
    { word: "sitting", parts: ["s", "i", "tt", "i", "ng"], image: "zimages/diagraphs/ng/sitting" }, // new    
    { word: "ping", parts: ["p", "i", "ng"], image: "zimages/diagraphs/ng/ping" }, // new
    { word: "zing", parts: ["z", "i", "ng"], image: "zimages/diagraphs/ng/zing" } // new
  ],

  diagraphs_sh: [
    { word: "blush", parts: ["bl", "u", "sh"], image: "zimages/diagraphs/sh/blush" },
    { word: "cash", parts: ["c", "a", "sh"], image: "zimages/diagraphs/sh/cash" },
    { word: "ship", parts: ["sh", "i", "p"], image: "zimages/diagraphs/sh/ship" },
    { word: "shrimp", parts: ["sh", "r", "i", "m", "p"], image: "zimages/diagraphs/sh/shrimp" },
    { word: "shrug", parts: ["sh", "r", "u", "g"], image: "zimages/diagraphs/sh/shrug" },

    { word: "shock", parts: ["sh", "o", "ck"], image: "zimages/diagraphs/sh/shock" }, // new
    { word: "shook", parts: ["sh", "oo", "k"], image: "zimages/diagraphs/sh/shook" }, // new
    { word: "shoot", parts: ["sh", "oo", "t"], image: "zimages/diagraphs/sh/shoot" }, // new
    { word: "shack", parts: ["sh", "a", "ck"], image: "zimages/diagraphs/sh/shack" }, // new
    { word: "shell", parts: ["sh", "e", "ll"], image: "zimages/diagraphs/sh/shell" }, // new
    { word: "shelf", parts: ["sh", "e", "l", "f"], image: "zimages/diagraphs/sh/shelf" }, // new
    { word: "shrub", parts: ["sh", "r", "u", "b"], image: "zimages/diagraphs/sh/shrub" }, // new

    { word: "shade", parts: ["sh", "a", "d", "e"], image: "zimages/diagraphs/sh/shade" }, // new
    { word: "shake", parts: ["sh", "a", "k", "e"], image: "zimages/diagraphs/sh/shake" }, // new
    { word: "shine", parts: ["sh", "i", "n", "e"], image: "zimages/diagraphs/sh/shine" }, // new
    { word: "shrine", parts: ["sh", "r", "i", "n", "e"], image: "zimages/diagraphs/sh/shrine" }, // new

    { word: "sharp", parts: ["sh", "ar", "p"], image: "zimages/diagraphs/sh/sharp" }, // new
    { word: "sheep", parts: ["sh", "ee", "p"], image: "zimages/diagraphs/sh/sheep" }, // new
    { word: "sheet", parts: ["sh", "ee", "t"], image: "zimages/diagraphs/sh/sheet" }, // new
    { word: "shirt", parts: ["sh", "ir", "t"], image: "zimages/diagraphs/sh/shirt" }, // new
    { word: "shore", parts: ["sh", "or", "e"], image: "zimages/diagraphs/sh/shore" }, // new
    { word: "short", parts: ["sh", "or", "t"], image: "zimages/diagraphs/sh/short" }, // new
    { word: "shout", parts: ["sh", "ou", "t"], image: "zimages/diagraphs/sh/shout" }, // new

    { word: "shrink", parts: ["sh", "r", "i", "n", "k"], image: "zimages/diagraphs/sh/shrink" }, // new
    { word: "shrill", parts: ["sh", "r", "i", "ll"], image: "zimages/diagraphs/sh/shrill" }, // new
    { word: "shuffle", parts: ["sh", "u", "ff", "l", "e"], image: "zimages/diagraphs/sh/shuffle" }, // new

    { word: "shower", parts: ["sh", "ow", "er"], image: "zimages/diagraphs/sh/shower" }, // new
    { word: "shimmer", parts: ["sh", "i", "mm", "er"], image: "zimages/diagraphs/sh/shimmer" }, // new
    { word: "shiver", parts: ["sh", "i", "v", "er"], image: "zimages/diagraphs/sh/shiver" } // new
  ],

  diagraphs_th: [
    { word: "bath", parts: ["b", "a", "th"], image: "zimages/diagraphs/th/bath" },
    { word: "earth", parts: ["ear", "th"], image: "zimages/diagraphs/th/earth" },
    { word: "moth", parts: ["m", "o", "th"], image: "zimages/diagraphs/th/moth" },
    { word: "sloth", parts: ["sl", "o", "th"], image: "zimages/diagraphs/th/sloth" },
    { word: "thick", parts: ["th", "i", "ck"], image: "zimages/diagraphs/th/thick" },
    { word: "thief", parts: ["th", "ie", "f"], image: "zimages/diagraphs/th/thief" },
    { word: "think", parts: ["th", "i", "n", "k"], image: "zimages/diagraphs/th/think" },
    { word: "thorn", parts: ["th", "or", "n"], image: "zimages/diagraphs/th/thorn" },
    { word: "three", parts: ["th", "r", "ee"], image: "zimages/diagraphs/th/three" },
    { word: "thumb", parts: ["th", "u", "m", "b"], image: "zimages/diagraphs/th/thumb" },
    { word: "tooth", parts: ["t", "oo", "th"], image: "zimages/diagraphs/th/tooth" },

    { word: "thank", parts: ["th", "a", "n", "k"], image: "zimages/diagraphs/th/thank" }, // new
    { word: "thin", parts: ["th", "i", "n"], image: "zimages/diagraphs/th/thin" }, // new
    { word: "thing", parts: ["th", "i", "ng"], image: "zimages/diagraphs/th/thing" }, // new
    { word: "then", parts: ["th", "e", "n"], image: "zimages/diagraphs/th/then" }, // new
    { word: "them", parts: ["th", "e", "m"], image: "zimages/diagraphs/th/them" }, // new
    { word: "thirst", parts: ["th", "ir", "s", "t"], image: "zimages/diagraphs/th/thirst" }, // new

    { word: "throb", parts: ["th", "r", "o", "b"], image: "zimages/diagraphs/th/throb" }, // new
    { word: "thud", parts: ["th", "u", "d"], image: "zimages/diagraphs/th/thud" }, // new
    { word: "thug", parts: ["th", "u", "g"], image: "zimages/diagraphs/th/thug" }, // new
    { word: "thumbs", parts: ["th", "u", "m", "b", "s"], image: "zimages/diagraphs/th/thumbs" }, // new
    { word: "thump", parts: ["th", "u", "m", "p"], image: "zimages/diagraphs/th/thump" }, // new
    { word: "thunder", parts: ["th", "u", "n", "d", "er"], image: "zimages/diagraphs/th/thunder" }, // new

    { word: "thatch", parts: ["th", "a", "t", "ch"], image: "zimages/diagraphs/th/thatch" }, // new
    { word: "thatch", parts: ["th", "a", "t", "ch"], image: "zimages/diagraphs/th/thatch" }, // new
    { word: "thaw", parts: ["th", "aw"], image: "zimages/diagraphs/th/thaw" }, // new
    { word: "thrice", parts: ["th", "r", "i", "c", "e"], image: "zimages/diagraphs/th/thrice" }, // new

    { word: "there", parts: ["th", "ere"], image: "zimages/diagraphs/th/there" }, // new
    { word: "these", parts: ["th", "e", "s", "e"], image: "zimages/diagraphs/th/these" }, // new
    { word: "they", parts: ["th", "ey"], image: "zimages/diagraphs/th/they" }, // new

    { word: "thrice", parts: ["th", "r", "i", "c", "e"], image: "zimages/diagraphs/th/thrice" }, // new
    { word: "throw", parts: ["th", "r", "ow"], image: "zimages/diagraphs/th/throw" }, // new
    { word: "thinker", parts: ["th", "i", "n", "k", "er"], image: "zimages/diagraphs/th/thinker" }, // new

    { word: "throne", parts: ["th", "r", "o", "n", "e"], image: "zimages/diagraphs/th/throne" }, // new
    { word: "throat", parts: ["th", "r", "oa", "t"], image: "zimages/diagraphs/th/throat" }, // new
    { word: "thrive", parts: ["th", "r", "i", "v", "e"], image: "zimages/diagraphs/th/thrive" } // new
  ]
};



/* ===================================================== */
/* ⭐⭐⭐⭐⭐ PHONICS ENGINE — COPY AND PASTE THIS PART ⭐⭐⭐⭐⭐ */
/* ===================================================== */

/* ----------------------------------------------- */
/* URL WORD SET LOADER (one or many sets: ?set=a,b) */
/* ----------------------------------------------- */

const urlParams = new URLSearchParams(window.location.search)
const selectedSets = (urlParams.get("set") || "controlled_or")
  .split(",").map(s => s.trim()).filter(s => wordSets[s])

let words = []
const seenWords = new Set()

selectedSets.forEach(setName=>{
  wordSets[setName].forEach(w=>{
    if(!seenWords.has(w.word)){
      seenWords.add(w.word)
      words.push(w)
    }
  })
})

if(words.length === 0) words = wordSets.controlled_or

let currentIndex = 0
let selectedLetters = []


/* ----------------------------------------------- */
/* DOM ELEMENTS */
/* ----------------------------------------------- */

const imageEl = document.getElementById("image")
const lettersEl = document.getElementById("letters")
const blendBtn = document.getElementById("blendBtn")
const spinBtn = document.getElementById("spinBtn")

/* HEADER BUTTONS */

const shuffleBtn = document.getElementById("shuffleBtn")
const prevWordBtn = document.getElementById("prevWordBtn")
const nextWordBtn = document.getElementById("nextWordBtn")
const mainMenuBtn = document.getElementById("mainMenuBtn")


/* ===================================================== */
/* IMAGE PLACEHOLDER SYSTEM */
/* ===================================================== */

function loadImage(basePath){

  const placeholder = "zimages/zplaceholder.png"

  /* show placeholder immediately */
  imageEl.src = placeholder

  const extensions = [".png",".jpg",".jpeg"]
  let loaded = false

  extensions.forEach(ext=>{
    const img = new Image()
    img.onload = function(){
      if(!loaded){
        loaded = true
        imageEl.src = basePath + ext
      }
    }
    img.src = basePath + ext
  })

}


/* ----------------------------------------------- */
/* LOAD WORD */
/* ----------------------------------------------- */

function loadWord(){

  const data = words[currentIndex]

  lettersEl.innerHTML = ""
  selectedLetters = []

  loadImage(data.image)

  data.parts.forEach((part,i)=>{
    const btn = document.createElement("button")
    btn.className = "letter-btn"
    btn.textContent = part
    btn.onclick = ()=>selectLetter(btn,i)
    lettersEl.appendChild(btn)
  })

  blendBtn.disabled = true
  blendBtn.classList.remove("ready")

  setSpinReady(false)

}


/* ----------------------------------------------- */
/* SELECT LETTER */
/* ----------------------------------------------- */

function selectLetter(btn,index){

  if(btn.classList.contains("selected") || btn.classList.contains("blended")) return

  btn.classList.add("selected")
  selectedLetters.push(index)

  if(selectedLetters.length === words[currentIndex].parts.length){
    blendBtn.disabled = false
    blendBtn.classList.add("ready")
  }

}


/* ----------------------------------------------- */
/* BLEND BUTTON */
/* ----------------------------------------------- */

blendBtn.onclick = ()=>{

  blendBtn.classList.remove("ready")
  blendBtn.disabled = true

  document.querySelectorAll(".letter-btn").forEach(btn=>{
    btn.classList.remove("selected")
    btn.classList.add("blended")
  })

  setTimeout(()=>{
    if(!spinning && !gameFinished) setSpinReady(true)
  },900)

}


/* ----------------------------------------------- */
/* HEADER BUTTON EVENTS */
/* ----------------------------------------------- */

shuffleBtn.onclick = ()=>{
  if(spinning) return
  currentIndex = Math.floor(Math.random()*words.length)
  loadWord()
}

prevWordBtn.onclick = ()=>{
  if(spinning) return
  currentIndex--
  if(currentIndex < 0) currentIndex = words.length-1
  loadWord()
}

nextWordBtn.onclick = ()=>{
  if(spinning) return
  currentIndex++
  if(currentIndex >= words.length) currentIndex = 0
  loadWord()
}

mainMenuBtn.onclick = ()=>{
  window.location.href = "index.html"
}


/* ===================================================== */
/* ⭐⭐⭐⭐⭐ END PHONICS ENGINE — COPY AND PASTE THIS PART ⭐⭐⭐⭐⭐ */
/* ===================================================== */





/* ===================================================== */
/* 🎡 GAME ENGINE – KIDS WHEEL OF FORTUNE */
/* ===================================================== */

/* ----------------------------------------------- */
/* WHEEL SLICES — 20 slices: numbers 1–10 + 10 animals */
/* Number  = that many points                       */
/* Animal  = MYSTERY BONUS (rolls 1–10 points)      */
/* Every slice has the same chance — no rigging.    */
/* ----------------------------------------------- */

/* 🎨 EMOJI THEMES — pick from the header dropdown */
const THEMES = {
  animals: { name:"Animals", list:["🐵","🐼","🐸","🐰","🦁","🐨","🐷","🐮","🐻","🦊"] },
  candy:   { name:"Candy",   list:["🍭","🍬","🍫","🍩","🧁","🍪","🍦","🍰","🎂","🍡"] },
  food:    { name:"Food",    list:["🍕","🍔","🌭","🍟","🌮","🍣","🍝","🥪","🍿","🥞"] },
  smileys: { name:"Smileys", list:["😀","😂","😍","😎","🥳","😜","🤩","😇","🤪","🙃"] }
}

const NUMBERS = [10,3,7,1,8,4,6,2,9,5]

/* numbers and emojis take turns around the wheel */
const SLICES = []
NUMBERS.forEach((n,k)=>{
  SLICES.push({type:"num", value:n})
  SLICES.push({type:"animal", value:THEMES.animals.list[k]})
})

let currentTheme = "animals"

function setTheme(key){
  if(!THEMES[key]) key = "animals"
  currentTheme = key
  let k = 0
  SLICES.forEach(s=>{ if(s.type === "animal") s.value = THEMES[key].list[k++] })
  lastTopIndex = -1                    // refresh the live box
  const word = document.getElementById("themeWord")
  if(word) word.textContent = THEMES[key].name
}

/* bright happy colours (go round the wheel in rainbow order) */
const SLICE_COLORS = [
  "#ff595e","#ff924c","#ffca3a","#8ac926","#2ec4b6",
  "#1982c4","#6a4c93","#f15bb5","#ff006e","#00bbf9"
]

const sliceCount = SLICES.length
const sliceAngle = 360/sliceCount

const canvas = document.getElementById("wheel")
const ctx = canvas.getContext("2d")

const wheelContainer = document.getElementById("wheelContainer")
const wheelFrame = document.getElementById("wheelFrame")
const pointer = document.getElementById("pointer")

const dogBox = document.getElementById("dogTeam")
const tigerBox = document.getElementById("tigerTeam")
const dogScoreEl = document.getElementById("dogScore")
const tigerScoreEl = document.getElementById("tigerScore")
const endGameBtn = document.getElementById("endGameBtn")

let currentTeam = "dog"
let dogScore = 0
let tigerScore = 0
let spinning = false
let gameFinished = false
let wheelRotation = 0     // degrees, keeps growing so the wheel never jumps back

const overlay = document.getElementById("wheelOverlay")
const octx = overlay.getContext("2d")
const liveBox = document.getElementById("liveBox")
const liveInner = document.getElementById("liveInner")

/* overlay state: "outline" = red box on the slice under the arrow,
   "magnify" = winning slice pops out bigger with golden shine      */
let overlayMode = "outline"
let magnifyStart = 0
let lastTopIndex = -1


/* ----------------------------------------------- */
/* SPIN BUTTON STATE */
/* ----------------------------------------------- */

function setSpinReady(on){
  spinBtn.disabled = !on
  spinBtn.classList.toggle("active", on)
  spinBtn.classList.toggle("muted", !on)
}


/* ----------------------------------------------- */
/* 💡 LIGHT BULBS AROUND THE RIM */
/* ----------------------------------------------- */

function buildBulbs(){
  const count = 24
  for(let i=0;i<count;i++){
    const a = (i/count)*Math.PI*2
    const b = document.createElement("span")
    b.className = "bulb" + (i%2 ? " odd" : "")
    b.style.left = (50 + 46.5*Math.sin(a)) + "%"
    b.style.top  = (50 - 46.5*Math.cos(a)) + "%"
    wheelFrame.appendChild(b)
  }
}


/* ----------------------------------------------- */
/* HELPERS */
/* angle 0 = top, going clockwise.                 */
/* Slice i is centred at i*sliceAngle on the wheel. */
/* ----------------------------------------------- */

const rad = d => (d-90)*Math.PI/180

function sliceColor(i){ return SLICE_COLORS[i % SLICE_COLORS.length] }

/* which slice is under the red arrow right now */
function topIndex(){
  const a = ((-wheelRotation) % 360 + 360) % 360
  return Math.round(a/sliceAngle) % sliceCount
}

/* wedge path centred at angle "mid" (degrees, screen) */
function wedgePath(c, cx, cy, r, mid){
  c.beginPath()
  c.moveTo(cx,cy)
  c.arc(cx,cy,r,rad(mid-sliceAngle/2),rad(mid+sliceAngle/2))
  c.closePath()
}

/* number / emoji for one slice, drawn in "slice space" (up = outward) */
function drawSliceContent(c, s, r, bob){

  c.textAlign = "center"
  c.textBaseline = "middle"

  if(s.type === "num"){
    const y = -r*0.72
    c.font = "900 " + Math.round(r*0.216) + "px 'Arial Rounded MT Bold','Comic Sans MS',Arial,sans-serif"
    c.lineJoin = "round"
    c.lineWidth = r*0.031
    c.strokeStyle = "rgba(40,30,60,0.85)"
    c.strokeText(String(s.value),0,y)
    c.fillStyle = "white"
    c.fillText(String(s.value),0,y)

    /* underline 6 and 9 so kids can tell them apart */
    if(s.value === 6 || s.value === 9){
      const w = r*0.108, h = r*0.023
      c.beginPath()
      c.rect(-w/2, y + r*0.085, w, h)
      c.lineWidth = r*0.0135
      c.stroke()
      c.fill()
    }
  }else{
    /* 🐸 bobbing animal */
    const b = bob || {y:0, rot:0, sc:1}
    c.save()
    c.translate(0, -r*0.71 + b.y)
    c.rotate(b.rot)
    c.scale(b.sc, b.sc)
    c.font = Math.round(r*0.2) + "px 'Apple Color Emoji','Segoe UI Emoji','Noto Color Emoji',sans-serif"
    c.fillStyle = "black"
    c.fillText(s.value,0,0)
    c.restore()
  }

}


/* ----------------------------------------------- */
/* STATIC WHEEL (slices, numbers, pegs) — drawn once */
/* ----------------------------------------------- */

const baseWheel = document.createElement("canvas")
baseWheel.width = canvas.width
baseWheel.height = canvas.height

function drawBaseWheel(){

  const c = baseWheel.getContext("2d")
  const size = baseWheel.width
  const m = size/2
  const r = size/2 - 4

  /* slices */
  SLICES.forEach((s,i)=>{
    wedgePath(c, m, m, r, i*sliceAngle)
    c.fillStyle = sliceColor(i)
    c.fill()
  })

  /* soft shine from the middle */
  const shine = c.createRadialGradient(m,m,r*0.15,m,m,r)
  shine.addColorStop(0,"rgba(255,255,255,0.35)")
  shine.addColorStop(0.6,"rgba(255,255,255,0.08)")
  shine.addColorStop(1,"rgba(0,0,0,0.12)")
  c.beginPath()
  c.arc(m,m,r,0,Math.PI*2)
  c.fillStyle = shine
  c.fill()

  /* white dividers */
  c.strokeStyle = "white"
  c.lineWidth = 7
  SLICES.forEach((s,i)=>{
    const a = rad(i*sliceAngle - sliceAngle/2)
    c.beginPath()
    c.moveTo(m,m)
    c.lineTo(m + r*Math.cos(a), m + r*Math.sin(a))
    c.stroke()
  })

  /* numbers only (animals are drawn live so they can bob) */
  SLICES.forEach((s,i)=>{
    if(s.type !== "num") return
    c.save()
    c.translate(m,m)
    c.rotate(i*sliceAngle*Math.PI/180)
    drawSliceContent(c, s, r)
    c.restore()
  })

  /* gold pegs on the edge (one per divider) */
  SLICES.forEach((s,i)=>{
    const a = rad(i*sliceAngle - sliceAngle/2)
    c.beginPath()
    c.arc(m + r*0.94*Math.cos(a), m + r*0.94*Math.sin(a), 13, 0, Math.PI*2)
    c.fillStyle = "#ffd23f"
    c.fill()
    c.lineWidth = 4
    c.strokeStyle = "#1f4fd1"
    c.stroke()
  })

  /* outer edge line */
  c.beginPath()
  c.arc(m,m,r,0,Math.PI*2)
  c.lineWidth = 8
  c.strokeStyle = "white"
  c.stroke()

}


/* ----------------------------------------------- */
/* 🐸 BOBBING ANIMALS — redrawn every frame          */
/* ----------------------------------------------- */

function animalBob(i, t){
  const ph = t/420 + i*0.9
  return {
    y:   Math.sin(ph) * 9,                 // up / down
    rot: Math.sin(ph*0.5) * 0.12,          // little head tilt
    sc:  1 + Math.sin(ph + 1.3) * 0.05     // tiny breathing
  }
}

function drawWheel(t){

  const size = canvas.width
  const m = size/2
  const r = size/2 - 4

  ctx.clearRect(0,0,size,size)
  ctx.drawImage(baseWheel,0,0)

  SLICES.forEach((s,i)=>{
    if(s.type !== "animal") return
    ctx.save()
    ctx.translate(m,m)
    ctx.rotate(i*sliceAngle*Math.PI/180)
    drawSliceContent(ctx, s, r, animalBob(i,t))
    ctx.restore()
  })

}


/* ----------------------------------------------- */
/* 🔴 OVERLAY — red outline / golden magnify         */
/* overlay covers the whole wheel box; the wheel    */
/* itself is the middle 86%.                        */
/* ----------------------------------------------- */

function drawOverlay(t){

  const size = overlay.width
  const m = size/2
  const r = size*0.43 - 2
  const i = topIndex()

  /* where slice i is on screen right now */
  const screenMid = i*sliceAngle + wheelRotation

  octx.clearRect(0,0,size,size)

  if(overlayMode === "outline"){
    drawGlitterOutline(octx, m, r, screenMid, t, 22)
    return
  }

  /* ✨ MAGNIFY — slice grows out from its middle with a golden shine */
  const p = Math.min(1,(t - magnifyStart)/450)
  const grow = 1 + 0.6 * easeOutBack(p)
  const pulse = 0.5 + 0.5*Math.sin(t/110)

  /* scale around the middle of the slice */
  const a = rad(screenMid)
  const fx = m + Math.cos(a)*r*0.62
  const fy = m + Math.sin(a)*r*0.62

  octx.save()
  octx.translate(fx,fy)
  octx.scale(grow,grow)
  octx.translate(-fx,-fy)

  /* golden glow (a few layers so it really shines) */
  octx.lineJoin = "round"
  for(let k=0;k<3;k++){
    wedgePath(octx, m, m, r, screenMid)
    octx.shadowColor = "rgba(255,200,0,1)"
    octx.shadowBlur = 50 + pulse*70
    octx.lineWidth = 30
    octx.strokeStyle = "rgba(255,215,0,0.9)"
    octx.stroke()
  }
  octx.shadowBlur = 0
  wedgePath(octx, m, m, r, screenMid)
  octx.fillStyle = sliceColor(i)
  octx.fill()

  /* shiny sweep */
  const g = octx.createLinearGradient(fx-r*0.3, fy-r*0.3, fx+r*0.3, fy+r*0.3)
  g.addColorStop(0,"rgba(255,255,255,0)")
  g.addColorStop(Math.max(0,Math.min(1,pulse)),"rgba(255,255,255,0.45)")
  g.addColorStop(1,"rgba(255,255,255,0)")
  wedgePath(octx, m, m, r, screenMid)
  octx.fillStyle = g
  octx.fill()

  /* content */
  octx.save()
  octx.translate(m,m)
  octx.rotate(screenMid*Math.PI/180)
  drawSliceContent(octx, SLICES[i], r, SLICES[i].type==="animal" ? animalBob(i,t) : null)
  octx.restore()

  /* thick golden glitter border */
  drawGlitterOutline(octx, m, r, screenMid, t, 22)

  octx.restore()

}


/* ----------------------------------------------- */
/* ✨ YELLOW GLITTER OUTLINE around one slice       */
/* ----------------------------------------------- */

/* fixed sparkle spots along the slice edge (0..1 around the outline) */
const GLITTER = Array.from({length:46},(_,k)=>({
  u:(k + Math.random()*0.6)/46,
  ph:Math.random()*Math.PI*2,
  sz:0.6 + Math.random()*0.8
}))

function wedgePoint(m, r, mid, u){
  /* outline = edge 1 (centre→rim), arc, edge 2 (rim→centre) */
  const arcLen = r*sliceAngle*Math.PI/180
  const total = r*2 + arcLen
  let d = u*total
  const a1 = rad(mid - sliceAngle/2), a2 = rad(mid + sliceAngle/2)
  if(d < r){ return [m + Math.cos(a1)*d, m + Math.sin(a1)*d] }
  d -= r
  if(d < arcLen){
    const a = a1 + (a2 - a1)*(d/arcLen)
    return [m + Math.cos(a)*r, m + Math.sin(a)*r]
  }
  d -= arcLen
  const rr = r - d
  return [m + Math.cos(a2)*rr, m + Math.sin(a2)*rr]
}

function sparkle(c, x, y, size, alpha){
  c.save()
  c.globalAlpha = alpha
  c.translate(x,y)
  c.fillStyle = "white"
  c.beginPath()
  for(let k=0;k<8;k++){
    const rr = k%2 ? size*0.28 : size
    const a = k*Math.PI/4
    c.lineTo(Math.cos(a)*rr, Math.sin(a)*rr)
  }
  c.closePath()
  c.shadowColor = "rgba(255,240,120,1)"
  c.shadowBlur = 10
  c.fill()
  c.restore()
}

function drawGlitterOutline(c, m, r, mid, t, width){

  const shimmer = 0.5 + 0.5*Math.sin(t/180)

  /* dark-gold edge so the yellow shows on every slice colour */
  wedgePath(c, m, m, r, mid)
  c.lineJoin = "round"
  c.lineWidth = width + 10
  c.strokeStyle = "#a86a00"
  c.stroke()

  /* glowing yellow band */
  wedgePath(c, m, m, r, mid)
  c.lineJoin = "round"
  c.lineWidth = width
  c.strokeStyle = `rgb(255,${215 + Math.round(shimmer*30)},${40 + Math.round(shimmer*60)})`
  c.shadowColor = "rgba(255,225,0,0.95)"
  c.shadowBlur = 22 + shimmer*18
  c.stroke()
  c.shadowBlur = 0

  /* thin bright core line */
  wedgePath(c, m, m, r, mid)
  c.lineWidth = width*0.3
  c.strokeStyle = "rgba(255,255,220,0.95)"
  c.stroke()

  /* twinkling glitter */
  GLITTER.forEach(g=>{
    const tw = Math.sin(t/140 + g.ph)
    if(tw < 0.1) return
    const [x,y] = wedgePoint(m, r, mid, g.u)
    sparkle(c, x, y, width*1.1*g.sz*(0.6 + tw*0.6), Math.min(1,tw*1.2))
  })

}

function easeOutBack(x){
  const c1 = 1.70158, c3 = c1 + 1
  return 1 + c3*Math.pow(x-1,3) + c1*Math.pow(x-1,2)
}


/* ----------------------------------------------- */
/* 📺 LIVE BOX between the scoreboards               */
/* shows what is under the arrow right now          */
/* ----------------------------------------------- */

function updateLiveBox(){
  const i = topIndex()
  if(i === lastTopIndex) return
  lastTopIndex = i
  const s = SLICES[i]
  liveInner.style.background = sliceColor(i)
  liveInner.className = "live-inner " + (s.type === "num" ? "num" : "animal")
  liveInner.textContent = s.value
}


/* ----------------------------------------------- */
/* MAIN ANIMATION LOOP (always running)             */
/* ----------------------------------------------- */

let lastPeg = null

function loop(t){

  canvas.style.transform = `rotate(${wheelRotation}deg)`

  /* flapper ticks every time a peg passes the pointer */
  const peg = Math.floor((wheelRotation + sliceAngle/2)/sliceAngle)
  if(lastPeg !== null && peg !== lastPeg) tickPointer()
  lastPeg = peg

  drawWheel(t)
  drawOverlay(t)
  updateLiveBox()

  requestAnimationFrame(loop)
}


/* ----------------------------------------------- */
/* SPIN WHEEL                                       */
/* 1. press-down bounce                             */
/* 2. long fast spin, slows down past the target    */
/* 3. tease: stops on a neighbour…                  */
/* 4. back-spin past the target…                    */
/* 5. tick… tick… tick… forward onto the real slice */
/* 6. shake + star burst, golden magnify, popup     */
/* Target is picked fairly — every slice same chance */
/* ----------------------------------------------- */

function easeOut(t){ return 1 - Math.pow(1 - t, 4) }
function easeSine(t){ return -(Math.cos(Math.PI*t) - 1)/2 }
function easeInOut(t){ return t<0.5 ? 2*t*t : 1 - Math.pow(-2*t+2,2)/2 }

function tickPointer(){
  pointer.classList.remove("tick")
  void pointer.offsetWidth
  pointer.classList.add("tick")
}

/* animate wheelRotation from -> to, returns a promise */
function tween(to, duration, ease){
  return new Promise(resolve=>{
    const from = wheelRotation
    const t0 = performance.now()
    function step(t){
      const p = Math.min(1,(t - t0)/duration)
      wheelRotation = from + (to - from)*ease(p)
      if(p < 1) requestAnimationFrame(step)
      else resolve()
    }
    requestAnimationFrame(step)
  })
}

const wait = ms => new Promise(r=>setTimeout(r,ms))

function pressWheel(){
  /* stars shoot out of the wheel as it bounces back up */
  setTimeout(()=>starBurst({top:50, n:26, min:52, spread:18}), 150)
  wheelContainer.classList.remove("pressed")
  void wheelContainer.offsetWidth
  wheelContainer.classList.add("pressed")
  return wait(480).then(()=>wheelContainer.classList.remove("pressed"))
}


/* ----------------------------------------------- */
/* 🎡 SMOOTH SPIN + SPRING SETTLE (one motion)      */
/* part 1: glide from here to (final + past), still  */
/*         moving a little at the end                */
/* part 2: spring pulls it to "final": it swings     */
/*         back and forth smoothly and settles       */
/* ----------------------------------------------- */

function smoothSpin(final, past, duration, handoffSpeed, period, bounce){

  return new Promise(resolve=>{

    const P0 = wheelRotation
    const P1 = final + past
    const D  = P1 - P0
    const m0 = 2.75 * D / duration                 // start speed (deg per ms)
    const m1 = handoffSpeed * D / duration          // speed left when the swings take over

    const omega = 2*Math.PI / period
    let x = 0, v = 0, phase = 1, t0 = performance.now(), tSpring = 0, lastT = 0

    function step(now){

      if(phase === 1){
        const u = Math.min(1,(now - t0)/duration)
        const u2 = u*u, u3 = u2*u
        wheelRotation =
          (2*u3 - 3*u2 + 1)*P0 + (u3 - 2*u2 + u)*duration*m0 +
          (-2*u3 + 3*u2)*P1   + (u3 - u2)*duration*m1

        if(u >= 1){
          phase = 2
          wheelContainer.classList.remove("fast")
          x = P1 - final            // offset from the real slice
          v = m1                    // keep the same speed — no jump
          lastT = now
        }
        requestAnimationFrame(step)
        return
      }

      /* spring physics in small steps so it is silky smooth */
      let dt = Math.min(50, now - lastT)
      lastT = now
      tSpring += dt
      while(dt > 0){
        const h = Math.min(4, dt)
        /* bounce slowly grows after ~2.5s so it always comes to rest */
        const z = Math.min(1, bounce + Math.max(0, tSpring - 2500)/2000)
        const acc = -omega*omega*x - 2*z*omega*v
        v += acc*h
        x += v*h
        dt -= h
      }
      wheelRotation = final + x

      if((Math.abs(x) < 0.05 && Math.abs(v) < 0.004) || tSpring > 9000){
        wheelRotation = final
        resolve()
        return
      }
      requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  })

}

spinBtn.onclick = async function(){

  if(spinning || gameFinished || spinBtn.disabled) return

  spinning = true
  setSpinReady(false)
  endGameBtn.disabled = true
  themeSelector.disabled = true

  /* 1. press-down feel */
  await pressWheel()

  /* pick ANY slice — every slice has the same chance */
  const target = Math.floor(Math.random()*sliceCount)
  const wobble = (Math.random()-0.5) * sliceAngle * 0.6

  /* final rotation that puts the target under the arrow */
  const want = ((-(target*sliceAngle + wobble)) % 360 + 360) % 360
  const now = ((wheelRotation % 360) + 360) % 360
  let extra = want - now
  if(extra < 0) extra += 360
  const spins = 5 + Math.floor(Math.random()*2)
  const final = wheelRotation + spins*360 + extra

  /* ONE continuous motion, no stops:
     the big spin slows down and glides PAST the target,
     then a springy back-and-forth settles it on the real slice.
     Everything is random each spin (how far past, how fast,
     how bouncy) so the ending can't be guessed.               */
  const R = (lo,hi) => lo + Math.random()*(hi-lo)

  const past   = R(0.2, 3.5) * sliceAngle        // how far past the target the big spin glides
  const handoffSpeed = R(0.15, 0.55)             // how much speed is left for the swings
  const period = R(1100, 2000)                   // ms per back-and-forth swing
  const bounce = R(0.14, 0.38)                   // low = more swings, high = fewer swings

  wheelContainer.classList.add("fast")
  await smoothSpin(final, past, 5000 + Math.random()*1200, handoffSpeed, period, bounce)
  wheelRotation = final

  /* 6. shake + star burst, then golden magnify, then popup */
  await shakeAndBurst()

  overlayMode = "magnify"
  magnifyStart = performance.now()
  await wait(1500)

  landed(topIndex())

}


/* ----------------------------------------------- */
/* 💥 SHAKE + STAR BURST                             */
/* ----------------------------------------------- */

function starBurst(opts){

  const o = Object.assign({top:24, n:22, min:30, spread:26}, opts||{})
  const stars = ["⭐","🌟","✨","⭐","💫"]

  for(let k=0;k<o.n;k++){
    const s = document.createElement("span")
    s.className = "star-burst"
    s.textContent = stars[k % stars.length]
    s.style.top = o.top + "%"
    const ang = (k/o.n)*Math.PI*2 + Math.random()*0.3
    const dist = o.min + Math.random()*o.spread          // % of the wheel box
    s.style.setProperty("--dx", (Math.cos(ang)*dist) + "cqw")
    s.style.setProperty("--dy", (Math.sin(ang)*dist) + "cqw")
    s.style.animationDelay = (Math.random()*0.15) + "s"
    wheelContainer.appendChild(s)
    setTimeout(()=>s.remove(), 1300)
  }

}

function shakeAndBurst(){

  wheelContainer.classList.remove("shake")
  void wheelContainer.offsetWidth
  wheelContainer.classList.add("shake")

  starBurst({top:24})

  return wait(700).then(()=>wheelContainer.classList.remove("shake"))
}


/* ----------------------------------------------- */
/* LANDED — show result, add points                 */
/* ----------------------------------------------- */

function landed(index){

  const slice = SLICES[index]
  const color = sliceColor(index)

  const finish = box => { box.remove(); overlayMode = "outline"; nextTurn() }

  if(slice.type === "num"){

    const box = showResultBox(color,
      `<div class="result-big">${slice.value}</div>
       <div class="result-points">${teamEmoji()} +${slice.value} point${slice.value>1?"s":""}!</div>`)

    setTimeout(()=>addPoints(slice.value), 700)
    setTimeout(()=>finish(box), 2800)

  }else{

    /* 🎁 MYSTERY BONUS — the animal rolls a surprise number 1–10 */
    const bonus = 1 + Math.floor(Math.random()*10)

    const box = showResultBox(color,
      `<div class="result-animal">${slice.value}</div>
       <div class="result-title">🎁 MYSTERY BONUS!</div>
       <div class="result-roll">?</div>
       <div class="result-points" style="visibility:hidden">${teamEmoji()} +${bonus} point${bonus>1?"s":""}!</div>`)

    const roll = box.querySelector(".result-roll")
    const pts = box.querySelector(".result-points")

    let n = 0
    const rollTimer = setInterval(()=>{
      n = n % 10 + 1
      roll.textContent = n
    },90)

    setTimeout(()=>{
      clearInterval(rollTimer)
      roll.textContent = bonus
      roll.classList.add("done")
      pts.style.visibility = "visible"
      addPoints(bonus)
    },1500)

    setTimeout(()=>finish(box), 3600)

  }

}

function teamEmoji(){
  return currentTeam === "dog" ? "🐶" : "🐯"
}

function showResultBox(color, html){
  const box = document.createElement("div")
  box.className = "result-box"
  box.style.setProperty("--c", color)
  box.innerHTML = html
  wheelContainer.appendChild(box)
  return box
}


/* ----------------------------------------------- */
/* TOTAL SCORE — counts up in the score box         */
/* ----------------------------------------------- */

function addPoints(points){

  const team = currentTeam
  const el = team === "dog" ? dogScoreEl : tigerScoreEl
  let from = team === "dog" ? dogScore : tigerScore
  const to = from + points

  if(team === "dog") dogScore = to
  else tigerScore = to

  smallConfetti()

  const step = setInterval(()=>{
    from++
    el.textContent = from
    el.classList.remove("bump")
    void el.offsetWidth
    el.classList.add("bump")
    if(from >= to) clearInterval(step)
  },110)

}


/* ----------------------------------------------- */
/* NEXT TURN — swap team, next word                 */
/* ----------------------------------------------- */

function nextTurn(){

  spinning = false
  endGameBtn.disabled = false
  themeSelector.disabled = false

  if(gameFinished) return

  currentTeam = currentTeam === "dog" ? "tiger" : "dog"
  updateTeamHighlight()

  currentIndex++
  if(currentIndex >= words.length) currentIndex = 0
  loadWord()

}


/* ----------------------------------------------- */
/* TEAM TURN HIGHLIGHT */
/* ----------------------------------------------- */

function updateTeamHighlight(){
  dogBox.classList.toggle("active", currentTeam === "dog")
  tigerBox.classList.toggle("active", currentTeam === "tiger")
}


/* ----------------------------------------------- */
/* CONFETTI */
/* ----------------------------------------------- */

const CONFETTI_COLORS = ["#ff595e","#ff924c","#ffca3a","#8ac926","#1982c4","#6a4c93","#f15bb5"]

function confettiBurst(count){
  for(let i=0;i<count;i++){
    const piece = document.createElement("div")
    piece.className = "confetti"
    piece.style.left = Math.random()*window.innerWidth + "px"
    piece.style.top = Math.random()*window.innerHeight*0.7 + "px"
    piece.style.backgroundColor = CONFETTI_COLORS[Math.floor(Math.random()*CONFETTI_COLORS.length)]
    piece.style.borderRadius = Math.random() < 0.5 ? "50%" : "2px"
    document.body.appendChild(piece)
    setTimeout(()=>piece.remove(),1700)
  }
}

function smallConfetti(){ confettiBurst(60) }


/* ----------------------------------------------- */
/* 🛑 END GAME — highest total wins                 */
/* ----------------------------------------------- */

endGameBtn.onclick = ()=>{

  if(spinning || gameFinished) return

  gameFinished = true
  setSpinReady(false)
  endGameBtn.disabled = true
  blendBtn.disabled = true
  blendBtn.classList.remove("ready")

  let result = "tie"
  if(dogScore > tigerScore) result = "dog"
  else if(tigerScore > dogScore) result = "tiger"

  showWinner(result)

}

function showWinner(result){

  dogBox.classList.remove("active")
  tigerBox.classList.remove("active")

  const popup = document.createElement("div")
  popup.className = "winner-popup " + result

  if(result === "tie"){
    popup.innerHTML =
      `<div class="win-emoji">🐶🤝🐯</div>
       <div class="win-text">It's a TIE!!! 🎉</div>
       <div class="win-score">Both teams scored ${dogScore}!</div>`
  }else{
    const emoji = result === "dog" ? "🐶" : "🐯"
    const name  = result === "dog" ? "DOG TEAM WINS!" : "TIGER TEAM WINS!"
    popup.innerHTML =
      `<div class="win-emoji">${emoji}🏆</div>
       <div class="win-text">${name}</div>
       <div class="win-score">🐶 ${dogScore} &nbsp;—&nbsp; 🐯 ${tigerScore}</div>`
  }

  document.body.appendChild(popup)

  /* 10 seconds of confetti */
  const endAt = Date.now() + 10000
  confettiBurst(140)
  const party = setInterval(()=>{
    confettiBurst(110)
    if(Date.now() > endAt) clearInterval(party)
  },600)

}


/* ----------------------------------------------- */
/* START */
/* ----------------------------------------------- */

/* 🎨 THEME DROPDOWN */
const themeSelector = document.getElementById("themeSelector")
let savedTheme = "smileys"            // 😀 Smileys is the default theme
setTheme(savedTheme)
themeSelector.value = currentTheme
themeSelector.addEventListener("change", function(){
  if(spinning){ this.value = currentTheme; return }
  setTheme(this.value)
  this.blur()
})

buildBulbs()
drawBaseWheel()
requestAnimationFrame(loop)
updateTeamHighlight()
loadWord()
