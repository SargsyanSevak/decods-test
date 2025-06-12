import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@/components/atoms/pagination";
import { getPaginationItems } from "@/lib/paginationItems";
import { cn } from "@/lib/utils";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function DynamicPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  const items = getPaginationItems(currentPage, totalPages);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  return (
    <Pagination className="mt-8 text-[#05050580]">
      <PaginationContent>
        {/* Previous */}
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (!isFirstPage) onPageChange(currentPage - 1);
            }}
            className={isFirstPage ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>

        {/* Page items */}
        {items.map((item, index) => (
          <PaginationItem key={index}>
            {item === "..." ? (
              <PaginationEllipsis />
            ) : (
              <PaginationLink
                href="#"
                isActive={item === currentPage}
                onClick={(e) => {
                  e.preventDefault();
                  onPageChange(Number(item));
                }}
                className={cn(
                  "text-[#05050580] text-[16px]",
                  item === currentPage && "text-white w-[48px] h-[48px]"
                )}
              >
                {item}
              </PaginationLink>
            )}
          </PaginationItem>
        ))}

        {/* Next */}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (!isLastPage) onPageChange(currentPage + 1);
            }}
            className={isLastPage ? "pointer-events-none opacity-50" : ""}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
