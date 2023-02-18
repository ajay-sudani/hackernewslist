# Sass Styleguide

The stylehseets have been set up using the [7-1 architecture pattern](https://sass-guidelin.es/#architecture) and sticking - more or less - to [Sass Guidelines](https://sass-guidelin.es) writing conventions and using the [ConcentricCSS](https://github.com/brandon-rhodes/Concentric-CSS) method of ordering properties. As with any suggested guidelines or practices, the goal is to make development easier by providing consistency across the project, and therefore, this is a living document and should be treated as such. For example, although the 7-1 archtecture has been proposed, it is likely we will use sass-modules for discreet components, so their may be no need for a `components` folder.

## 7-1 Sass Architecture

Here are the folders and their expected contents:

1. **abstracts** in an ideal world outputs no compiled css on its own. Global variables, functions, and mixins live here. If there is a question whether an item belongs here or in `base`, consider whether the item generates css rules on its own.

2. **base** is the house for all global, project wide styles. This includes the default styles for all html elements, typography, and reset/normalize stylesheets. While basic rules here might need to address default padding or margins for various reasons, in general styles related to spacing, vertical-rhythm, etc. belong in `layout`. However, `line-height` and `letter-spacing`, while they impact layout, are grouped with typography concerns for obvious reasons.

3. **layout** is where styles related to the layout and spacing of elements and components lives. Here we can find styles that define how site components fit together with respect to vertical-rhythm and horizontal spacing.

4. **components** considering that sass-modules will likely govern components' styles, this folder may not come into use. That said, styles for buttons, forms, figure/image groups, and the like would found here.
