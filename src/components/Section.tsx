import type { ReactNode } from "react";

type SectionProps = {
  title: string;
  actionLabel: string;
  onAction: () => void;
  // The message that the app shows when the section has no items.
  emptyMessage: string;
  isEmpty: boolean;
  children: ReactNode;
};

// Shows one section of the main page: a heading and a grid of cards.
// The last card in the grid starts a new item.
function Section({
  title,
  actionLabel,
  onAction,
  emptyMessage,
  isEmpty,
  children,
}: SectionProps) {
  return (
    <section className="section">
      <h2 className="section-title">{title}</h2>
      {isEmpty && <p className="empty-message">{emptyMessage}</p>}
      <div className="card-grid">
        {children}
        <button className="card card-new" type="button" onClick={onAction}>
          <span className="card-new-plus" aria-hidden="true">
            +
          </span>
          <span className="card-new-label">{actionLabel}</span>
        </button>
      </div>
    </section>
  );
}

export default Section;
