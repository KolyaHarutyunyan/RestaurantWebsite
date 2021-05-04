export const animation = (args, delay = ".5", type = "ease-in") =>
  `
    -webkit-transition: ${args.map((arg) => `${arg} ${delay}s ${type}`)};
    -moz-transition: ${args.map((arg) => `${arg} ${delay}s ${type}`)};
    -o-transition: ${args.map((arg) => `${arg} ${delay}s ${type}`)};
    transition: ${args.map((arg) => `${arg} ${delay}s ${type}`)};
  `;
