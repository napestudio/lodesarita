type SplitTextOptions = {
  type: "chars" | "words" | "lines";
  containerClass?: string;
  itemClass?: string;
};

export function splitText(
  elementOrText: HTMLElement | string,
  options: SplitTextOptions
): HTMLElement[] {
  const {
    type,
    containerClass = "split-container",
    itemClass = "split-item",
  } = options;

  let element: HTMLElement;

  if (typeof elementOrText === "string") {
    // Crear un div temporal si se pasa un string
    element = document.createElement("div");
    element.textContent = elementOrText;
  } else {
    element = elementOrText;
  }

  // Dividir el texto según el tipo
  let splitItems: string[] = [];
  if (type === "chars") {
    splitItems = Array.from(element.textContent || "");
  } else if (type === "words") {
    splitItems = (element.textContent || "").split(/\s+/);
  } else if (type === "lines") {
    const lines = element.innerHTML.split("<br>");
    splitItems = lines.flatMap((line) => line.split(/\s+/));
  }

  // Generar el contenedor principal
  const container = document.createElement("div");
  container.classList.add(containerClass);

  // Añadir los elementos individuales
  const items: HTMLElement[] = [];
  splitItems.forEach((item) => {
    const span = document.createElement("span");
    span.classList.add(itemClass);
    span.classList.add("block");
    span.textContent = item;
    items.push(span);
    container.appendChild(span);
  });

  // Reemplazar el contenido original
  element.innerHTML = "";
  element.appendChild(container);

  return items;
}
