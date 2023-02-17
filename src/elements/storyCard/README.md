# StoryCard

## Purpose

Display a story details as a card layout

## Function/Use

Use to show details of a story. When clicking on the card, the link will open in a new tab

## Parameters

id: number;
by: string;
score: number;
time: number;
title: string;
type: string;
url: string;
kids: number[];

**IStoryCard**
| property | propType | required | default | description |
| --------- | --------------- | -------- | --------- | ------------------------------------------------------------------------- |
| id | number | yes | - | The card's unique id. |
| by | string | yes | - | The username of the item's author. |
| score | number | yes | - | The story's score, or the votes for a pollopt. |
| time | number | yes | - | Creation date of the item |
| title | string | yes | - | The title of the story, poll or job. HTML.|
| type | string | yes | - | The type of item. One of "job", "story", "comment", "poll", or "pollopt". |
| url | number | yes | - | The URL of the story. |
| kids | number[] | yes | - | The ids of the item's comments, in ranked display order |

## Examples

```jsx
<StoryCard
  id={1}
  by="John"
  score={123}
  time={1234567890}
  title="News"
  type="job"
  url="http://www.dummy.com"
  kids={[1, 2, 3, 4]}
></StoryCard>
```
