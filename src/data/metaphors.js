// The collection. Order matches the brief's numbering, which already groups by
// family, and that order drives the ring layout on the home page.
//
// Each entry keys its glyph by slug; see data/glyphs.js.
//
// `draft: true` marks copy written as a first draft and awaiting revision.
// Flywheel carries finished copy and is the only entry without the marker.

export const metaphors = [
  {
    slug: 'north-star',
    name: 'North star',
    oneLiner: "Steer by it, don't sail to it.",
    family: 'direction-and-time',
    draft: true,
    moment: 'A choice splits the road and both branches look defensible.',
    question: 'which direction does this serve, regardless of where it lands?',
    mechanics:
      'Polaris holds its place while the whole sky wheels around it. A navigator reads the angle, corrects the heading, and sails on. The star never closes the distance for any of that effort, and it holds the course anyway.',
    breaking:
      'No ship arrives at a star. A goal that nothing can reach also rules nothing out and settles no argument between two headings. Ships sink while their bearing stays true.',
    related: ['helm', 'map'],
  },
  {
    slug: 'helm',
    name: 'Helm',
    oneLiner: 'Hold the wheel, not the road.',
    family: 'direction-and-time',
    draft: true,
    moment: 'Conditions turn against the plan, and the plan was sound.',
    question: 'what does this hand still turn?',
    mechanics:
      'The wheel answers the driver. The road, the weather, and the other cars answer nobody. Steering splits the drive into the part that responds to input and the part that only arrives, and grip belongs to the first.',
    breaking:
      'A wheel implies a car that steers. Ice takes the front tires and the wheel spins free of the road it points at. Drivers who trust the wheel through a skid steer straight into the ditch.',
    related: ['north-star', 'magnet'],
  },
  {
    slug: 'map',
    name: 'Map',
    oneLiner: 'Not the territory.',
    family: 'direction-and-time',
    draft: true,
    moment: 'A model of the situation starts standing in for the situation.',
    question: 'what did this leave out to stay legible?',
    mechanics:
      'Every projection trades one distortion for another: flatten a globe and either shape or area gives way. A map earns its use by dropping detail, and the dropped detail keeps existing on the ground. Fog of war supplies the second movement, since the map draws itself as the walking happens, and blank regions mark absence of travel rather than absence of terrain.',
    breaking:
      'Maps age. Roads wash out, borders move, and the paper reports none of it. A traveler who corrects the ground to match the map walks off a cliff the map calls a meadow.',
    related: ['portal', 'abyss'],
  },
  {
    slug: 'river',
    name: 'River',
    oneLiner: 'The same river, never the same water.',
    family: 'direction-and-time',
    draft: true,
    moment: 'Something keeps its name while everything inside it turns over.',
    question: 'am I swimming, or being carried?',
    mechanics:
      'The banks hold the shape while the water replaces itself hourly. A current moves every floating thing at one speed, which hides it, so stillness in water still travels downstream. Swimming against the flow reveals the force that being carried concealed.',
    breaking:
      'Rivers run one way. The metaphor grants no eddies, no backflow, and no stepping onto the bank, and lives do all three. A named current also supplies an alibi, since the water takes the blame downstream.',
    related: ['vortex', 'mask'],
  },
  {
    slug: 'flywheel',
    name: 'Flywheel',
    oneLiner: 'Effort stored as momentum.',
    family: 'momentum-and-capacity',
    draft: false,
    moment: 'Effort feels pointless because progress is invisible.',
    question:
      "is this push adding momentum to a wheel that's already turning, or starting a new wheel from rest?",
    mechanics:
      "The pushes are repeated, consistent efforts. The wheel's mass is the accumulated asset: an audience, a skill, a body of work. Momentum is the compounding return; old work keeps producing results without new effort. Pushes only accumulate when they act in one direction.",
    breaking:
      'Real flywheels have friction. Audiences churn, skills decay, and every wheel needs some minimum ongoing push. The metaphor also implies one wheel; pushing several from rest at once means none reaches self-sustaining spin. And momentum is an asset, not a guarantee; a jammed rod stops a spinning wheel cold.',
    related: ['battery', 'deck'],
  },
  {
    slug: 'battery',
    name: 'Battery',
    oneLiner: 'Drains fast, charges slow.',
    family: 'momentum-and-capacity',
    draft: true,
    moment: 'The work remains and the capacity for it does not.',
    question: 'is there charge for this?',
    mechanics:
      'A cell holds a fixed store, spends it under load, and refills only while it sits connected to a source. Discharge runs fast and charging runs slow, so the two rates never balance inside one day. Rest counts as charging only once the plug seats.',
    breaking:
      'No cell gains charge from its own load, and some work returns more than it spends. Cells degrade too, while the metaphor promises a capacity that always climbs back to full. The frame licenses running to empty, because a drained cell only waits for a socket.',
    related: ['flywheel', 'candle'],
  },
  {
    slug: 'whetstone',
    name: 'Whetstone',
    oneLiner: 'An edge kept by friction.',
    family: 'momentum-and-capacity',
    draft: true,
    moment: 'Practice runs smooth and the edge dulls anyway.',
    question: 'what abrades here?',
    mechanics:
      'A stone sharpens by removing steel. The grit bites, the angle holds, and the blade leaves smaller than it arrived. Comfortable strokes polish the surface and move no metal.',
    breaking:
      "Sharpening costs blade. Every honing shortens the tool's life, and a knife ground daily wears down to a sliver. The metaphor also hands the stone all the authority, though grit too coarse tears an edge off instead of raising one.",
    related: ['chrysalis', 'vortex'],
  },
  {
    slug: 'ratchet',
    name: 'Ratchet',
    oneLiner: "Progress that can't slip back.",
    family: 'momentum-and-capacity',
    draft: true,
    moment: 'The same ground gets retaken every quarter.',
    question: 'what would hold this without attention?',
    mechanics:
      'A pawl drops into each tooth and blocks reverse rotation. The gain survives lost grip, lost interest, and the operator walking away. Design supplies what vigilance keeps failing to.',
    breaking:
      'Ratchets turn one way, and some gains need giving back. A pawl locks a wrong direction just as hard as a right one, so reversing means breaking the mechanism. Teeth also shear under load, dropping the whole accumulated turn at once.',
    related: ['door', 'trellis'],
  },
  {
    slug: 'trellis',
    name: 'Trellis',
    oneLiner: 'Growth needs something to climb.',
    family: 'growth',
    draft: true,
    moment: 'Effort spreads across the ground and gains no height.',
    question: 'what is this climbing?',
    mechanics:
      'A vine grips whatever it touches and rises on borrowed rigidity. The trellis carries nothing of its own toward the sun; it offers holds. Structure and growth split the work, and neither one reaches the light alone.',
    breaking:
      'A frame decides the shape. Vines trained on a lattice grow the lattice, and a plant that outgrows its frame pulls the whole thing down. Trellises also hold dead vines upright, so the structure keeps standing long after the growth stops.',
    related: ['chrysalis', 'ratchet'],
  },
  {
    slug: 'chrysalis',
    name: 'Chrysalis',
    oneLiner: 'Shelter is a stage, not a home.',
    family: 'growth',
    draft: true,
    moment: 'The old way stops working and the new way has not arrived.',
    question: 'how long does this stage run?',
    mechanics:
      'Inside the shell the caterpillar dissolves, and imaginal discs rebuild a body from the liquid. The casing guards a form that could not survive contact with the world. Pressure against the shell forces blood into the wings, so the struggle out inflates what flies.',
    breaking:
      'The shell gives no reading from outside. A chrysalis cut open early releases a butterfly whose wings never expand, and nothing separates a protected stage from a stalled one until the casing opens. Some shells stay shut until the thing inside dies.',
    related: ['trellis', 'mask'],
  },
  {
    slug: 'candle',
    name: 'Candle',
    oneLiner: 'Hope, lit on purpose.',
    family: 'growth',
    draft: true,
    moment: 'Dark arrives, and the room stays dark by default.',
    question: 'what gets lit here, and by whom?',
    mechanics:
      'A match answers darkness with a decision rather than a mood. One flame passes to a thousand wicks and loses nothing of itself, so light spreads without dividing. The flame holds steady while the wax underneath goes.',
    breaking:
      'The flame comes free and the wax runs out. Hours still spend, and a candle lit at both ends ends sooner. No candle lights another that stays across the room.',
    related: ['battery', 'spotlight'],
  },
  {
    slug: 'magnet',
    name: 'Magnet',
    oneLiner: 'It pulls, and it pushes.',
    family: 'play-and-terrain',
    draft: true,
    moment: 'Behavior repeats across people who share nothing but the place.',
    question: 'what field are they standing in?',
    mechanics:
      'Iron filings scatter at random until a magnet slides under the paper, and the pattern that springs up belongs to the field. Both poles carry information, so who arrives and who leaves describe one force. Iron parked near a strong magnet turns magnetic, and the pull propagates by proximity.',
    breaking:
      'Filings get no say and people do. Field strength measures no worth, since a strong pull takes scrap as readily as anything else. Fields also end, and walking far enough releases the force, which leaves gravity as the limiting case, the one field with no exit.',
    related: ['helm', 'the-game'],
  },
  {
    slug: 'the-game',
    name: 'The game',
    oneLiner: 'Better move, or different board?',
    family: 'play-and-terrain',
    draft: true,
    moment: 'The moves keep improving and the position keeps losing.',
    question: 'better move, or different board?',
    mechanics:
      'Three levels stack: the piece that moves, the player who moves it, and the board that sets what counts as a move. Rules define winning, and winning ends the game. Finite games run to a victor, while infinite games run to keep running, and their players rewrite the rules to keep anyone from leaving.',
    breaking:
      'Games start, stop, and keep their rules written down. Life fields no referee, no agreed scoring, and no whistle, so calling a situation a game invents an opponent where there might be weather. Play also implies stakes low enough to lose.',
    related: ['deck', 'map'],
  },
  {
    slug: 'portal',
    name: 'Portal',
    oneLiner: 'The shortcut might exist.',
    family: 'play-and-terrain',
    draft: true,
    moment: 'The long road stretches ahead, and nobody checked the wall for a door.',
    question: 'has anyone tried the easy thing?',
    mechanics:
      'A portal joins two points and skips the ground between them. Checking costs one attempt; the road costs months. Some walls hold a door, so the check runs first.',
    breaking:
      'Terrain teaches. A traveler who steps through arrives without the map that walking would have drawn, and the missing miles surface later as missing judgment. Hunting for doors also burns the season for walking.',
    related: ['map', 'door'],
  },
  {
    slug: 'deck',
    name: 'Deck',
    oneLiner: 'Every addition dilutes the draw.',
    family: 'play-and-terrain',
    draft: true,
    moment: 'A good option appears, and the list already runs long.',
    question: 'what does adding this do to everything already in?',
    mechanics:
      'Hand size stays fixed while the deck grows, so each new card taxes how often the best ones turn up. The comparison runs deck-with against deck-without, never card against card. Cutting a card raises the draw rate of everything left, which makes removal a purchase.',
    breaking:
      'Decks get built once and shuffled after. Commitments arrive on their own schedule, tangle with each other, and refuse to cut cleanly. A scrapped card also stays scrapped, while a dropped project keeps billing.',
    related: ['battery', 'the-game'],
  },
  {
    slug: 'door',
    name: 'Door',
    oneLiner: 'Can you walk back through?',
    family: 'play-and-terrain',
    draft: true,
    moment: 'A decision stalls in analysis, and the analysis stopped adding information.',
    question: 'can you walk back through?',
    mechanics:
      'Doors come in two kinds: one swings both ways, one locks behind. Reversible doors reward speed, because walking through costs less than standing at the threshold. Irreversible doors earn the deliberation the reversible ones waste.',
    breaking:
      'Reversibility hides its price. Walking back through spends time, credibility, and the other doors that shut while the first one stood open. Doors also change class mid-stride, and the swinging one locks once someone follows through behind.',
    related: ['portal', 'ratchet'],
  },
  {
    slug: 'vortex',
    name: 'Vortex',
    oneLiner: 'The pull grows toward the center.',
    family: 'inner-weather',
    draft: true,
    moment: 'The same thought or the same fight circles back tighter each time.',
    question: 'which direction leaves the column?',
    mechanics:
      'A vortex accelerates inward, and each pass shortens the radius and raises the speed. Swimming straight out meets the strongest current at every point. The escape runs sideways, crossing the column instead of climbing the pull.',
    breaking:
      'Water moves particles and grants them nothing. A vortex casts the swimmer as debris, which explains the pull and erases the arms. Some spirals also stay flat, repeating without tightening, and dressing a rut as a vortex lends it an urgency it never had.',
    related: ['river', 'abyss'],
  },
  {
    slug: 'abyss',
    name: 'Abyss',
    oneLiner: "Look into the unknown.",
    family: 'inner-weather',
    draft: true,
    moment: 'Something waits unexamined, and the not-looking costs more each week.',
    question: 'what does the dark actually hold?',
    mechanics:
      'An abyss hides its floor and shows its edge. Looking in returns partial information at low cost, while avoiding it returns none at rising cost. The rim holds weight, and standing on it reveals more than backing away.',
    breaking:
      'Some depths give nothing back. Staring into a hole yields no floor, no plan, and no end to the staring, and the metaphor flags nothing for when looking turns to falling. Abysses also flatter their contents, dressing an ordinary problem as a bottomless one.',
    related: ['vortex', 'map'],
  },
  {
    slug: 'spotlight',
    name: 'Spotlight',
    oneLiner: "The dark isn't empty.",
    family: 'inner-weather',
    draft: true,
    moment: 'One item fills the whole field of view.',
    question: 'who aimed this, and what fell outside the beam?',
    mechanics:
      'A spotlight makes one thing vivid by subtraction, dimming everything outside the cone. The unlit stage keeps its furniture, its actors, and its trapdoors. Someone stands at the lighting board, and the beam lands where that hand points.',
    breaking:
      'Beams cut hard edges and attention blurs at its own. The metaphor grants one light and one operator, while a room holds many lamps and several hands on the switches. A spotlight that follows a performer implies the performer matters, and the beam manufactures that impression by itself.',
    related: ['mask', 'abyss'],
  },
  {
    slug: 'mask',
    name: 'Mask',
    oneLiner: 'It faces the world for you.',
    family: 'inner-weather',
    draft: true,
    moment: 'The face presented at work stops matching the one underneath.',
    question: 'what does this mask protect, and can it come off?',
    mechanics:
      'A mask stands between a face and a room and absorbs what lands on it. Some faces need cover while they form, so the mask buys time rather than telling a lie. Removal happens offstage, which is what keeps it a mask and not a face.',
    breaking:
      'Masks fuse. Worn long enough without removal, the thing starts making appearances on its own schedule, and the spot where it comes off stops existing. A mask also blocks in both directions, so what the room offers lands on carved wood.',
    related: ['chrysalis', 'spotlight'],
  },
]

export const bySlug = Object.fromEntries(metaphors.map((m) => [m.slug, m]))

export const getMetaphor = (slug) => bySlug[slug]

export const neighbors = (slug) => {
  const i = metaphors.findIndex((m) => m.slug === slug)
  const n = metaphors.length
  return {
    index: i,
    prev: metaphors[(i - 1 + n) % n],
    next: metaphors[(i + 1) % n],
  }
}
