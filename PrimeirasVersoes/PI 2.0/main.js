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
  `<table>` +
  `<tr>` +
    `<td> <a href="${imagem}" target="_blank"><img max_width="120px" max_height="120px" height="120" width="120" src="${imagem}"/></a> </td>`+
      `<td>` +
          `<div style="margin-left: 0px;"> ${username} </div>` +
          `<div style="margin-left: 0px;"> ${empresa}</div>` +
          `<div style="margin-left: 0px;">${cargo}</div>` +
          `<div style="margin-left: 0px;">${tel}</div>` +
          `<div style="margin-left: 0px;">${email}</div>` +
          `<a href="${site}" style="margin-left: 0px;">${site}</a>` +
      `</td>` +
  `</tr>` +
`</table>` +
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