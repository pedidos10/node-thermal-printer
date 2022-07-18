export function sanitizeText(text){
    const textWithoutTabs = text.replace(/\t/g, ' ');

  const words = textWithoutTabs.split(' ');

  const wordsWithoutAdditionalSpaces = words.map(word => word.trim());

  const validWords = wordsWithoutAdditionalSpaces.filter(Boolean);
  
  return validWords.join(' ');
}