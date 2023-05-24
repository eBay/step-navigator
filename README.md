# se-category-picker

Use this component to browse, search and select a category.

# Usage

```marko
    <se-category-picker
        title=string || [TextualDisplay]
        error-message=[...]
        close-text=string
        tourtip={...}
        ally-busy-text=string
        back-icon-label=string
        search-category={...}
        all-categories-label=[TextualDisplay]
        all-categories=[{...}]
        selected-category-label=[TextualDisplay]
        selected-category={...}
        suggested-categories=[{...}]
        suggested-category-label=[TextualDisplay]
        focus-search-field=Boolean
        search-service-path="<api-path>"
        browse-service-path="<api-path>"
        tracking={...} />
```

## Input

| Name              | Type           | Required | Description
| ---               | ---            | ---      | ---
| title             | String or [TextualDisplay]         | No | Category picker title text
| enable-browse-view-done-button    | Boolean | No | If true and selected-category is provided, enable Done button in category tree browse view.
| error-message     | Array of [ListingValidationErrorBuilder] | No | Error messages to display below the title
| close-text        | String         | No | Category picker close button text. If not provided, done button will be hidden.
| tourtip           | [Tourtip Object](#Tourtip-object) | No | Content for the tourtip pointing to the close button
| ally-busy-text    | String         | No | Accessibility text for the loading spinner
| back-icon-label   | String        | No | Accessibility text for the back icon
| search-category   | [Search Category Object](#Search-category-object)| No | Search category section input
| search-result-template-plural | String | No | Accessibility text for the category search results when there is more than one result.
| search-result-template-single | String | No | Accessibility text for the category search result when there is one result.
| show-search-icon    | Boolean | No | If true, show search icon in the search field.
| large-icon | Boolen | No | If true and show-search-icon also true, show large search and clear icon in the search field.
| all-categories-label | [TextualDisplay] | No |  All categories section title text
| all-categories    | Array of [TextualDisplay]    | No | List of all the categories to browse
| selected-category-label   | [TextualDisplay] | No | Selected category section title text
| selected-category   | Object, String | No | Selected category to display
| suggested-categories  | Array of [TextualDisplay] | No | List of suggested categories to display
| suggested-category-label  | [TextualDisplay] | No | Suggested categories section title text
| focus-search-field    | Boolean | No | If true, the focus will be set to search field.
| focus-done-button    | Boolean | No | If true, the focus will be set to `Done` field.
| set-focus-timeout | Boolean | No | If `true`, sets a timeout before focusing the `Done` button.* |
| focus-timeout-wait | Number | No | The number of milliseconds to wait before setting the focus timeout. Defaults to 100ms. |
| search-service-path      | String         | Yes | Fetch API URL for search categories
| browse-service-path      | String         | Yes | Fetch API URL for browse categories
| tracking      | [Tracking Object](#TrackingObject) | No | If provided, it will generate _track attributes on various elements for tracking purposes.

* An example usecase for setting a timeout is when we need to leave time for the eBayUI dialogs to
  cache the last focused element so that focus can be restored after the dialog is closed.


### Tourtip object

```json
{
    "close": "Accessibility text for the tourtip close button",
    "content": "Content for the tourtip"
}
```

### Search category object

```json
{
    "name": "Name for the search textbox",
    "ghostText": "Place holder text for search input box",
    "allyText": "Accessibility text for search input box.",
    "emptyResultsText": "Display text for empty response",
    "searchResultsText": "Search section title text"
}
```

### Tracking object

```
{
    tracking: {
        doneButton: '1.primaryCategory.2.Done',
        fieldCard: {
            getTracking: (type*) => { returns the value to set on the _track_ attribute of the field card }
        }
    }
}
```
* `type` will be either `suggested` or `browse`.

## Done button

```
'se-category-picker-done-btn' element ID is used for the eBay dialog focusable element.
Pass this ID as the focus attribute in eBay dialog for the keyboard trap.
```
*Note: eBay Dialog requires the focusable element in the absence of dialog close icon.*

## Events

| Name               | Data  | Type     | Description
| ---                | ---   | ---      | ---
| `close`  | Event  | No | Event returned when the Done button is clicked
| `tourtip-close`  | Event  | No | Event returned when the tourtip close button is clicked
| `remove-category`  | Event  | No | Event returned when the Clear button is clicked
| `value-change`  | { name, value, categoryPath }  | [String, Number, Array] | Return the selected category id along with the category tree path.

## Notes

- Module migrated to `@ebay` scope in version `4.2.0`

[ListingValidationErrorBuilder] https://github.corp.ebay.com/Selling/SellExCommonLib/blob/master/src/main/java/com/ebay/raptor/experience/selling/view/types/ListingValidationErrorBuilder.java "ListingValidationErrorBuilder"
[TextualDisplay]: https://github.corp.ebay.com/cea/ExperienceTypes/blob/master/ExperienceParent/ExperienceTypes/src/main/java/com/ebay/experience/type/v5/base/TextualDisplay.java "TextualDisplay"
