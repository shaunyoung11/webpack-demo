function Body() {
  let app = document.getElementById('app');
  const body = document.createElement('div');
  body.innerHTML = 'Body';
  app.appendChild(body);
}

export default Body;
