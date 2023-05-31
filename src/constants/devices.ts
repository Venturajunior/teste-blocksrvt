const breakpoints = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
}

export const devices = {
  "xs-max": `(max-width: ${breakpoints.xs})`,
  "sm-max": `(max-width: ${breakpoints.sm})`,
  "md-max": `(max-width: ${breakpoints.md})`,
  "lg-max": `(max-width: ${breakpoints.lg})`,
  "xl-max": `(max-width: ${breakpoints.xl})`,
  "2xl-max": `(max-width: ${breakpoints["2xl"]})`,

  "xs-min": `(min-width: ${breakpoints.xs})`,
  "sm-min": `(min-width: ${breakpoints.sm})`,
  "md-min": `(min-width: ${breakpoints.md})`,
  "lg-min": `(min-width: ${breakpoints.lg})`,
  "xl-min": `(min-width: ${breakpoints.xl})`,
  "2xl-min": `(min-width: ${breakpoints["2xl"]})`,
}
