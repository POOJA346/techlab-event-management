// Check session and enforce role-based access
function checkSession(requiredRole = null) {
    const session = JSON.parse(localStorage.getItem('session'));
    if (!session) {
      alert("Login required");
      window.location.href = 'index.html';
      return;
    }
    if (requiredRole && session.role !== requiredRole) {
      alert("Access denied");
      window.location.href = 'dashboard.html';
    }
  }
  