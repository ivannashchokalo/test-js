const refs = {
  listEl: document.querySelector(".list"),
};

refs.listEl.addEventListener("click", (e) => {
  //   const allP = refs.listEl.querySelectorAll("p");

  //   for (const p of allP) {
  //     if (!p.hasAttribute("hidden")) {
  //       p.setAttribute("hidden", "hidden");
  //     }
  //   }

  const li = e.target.closest("li");
  if (!li) return;

  const p = li.querySelector("p");

  p.toggleAttribute("hidden");
});
