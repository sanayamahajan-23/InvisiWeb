import React from 'react';

const FeatureHighlights = () => {
  return (
    <section id="features" className="bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-search fa-3x text-primary mb-3"></i>
                <h4 className="card-title">Real-Time Accessibility Scanner</h4>
                <p className="card-text">Continuously scan web pages for accessibility issues as you navigate.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-magic fa-3x text-primary mb-3"></i>
                <h4 className="card-title">AI-Powered Suggestions</h4>
                <p className="card-text">Get AI-driven recommendations and code snippets to fix issues.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-book fa-3x text-primary mb-3"></i>
                <h4 className="card-title">Interactive Learning Mode</h4>
                <p className="card-text">Learn accessibility standards through interactive tutorials and quizzes.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-rocket fa-3x text-primary mb-3"></i>
                <h4 className="card-title">Seamless Integration</h4>
                <p className="card-text">Browser extension, IDE plugin, CI/CD integration for easy accessibility checks.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-users fa-3x text-primary mb-3"></i>
                <h4 className="card-title">Collaborative Tools</h4>
                <p className="card-text">Shared reports, issue tracking integration, team feedback on accessibility.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body text-center">
                <i className="fas fa-desktop fa-3x text-primary mb-3"></i>
                <h4 className="card-title">Accessibility Sandbox</h4>
                <p className="card-text">Real-time testing, visual comparison, change tracking for accessibility improvements.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
