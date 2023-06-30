# 🪜 se-step-navigator

Use this component as a back and forth method for different views

# Usage

```marko
    <se-step-navigator
    	title="My Great Step Navigator!"
        previousStepText="Previous"
        nextStepText="Next"
 	 >
 	 
 	 <@step>
 	 	<@title>Title #1</@title>
 	 	<@subtitle>SubTitle #1</@subtitle>
 	 	<@content>
 	 		<sample-inner-marko-component/>
 	 		<div>Hello World!</div>
 	 		...
 	 	</@content>
 	 </@step>
 	 
 	 <@step>
 	 	<@title>Title #2</@title>
 	 	<@subtitle>SubTitle #2</@subtitle>
 	 	<@content>
 	 		<sample-inner-marko-component-2/>
 	 		<div>Hello World #2!</div>
 	 		...
 	 	</@content>
 	 </@step>

 	 </se-step-navigator>
```

## Input

| Name              | Type           | Required | Description
| ---               | ---            | ---      | ---
| title             | String       | No |  overarching title text (appears at top of component)
| nextStepText             | String       | No |  Next Button text. Defaults to "Next" if empty
| previousStepText             | String       | No |  Previous Button text. Defaults to "Previous" if empty
| a11yHeadingTag             | String       | Yes |  heading tag for progress stepper
| a11yHeadingText             | String       | Yes |heading text for progress stepper which will be clipped
| defaultState					|String  	| No| If complete, then all items will be in complete state by default. If upcoming, all items will be in upcoming state. If attention, then the current item will show as blocked. Otherwise, the default (active), will change items based on the current item (current defaults to first step if not set).




## Events

| Name               | Data  | Type     | Description
| ---                | ---   | ---      | ---
| `previous-button-click`  | `{currentIdx, title, subtitle}`  | No | Event returned when the Previous button is clicked
| `next-button-click`  | `{currentIdx, title, subtitle}`  | No | Event returned when the Next button is clicked

## Notes
