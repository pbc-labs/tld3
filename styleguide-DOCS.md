# Documentation overview
- JSDoc 3 (with a Docstrap theme): For API documentation that explains the methods and modules. Great for looking up on how to use a method, the parameters and type.
- Docco: For explaining the flow of code. Great for reading your source code with the comments right beside.

## How does JSDoc work
- You add documentation comments directly to your source code, right along side the code itself. The JSDoc Tool will scan your source code, and generate a complete HTML documentation website for you.
- JSDoc comments should be placed immediately before the code being documented.
- It must start with a __backslash + asterisk + asterisk__ sequence in order to be recognized by the JSDoc parser. Comments beginning with __backslash + asterisk__, __backslash + asterisk + asterisk + asterisk__, or more than 3 asterisks will be ignored.

## How to Use Block and Inline Tags
- JSDoc supports 2 type of tags:
  - __Block tags__, which are at the top level of a JSDoc comment
  - __Inline tags__, which are within the text of a block tag or a description
- Block tags usually provide detailed information about your code, such as the parameters that a function accepts.
- Inline tags usually link to other parts of the documentation, similar to the anchor tag (<a>) in HTML.
- Block tags always begin with an at sign (@). Each block tag must be followed by a line break, with the exception of the last block tag in a JSDoc comment.
- Inline tags also begin with an at sign. However, inline tags and their text must be enclosed in curly braces ({ and }). The { denotes the start of the inline tag, and the } denotes the end of the inline tag. If your tag's text includes a closing curly brace (}), you must escape it with a leading backslash (\). You do not need to use a line break after inline tags.
- Most JSDoc tags are block tags. So will most of the tags in your code.
- You should also use inline comments within each method and module when appropriate. These inline comments prefaced with // will be picked up by Docco
- Docco doesn't consider /** comments as a prose, which is good, because JSDoc uses them
- Every method and module must have a brief description explaining what it does and why. DO NOT include details on "how" the function does this. This should be implicit within the function itself, assuming you write good code :)

- __Example 1:__ In the following example, @param is a block tag, and {@link} is an inline tag:
```
/**
 * Set the shoe's color. Use {@link Shoe#setSize} to set the shoe size.
 *
 * @param {string} color - The shoe's color.
 */
Shoe.prototype.setColor = function(color) {
    // ...
};
```
- __Example 2:__
Inline tag used within a block tag
```
/**
 * Set the shoe's color.
 *
 * @param {SHOE_COLORS} color - The shoe color. Must be an enumerated
 * value of {@link SHOE_COLORS}.
 */
Shoe.prototype.setColor = function(color) {
    // ...
};
```
- __Example 3:__ Multiple block tags separated by line breaks
```
/**
 * Set the color and type of the shoelaces.
 *
 * @param {LACE_COLORS} color - The shoelace color.
 * @param {LACE_TYPES} type - The type of shoelace.
 */
Shoe.prototype.setLaceType = function(color, type) {
    // ...
};
```
- __Example 4:__ Private method with multiple block tags

```
/**
 * A specialized version of `_.forEach` for arrays without support for
 * callback shorthands.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

```

### Block Tags & Definitions
- __@abstract (synonyms: @virtual)__
This member must be implemented (or overridden) by the inheritor.
- __@access__
Specify the access level of this member (private, public, or protected).
- __@alias__
Treat a member as if it had a different name.
- __@augments (synonyms: @extends)__
Indicate that a symbol inherits from, ands adds to, a parent symbol.
- __@author__
Identify the author of an item.
- __@borrows__
This object uses something from another object.
- __@callback__
Document a callback function.
- __@class (synonyms: @constructor)__
This function is intended to be called with the "new" keyword.
- __@classdesc__
Use the following text to describe the entire class.
- __@constant (synonyms: @const)__
Document an object as a constant.
- __@constructs__
This function member will be the constructor for the previous class.
- __@copyright__
Document some copyright information.
- __@default (synonyms: @defaultvalue)__
Document the default value.
- __@deprecated__
Document that this is no longer the preferred way.
- __@description (synonyms: @desc)__
Describe a symbol.
- __@enum__
Document a collection of related properties.
- __@event__
Document an event.
- __@example__
Provide an example of how to use a documented item.
- __@exports__
Identify the member that is exported by a JavaScript module.
- __@external (synonyms: @host)__
Identifies an external class, namespace, or module.
- __@file (synonyms: @fileoverview, @overview)__
Describe a file.
- __@fires (synonyms: @emits)__
Describe the events this method may fire.
- __@function (synonyms: @func, @method)__
Describe a function or method.
- __@global__
Document a global object.
- __@ignore__
Omit a symbol from the documentation.
- __@implements__
This symbol implements an interface.
- __@inheritdoc__
Indicate that a symbol should inherit its parent's documentation.
- __@inner__
Document an inner object.
- __@instance__
Document an instance member.
- __@interface__
This symbol is an interface that others can implement.
- __@kind__
What kind of symbol is this?
- __@lends__
Document properties on an object literal as if they belonged to a symbol with a given name.
- __@license__
Identify the license that applies to this code.
- __@listens__
List the events that a symbol listens for.
- __@member (synonyms: @var)__
Document a member.
- __@memberof__
This symbol belongs to a parent symbol.
- __@mixes__
This object mixes in all the members from another object.
- __@mixin__
Document a mixin object.
- __@module__
Document a JavaScript module.
- __@name__
Document the name of an object.
- __@namespace__
Document a namespace object.
- __@override__
Indicate that a symbol overrides its parent.
- __@param (synonyms: @arg, @argument)__
Document the parameter to a function.
- __@private__
This symbol is meant to be private.
- __@property (synonyms: @prop)__
Document a property of an object.
- __@protected__
This symbol is meant to be protected.
- __@public__
This symbol is meant to be public.
- __@readonly__
This symbol is meant to be read-only.
- __@requires__
This file requires a JavaScript module.
- __@returns (synonyms: @return)__
Document the return value of a function.
- __@see__
Refer to some other documentation for more information.
- __@since__
When was this feature added?
- __@static__
Document a static member.
- __@summary__
A shorter version of the full description.
- __@this__
What does the 'this' keyword refer to here?
- __@throws (synonyms: @exception)__
Describe what errors could be thrown.
- __@todo__
Document tasks to be completed.
- __@tutorial__
Insert a link to an included tutorial file.
- __@type__
Document the type of an object.
- __@typedef__
Document a custom type.
- __@variation__
Distinguish different objects with the same name.
- __@version__
Documents the version number of an item.

### Inline Tags & Definitions
- __{@link} (synonyms: {@linkcode}, {@linkplain})__
Link to another item in the documentation.
- __{@tutorial}__
Link to a tutorial.

### Inspiration
- https://github.com/lodash/lodash/blob/master/lodash.js
- https://github.com/yui/yui3
- https://github.com/jashkenas/backbone/blob/master/backbone.js

### Resources
- For detailed explanations of JS Docs block and inline tags, go here: http://usejsdoc.org/
- Articles on using JS Doc and Docco: http://samwize.com/2014/01/31/the-best-documentation-generator-for-node/
