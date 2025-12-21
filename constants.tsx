
import { Scenario, ResponseType } from './types';

const OFFICE_SCENARIOS: Scenario[] = [
  {
    id: "off-1", category: "Office", day: "EP 01", time: "09:00", title: "The Interview",
    description: "🎬 ACT 1: You're in the lobby of 'Apex Global'. The recruiter asks about your software skills.",
    hook: "First impressions are the only impressions.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=1600",
    goal: "Get Hired",
    options: [
      { id: "off1_o1", text: "I'm very good with new tools.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Too generic.", vocabulary: ["Adept"], definitions: ["Skilled or proficient at something"] },
      { id: "off1_o2", text: "I am highly adept at integrating new software.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Hired!", vocabulary: ["Adept"], definitions: ["Skilled or proficient at something"] }
    ]
  },
  {
    id: "off-2", category: "Office", day: "EP 02", time: "10:30", title: "The Messy Data",
    description: "🎬 ACT 2: You got the job! Sarah hands you a broken database. How do you plan to fix it?",
    hook: "Details define the professional.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1600",
    goal: "Show Precision",
    options: [
      { id: "off2_o1", text: "I will make the data clean.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use a stronger verb.", vocabulary: ["Refined"], definitions: ["Improved to be more precise or elegant"] },
      { id: "off2_o2", text: "I have refined the dataset for accuracy.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Precision pays off.", vocabulary: ["Refined"], definitions: ["Improved to be more precise or elegant"] }
    ]
  },
  {
    id: "off-3", category: "Office", day: "EP 03", time: "14:00", title: "The Boardroom",
    description: "🎬 ACT 3: Presenting to the Board. The Chairman questions your aggressive growth plan.",
    hook: "Speak like a leader, lead like a legend.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1600",
    goal: "Defend Strategy",
    options: [
      { id: "off3_o1", text: "This is a very new way for us.", type: ResponseType.SIMPLE, feedback: "RE-TAKE! 🎬 Needs impact.", vocabulary: ["Unprecedented"], definitions: ["Never done or known before"] },
      { id: "off3_o2", text: "This is an unprecedented shift in our model.", type: ResponseType.RICH, feedback: "ACTION! 🔥 They love it!", vocabulary: ["Unprecedented"], definitions: ["Never done or known before"] }
    ]
  },
  {
    id: "off-4", category: "Office", day: "EP 04", time: "16:00", title: "The Technical Glitch",
    description: "🎬 ACT 4: The presentation froze! You need to apologize to the big investors.",
    hook: "The best recovery is a classy apology.",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=1600",
    goal: "Crisis Management",
    options: [
      { id: "off4_o1", text: "Sorry for the error we made.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Too blunt.", vocabulary: ["Oversight"], definitions: ["An unintentional failure to notice or do something"] },
      { id: "off4_o2", text: "I apologize for this regrettable oversight.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Respect restored.", vocabulary: ["Oversight"], definitions: ["An unintentional failure to notice or do something"] }
    ]
  },
  {
    id: "off-5", category: "Office", day: "EP 05", time: "18:00", title: "The Promotion Hunt",
    description: "🎬 ACT 5: Sarah offers a Senior role. It's time to talk about the pay package.",
    hook: "Value yourself, and the world follows.",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1600",
    goal: "Negotiate Pay",
    options: [
      { id: "off5_o1", text: "I want a high salary for this.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Be more formal.", vocabulary: ["Remuneration"], definitions: ["Money paid for work or a service"] },
      { id: "off5_o2", text: "I'm seeking a fair level of remuneration.", type: ResponseType.RICH, feedback: "ACTION! 💰 Deal done!", vocabulary: ["Remuneration"], definitions: ["Money paid for work or a service"] }
    ]
  },
  {
    id: "off-6", category: "Office", day: "EP 06", time: "09:30", title: "The New Rival",
    description: "🎬 ACT 6: A new manager arrived. They seem very loud and social. Describe them.",
    hook: "Competition breeds excellence.",
    image: "https://images.unsplash.com/photo-1543269664-76bc3997d9ea?auto=format&fit=crop&q=80&w=1600",
    goal: "Social Insight",
    options: [
      { id: "off6_o1", text: "They are a very friendly person.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Low impact.", vocabulary: ["Gregarious"], definitions: ["Fond of company; sociable"] },
      { id: "off6_o2", text: "Our new lead is exceptionally gregarious.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Perfect description!", vocabulary: ["Gregarious"], definitions: ["Fond of company; sociable"] }
    ]
  },
  {
    id: "off-7", category: "Office", day: "EP 07", time: "11:00", title: "The Hard Choice",
    description: "🎬 ACT 7: You have to fire a contractor. The reason isn't clear. How do you explain?",
    hook: "Clarity is kindness in business.",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=1600",
    goal: "Clarity",
    options: [
      { id: "off7_o1", text: "The situation is not very clear.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use the IELTS word.", vocabulary: ["Ambiguous"], definitions: ["Open to more than one interpretation; unclear"] },
      { id: "off7_o2", text: "The current project status is somewhat ambiguous.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Clear as day.", vocabulary: ["Ambiguous"], definitions: ["Open to more than one interpretation; unclear"] }
    ]
  },
  {
    id: "off-8", category: "Office", day: "EP 08", time: "13:00", title: "The Lunch Pitch",
    description: "🎬 ACT 8: Over lunch, you pitch an idea. Is your argument strong and convincing?",
    hook: "The best ideas are the ones that stick.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600",
    goal: "Persuade",
    options: [
      { id: "off8_o1", text: "I think my idea is good and clear.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Needs logic.", vocabulary: ["Cogent"], definitions: ["Clear, logical, and convincing"] },
      { id: "off8_o2", text: "Your argument today was incredibly cogent.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Idea sold.", vocabulary: ["Cogent"], definitions: ["Clear, logical, and convincing"] }
    ]
  },
  {
    id: "off-9", category: "Office", day: "EP 09", time: "15:30", title: "The Workaholic",
    description: "🎬 ACT 9: You notice a teammate is staying until 10 PM every night. Is this good?",
    hook: "Burnout is the enemy of progress.",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1600",
    goal: "Identify Risk",
    options: [
      { id: "off9_o1", text: "Working too much is bad for him.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Not professional.", vocabulary: ["Deleterious"], definitions: ["Causing harm or damage"] },
      { id: "off9_o2", text: "Excessive overtime is deleterious to health.", type: ResponseType.RICH, feedback: "ACTION! 🎥 HR is listening.", vocabulary: ["Deleterious"], definitions: ["Causing harm or damage"] }
    ]
  },
  {
    id: "off-10", category: "Office", day: "EP 10", time: "17:00", title: "The Milestone",
    description: "🎬 ACT 10: You reached the 10-episode milestone! You're the top performer. How do you feel?",
    hook: "Excellence is not an act, but a habit.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600",
    goal: "Reflection",
    options: [
      { id: "off10_o1", text: "I am very careful with my work.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Go deeper.", vocabulary: ["Meticulous"], definitions: ["Showing great attention to detail; very careful"] },
      { id: "off10_o2", text: "I pride myself on being meticulous with every task.", type: ResponseType.RICH, feedback: "ACTION! 🔥 CEO level reached!", vocabulary: ["Meticulous"], definitions: ["Showing great attention to detail; very careful"] }
    ]
  },
  {
    id: "off-11", category: "Office", day: "EP 11", time: "09:00", title: "The Secret Project",
    description: "🎬 ACT 11: There is a hidden project. No one knows the details yet. How do you describe it?",
    hook: "Knowledge is power, silence is key.",
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?auto=format&fit=crop&q=80&w=1600",
    goal: "Description",
    options: [
      { id: "off11_o1", text: "The project is very hard to see or understand.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Too wordy.", vocabulary: ["Obscure"], definitions: ["Not discovered or known about; uncertain"] },
      { id: "off11_o2", text: "The project details remain somewhat obscure.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Mysterious!", vocabulary: ["Obscure"], definitions: ["Not discovered or known about; uncertain"] }
    ]
  },
  {
    id: "off-12", category: "Office", day: "EP 12", time: "11:00", title: "The Office Peace",
    description: "🎬 ACT 12: Conflict between departments. You need to be wise and careful.",
    hook: "Wisdom is knowing when to speak.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1600",
    goal: "Diplomacy",
    options: [
      { id: "off12_o1", text: "It is good to be careful with this decision.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Be more formal.", vocabulary: ["Prudent"], definitions: ["Acting with or showing care for the future"] },
      { id: "off12_o2", text: "It would be prudent to wait for more data.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Diplomat level!", vocabulary: ["Prudent"], definitions: ["Acting with or showing care for the future"] }
    ]
  },
  {
    id: "off-13", category: "Office", day: "EP 13", time: "14:00", title: "The Tech Pivot",
    description: "🎬 ACT 13: The company is changing strategy quickly. Is the plan practical?",
    hook: "Results over theory, every time.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600",
    goal: "Evaluation",
    options: [
      { id: "off13_o1", text: "We need a plan that actually works.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Pragmatic'.", vocabulary: ["Pragmatic"], definitions: ["Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations"] },
      { id: "off13_o2", text: "We must adopt a more pragmatic approach to growth.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Practicality wins.", vocabulary: ["Pragmatic"], definitions: ["Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical considerations"] }
    ]
  },
  {
    id: "off-14", category: "Office", day: "EP 14", time: "16:00", title: "The Hard Comeback",
    description: "🎬 ACT 14: A project failed, but you are ready to try again. Describe your team.",
    hook: "The fall is nothing; the rise is everything.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600",
    goal: "Team Spirit",
    options: [
      { id: "off14_o1", text: "Our team is very strong and doesn't give up.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Resilient'.", vocabulary: ["Resilient"], definitions: ["(of a person or animal) able to withstand or recover quickly from difficult conditions"] },
      { id: "off14_o2", text: "The team has proven to be incredibly resilient.", type: ResponseType.RICH, feedback: "ACTION! 🔥 CEO material!", vocabulary: ["Resilient"], definitions: ["(of a person or animal) able to withstand or recover quickly from difficult conditions"] }
    ]
  },
  {
    id: "off-15", category: "Office", day: "EP 15", time: "18:00", title: "The Legacy",
    description: "🎬 ACT 15: Final scene of the season. You're mentoring a new intern. Be kind.",
    hook: "A true leader creates more leaders.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1600",
    goal: "Mentorship",
    options: [
      { id: "off15_o1", text: "I want to be a kind and helpful boss.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Benevolent'.", vocabulary: ["Benevolent"], definitions: ["Well meaning and kindly"] },
      { id: "off15_o2", text: "I aim to maintain a benevolent presence in the office.", type: ResponseType.RICH, feedback: "ACTION! 🎬 SEASON COMPLETE!", vocabulary: ["Benevolent"], definitions: ["Well meaning and kindly"] }
    ]
  }
];

