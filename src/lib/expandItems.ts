export function expandItemsForPagination<T extends { id: string }>(
  items: T[],
  targetCount: number
): T[] {
  if (items.length === 0) {
    return [];
  }

  const expanded: T[] = [];
  let round = 0;

  while (expanded.length < targetCount) {
    for (const item of items) {
      expanded.push({
        ...item,
        id: `${item.id}-${round}-${expanded.length}`,
      });

      if (expanded.length >= targetCount) {
        break;
      }
    }

    round += 1;
  }

  return expanded;
}
