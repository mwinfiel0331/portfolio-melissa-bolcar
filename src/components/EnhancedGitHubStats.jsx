import { useState } from 'react';
import { FaStar, FaCodeBranch, FaBook, FaCode } from 'react-icons/fa';
import metricsData from '../data/metrics.json';
import './EnhancedGitHubStats.css';

const EnhancedGitHubStats = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const stats = {
    totalRepositories: metricsData.summary.totalRepositories,
    totalCommits: metricsData.summary.totalCommits,
    totalStars: metricsData.summary.totalStars,
    totalForks: metricsData.summary.totalForks
  };

  // Get top languages
  const languageData = Object.entries(metricsData.languageBreakdown)
    .sort((a, b) => parseFloat(b[1].percentage) - parseFloat(a[1].percentage))
    .slice(0, 10);

  // Get recent repositories
  const recentRepos = metricsData.repositories
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, 6);

  // Language colors for visualization
  const languageColors = {
    Python: '#3572A5',
    'Jupyter Notebook': '#DA5B0B',
    TypeScript: '#3178c6',
    JavaScript: '#f1e05a',
    Astro: '#ff5a03',
    PowerShell: '#012456',
    HTML: '#e34c26',
    CSS: '#563d7c',
    PLpgSQL: '#336791',
    Shell: '#89e051',
    Go: '#00ADD8',
    MDX: '#fcb32c',
    Makefile: '#427819',
    Batchfile: '#C1F12E',
    Mermaid: '#ff3670',
    Swift: '#ffac45',
    Dockerfile: '#384d54'
  };

  const getLanguageColor = (lang) => languageColors[lang] || '#808080';

  return (
    <section id="github-metrics" className="enhanced-github-stats">
      <div className="container">
        <h2 className="section-title">GitHub Metrics & Analytics</h2>
        <p className="section-subtitle">
          Comprehensive analysis of {metricsData.user.login}'s development activity
        </p>

        {/* User Profile Card */}
        <div className="user-profile-card">
          <img
            src={metricsData.user.avatar_url}
            alt={metricsData.user.name}
            className="user-avatar"
          />
          <div className="user-info">
            <h3>{metricsData.user.name}</h3>
            <p className="user-login">@{metricsData.user.login}</p>
            <p className="user-meta">
              Member since {new Date(metricsData.user.created_at).getFullYear()}
            </p>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <FaBook />
            </div>
            <div className="stat-content">
              <h3>{stats.totalRepositories}</h3>
              <p>Total Repositories</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon commits">
              <FaCodeBranch />
            </div>
            <div className="stat-content">
              <h3>{stats.totalCommits.toLocaleString()}</h3>
              <p>Total Commits</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon stars">
              <FaStar />
            </div>
            <div className="stat-content">
              <h3>{stats.totalStars}</h3>
              <p>Total Stars</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon code">
              <FaCode />
            </div>
            <div className="stat-content">
              <h3>{Object.keys(metricsData.languageStats).length}</h3>
              <p>Languages Used</p>
            </div>
          </div>
        </div>

        {/* Language Distribution */}
        <div className="language-distribution-section">
          <h3 className="subsection-title">Language Distribution</h3>

          <div className="language-chart">
            {languageData.map(([language, data]) => (
              <div
                key={language}
                className={`language-bar ${selectedLanguage === language ? 'selected' : ''}`}
                onMouseEnter={() => setSelectedLanguage(language)}
                onMouseLeave={() => setSelectedLanguage(null)}
              >
                <div className="language-info">
                  <span className="language-name">
                    <span
                      className="language-dot"
                      style={{ backgroundColor: getLanguageColor(language) }}
                    />
                    {language}
                  </span>
                  <span className="language-percentage">{data.percentage}%</span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${data.percentage}%`,
                      backgroundColor: getLanguageColor(language)
                    }}
                  />
                </div>
                <div className="language-bytes">
                  {(data.bytes / 1024).toFixed(1)} KB • {metricsData.commitsByLanguage[language] || 0} commits
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Repositories */}
        <div className="recent-repos-section">
          <h3 className="subsection-title">Recent Repositories</h3>

          <div className="repos-grid">
            {recentRepos.map((repo) => (
              <div key={repo.name} className="repo-card">
                <div className="repo-header">
                  <h4>
                    <FaBook className="repo-icon" />
                    {repo.name}
                  </h4>
                  <div className="repo-stats-mini">
                    {repo.stargazers_count > 0 && (
                      <span className="stat-mini">
                        <FaStar /> {repo.stargazers_count}
                      </span>
                    )}
                    {repo.commits > 0 && (
                      <span className="stat-mini">
                        <FaCodeBranch /> {repo.commits}
                      </span>
                    )}
                  </div>
                </div>

                {repo.description && (
                  <p className="repo-description">{repo.description}</p>
                )}

                <div className="repo-meta">
                  {repo.language && (
                    <span className="repo-language">
                      <span
                        className="language-dot"
                        style={{ backgroundColor: getLanguageColor(repo.language) }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="repo-updated">
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                  </span>
                </div>

                {repo.languages && Object.keys(repo.languages).length > 1 && (
                  <div className="repo-languages">
                    {Object.keys(repo.languages).slice(0, 4).map((lang) => (
                      <span key={lang} className="lang-tag">{lang}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Language Breakdown Summary */}
        <div className="language-summary">
          <h3 className="subsection-title">Code Composition</h3>
          <div className="language-pie-legend">
            {languageData.slice(0, 6).map(([language, data]) => (
              <div key={language} className="legend-item">
                <span
                  className="legend-color"
                  style={{ backgroundColor: getLanguageColor(language) }}
                />
                <span className="legend-label">{language}</span>
                <span className="legend-value">{data.percentage}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Profile Link */}
        <div className="github-link-container">
          <a
            href={metricsData.user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-link"
          >
            View Full GitHub Profile →
          </a>
        </div>

        {/* Data timestamp */}
        <div className="data-timestamp">
          Data last updated: {new Date(metricsData.timestamp).toLocaleString()}
        </div>
      </div>
    </section>
  );
};

export default EnhancedGitHubStats;
