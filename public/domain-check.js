// This script runs in the browser to check if we're on a custom domain
(function() {
  // Check if we're on the custom domain or GitHub Pages
  const hostname = window.location.hostname;
  const isCustomDomain = hostname === 'bene.stability.nexus';
  const isGitHubPages = hostname === 'stabilitynexus.github.io';
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1';
  
  // Set a global flag
  window.isCustomDomain = isCustomDomain;
  
  // Get basePath from the HTML tag if available (set by GitHub Pages action)
  const htmlTag = document.documentElement;
  const dataBasePath = htmlTag.getAttribute('data-basepath') || '';
  
  // Determine the correct basePath
  if (isCustomDomain) {
    // For custom domain, we don't need a basePath
    window.basePath = '';
  } else if (isGitHubPages) {
    // For GitHub Pages, use the repository name
    // The GitHub Pages action will set this correctly
    window.basePath = dataBasePath || '/Bene-LandingPage';
  } else if (isLocalhost) {
    // For local development
    window.basePath = '';
  } else {
    // For any other case, try to use the data attribute or fallback
    window.basePath = dataBasePath || '';
  }
  
  // This helps debug path issues
  console.log('Domain check:', { 
    hostname: hostname,
    isCustomDomain: isCustomDomain,
    isGitHubPages: isGitHubPages,
    isLocalhost: isLocalhost,
    dataBasePath: dataBasePath,
    basePath: window.basePath
  });
  
  // Fix for dynamically loaded scripts and styles
  // Add a base element to the head to ensure all relative URLs resolve correctly
  if (window.basePath && !isCustomDomain) {
    const baseElement = document.createElement('base');
    baseElement.href = window.basePath;
    document.head.prepend(baseElement);
  }
})(); 