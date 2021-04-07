export const media = {
  forMobile: (style) => `@media (max-width: 767px){ ${style}}`,
  forTablet: (style) => `@media (min-width: 768px) and (max-width: 1279px){ ${style}}`,
  forDesktop: (style) => `@media (min-width: 1280px) and (max-width: 1579px){ ${style}}`,
  forLargeDesktop: (style) => `@media (min-width: 1580px) { ${style}}`,
  upToMobile:style =>`@media (min-width: 768px) { ${style}}`,
  upToTablet:style =>`@media (min-width: 1280px) { ${style}}`,
  downToDesktop:style =>`@media (max-width: 1279px) { ${style}}`,
  downToLargeDesktop:style =>`@media (max-width: 1579px) { ${style}}`,

}