const submitButton = document.getElementById("submit");

submitButton.onclick = () => {
  const imagem = document.getElementById("url").value;
    const username = document.getElementById("name").value;
    const empresa = document.getElementById("empresa").value;
    const cargo = document.getElementById("cargo").value;
    const tel = document.getElementById("tel").value;
    const email = document.getElementById("email").value;
    const site = document.getElementById("site").value;

  // Isso é HTML que vai ser baixado.
  const htmlTemplate =
  `<body>` +
    `<div class="box2">` +
    `<div class="imge"></div>` +
    `<div class="container">` +
      `<table class="color1">` +
      `<tr>` +
      `<th>${username}</th>` +
      `</tr>` +
      `<tr>` +
      `<th>${empresa}</th>` +
      `</tr>` +
      `<tr>` +
      `<th>${cargo}</th>` +
      `</tr>` +
      `<tr>` +
      `<th>${tel}</th>` +
      `</tr>` +
      `<tr>` +
      `<th>${email}</th>` +
      `</tr>` +
      `<tr>` +
      `<th>${site}</th>` +
      `</tr>` +
      `</table>` +
      `</div>` +
      `</div>` +
    `<style>` +
      `.box2{` +
        `float: right;` +
        `width: 500px;` +
        `height: 250px;;` +
        `margin-right: 50px;` +
        `border: solid 2px rgb(192, 192, 192);` +
        `border-radius: 10px;` +
        `background-color: rgb(37, 37, 37);` +
      `}` +
      `.imge{` +
        `width: 150px;` +
        `height: 150px;` +
        `<img src="${username}">` +
        `background-size: cover;` +
        `background-repeat: no-repeat;` +
        `margin: 50px auto;` +
      `}` +
      `.color1{` +
        `color: rgb(255, 255, 255);` +
      `}` +
      `a {` +
        `margin-left: 50px;` +
        `font-size: 20px;` +
      `}` +
      `table{`+
        `margin: 75px 100px 0px 0px; /**/` +
        `float: right;` +
        `display: inline;` +
        `color: rgb(255, 255, 255);` +
        `text-align: justify;` +
      `}`
      `.container table{` +
        `margin: -200px 140px 0px 0px;` +
      `}` +
    `</style>` + 
  `</body>`;

  const aTag = document.createElement("a");
  aTag.href = window.URL.createObjectURL(
    new Blob([htmlTemplate], { type: "text/html" })
  );
  aTag.download = `${username}_data.html`;

  document.body.appendChild(aTag);
  aTag.click();

  document.body.removeChild(aTag);
};

