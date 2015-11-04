# iron-list issue 128
####The interesting files are
 * app-view.html where the data binding connections are set up
 * items-list.html where the iron-list resides
 * data-surface.html where the model originates and gets manipulated
 * a local copy of iron-list.html with some added log statements.

####Running it
It is based on the Polymer starter kit. After cloning a npm install, a bower install and a gulp
serve should be sufficient to run it.

####What works
Clicking on the items in the list and then editing the name of the item in the lower panel
works as expected. Clicking on the minus sign to delete an item also works as expected.
The removal is done in the data-surface element and propagates to the list via data binding.

####What doesn't work
Navigate via the browsers back and forward buttons. This will cause the selected-item property to
be set in the data-surface element. The value propagates to both the item-view and the items-list.
**But** the selection in the list view is not updated. An edit to the name in the lower panel will
change the name of the item in all places were it is bound. In the list view it will update the
name of the item which was last selected via click.

