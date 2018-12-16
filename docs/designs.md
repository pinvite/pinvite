## Material Design

## Atomic Design

### Lego block design
- enclosing <Atom>
- some cases which don't work as the article explains
  - centering, full-sized non-image background
  - still, default padding works nicely

## Atomic Design in depth
- Do not inject styles from outside
- only set margins (and possibly background color)
- revisit if this rule becomes a huge blocker


### State
- should stay in molecule, organisms, template, or React Context?
  - at least Atoms should not hold state
  
### Logic
- Logic should not stay in Atoms
  - e.g. onClick should be supplied from the call of button Atoms
  - However, which is the right place to hold logic, a similar question to states
