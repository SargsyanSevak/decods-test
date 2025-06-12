export function getPaginationItems(
  currentPage: number,
  totalPages: number,
  siblingCount: number = 1
): (number | "...")[] {
  const totalPageNumbers = siblingCount * 2 + 5; // [1] ... [siblingCount * 2 + 1] ... [last]

  if (totalPages <= totalPageNumbers) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
  const rightSiblingIndex = Math.min(
    currentPage + siblingCount,
    totalPages - 1
  );

  const showLeftDots = leftSiblingIndex > 2;
  const showRightDots = rightSiblingIndex < totalPages - 1;

  const items: (number | "...")[] = [];

  items.push(1);

  if (showLeftDots) {
    items.push("...");
  }

  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    items.push(i);
  }

  if (showRightDots) {
    items.push("...");
  }

  items.push(totalPages);

  return items;
}
