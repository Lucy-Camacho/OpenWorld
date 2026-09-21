type NotFoundPageProps = {
  message: string;
  onBack: () => void;
};

// Shows a message when the app does not find the world or the campaign.
function NotFoundPage({ message, onBack }: NotFoundPageProps) {
  return (
    <div className="app">
      <header className="app-header page-header">
        <button className="back-button" type="button" onClick={onBack}>
          ← Back
        </button>
        <h1 className="app-title">Not found</h1>
      </header>

      <main className="app-main">
        <p className="empty-message">{message}</p>
      </main>
    </div>
  );
}

export default NotFoundPage;
