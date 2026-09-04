import { useState } from "react";

export default function ShowMore({
  items,
  initialCount = 3,
  children,
}) {
  const [showAll, setShowAll] = useState(false);

  const visibleItems = showAll
    ? items
    : items.slice(0, initialCount);

  return (
    <>
      {children(visibleItems)}

      {items.length > initialCount && (
        <div className="mt-8 flex justify-center">
          <button
            type="button"
            onClick={() => setShowAll((current) => !current)}
            className="rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-xs font-medium text-white/50 transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            {showAll
              ? "Show Less"
              : `See More · ${items.length - initialCount}`}
          </button>
        </div>
      )}
    </>
  );
}