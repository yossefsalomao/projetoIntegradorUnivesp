const submitButton = document.getElementById("submit");

submitButton.onclick = () => {
  // Recebe dados do forms quqando clicado no botão Gerar
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
    `<td> <a href="${imagem}" target="_blank"><img max_width="150px" max_height="150px" height="150px" width="150px" src="${imagem}"/></a></td>` +
    `<td>` +
    `<div style="margin-left: 0px; font-size: 20px;"><b>${username}</b></div>` +
    `<div style="margin-left: 0px; color: #2A5DB0;">${cargo}</div>` +
    `<div style="margin-left: 0px;">${empresa}</div>` +
    `<div style="margin-left: 0px;">Tel: ${tel}</div>` +
    `<br>` +
    `<div style="margin-left: 0px;">${email}</div>` +
    `<a href="${site}" style="margin-left: 0px;">${site}</a>` +
    `</td>` +
    `</tr>` +
    `</table>` +
    `</body>`;

  if (document.getElementById("check").checked) {
    const aTag = document.createElement("a");

    aTag.href = window.URL.createObjectURL(
      new Blob([htmlTemplate], { type: "text/html" })
    );

    aTag.download = `${username}_data.html`;

    document.body.appendChild(aTag);

    aTag.click();

    document.body.removeChild(aTag);

    fetch({
      url: "/signature",
      method: "post",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        url: imagem,
        fullname: username,
        teamOrPosition: cargo,
        enterprise: empresa,
        phoneNumber: tel,
        email: email,
        site: site,
        term: true,
      },
    })
      .then((res) => {
        alert(JSON.stringify(res));
      })
      .catch((err) => alert(err));
  }
};
