// src/data/questions.ts

export type PersonaCode = "YAP" | "GHO" | "NPC" | "DLU" | "GOB" | "SCR" | "HTR" | "ROT" | "SHT";

export interface Option {
  id: string;
  text: string;
  scores: Partial<Record<PersonaCode, number>>;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "The delivery guy drops your premium combo meal into a muddy puddle two steps away from you. Your first reaction?",
    options: [
      { id: "A", text: "Pull out my phone, snap a pic for a 1-star review, and draft a 500-word essay to ruin his career.", scores: { HTR: 2, YAP: 1 } },
      { id: "B", text: "“No worries! I actually love soggy fries!” and tip him extra because he looks guilty.", scores: { NPC: 2 } },
      { id: "C", text: "Pick it up and eat it. Mud adds flavor, and my stomach acid can melt steel anyway.", scores: { GOB: 2 } },
      { id: "D", text: "Hide behind the curtains until he leaves, then starve in the dark in silence.", scores: { GHO: 2, ROT: 1 } },
    ],
  },
  {
    id: 2,
    text: "You’ve been staring at a “Hey” from your dating app match for three hours. What have you been doing?",
    options: [
      { id: "A", text: "Mentally planning our island wedding and picking out names for our three golden retrievers.", scores: { DLU: 2 } },
      { id: "B", text: "Meant to reply, but switched to TikTok for a second and completely forgot this person existed.", scores: { SCR: 2 } },
      { id: "C", text: "Drafting a 4-paragraph essay detailing my childhood trauma and why I despise lazy openers.", scores: { YAP: 2, HTR: 1 } },
      { id: "D", text: "Just the thought of going out, washing my hair, and making small talk exhausted me. I'm going to sleep.", scores: { ROT: 2, GHO: 1 } },
    ],
  },
  {
    id: 3,
    text: "You're in a painfully boring video meeting that totally could have been an email. You are currently:",
    options: [
      { id: "A", text: "Unmuting to ask a massive, complex question the exact second everyone is about to log off.", scores: { YAP: 2 } },
      { id: "B", text: "Furiously DMing coworkers to absolutely roast the hideous sweater the boss is wearing.", scores: { HTR: 2 } },
      { id: "C", text: "Staring blankly at the screen while my brain is completely checked out, scrolling on my phone out of frame.", scores: { SCR: 2 } },
      { id: "D", text: "Mic and camera off, silently watching these fake faces and wondering why the human race hasn't gone extinct yet.", scores: { SHT: 1 } },
    ],
  },
  {
    id: 4,
    text: "Your bank account is practically zero, but payday is still three days away. How do you survive?",
    options: [
      { id: "A", text: "Spend most of it on an overpriced iced coffee because I believe “manifesting” will attract wealth.", scores: { DLU: 2 } },
      { id: "B", text: "Lend half of what's left to a sketchy friend who swore they'd “pay me back next week.”", scores: { NPC: 2 } },
      { id: "C", text: "Sustain my vital signs on stolen ketchup packets from a fast-food joint and tap water.", scores: { GOB: 2 } },
      { id: "D", text: "As long as I lay in bed and absolutely do not move, I won't burn calories, so I won't get hungry.", scores: { ROT: 2 } },
    ],
  },
  {
    id: 5,
    text: "You bump into an old acquaintance you *really* don't want to talk to in a supermarket aisle.",
    options: [
      { id: "A", text: "Pretend I didn't see them, execute a tactical retreat, and hide behind the toilet paper shelf until they leave.", scores: { GHO: 2 } },
      { id: "B", text: "Greet them, suffer through 30 minutes of their bragging, and somehow end up offering to buy them coffee.", scores: { NPC: 2 } },
      { id: "C", text: "Rush up, initiate a conversation, and recite their recent social media posts perfectly to creep them out.", scores: { SCR: 2, YAP: 1 } },
      { id: "D", text: "Stare at the discounted items in their cart and silently judge their lifestyle choices.", scores: { HTR: 2 } },
    ],
  },
  {
    id: 6,
    text: "Aliens abduct you and demand one good reason not to blow up Earth. You:",
    options: [
      { id: "A", text: "Trap them in an endless rant about pop star drama until they can't take it and kick you off the ship.", scores: { YAP: 2 } },
      { id: "B", text: "Humbly ask if they want some tea and apologize for Earth being such a dump.", scores: { NPC: 2 } },
      { id: "C", text: "“Can I just take a nap on the dissection table first? I'm exhausted.”", scores: { ROT: 2 } },
      { id: "D", text: "“Honestly, just blow it up. Do you need me to press the button for you?”", scores: { SHT: 1 } },
    ],
  },
  {
    id: 7,
    text: "Your roommate asks if you can tidy up the kitchen, which currently looks like a disaster zone. Your strategy:",
    options: [
      { id: "A", text: "Throw a towel over the trash. Out of sight, out of mind. It's Schrödinger's garbage.", scores: { GOB: 2 } },
      { id: "B", text: "Bring up ancient history, pointing out they left a fork in the sink three weeks ago, making this legally their fault.", scores: { HTR: 2 } },
      { id: "C", text: "Text back “sure give me a sec,” then put on noise-canceling headphones and pretend I went deaf.", scores: { GHO: 2 } },
      { id: "D", text: "Daydream about having a magic wand that cleans it instantly, then stare blankly at the wall for 30 minutes.", scores: { DLU: 2 } },
    ],
  },
  {
    id: 8,
    text: "A zombie apocalypse breaks out and they are banging on your door. Your survival plan?",
    options: [
      { id: "A", text: "Lock the bedroom door. If they get in, whatever. I am absolutely not getting out of bed to run.", scores: { ROT: 2 } },
      { id: "B", text: "Quickly post a story: “Zombies at the door, the vibes are immaculate today,” and wait for death.", scores: { SCR: 2 } },
      { id: "C", text: "Walk outside and try to purify their souls with love, peace, and crystal healing energy.", scores: { DLU: 2, NPC: 1 } },
      { id: "D", text: "Charge out and bite a zombie first to establish absolute dominance.", scores: { GOB: 2 } },
    ],
  },
  {
    id: 9,
    text: "A wizard offers you a button: push it to get insanely rich, but one random person on Earth turns into a slug.",
    options: [
      { id: "A", text: "“Absolutely not! What if they have a family? How will a slug family survive?!”", scores: { NPC: 2 } },
      { id: "B", text: "Avoid eye contact with the wizard, pretend I didn't see him, and walk away quickly.", scores: { GHO: 2 } },
      { id: "C", text: "Pull the wizard into a two-hour negotiation to amend the contract clauses for maximum profit.", scores: { YAP: 2 } },
      { id: "D", text: "“Can I press it multiple times and specifically target my boss and my ex?”", scores: { SHT: 1 } },
    ],
  },
  {
    id: 10,
    text: "Your computer completely dies and black-screens one second before saving a crucial document you spent a week on.",
    options: [
      { id: "A", text: "Stare at the black screen in despair for two hours, then order greasy junk food and binge-eat.", scores: { GOB: 2, ROT: 1 } },
      { id: "B", text: "Immediately start mentally drafting a Hollywood sci-fi thriller script about a “cursed computer.”", scores: { DLU: 2 } },
      { id: "C", text: "Record a video of myself crying hysterically, add a sad trending audio, and post it for sympathy.", scores: { SCR: 2 } },
      { id: "D", text: "Start drafting a massively long, hateful email to the computer brand, the software dev, and the power company.", scores: { HTR: 2 } },
    ],
  },
  {
    id: 11,
    text: "You die and get reincarnated as an inanimate object in a corporate office. What are you?",
    options: [
      { id: "A", text: "The stapler shoved in the deepest corner of a drawer that no one will ever open or use.", scores: { GHO: 2 } },
      { id: "B", text: "The malicious printer that guarantees a paper jam every time someone is rushing to print a document.", scores: { HTR: 2 } },
      { id: "C", text: "That mysterious, unwashed coffee mug next to the microwave that started growing green mold years ago.", scores: { GOB: 2 } },
      { id: "D", text: "The hypocritical “Success & Hustle” motivational poster on the wall that actually thinks it's inspiring people.", scores: { DLU: 2 } },
    ],
  },
  {
    id: 12,
    text: "Last question: Be honest, why are you sitting here taking this test right now?",
    options: [
      { id: "A", text: "Because my brain has decayed to the point where I can't read a normal book with more than 140 characters.", scores: { SCR: 2 } },
      { id: "B", text: "Deep down, I still hold onto the delusion that this test will reveal I'm a once-in-a-century misunderstood genius.", scores: { DLU: 2 } },
      { id: "C", text: "Just gathering material to see how pathetic and boring internet trash has become so I can roast it later.", scores: { HTR: 2 } },
      { id: "D", text: "“Stop asking. I'm just a pile of sentient cosmic garbage waiting for the void to consume me.”", scores: { SHT: 1 } },
    ],
  }
];