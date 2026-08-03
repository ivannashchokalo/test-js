const refs = {
  form: document.querySelector(".form"),
  btns: document.querySelectorAll("button"),
  res: document.querySelector(".result"),
};

refs.btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const data = new FormData(refs.form);
    const a = Number(data.get("a"));
    const b = Number(data.get("b"));
    let result = 0;

    if (a < 0 || b < 0) {
      result = "Use positive numbers";
      refs.res.textContent = result;

      return;
    }

    if (e.target.dataset.action === "add") {
      result = a + b;
    }
    if (e.target.dataset.action === "subtract") {
      result = a - b;
    }
    if (e.target.dataset.action === "multiply") {
      result = a * b;
    }
    if (e.target.dataset.action === "divide") {
      result = a / b;
    }

    refs.res.textContent = result;

    refs.form.reset();
  });
});
