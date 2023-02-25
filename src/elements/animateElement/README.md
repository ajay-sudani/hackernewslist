# AnimateElement

## Purpose

To provide a parent element that provides animation behavior to its children as a unit.

## Function/Use

Children of this component will have animation applied to all children as a block, at the same time.

## Parameters

**IAnimateElement**
| property | propType | required | default | description |
| --------- | --------------- | -------- | --------- | ------------------------------------------------------------------------- |
| children | React.ReactNode or React.ReactNode[] | yes | - | Any valid react element/node |

## Examples

```jsx
<AnimateElement>
  <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
    <li>Item 4</li>
    <li>Item 5</li>
  <ul>
</AccordionWrapper>
```
