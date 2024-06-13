import FileSaver from 'file-saver';
import { surpriseMePrompts } from '../constants';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return getRandomPrompt(prompt);

  return randomPrompt;
}




export async function downloadImage(_id, photo) {
  try {
    const blob = new Blob([photo], { type: 'image/jpeg' });
    FileSaver.saveAs(blob, `download-${_id}.jpg`);
  } catch (error) {
    console.error('Failed to generate image:', error);
   
  }
}