const TRAVEL_SCENARIOS: Scenario[] = [
  {
    id: "trav-1", category: "Travel", day: "EP 01", time: "18:00", title: "The Airport Gate",
    description: "🎬 ACT 1: You're at the gate for Bali. The agent says it's full. Ask for an upgrade.",
    hook: "Travel light, talk heavy.",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&q=80&w=1600",
    goal: "Upgrade",
    options: [
      { id: "trav1_o1", text: "I use your airline a lot.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Too basic.", vocabulary: ["Patronage"], definitions: ["The support given by a regular customer"] },
      { id: "trav1_o2", text: "I'd appreciate a priority upgrade for my patronage.", type: ResponseType.RICH, feedback: "ACTION! 🥂 First Class!", vocabulary: ["Patronage"], definitions: ["The support given by a regular customer"] }
    ]
  },
  {
    id: "trav-2", category: "Travel", day: "EP 02", time: "10:00", title: "The Grand Lobby",
    description: "🎬 ACT 2: Checking into the Ritz. Describe the gold-plated ceiling.",
    hook: "Luxury is in the eyes of the beholder.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",
    goal: "Impress",
    options: [
      { id: "trav2_o1", text: "This place looks very rich and grand.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use the IELTS word.", vocabulary: ["Opulent"], definitions: ["Ostentatiously rich and luxurious or lavish"] },
      { id: "trav2_o2", text: "The hotel interior is remarkably opulent.", type: ResponseType.RICH, feedback: "ACTION! 🔥 VIP treatment!", vocabulary: ["Opulent"], definitions: ["Ostentatiously rich and luxurious or lavish"] }
    ]
  },
  {
    id: "trav-3", category: "Travel", day: "EP 03", time: "12:00", title: "Lost in Tokyo",
    description: "🎬 ACT 3: The map is in Japanese. You're spinning in circles. How do you feel?",
    hook: "Not all who wander are lost, but I am.",
    image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?auto=format&fit=crop&q=80&w=1600",
    goal: "Get Help",
    options: [
      { id: "trav3_o1", text: "I'm lost and don't know where to go.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Sound more elegant.", vocabulary: ["Disoriented"], definitions: ["Having lost one's sense of direction"] },
      { id: "trav3_o2", text: "Pardon me, I feel slightly disoriented here.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Help arrives!", vocabulary: ["Disoriented"], definitions: ["Having lost one's sense of direction"] }
    ]
  },
  {
    id: "trav-4", category: "Travel", day: "EP 04", time: "15:00", title: "The Street Food",
    description: "🎬 ACT 4: You found a tiny shop that's been there for 200 years. Describe it.",
    hook: "Old is gold, and flavor is timeless.",
    image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1600",
    goal: "Appreciate Culture",
    options: [
      { id: "trav4_o1", text: "This shop is old and cute.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Quaint'.", vocabulary: ["Quaint"], definitions: ["Attractively unusual or old-fashioned"] },
      { id: "trav4_o2", text: "This little cafe is incredibly quaint.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Food critic level!", vocabulary: ["Quaint"], definitions: ["Attractively unusual or old-fashioned"] }
    ]
  },
  {
    id: "trav-5", category: "Travel", day: "EP 05", time: "20:00", title: "The Ocean View",
    description: "🎬 ACT 5: Sunset on the deck. The water is like glass. How is the vibe?",
    hook: "Peace is the ultimate destination.",
    image: "https://images.unsplash.com/photo-1534073828943-f801091bb270?auto=format&fit=crop&q=80&w=1600",
    goal: "Final Review",
    options: [
      { id: "trav5_o1", text: "The sea is very calm and quiet.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Boring.", vocabulary: ["Serene"], definitions: ["Calm, peaceful, and untroubled"] },
      { id: "trav5_o2", text: "The atmosphere here is perfectly serene.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Peaceful end!", vocabulary: ["Serene"], definitions: ["Calm, peaceful, and untroubled"] }
    ]
  },
  {
    id: "trav-6", category: "Travel", day: "EP 06", time: "08:00", title: "The Local Market",
    description: "🎬 ACT 6: You see Starbucks every 10 meters in this city. How do you describe it?",
    hook: "Modernity is everywhere.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1600",
    goal: "Observation",
    options: [
      { id: "trav6_o1", text: "This brand is everywhere I look.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use the big word.", vocabulary: ["Ubiquitous"], definitions: ["Present, appearing, or found everywhere"] },
      { id: "trav6_o2", text: "These coffee chains are ubiquitous now.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Observer status!", vocabulary: ["Ubiquitous"], definitions: ["Present, appearing, or found everywhere"] }
    ]
  },
  {
    id: "trav-7", category: "Travel", day: "EP 07", time: "09:00", title: "The Island Hike",
    description: "🎬 ACT 7: You're hiking a remote mountain. The path is dangerous and very high.",
    hook: "The best view comes after the hardest climb.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1600",
    goal: "Description",
    options: [
      { id: "trav7_o1", text: "This mountain path is very dangerous.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Precarious'.", vocabulary: ["Precarious"], definitions: ["Not securely held or in position; dangerously likely to fall or collapse"] },
      { id: "trav7_o2", text: "The trail ahead looks quite precarious.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Adventurer vibes!", vocabulary: ["Precarious"], definitions: ["Not securely held or in position; dangerously likely to fall or collapse"] }
    ]
  },
  {
    id: "trav-8", category: "Travel", day: "EP 08", time: "11:00", title: "The Ancient Ruins",
    description: "🎬 ACT 8: Exploring the Colosseum. It's thousands of years old. Describe its state.",
    hook: "History is a gallery of pictures.",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&q=80&w=1600",
    goal: "Historical Context",
    options: [
      { id: "trav8_o1", text: "This old building is starting to fall apart.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Dilapidated'.", vocabulary: ["Dilapidated"], definitions: ["(of a building or object) in a state of disrepair or ruin as a result of age or neglect"] },
      { id: "trav8_o2", text: "Parts of these ruins are now quite dilapidated.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Historian status!", vocabulary: ["Dilapidated"], definitions: ["(of a building or object) in a state of disrepair or ruin as a result of age or neglect"] }
    ]
  },
  {
    id: "trav-9", category: "Travel", day: "EP 09", time: "13:00", title: "The Crystal Lagoon",
    description: "🎬 ACT 9: The water is so blue you can see the bottom. How do you describe it?",
    hook: "Nature is the ultimate artist.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1600",
    goal: "Pristine Beauty",
    options: [
      { id: "trav9_o1", text: "The water here is very clean and untouched.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Pristine'.", vocabulary: ["Pristine"], definitions: ["In its original condition; unspoiled"] },
      { id: "trav9_o2", text: "The lagoon is remarkably pristine.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Travel influencer level!", vocabulary: ["Pristine"], definitions: ["In its original condition; unspoiled"] }
    ]
  },
  {
    id: "trav-10", category: "Travel", day: "EP 10", time: "15:00", title: "The Local Sage",
    description: "🎬 ACT 10: You meet an old traveler with many stories. They seem very wise.",
    hook: "Wise people speak because they have something to say.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1600",
    goal: "Wisdom",
    options: [
      { id: "trav10_o1", text: "You have a very sharp and wise mind.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Perspicacious'.", vocabulary: ["Perspicacious"], definitions: ["Having a ready insight into and understanding of things"] },
      { id: "trav10_o2", text: "Your insights are truly perspicacious.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Respect earned!", vocabulary: ["Perspicacious"], definitions: ["Having a ready insight into and understanding of things"] }
    ]
  },
  {
    id: "trav-11", category: "Travel", day: "EP 11", time: "17:00", title: "The Hidden Temple",
    description: "🎬 ACT 11: You found a temple at the top of a mountain. The view is amazing.",
    hook: "The soul needs beauty more than bread.",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&q=80&w=1600",
    goal: "Majesty",
    options: [
      { id: "trav11_o1", text: "This view is very beautiful and high.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Sublime'.", vocabulary: ["Sublime"], definitions: ["Of such excellence, grandeur, or beauty as to inspire great admiration"] },
      { id: "trav11_o2", text: "The mountain view is absolutely sublime.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Poet vibes!", vocabulary: ["Sublime"], definitions: ["Of such excellence, grandeur, or beauty as to inspire great admiration"] }
    ]
  },
  {
    id: "trav-12", category: "Travel", day: "EP 12", time: "09:00", title: "The Smooth Stay",
    description: "🎬 ACT 12: You are checking out of a 5-star hotel. The service was perfect.",
    hook: "Service is the heart of luxury.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600",
    goal: "Praise",
    options: [
      { id: "trav12_o1", text: "The service here was very perfect.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Impeccable'.", vocabulary: ["Impeccable"], definitions: ["(of behavior, performance, or appearance) in accordance with the highest standards; faultless"] },
      { id: "trav12_o2", text: "The service has been truly impeccable.", type: ResponseType.RICH, feedback: "ACTION! 🔥 VIP exit!", vocabulary: ["Impeccable"], definitions: ["(of behavior, performance, or appearance) in accordance with the highest standards; faultless"] }
    ]
  },
  {
    id: "trav-13", category: "Travel", day: "EP 13", time: "11:00", title: "The Stormy Flight",
    description: "🎬 ACT 13: Your flight is delayed 10 hours. You stay calm. How do you describe it?",
    hook: "Patience is a traveler's best friend.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=1600",
    goal: "Calmness",
    options: [
      { id: "trav13_o1", text: "I have a lot of strength to wait.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Fortitude'.", vocabulary: ["Fortitude"], definitions: ["Courage in pain or adversity"] },
      { id: "trav13_o2", text: "One needs great fortitude for travel today.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Zen Master!", vocabulary: ["Fortitude"], definitions: ["Courage in pain or adversity"] }
    ]
  },
  {
    id: "trav-14", category: "Travel", day: "EP 14", time: "13:00", title: "The Glow of Night",
    description: "🎬 ACT 14: Walking through a neon street in Seoul. Everything is glowing.",
    hook: "Night is a world lit by itself.",
    image: "https://images.unsplash.com/photo-1519922639192-e73293ca430e?auto=format&fit=crop&q=80&w=1600",
    goal: "Visuals",
    options: [
      { id: "trav14_o1", text: "The street looks very bright and glowing.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Luminous'.", vocabulary: ["Luminous"], definitions: ["Full of or shedding light; bright or shining, especially in the dark"] },
      { id: "trav14_o2", text: "The city streets are incredibly luminous tonight.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Photographer's eye!", vocabulary: ["Luminous"], definitions: ["Full of or shedding light; bright or shining, especially in the dark"] }
    ]
  },
  {
    id: "trav-15", category: "Travel", day: "EP 15", time: "15:00", title: "The Final Memory",
    description: "🎬 ACT 15: Looking at your photos at the end of the trip. They bring back feelings.",
    hook: "We travel not to escape life, but for life not to escape us.",
    image: "https://images.unsplash.com/photo-1493246507139-91e8bef99c02?auto=format&fit=crop&q=80&w=1600",
    goal: "Reflection",
    options: [
      { id: "trav15_o1", text: "These photos bring back many memories.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Evocative'.", vocabulary: ["Evocative"], definitions: ["Bringing strong images, memories, or feelings to mind"] },
      { id: "trav15_o2", text: "These images are deeply evocative of our journey.", type: ResponseType.RICH, feedback: "ACTION! 🎬 SEASON COMPLETE!", vocabulary: ["Evocative"], definitions: ["Bringing strong images, memories, or feelings to mind"] }
    ]
  }
];

