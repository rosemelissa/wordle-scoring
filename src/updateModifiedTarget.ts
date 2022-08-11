export default function updateModifiedTarget(
  target: string,
  i: number,
): string {
  return target.slice(0, i) + "0" + target.slice(i + 1);
}
