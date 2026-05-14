// app/data/personas.ts
import { PersonaCode } from "./questions";

export interface PersonaData {
  code: PersonaCode;
  colorHex: string; 
  title: string;
  slogan: string;
  imageBase: string;     
  imageMid?: string;     // 仅供 SHT 等隐藏多段式人格使用的中间态图片
  imageAwakened: string; 
  rot: { 
    title: string; 
    description: string; 
  };
  mid?: {                // 仅供 SHT 使用的中间态文案
    title: string; 
    description: string; 
  }; 
  awakened: { 
    title: string; 
    description: string; 
  };
  guides: string[]; 
}

export const personasData: Record<PersonaCode, PersonaData> = {
  NPC: {
    code: "NPC", 
    colorHex: "#38A169", 
    title: "THE NPC", 
    slogan: "EMPATHY CHRONIC SIMP",
    imageBase: "/images/NPC_base.png", 
    imageAwakened: "/images/NPC_awakened.png",
    rot: { 
      title: "The Chronic Simp", 
      description: "You're running a charity in every relationship. You constantly sacrifice your boundaries to please others, apologizing a hundred times even when they are wrong. You've become a human doormat, sweating profusely while holding a heavy tray of cheap 'likes' and begging for external validation." 
    },
    awakened: { 
      title: "The Empathy Alchemist", 
      description: "Your seemingly pathetic people-pleasing is actually the world's rarest high-frequency emotional radar. When you drop that heavy tray of cheap approval, you channel empathy into pure energy. You can instantly read the room and see through everyone's vulnerabilities." 
    },
    guides: [
      "Tax their emotions: Stop giving out free therapy. Only activate your radar for those who pay the price.", 
      "Weaponized Empathy: Manipulate fools by stroking their ego. Let them think they won while you take all the actual profit."
    ]
  },
  ROT: {
    code: "ROT", 
    colorHex: "#48BB78", 
    title: "THE BED ROTTER", 
    slogan: "ENERGY CONSERVING FUNGI",
    imageBase: "/images/ROT_base.png", 
    imageAwakened: "/images/ROT_awakened.png",
    rot: { 
      title: "The Fungi", 
      description: "Your bed has literally molded to your shape. You're striving to become an advanced fungus in your bedroom ecosystem. The 'outside world' is a hostile alien battlefield. Your only contribution to society today is maintaining absolute physical stillness." 
    },
    awakened: { 
      title: "The Energy Master", 
      description: "Your obsession with 'rotting' isn't laziness; it's an advanced defense mechanism to prevent energy depletion. Because you despise tedious steps, you instinctively find the 'shortest path' to complete any task. You are a natural-born minimalist." 
    },
    guides: [
      "Monetize the Rot: Use your hatred of physical labor to develop automated shortcuts. Replace muscle with brainpower.", 
      "The Central Processor: Stay in your comfort zone making core decisions. Outsource all the exhausting execution to energetic 'tools'."
    ]
  },
  SCR: {
    code: "SCR", 
    colorHex: "#9F7AEA", 
    title: "THE DOOMSCROLLER", 
    slogan: "INFINITE DATA SLURPER",
    imageBase: "/images/SCR_base.png", 
    imageAwakened: "/images/SCR_awakened.png",
    rot: { 
      title: "The Infinite Scroller", 
      description: "Your attention span has degraded past a goldfish. You take your phone into the shower and physically cannot use the toilet without a screen. The algorithm walks you like a dog. Your brain is a trash can full of cyber waste, memes, and useless trivia." 
    },
    awakened: { 
      title: "The Trend Oracle", 
      description: "Your biological addiction to data is actually a terrifying capacity for pattern recognition. While others pay millions for market research, you just absorb tons of 'cyber waste' daily to form laser-accurate intuitions. You are the living thermometer of the digital age." 
    },
    guides: [
      "From Prey to Predator: Take off the consumer filter and put on the anthropologist microscope. Your doomscrolling is global market research.", 
      "Arbitrage the Brain Rot: Your mental waste is a cyber goldmine. Sell your trend predictions to boomers still making PowerPoint decks."
    ]
  },
  HTR: {
    code: "HTR", 
    colorHex: "#805AD5", 
    title: "THE HATER", 
    slogan: "MALICIOUS CRITIC ARCHITECT",
    imageBase: "/images/HTR_base.png", 
    imageAwakened: "/images/HTR_awakened.png",
    rot: { 
      title: "The Malicious Critic", 
      description: "Nothing in this world satisfies you. You'd complain a perfect sunset has too much UV radiation. You habitually leave 1-star reviews and will spot the single typo in a flawless 50-page report, mentally degrading the author's IQ. You excel at finding everyone's flaws—except your own." 
    },
    awakened: { 
      title: "The Quality Architect", 
      description: "Your 'assassin instinct' stems from a sick pursuit of perfection and order. In a world full of sloppy execution, you are the ultimate mine-sweeper who can instantly spot logical fatal errors. Your pickiness is the last line of defense against systemic collapse." 
    },
    guides: [
      "Put a Price Tag on Your Hate: Stop complaining for free. Package your criticism as high-paid audits or ruthless consulting fees.", 
      "Legalized Nitpicking: Secure a position that requires extreme precision. Crush sloppy workers with your microscope and make them thank you for it."
    ]
  },
  GHO: {
    code: "GHO", 
    colorHex: "#4299E1", 
    title: "THE GHOST", 
    slogan: "EVADING BOUNDARY KEEPER",
    imageBase: "/images/GHO_base.png", 
    imageAwakened: "/images/GHO_awakened.png",
    rot: { 
      title: "The Evader", 
      description: "Leaving people on 'Read' is your sacred religion. A sudden voice call is literal torture; your heart rate spikes to 150 as 100 disaster scenarios flash through your mind. Your social battery is permanently at 1% and refuses to charge." 
    },
    awakened: { 
      title: "The Boundary Keeper", 
      description: "Your physical avoidance of socializing exists because your radar is too sensitive to external noise. Cutting contact is your subconscious building a moat to protect your energy. In absolute isolation, your focus, creativity, and execution speed explode exponentially." 
    },
    guides: [
      "Starvation Marketing: Rebrand your 'unreachability' as 'high-net-worth exclusivity.' You're not rude; your time is just too expensive for them.", 
      "Absolute Home Court: Establish strict rules in your domain. Anyone who wants your time must book it through your exact text-based procedures."
    ]
  },
  DLU: {
    code: "DLU", 
    colorHex: "#63B3ED", 
    title: "THE DELULU", 
    slogan: "DAYDREAMING REALITY BENDER",
    imageBase: "/images/DLU_base.png", 
    imageAwakened: "/images/DLU_awakened.png",
    rot: { 
      title: "The Daydreamer", 
      description: "You live 99% of your life inside a 4K movie playing in your head. But the second you face a real-life rent bill or an Excel sheet, your brain blue-screens. Your body works a minimum-wage job, but your soul is ruling another universe." 
    },
    awakened: { 
      title: "The Reality Bender", 
      description: "'Delulu is the solulu.' Your biological addiction to fictional scenarios is actually a hyper-developed right brain running high-dimensional simulations. Given the right tools, you can force the unrealistic, beautiful blueprints in your head into sheer reality." 
    },
    guides: [
      "Cash Out the Delusion: If you can hallucinate a beach villa, you can hallucinate a flawless business pitch. Write down the script and take investors' money.", 
      "Hunt for Executors: You are the high-dimensional director providing the blueprint. Don't lay the bricks yourself; find high-execution teams to do the labor."
    ]
  },
  GOB: {
    code: "GOB", 
    colorHex: "#ECC94B", 
    title: "THE GOBLIN", 
    slogan: "CHAOTIC BREAKTHROUGH SURFER",
    imageBase: "/images/GOB_base.png", 
    imageAwakened: "/images/GOB_awakened.png",
    rot: { 
      title: "The Chaos Maker", 
      description: "Your room looks like it was raided by explosives. Your sleep schedule is 8 hours misaligned with your local time zone. You survive purely on vibes, junk food, and lethal doses of caffeine. Your life is an absolute structural ruin." 
    },
    awakened: { 
      title: "The Chaos Surfer", 
      description: "Your physiological disregard for order is because rigid rules suffocate your instincts. In extreme, high-pressure chaos where everyone else is screaming and breaking down, your heart rate actually drops. You use beast-like intuition to violently break through deadlocks." 
    },
    guides: [
      "Embrace the Dumpster Fire: Stop faking discipline. Take over the desperate, chaotic projects that everyone else failed at. That's your arena.", 
      "Win Through Chaos: When others break down over standard procedures, flip the table. Use your raw instincts to shatter the deadlock and establish your own new order."
    ]
  },
  YAP: {
    code: "YAP", 
    colorHex: "#FAF089", 
    title: "THE YAPPER", 
    slogan: "NOISE LORE MASTER",
    imageBase: "/images/YAP_base.png", 
    imageAwakened: "/images/YAP_awakened.png",
    rot: { 
      title: "The Noise Machine", 
      description: "As long as you are awake, your mouth does not stop. You fear silence so much that if the air is quiet for 5 seconds, alarms go off in your brain. You don't even care if they are listening; they are just free trash cans for your verbal diarrhea." 
    },
    awakened: { 
      title: "The Lore Keeper", 
      description: "Your uncontrollable output is fundamentally a god-tier ability to weave information and manipulate emotions. In a socially anxious, communication-constipated era, your endless desire to express is the ultimate weapon to break the ice. You could sell ice to an Eskimo." 
    },
    guides: [
      "Stop the Free Stand-Up: Your yapping is a highly infectious emotional asset. If there's no appearance fee or actual profit, shut your mouth and stay mysterious.", 
      "Master Information Control: Don't show all your cards at once. Use strategic pauses and suspense to hook bored listeners into fanatic cult followers."
    ]
  },
  
  // ==========================================
  // 隐藏款：SHT 阶级跃升专属数据
  // 带有专属的 mid 中间态图文
  // ==========================================
  SHT: {
    code: "SHT", 
    colorHex: "#D69E2E", 
    title: "LIMITED S.H.I.T.", 
    slogan: "PUBLIC ENEMY OBSERVER",
    imageBase: "/images/SHT_base.png",   
    imageMid: "/images/SHT_mid.png",     
    imageAwakened: "/images/SHT_final.png", 
    rot: { 
      title: "The Public Enemy", 
      description: "You are a massive bug in human evolution. A wet sock stepping on a Lego in the dark. Your only contribution to the universe is converting oxygen into CO2. When others hit rock bottom, they stop; you grab a shovel and keep digging. You are rotten to the core." 
    },
    mid: {
      title: "System Anomaly",
      description: "ERROR: YOU HAVE ZERO VALUE. You are a glitch in the simulation. You should be completely rebuilt from scratch. Initiating recycling protocol..."
    },
    awakened: { 
      title: "The Elite Observer", 
      description: "Since this world is already a giant, glitchy, theatrical joke, you—as pure 'garbage'—have paradoxically become the most sober, indispensable foundational nutrient. You calmly watch them torture each other while wearing a flawless custom suit. You completed the ultimate class ascension from 'industrial waste' to 'limited-edition luxury fertilizer.'" 
    },
    guides: [
      "Reverse Moral Kidnapping: Flash a polite smile and gracefully respond: 'I am unrecyclable waste, how could I ever comprehend the hypocrisy of you superior humans?'", 
      "The Ultimate Secret: Rave in the ruins, bloom in the mud. Turn your 'misfit' nature into a limited-edition persona they can never afford."
    ]
  }
};