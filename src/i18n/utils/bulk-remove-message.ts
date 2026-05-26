export function bulkRemoveMessage(
  selectedCount: number,
  singular: string,
  manyPrefix: string,
  manySuffix: string,
): string {
  if (selectedCount === 1) {
    return singular;
  }

  return `${manyPrefix} ${selectedCount} ${manySuffix}`;
}
