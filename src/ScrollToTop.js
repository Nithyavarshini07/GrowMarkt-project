import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log("Scrolling to top - Current page:", pathname);
    
    // Multiple methods to force scroll to top
    window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Also try scrolling the main container if you have one
    const mainContent = document.querySelector('.main');
    if (mainContent) {
      mainContent.scrollTop = 0;
    }
    
    const activityMain = document.querySelector('.activity-main');
    if (activityMain) {
      activityMain.scrollTop = 0;
    }
  }, [pathname]);

  return null;
}

export default ScrollToTop;