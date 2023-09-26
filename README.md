# 🪜 se-step-navigator

Use this Marko component as a back and forth method for different views. A more usable extension to [`ebay-progress-stepper`](https://github.com/eBay/ebayui-core/tree/master/src/components/ebay-progress-stepper)

# Preview

![giphy (1)](https://media.github.corp.ebay.com/user/6936/files/3e64669c-4886-44ea-acd9-c5fb073de690)


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
	 <@static-content>Some Static Content that shows in all steps!</@static-content>
 	 </se-step-navigator>
```

## Nested Tags

| Name              | Has Nested Tags           | Required | Description
| ---               | ---            | ---      | ---
| `@step`           | `Yes`       | Yes |  Each step can contain the nested tags `@title`, `@subtitle` and `@content`. These map to both the `progress-stepper` at the top and the `content` are below it.
| `@static-content`           | `No`       | No |  Add static content (like a static sidebar component) outside of the "step" flow. 
| `@footer`           | `No`       | No |  Replaces entire button footer with your own custom footer.
## Input

| Name              | Type           | Required | Description
| ---               | ---            | ---      | ---
| `title`           | `String`       | No |  overarching title text (appears at top of component)
| `nextStepText`             | `String`       | No |  Next Button text. Defaults to "Next" if empty
| `previousStepText`             | `String`       | No |  Previous Button text. Defaults to "Previous" if empty
| `a11yHeadingTag`             | `String`       | Yes |  heading tag for progress stepper
| `a11yHeadingText`             | `String`       | Yes |heading text for progress stepper which will be clipped
| `defaultState`					|`String`  	| No| If complete, then all items will be in complete state by default. If upcoming, all items will be in upcoming state. If attention, then the current item will show as blocked. Otherwise, the default (active), will change items based on the current item (current defaults to first step if not set).
| `buttonAlignment`					|`justify-content` types	| No| Alignment of bottom buttons. Defaults to `flex-start`. See [all types at MDN documentation on `justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content). 
| `nextStepButtonPriority`					|`ebay-button` `string` [types (primary, secondary, etc)](https://opensource.ebay.com/ebayui-core/?path=/story/buttons-ebay-button--standard&args=priority:tertiary)	| No| Priority of button, defaults to `"primary"`
| `previousStepButtonPriority`					|`ebay-button` `string` [types (primary, secondary, etc)](https://opensource.ebay.com/ebayui-core/?path=/story/buttons-ebay-button--standard&args=priority:tertiary)	| No| Priority of button, defaults to `"secondary"`
| `previousStepButtonDisabled`					| `boolean`	| No|  By default, disabled, but toggle-able here. Previous button will be disabled.
| `nextStepButtonDisabled`					| `boolean`	| No|  By default, not disabled, but toggle-able here. Next button will be disabled.
| `isProgressStepperHidden`					| boolean	| No| Toggle the ProgressStepper. Most often used when `steps <= 2` per Playbook specs. Default: `false`. 
| `width`					| CSS value types (eg `700px`, `5em`, etc)	| No| Sets the width of the `progress-stepper` component at the top



## Events

| Name               | Data  | Type     | Description
| ---                | ---   | ---      | ---
| `previous-button-click`  | `{currentIdx}`  | No | Event returned when the Previous button is clicked
| `next-button-click`  | `{currentIdx}`  | No | Event returned when the Next button is clicked

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

For full contributing guidelines, please see our [CONTRIBUTING.md](https://github.corp.ebay.com/selling-ui/step-navigator/blob/main/CONTRIBUTING.md)


## License

[eBay License](/LICENSE.md)
