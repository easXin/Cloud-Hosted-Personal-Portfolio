export default function NotFound() {
    const goHome = () => {
        window.history.pushState(null, '', '/');
        window.location.reload();
    };

    return (
        <section className="not-found-section">
            <div className="not-found-content">
                <h1 className="not-found-title">404, Page Not Found.</h1>
                <button type="button" className="btn btn-primary not-found-btn" onClick={goHome}>
                    Back to Homepage
                </button>
            </div>
        </section>
    );
}