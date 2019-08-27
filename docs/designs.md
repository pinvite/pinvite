## Material Design
- material ui
- material theme plugin
- what about Flutter, Google's Material React components? Why we are not using them?

## Atomic Design

### Lego block design
- enclosing <Atom>
- some cases which don't work as the article explains
  - centering, full-sized non-image background
  - still, default padding works nicely

## Atomic Design in depth
- Do not inject styles from outside
  - only logic and layout can be supplied from outside
  - layout almost always means setting margins, not padding
  - possibly background color can be specified only for full-width background-color styles
- revisit if this rule becomes a huge blocker
- Only call Materail-UI components in Atoms other than the following exceptional cases
  - 1. Grid and AppBar - they are compositional components, so naturally fits in Molecules or Organisms rather than Atoms
 
### State
- should stay in molecule, organisms, template, or React Context?
  - at least Atoms should not hold state
  
### Logic
- Logic should not stay in Atoms
  - e.g. onClick should be supplied from the call of button Atoms
  - However, which is the right place to hold logic, a similar question to states

## Framer
