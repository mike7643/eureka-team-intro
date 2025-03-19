
  document.addEventListener('DOMContentLoaded', function() {
    const button = document.createElement('button');
    button.className = 'team-button';
    button.textContent = '2조 Home';
    button.onclick = function() {

    window.location.href ="../index.html";

    };
    
    button.style.position = 'fixed';
    button.style.right = '20px';
    button.style.top = '20px';
    button.style.width = '80px';
    button.style.height = '80px';
    button.style.borderRadius = '50%';
    button.style.backgroundColor = '#3498db';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.fontSize = '14px';
    button.style.fontWeight = 'bold';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';
    button.style.zIndex = '1000';
    
    button.onmouseover = function() {
      this.style.backgroundColor = '#2980b9';
    };
    button.onmouseout = function() {
      this.style.backgroundColor = '#3498db';
    };
    

    document.body.appendChild(button);
  });