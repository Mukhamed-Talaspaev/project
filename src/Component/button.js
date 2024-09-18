const btn = document.createElement("button");
const btnContent = document.createTextNode("click");
btn.append(btnContent);
btn.addEventListener("click", () => console.log("click"));

export { btn };