const ROUTINE_SCENARIOS: Scenario[] = [
  {
    id: "rout-1", category: "Routine", day: "EP 01", time: "07:00", title: "The Morning Commute",
    description: "🎬 ACT 1: The train is late again. You're explaining to your friend why you're annoyed.",
    hook: "Time is the only luxury.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600",
    goal: "Express Delay",
    options: [
      { id: "rout1_o1", text: "The train is always late and it's bad.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Chronically'.", vocabulary: ["Chronically"], definitions: ["In a persistent and long-lasting manner"] },
      { id: "rout1_o2", text: "This train service is chronically delayed.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Expert complainer!", vocabulary: ["Chronically"], definitions: ["In a persistent and long-lasting manner"] }
    ]
  },
  {
    id: "rout-2", category: "Routine", day: "EP 02", time: "12:00", title: "Grocery Shopping",
    description: "🎬 ACT 2: You're at the organic store. Everything is very expensive. What's your take?",
    hook: "You are what you eat, and it costs a lot.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600",
    goal: "Discuss Prices",
    options: [
      { id: "rout2_o1", text: "These organic apples are very expensive.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Exorbitant'.", vocabulary: ["Exorbitant"], definitions: ["(of a price or amount charged) unreasonably high"] },
      { id: "rout2_o2", text: "The prices here are frankly exorbitant.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Consumer advocate!", vocabulary: ["Exorbitant"], definitions: ["(of a price or amount charged) unreasonably high"] }
    ]
  },
  {
    id: "rout-3", category: "Routine", day: "EP 03", time: "14:00", title: "The Gym Session",
    description: "🎬 ACT 3: You just finished a heavy workout. It was very difficult.",
    hook: "No pain, no gain, just a lot of sweat.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1600",
    goal: "Description",
    options: [
      { id: "rout3_o1", text: "That workout was very hard work.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Strenuous'.", vocabulary: ["Strenuous"], definitions: ["Requiring or using great exertion"] },
      { id: "rout3_o2", text: "I found the workout today quite strenuous.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Athlete vibes!", vocabulary: ["Strenuous"], definitions: ["Requiring or using great exertion"] }
    ]
  },
  {
    id: "rout-4", category: "Routine", day: "EP 04", time: "16:00", title: "The Loud Neighbor",
    description: "🎬 ACT 4: Your neighbor has been drilling for 5 hours. It won't stop.",
    hook: "Silence is golden, but drilling is not.",
    image: "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=1600",
    goal: "Complaint",
    options: [
      { id: "rout4_o1", text: "The noise just won't stop ever.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Incessant'.", vocabulary: ["Incessant"], definitions: ["(of something regarded as unpleasant) continuing without pause or interruption"] },
      { id: "rout4_o2", text: "The drilling next door is simply incessant.", type: ResponseType.RICH, feedback: "ACTION! 🎥 HR complaint level!", vocabulary: ["Incessant"], definitions: ["(of something regarded as unpleasant) continuing without pause or interruption"] }
    ]
  },
  {
    id: "rout-5", category: "Routine", day: "EP 05", time: "18:00", title: "The Fast Meal",
    description: "🎬 ACT 5: You're eating a quick dinner. You want it to be healthy.",
    hook: "Fast food doesn't have to be junk food.",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=1600",
    goal: "Health",
    options: [
      { id: "rout5_o1", text: "I want to add more health to my meals.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Augment'.", vocabulary: ["Augment"], definitions: ["Make (something) greater by adding to it; increase"] },
      { id: "rout5_o2", text: "I'm trying to augment the nutritional value of my diet.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Health guru!", vocabulary: ["Augment"], definitions: ["Make (something) greater by adding to it; increase"] }
    ]
  },
  {
    id: "rout-6", category: "Routine", day: "EP 06", time: "07:30", title: "Morning Energy",
    description: "🎬 ACT 6: Someone at the bus stop is very friendly and nice.",
    hook: "A smile costs nothing but gives much.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=1600",
    goal: "Description",
    options: [
      { id: "rout6_o1", text: "The old man was very friendly to me.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Amiable'.", vocabulary: ["Amiable"], definitions: ["Having or displaying a friendly and pleasant manner"] },
      { id: "rout6_o2", text: "He was an exceptionally amiable gentleman.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Social star!", vocabulary: ["Amiable"], definitions: ["Having or displaying a friendly and pleasant manner"] }
    ]
  },
  {
    id: "rout-7", category: "Routine", day: "EP 07", time: "09:00", title: "The Clean Kitchen",
    description: "🎬 ACT 7: You are cleaning your house. You are doing a very perfect job.",
    hook: "Cleanliness is next to godliness.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=1600",
    goal: "Precision",
    options: [
      { id: "rout7_o1", text: "I am being very careful with my cleaning.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Fastidious'.", vocabulary: ["Fastidious"], definitions: ["Very attentive to and concerned about accuracy and detail"] },
      { id: "rout7_o2", text: "I tend to be quite fastidious about home hygiene.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Cleaning expert!", vocabulary: ["Fastidious"], definitions: ["Very attentive to and concerned about accuracy and detail"] }
    ]
  },
  {
    id: "rout-8", category: "Routine", day: "EP 08", time: "11:00", title: "Small Talk",
    description: "🎬 ACT 8: Talking about the weather. It's not a very important topic.",
    hook: "Weather is the ultimate conversation starter.",
    image: "https://images.unsplash.com/photo-1534088568595-a066f77ec3d2?auto=format&fit=crop&q=80&w=1600",
    goal: "Observation",
    options: [
      { id: "rout8_o1", text: "The topic we are talking about is not important.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Trivial'.", vocabulary: ["Trivial"], definitions: ["Of little value or importance"] },
      { id: "rout8_o2", text: "We were just discussing trivial matters like the rain.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Philosopher vibes!", vocabulary: ["Trivial"], definitions: ["Of little value or importance"] }
    ]
  },
  {
    id: "rout-9", category: "Routine", day: "EP 09", time: "13:00", title: "Heavy Bags",
    description: "🎬 ACT 9: You're carrying 5 heavy grocery bags. They are hard to handle.",
    hook: "Life is heavy, groceries are heavier.",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600",
    goal: "Description",
    options: [
      { id: "rout9_o1", text: "These bags are very big and hard to carry.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Cumbersome'.", vocabulary: ["Cumbersome"], definitions: ["Large or heavy and therefore difficult to carry or use"] },
      { id: "rout9_o2", text: "These shopping bags are rather cumbersome.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Strong man level!", vocabulary: ["Cumbersome"], definitions: ["Large or heavy and therefore difficult to carry or use"] }
    ]
  },
  {
    id: "rout-10", category: "Routine", day: "EP 10", time: "15:00", title: "The Head Pain",
    description: "🎬 ACT 10: You have a headache. You need some medicine to make it better.",
    hook: "Health is wealth, pain is just a signal.",
    image: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&q=80&w=1600",
    goal: "Relief",
    options: [
      { id: "rout10_o1", text: "I need something to make the pain go away.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Alleviate'.", vocabulary: ["Alleviate"], definitions: ["Make (suffering, deficiency, or a problem) less severe"] },
      { id: "rout10_o2", text: "I'm looking for a way to alleviate this headache.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Doctor's favorite patient!", vocabulary: ["Alleviate"], definitions: ["Make (suffering, deficiency, or a problem) less severe"] }
    ]
  },
  {
    id: "rout-11", category: "Routine", day: "EP 11", time: "17:00", title: "Rainy Days",
    description: "🎬 ACT 11: It rains only sometimes in this city, not all the time.",
    hook: "Rainy days are for cozy tea.",
    image: "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&q=80&w=1600",
    goal: "Description",
    options: [
      { id: "rout11_o1", text: "The rain happens only once in a while.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Sporadic'.", vocabulary: ["Sporadic"], definitions: ["Occurring at irregular intervals or only in a few places; scattered or isolated"] },
      { id: "rout11_o2", text: "We've had only sporadic rainfall this month.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Weather expert!", vocabulary: ["Sporadic"], definitions: ["Occurring at irregular intervals or only in a few places; scattered or isolated"] }
    ]
  },
  {
    id: "rout-12", category: "Routine", day: "EP 12", time: "09:00", title: "Locked Doors",
    description: "🎬 ACT 12: You always check if the stove is off. You are very careful.",
    hook: "Safety first, second, and third.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600",
    goal: "Safety",
    options: [
      { id: "rout12_o1", text: "I am always very careful about home safety.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Vigilant'.", vocabulary: ["Vigilant"], definitions: ["Keeping careful watch for possible danger or difficulties"] },
      { id: "rout12_o2", text: "I try to remain vigilant about fire hazards.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Security pro!", vocabulary: ["Vigilant"], definitions: ["Keeping careful watch for possible danger or difficulties"] }
    ]
  },
  {
    id: "rout-13", category: "Routine", day: "EP 13", time: "11:00", title: "The Fast Study",
    description: "🎬 ACT 13: You are studying very hard and with focus. Describe yourself.",
    hook: "Success is the sum of small efforts.",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1600",
    goal: "Character",
    options: [
      { id: "rout13_o1", text: "I am a very hard-working student.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Diligent'.", vocabulary: ["Diligent"], definitions: ["Having or showing care and conscientiousness in one's work or duties"] },
      { id: "rout13_o2", text: "I've been quite diligent with my IELTS prep.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Top student vibes!", vocabulary: ["Diligent"], definitions: ["Having or showing care and conscientiousness in one's work or duties"] }
    ]
  },
  {
    id: "rout-14", category: "Routine", day: "EP 14", time: "13:00", title: "Sunset Feelings",
    description: "🎬 ACT 14: You see a beautiful sunset, but it lasts only 5 minutes.",
    hook: "Beauty is everywhere, but it doesn't stay.",
    image: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=1600",
    goal: "Description",
    options: [
      { id: "rout14_o1", text: "This beauty is very short-lived.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Ephemeral'.", vocabulary: ["Ephemeral"], definitions: ["Lasting for a very short time"] },
      { id: "rout14_o2", text: "Sunset beauty is always so ephemeral.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Deep thinker status!", vocabulary: ["Ephemeral"], definitions: ["Lasting for a very short time"] }
    ]
  },
  {
    id: "rout-15", category: "Routine", day: "EP 15", time: "15:00", title: "The Money Plan",
    description: "🎬 ACT 15: You are saving money for the future. It's a smart choice.",
    hook: "A penny saved is a penny earned.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1600",
    goal: "Final Finance",
    options: [
      { id: "rout15_o1", text: "It's good to be careful with money.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Prudent'.", vocabulary: ["Prudent"], definitions: ["Acting with or showing care and thought for the future"] },
      { id: "rout15_o2", text: "Saving monthly is a prudent financial move.", type: ResponseType.RICH, feedback: "ACTION! 🎬 SEASON COMPLETE!", vocabulary: ["Prudent"], definitions: ["Acting with or showing care and thought for the future"] }
    ]
  }
];

