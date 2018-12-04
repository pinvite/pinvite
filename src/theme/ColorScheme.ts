import MaterialDesignColors from './MaterialDesignColors'

// As in https://material.io/design/color/the-color-system.html#
// we use the Primary, Secondary, and Surface color scheme
enum ColorScheme {
  Primary      = MaterialDesignColors.Orange700,
  PrimaryLight = MaterialDesignColors.Orange500,
  PrimaryDark  = MaterialDesignColors.Orange900,

  Secondary      = MaterialDesignColors.Yellow400,
  SecondaryLight = MaterialDesignColors.Yellow200,
  SecondaryDark  = MaterialDesignColors.Yellow500,

  Surface      = MaterialDesignColors.White,
  SurfaceLight = MaterialDesignColors.Grey50,
  SurfaceDark  = MaterialDesignColors.Grey50,

  White = MaterialDesignColors.White,
  Black = MaterialDesignColors.Black
}

export default ColorScheme
