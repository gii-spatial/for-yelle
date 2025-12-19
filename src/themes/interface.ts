type ResponsiveCSSProperties = React.CSSProperties;

declare module "@mui/material/styles" {
  interface TypographyVariants {
    font34Strong: ResponsiveCSSProperties;
    font22Normal: ResponsiveCSSProperties;
    font18Normal: ResponsiveCSSProperties;
  }

  interface TypographyVariantsOptions {
    font34Strong?: ResponsiveCSSProperties;
    font22Normal?: ResponsiveCSSProperties;
    font18Normal?: ResponsiveCSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    font34Strong: true;
    font22Normal: true;
    font18Normal: true;
  }
}
