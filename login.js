document.getElementById('visibility').addEventListener('mousedown', function() {
    document.getElementById('pass').type = 'text';
  });
  
  document.getElementById('visibility').addEventListener('mouseup', function() {
    document.getElementById('pass').type = 'password';
  });
  
  document.getElementById('visibility').addEventListener('mousemove', function() {
    document.getElementById('pass').type = 'password';
  });