const PARTY_SCENARIOS: Scenario[] = [
  {
    id: "part-1", category: "Party", day: "EP 01", time: "22:00", title: "The Rooftop Party",
    description: "🎬 ACT 1: You walk onto a crowded rooftop. The music is pulsing. Describe the energy.",
    hook: "The night is young, and so are we.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600",
    goal: "Vibe Check",
    options: [
      { id: "part1_o1", text: "This party has very good energy.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Vibrant'.", vocabulary: ["Vibrant"], definitions: ["Full of energy and enthusiasm"] },
      { id: "part1_o2", text: "The atmosphere here is incredibly vibrant.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Party starter!", vocabulary: ["Vibrant"], definitions: ["Full of energy and enthusiasm"] }
    ]
  },
  {
    id: "part-2", category: "Party", day: "EP 02", time: "23:30", title: "Meeting the Host",
    description: "🎬 ACT 2: You meet the host, who is famous. They ask what you do. Be modest but smart.",
    hook: "Confidence is quiet. Insecurity is loud.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=1600",
    goal: "Self-Introduction",
    options: [
      { id: "part2_o1", text: "I do many different types of work.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Eclectic'.", vocabulary: ["Eclectic"], definitions: ["Deriving ideas, style, or taste from a broad and diverse range of sources"] },
      { id: "part2_o2", text: "My professional background is quite eclectic.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Most interesting guest!", vocabulary: ["Eclectic"], definitions: ["Deriving ideas, style, or taste from a broad and diverse range of sources"] }
    ]
  },
  {
    id: "part-3", category: "Party", day: "EP 03", time: "00:00", title: "The Great Speech",
    description: "🎬 ACT 3: Someone gives a toast. They speak very well and clearly.",
    hook: "Words have power to move the soul.",
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=1600",
    goal: "Description",
    options: [
      { id: "part3_o1", text: "He is a very good and clear speaker.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Eloquent'.", vocabulary: ["Eloquent"], definitions: ["Fluent or persuasive in speaking or writing"] },
      { id: "part3_o2", text: "His toast tonight was truly eloquent.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Heart touched!", vocabulary: ["Eloquent"], definitions: ["Fluent or persuasive in speaking or writing"] }
    ]
  },
  {
    id: "part-4", category: "Party", day: "EP 04", time: "01:00", title: "Happy Crowd",
    description: "🎬 ACT 4: Everyone is laughing and having a very good time.",
    hook: "Joy is contagious.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1600",
    goal: "Description",
    options: [
      { id: "part4_o1", text: "Everyone seems very happy and joyful.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Jovial'.", vocabulary: ["Jovial"], definitions: ["Cheerful and friendly"] },
      { id: "part4_o2", text: "The crowd is in a very jovial mood tonight.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Party peak!", vocabulary: ["Jovial"], definitions: ["Cheerful and friendly"] }
    ]
  },
  {
    id: "part-5", category: "Party", day: "EP 05", time: "02:00", title: "Friendly Chat",
    description: "🎬 ACT 5: You're talking to a new person. They are very easy to talk to.",
    hook: "A stranger is just a friend you haven't met.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=1600",
    goal: "Socialize",
    options: [
      { id: "part5_o1", text: "You are a very easy person to talk to.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Affable'.", vocabulary: ["Affable"], definitions: ["Friendly, good-natured, or easy to talk to"] },
      { id: "part5_o2", text: "I find you incredibly affable, if I'm honest.", type: ResponseType.RICH, feedback: "ACTION! 🔥 New friend!", vocabulary: ["Affable"], definitions: ["Friendly, good-natured, or easy to talk to"] }
    ]
  },
  {
    id: "part-6", category: "Party", day: "EP 06", time: "22:30", title: "The Fancy Dress",
    description: "🎬 ACT 6: Someone is wearing a very expensive and showy outfit.",
    hook: "Style is a way to say who you are.",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1600",
    goal: "Fashion Talk",
    options: [
      { id: "part6_o1", text: "That dress is very showy and expensive-looking.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Ostentatious'.", vocabulary: ["Ostentatious"], definitions: ["Characterized by vulgar or pretentious display; designed to impress or attract notice"] },
      { id: "part6_o2", text: "Her choice of attire is quite ostentatious.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Fashion critic!", vocabulary: ["Ostentatious"], definitions: ["Characterized by vulgar or pretentious display; designed to impress or attract notice"] }
    ]
  },
  {
    id: "part-7", category: "Party", day: "EP 07", time: "23:00", title: "Full of Life",
    description: "🎬 ACT 7: Your best friend is the center of the party, dancing and talking.",
    hook: "Life is a dance floor.",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&q=80&w=1600",
    goal: "Description",
    options: [
      { id: "part7_o1", text: "She is very full of life and energy.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Vivacious'.", vocabulary: ["Vivacious"], definitions: ["(especially of a woman) attractively lively and animated"] },
      { id: "part7_o2", text: "She's always been such a vivacious spirit.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Bestie goals!", vocabulary: ["Vivacious"], definitions: ["(especially of a woman) attractively lively and animated"] }
    ]
  },
  {
    id: "part-8", category: "Party", day: "EP 08", time: "00:00", title: "Hidden Detail",
    description: "🎬 ACT 8: The drink has a flavor that is hard to notice but very good.",
    hook: "The best things are hidden in plain sight.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1600",
    goal: "Taste",
    options: [
      { id: "part8_o1", text: "The flavor in this drink is very light and hard to see.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Subtle'.", vocabulary: ["Subtle"], definitions: ["(especially of a change or distinction) so delicate or precise as to be difficult to analyze or describe"] },
      { id: "part8_o2", text: "There's a very subtle hint of lime here.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Connoisseur vibes!", vocabulary: ["Subtle"], definitions: ["(especially of a change or distinction) so delicate or precise as to be difficult to analyze or describe"] }
    ]
  },
  {
    id: "part-9", category: "Party", day: "EP 09", time: "01:30", title: "Pure Happiness",
    description: "🎬 ACT 9: You are so happy you feel like you're floating.",
    hook: "Happiness is a state of mind.",
    image: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?auto=format&fit=crop&q=80&w=1600",
    goal: "Feeling",
    options: [
      { id: "part9_o1", text: "I feel very happy and great right now.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Euphoric'.", vocabulary: ["Euphoric"], definitions: ["Characterized by or feeling intense excitement and happiness"] },
      { id: "part9_o2", text: "The music makes me feel absolutely euphoric.", type: ResponseType.RICH, feedback: "ACTION! 🎥 High on life!", vocabulary: ["Euphoric"], definitions: ["Characterized by or feeling intense excitement and happiness"] }
    ]
  },
  {
    id: "part-10", category: "Party", day: "EP 10", time: "02:30", title: "Kind Host",
    description: "🎬 ACT 10: The host pays for everyone's drinks. They are very generous.",
    hook: "Generosity is the ultimate flex.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=1600",
    goal: "Praise",
    options: [
      { id: "part10_o1", text: "You are a very kind and generous host.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Magnanimous'.", vocabulary: ["Magnanimous"], definitions: ["Generous or forgiving, especially toward a rival or less powerful person"] },
      { id: "part10_o2", text: "That was a truly magnanimous gesture.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Host of the year!", vocabulary: ["Magnanimous"], definitions: ["Generous or forgiving, especially toward a rival or less powerful person"] }
    ]
  },
  {
    id: "part-11", category: "Party", day: "EP 11", time: "22:00", title: "Calm and Ready",
    description: "🎬 ACT 11: Even in the crowd, you stay calm and look good. Describe yourself.",
    hook: "Stay cool under pressure.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1600",
    goal: "Self-Image",
    options: [
      { id: "part11_o1", text: "I am staying very calm and balanced.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Poised'.", vocabulary: ["Poised"], definitions: ["Having a composed and self-assured manner"] },
      { id: "part11_o2", text: "It's important to stay poised in social settings.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Bond vibes!", vocabulary: ["Poised"], definitions: ["Having a composed and self-assured manner"] }
    ]
  },
  {
    id: "part-12", category: "Party", day: "EP 12", time: "23:30", title: "Many Talents",
    description: "🎬 ACT 12: You meet a girl who plays 3 instruments and speaks 5 languages.",
    hook: "A jack of all trades is a master of fun.",
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1600",
    goal: "Compliment",
    options: [
      { id: "part12_o1", text: "You have very many different talents.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Versatile'.", vocabulary: ["Versatile"], definitions: ["Able to adapt or be adapted to many different functions or activities"] },
      { id: "part12_o2", text: "You are an incredibly versatile individual.", type: ResponseType.RICH, feedback: "ACTION! 🔥 Most interesting guest!", vocabulary: ["Versatile"], definitions: ["Able to adapt or be adapted to many different functions or activities"] }
    ]
  },
  {
    id: "part-13", category: "Party", day: "EP 13", time: "01:00", title: "Beautiful Voice",
    description: "🎬 ACT 13: Someone starts singing. Everyone stops to listen. It's so good.",
    hook: "Music speaks where words fail.",
    image: "https://images.unsplash.com/photo-1514525253361-bee87184919a?auto=format&fit=crop&q=80&w=1600",
    goal: "Impact",
    options: [
      { id: "part13_o1", text: "The performance was very beautiful and caught my eye.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Captivating'.", vocabulary: ["Captivating"], definitions: ["Capable of attracting and holding interest; charming"] },
      { id: "part13_o2", text: "Her performance was absolutely captivating.", type: ResponseType.RICH, feedback: "ACTION! 🎥 Encore requested!", vocabulary: ["Captivating"], definitions: ["Capable of attracting and holding interest; charming"] }
    ]
  },
  {
    id: "part-14", category: "Party", day: "EP 14", time: "02:00", title: "No Plan Fun",
    description: "🎬 ACT 14: You decide to go to another party suddenly, without a plan.",
    hook: "The best plans are no plans at all.",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&q=80&w=1600",
    goal: "Decision",
    options: [
      { id: "part14_o1", text: "This decision was very sudden and not planned.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Impromptu'.", vocabulary: ["Impromptu"], definitions: ["Done without being planned, organized, or rehearsed"] },
      { id: "part14_o2", text: "Let's have an impromptu dance-off!", type: ResponseType.RICH, feedback: "ACTION! 🔥 Party legend!", vocabulary: ["Impromptu"], definitions: ["Done without being planned, organized, or rehearsed"] }
    ]
  },
  {
    id: "part-15", category: "Party", day: "EP 15", time: "03:00", title: "Social Success",
    description: "🎬 ACT 15: The party is ending. It was a very good social event.",
    hook: "Good times become good memories.",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1600",
    goal: "Final Review",
    options: [
      { id: "part15_o1", text: "This was a very good and friendly party.", type: ResponseType.SIMPLE, feedback: "CUT! 🎬 Use 'Convivial'.", vocabulary: ["Convivial"], definitions: ["(of an atmosphere or event) cheerful and friendly; jovial"] },
      { id: "part15_o2", text: "It was a truly convivial gathering tonight.", type: ResponseType.RICH, feedback: "ACTION! 🎬 SEASON COMPLETE!", vocabulary: ["Convivial"], definitions: ["(of an atmosphere or event) cheerful and friendly; jovial"] }
    ]
  }
];

export const SCENARIOS: Scenario[] = [
  ...OFFICE_SCENARIOS,
  ...TRAVEL_SCENARIOS,
  ...ROUTINE_SCENARIOS,
  ...PARTY_SCENARIOS
];
