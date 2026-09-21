type PageHeaderProps = {
  title: string;
  // The text below the title. It gives the counts and the relations.
  meta: string;
  onBack: () => void;
};

// Shows the title bar of a world page or a campaign page.
// The button goes back to the main page.
function PageHeader({ title, meta, onBack }: PageHeaderProps) {
  return (
    <header className="app-header page-header">
      <button className="back-button" type="button" onClick={onBack}>
        Back
      </button>
      <div>
        <h1 className="app-title">{title}</h1>
        <p className="card-meta">{meta}</p>
      </div>
    </header>
  );
}

export default PageHeader;
