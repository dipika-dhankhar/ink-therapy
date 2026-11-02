const IMAGES = {
  shadow: 'https://images.hostinger.com/4859a494-c16d-4ac1-bf79-bf73b7323e4b.png',
  glass: 'https://images.hostinger.com/708c3a0b-7417-4b5a-aa28-189a25e76014.png',
  stairs: 'https://images.hostinger.com/86e1b0bb-e581-4e51-8548-ed2baa1b6ed1.png',
  bridge: 'https://images.hostinger.com/f0bfdbfe-6e01-4a19-9719-31a2e7af9d8e.png',
};

module.exports = [
  {
    slug: 'before-the-difficult-conversation',
    theme: 'Communication',
    readTime: 4,
    title: 'Before the difficult conversation',
    excerpt:
      'Before rehearsing what to say, write to understand what needs to be said. Separate observation, interpretation and the request you want to make.',
    image: IMAGES.shadow,
    imageAlt: 'An angular shadow brings definition to a pale architectural wall',
    intro:
      'You can rehearse a difficult conversation many times and still avoid the point when it arrives. Preparing the words is useful, but only after you have understood what you are trying to communicate.',
    sections: [
      {
        heading: 'Name what happened',
        paragraphs: [
          'Start with the observation, as plainly as you can. Then write the meaning you have attached to it. “The deadline was missed” and “my work is not being respected” are different statements, even if they feel inseparable.',
          'Keeping them distinct does not dismiss your interpretation. It gives you a way to enter the conversation with something the other person can recognise, rather than a conclusion they must first defend themselves against.',
        ],
      },
      {
        heading: 'Find what you want the conversation to do',
        paragraphs: [
          'Are you trying to understand, give feedback, set a boundary, repair a relationship or reach a decision? A conversation can serve more than one purpose, but it helps to know which purpose comes first.',
          'Write the outcome you hope for without scripting the other person’s response. You can prepare your contribution. You cannot control their agreement, their reaction or the pace at which understanding happens.',
        ],
      },
      {
        heading: 'Make room for a question',
        paragraphs: [
          'Write what you do not yet know about their perspective. The question should be genuine: one whose answer could change your understanding, not an accusation with a question mark attached.',
          'Then write the point you need to make in one or two sentences. Keep the observation, its effect and your request clear. You do not need to include every frustration to communicate the one thing that matters.',
        ],
      },
      {
        heading: 'Prepare for clarity, not performance',
        paragraphs: [
          'The aim is not a flawless delivery. It is to remain connected to the purpose when the conversation becomes uncomfortable. A short written statement can help you return to the point without returning to a rehearsed speech.',
          'Before the conversation, ask: if I leave only one thing understood, what must it be? That answer is often more useful than another hour of perfecting the opening line.',
        ],
      },
    ],
    prompt: {
      question: 'What do I need to say—and what am I currently saying around it?',
      hint: 'Write the direct version first. Then revise for fairness and precision, without removing the point.',
    },
    related: ['a-clearer-point-of-view-in-leadership', 'journaling-vs-writing-for-thinking'],
  },
  {
    slug: 'a-clearer-point-of-view-in-leadership',
    theme: 'Leadership',
    readTime: 4,
    title: 'A clearer point of view in leadership',
    excerpt:
      'A leadership point of view is more than a confident statement. Examine the experience, evidence and assumptions that give your position substance.',
    image: IMAGES.glass,
    imageAlt: 'Modern glass facades reflect different perspectives of an urban skyline',
    intro:
      'Leaders are often expected to have a view before they have had time to form one. Confidence can fill the gap, but a confident statement and a considered position are not the same thing.',
    sections: [
      {
        heading: 'Begin with what you have seen',
        paragraphs: [
          'Write down the experience that informs your view. What happened? What did you notice? What changed your mind? Specific experience gives a position more substance than language borrowed from the prevailing conversation.',
          'Be precise about its limits. Something that was true in one team or organisation may not be true everywhere. A credible point of view can acknowledge that boundary without losing its strength.',
        ],
      },
      {
        heading: 'Make the claim visible',
        paragraphs: [
          'Write the thing you believe in one plain sentence. Then write why. If the reasons do not support the sentence, revise the claim rather than making the language more emphatic.',
          'Ask what a thoughtful person who disagrees would say. Treat that as a serious question, not an invitation to construct the weakest possible objection. Your argument becomes stronger when it can engage with a real alternative.',
        ],
      },
      {
        heading: 'Know what your position asks of you',
        paragraphs: [
          'A point of view has consequences. If you believe something about leadership, priorities or culture, what would someone see you do differently? Write the behaviour your position implies.',
          'The purpose is not to turn every idea into a slogan. It is to connect what you say with what you are prepared to choose. A view you can stand behind has both reasoning and responsibility.',
        ],
      },
    ],
    prompt: {
      question: 'What do I believe about this—and what have I experienced that gives me a reason to believe it?',
      hint: 'Name one example, one limit to your claim and one decision your position would change.',
    },
    related: ['before-the-difficult-conversation', 'journaling-vs-writing-for-thinking'],
  },
  {
    slug: 'journaling-vs-writing-for-thinking',
    theme: 'Clarity',
    readTime: 4,
    title: 'Journaling vs writing for thinking',
    excerpt:
      'Both use words, but they serve different purposes. Understand how a structured thinking practice differs from keeping a personal diary.',
    image: IMAGES.stairs,
    imageAlt: 'Intersecting architectural stairs create a study in structure and perspective',
    intro:
      '“Is this journaling?” is a reasonable question when a practice begins with writing. The distinction is not the tool or the length of the entry. It is what the writing is being asked to do.',
    sections: [
      {
        heading: 'A diary can hold an experience',
        paragraphs: [
          'Journaling can record a day, hold an emotion or make space for reflection. It does not have to arrive at a conclusion to be valuable. People use it in different ways, and no single definition captures every practice.',
          'Writing for thinking starts with a more deliberate task. There is a decision, a question, a conversation or a point of view to work through. The writing is not simply a record of the experience; it is material you will return to and examine.',
        ],
      },
      {
        heading: 'The return to the words matters',
        paragraphs: [
          'Getting thoughts onto the page is the beginning. The next step is reading them with a question: what am I saying here? What is evidence, what is interpretation, and what have I left unnamed?',
          'That second look can change the shape of the issue. You may find an assumption disguised as a fact, two different questions treated as one, or a clear point hidden inside an elaborate explanation.',
        ],
      },
      {
        heading: 'Structure without a script',
        paragraphs: [
          'A structured practice does not mean filling in a formula until the correct answer appears. It means using prompts and questions that give the thinking direction: capture it, clarify it, challenge it, communicate it and refine it.',
          'Your issue determines how long you stay with each part. Some questions need more challenge. Others need a simpler expression of something you already know. The method supports attention; it does not replace judgement.',
        ],
      },
      {
        heading: 'Neither a writing test nor psychotherapy',
        paragraphs: [
          'You do not need beautiful sentences to think clearly. A plain sentence that names the actual question is useful work. Editing the language too early can become a way of avoiding the issue.',
          'Ink Therapy™ is not psychotherapy and does not diagnose or treat mental health conditions. It is a guided writing practice for professional questions. If you need clinical support, a qualified mental health professional is the appropriate person to consult.',
        ],
      },
    ],
    prompt: {
      question: 'Am I recording what happened, or trying to understand what I think about it?',
      hint: 'Neither purpose is wrong. Naming the purpose helps you choose what to do with the words next.',
    },
    related: ['what-to-write-when-you-dont-know-what-you-think', 'how-writing-helps-you-think-more-clearly'],
  },
  {
    slug: 'what-to-write-when-you-dont-know-what-you-think',
    theme: 'Clarity',
    readTime: 5,
    title: 'What to write when you don’t know what you think',
    excerpt:
      'When you can’t find the words, start with what you notice. A guide to writing your way toward a thought you haven’t found yet.',
    image: IMAGES.stairs,
    imageAlt: 'Intersecting architectural stairs create a study in structure and perspective',
    intro:
      'Sometimes the difficulty is not that you have too many thoughts but that none of them have arrived yet. You know something is there—a reaction, a question, a half-formed position—but it has not taken a shape you can hold. The blank page is not the obstacle. It is the way through.',
    sections: [
      {
        heading: 'Begin with what you notice, not what you think',
        paragraphs: [
          'When the thought will not come, do not reach for a conclusion. Reach for a detail. Write what you noticed today: a moment that felt off, a sentence that stayed with you, a decision you keep avoiding. Observation is a gentler door into the thinking than opinion.',
          'You are not trying to be right. You are trying to locate the thing that is asking for your attention. Often it is hiding inside something that seemed too small to mention.',
        ],
      },
      {
        heading: 'Write the question you cannot yet answer',
        paragraphs: [
          'Name the thing you do not understand. “I don’t know what I think about this” is a starting point, not a failure. Write it, then write what “this” refers to. The act of naming the subject often reveals that you know more than you assumed—and that the uncertainty is narrower than it felt.',
          'Resist the pressure to resolve the question in the same sitting. Some questions need to be stated before they can be answered. Writing them down gives them somewhere to wait.',
        ],
      },
      {
        heading: 'Follow the friction',
        paragraphs: [
          'Pay attention to where the writing resists you—the sentence you keep deleting, the example you avoid, the part you skim past. Friction is information. It usually marks the place where the real question is hiding underneath the one you started with.',
          'Write the sentence you are reluctant to write, even badly. The version you do not want to say is often closer to the truth than the one you were composing for an imagined reader.',
        ],
      },
      {
        heading: 'Let the first draft be wrong',
        paragraphs: [
          'A thought you can see is a thought you can revise. A wrong answer on the page is more useful than a vague one in your head, because you can now ask why it is wrong. The first draft is not your position; it is the material you will examine.',
          'Read it back and underline what still feels true. Cross out what was performance. What remains, however small, is the beginning of what you actually think.',
        ],
      },
    ],
    prompt: {
      question: 'What did I notice today that I can’t quite explain to myself?',
      hint: 'Write the observation first. The question underneath it usually appears once the detail is on the page.',
    },
    related: ['journaling-vs-writing-for-thinking', 'how-writing-helps-you-think-more-clearly'],
  },
  {
    slug: 'writing-to-make-a-difficult-decision',
    theme: 'Decision-making',
    readTime: 5,
    title: 'Writing to make a difficult decision',
    excerpt:
      'When every option carries a cost, a longer pros-and-cons list is not always the answer. Write to understand the trade-off you are making.',
    image: IMAGES.bridge,
    imageAlt: 'A geometric pedestrian bridge leads toward a distant building in soft light',
    intro:
      'The difficult decisions rarely come with one clearly good option and one clearly bad one. They come with competing responsibilities, incomplete information and something you will have to give up whichever way you go.',
    sections: [
      {
        heading: 'Define the decision, not the whole situation',
        paragraphs: [
          '“What should I do about my career?” is too large to work with. “Should I accept this role, with these responsibilities, at this point in my life?” gives the thinking a boundary. Write the actual decision in one sentence. Include when it needs to be made.',
          'If the sentence keeps expanding, you may be trying to settle several questions at once. Separate the immediate choice from the bigger question it has brought to the surface. You can examine both without pretending they are the same.',
        ],
      },
      {
        heading: 'Write down the trade-off',
        paragraphs: [
          'Describe each option in ordinary language. What does it make possible? What does it cost? What responsibility comes with choosing it? Avoid describing one option through its best-case outcome and the other through its worst.',
          'A useful decision is not always the one with the most advantages on a list. Some considerations matter more than others. Write why the most important consideration matters to you, not just what it is.',
        ],
      },
      {
        heading: 'Notice the audience in your head',
        paragraphs: [
          'Sometimes the decision feels difficult because you are trying to satisfy several imagined readers: a colleague, a family member, a future employer, a version of yourself you no longer quite recognise.',
          'Ask whose judgement you are anticipating. Their perspective may be important, but it is different from your responsibility for the choice. Writing makes room to hear that perspective without allowing it to become the only voice in the room.',
        ],
      },
      {
        heading: 'Make uncertainty specific',
        paragraphs: [
          'Separate what can be learned from what cannot yet be known. You may be able to clarify the role, talk to someone who has made a similar move or check an assumption. You cannot usually know exactly how the next year will feel.',
          'Write what would change your mind. If there is no conceivable information that would do so, consider whether you have already made the decision and are looking for permission to acknowledge it. If there is, you have identified a useful next step.',
        ],
      },
      {
        heading: 'Leave yourself an honest record',
        paragraphs: [
          'Before you act, write the reasoning you can stand behind today. Include the trade-off and the uncertainty, not just the benefits. This is not a defence against ever being wrong. It is a way to distinguish a considered decision from an outcome you could not control.',
          'A good decision can lead to a difficult outcome. Returning to your reasoning helps you learn without rewriting the past as though everything was obvious at the time.',
        ],
      },
    ],
    prompt: {
      question: 'If I choose this, what am I choosing for—and what am I accepting as the cost?',
      hint: 'Answer for each realistic option. Then name the one unanswered question that would most help you move forward.',
    },
    related: ['before-the-difficult-conversation', 'a-clearer-point-of-view-in-leadership'],
  },
  {
    slug: 'how-writing-helps-you-think-more-clearly',
    theme: 'Clarity',
    readTime: 5,
    title: 'How writing helps you think more clearly',
    excerpt:
      'Writing gives your thinking somewhere to go. Learn to separate the question, the assumptions and the noise before looking for an answer.',
    image: IMAGES.shadow,
    imageAlt: 'Sunlight and shadow reveal the clear geometry of a sculptural concrete wall',
    intro:
      'You can think about a question all day without getting closer to an answer. The same considerations return. One possibility briefly seems right, then another takes its place. The thinking is active, but it is not necessarily moving.',
    sections: [
      {
        heading: 'A thought in your head is hard to examine',
        paragraphs: [
          'In your head, a fact, a fear and an interpretation can feel equally convincing. They arrive together, often faster than you can distinguish them. Writing slows that arrival. A sentence asks you to choose what you mean.',
          'The first version does not need to be elegant. “I am worried about this decision” is more useful than a polished paragraph that avoids naming the worry. The point is to make the thinking visible, not impressive.',
        ],
      },
      {
        heading: 'Find the question beneath the question',
        paragraphs: [
          'Begin by writing what is occupying your attention. Then ask: what am I actually trying to resolve? A question that seems to be about an email may be about a boundary. A question about a new role may be about what you want the next part of your career to demand of you.',
          'There may be more than one question. Name them separately. Asking one sentence to solve your workload, your relationships and your sense of direction makes it difficult to know what a useful answer would look like.',
        ],
      },
      {
        heading: 'Separate what you know from what you assume',
        paragraphs: [
          'Read your words back. Mark what you know from direct observation. Then notice the interpretations: what another person meant, what a delay signifies, what will happen if you speak. An interpretation is not necessarily wrong. It simply deserves to be tested rather than treated as a fact.',
          'Try writing a second explanation for the same situation. You are not required to believe it. The exercise creates enough distance to see where certainty may have arrived too quickly.',
        ],
      },
      {
        heading: 'Clarity is not the same as certainty',
        paragraphs: [
          'Writing will not remove every unknown or guarantee the right decision. What it can do is help you name the uncertainty accurately. You may discover that you are clear about the trade-off even when you cannot predict the outcome.',
          'End by asking what has become clearer, what remains unresolved and what needs to happen next. Sometimes the next step is a decision. Sometimes it is a specific conversation or a piece of information you do not yet have. Both are progress.',
        ],
      },
    ],
    prompt: {
      question: 'What is taking up space in my head—and what question am I actually trying to answer?',
      hint: 'Write without editing for a few minutes. Read it back once. Underline the sentence that feels closest to the real question.',
    },
    related: ['journaling-vs-writing-for-thinking', 'what-to-write-when-you-dont-know-what-you-think'],
  },
];
