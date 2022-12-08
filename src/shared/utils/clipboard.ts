export function copyText(text: string) {
  return navigator.clipboard.writeText(text);
}

export function readText() {
  return navigator.clipboard.readText();
}
