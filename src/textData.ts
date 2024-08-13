const textData = [
  "The quick brown fox jumps over the lazy dog.",
  "Pack my box with five dozen liquor jugs.",
  "How razorback-jumping frogs can level six piqued gymnasts.",
  "Jinxed wizards pluck ivy from the big quilt.",
  "Five quacking zephyrs jolt my wax bed.",
  "The five boxing wizards jump quickly.",
  "Mr Jock, TV quiz PhD, bags few lynx.",
  "Grumpy wizards make toxic brew for the evil Queen and Jack.",
  "Jackdaws love my big sphinx of quartz.",
  "The 45 long jump foxed by a very big wizard.",
];

console.log("textData");


export const getRandomText = (): string => {
    const random = Math.floor(Math.random() * textData.length)
    return textData[random]
}