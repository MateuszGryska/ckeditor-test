/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from "@ckeditor/ckeditor5-editor-classic/src/classiceditor.js";
import Alignment from "@ckeditor/ckeditor5-alignment/src/alignment.js";
import Autoformat from "@ckeditor/ckeditor5-autoformat/src/autoformat.js";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold.js";
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials.js";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic.js";
import Link from "@ckeditor/ckeditor5-link/src/link.js";
import List from "@ckeditor/ckeditor5-list/src/list.js";
import Markdown from "@ckeditor/ckeditor5-markdown-gfm/src/markdown.js";
import Paragraph from "@ckeditor/ckeditor5-paragraph/src/paragraph.js";
import RemoveFormat from "@ckeditor/ckeditor5-remove-format/src/removeformat.js";
import Underline from "@ckeditor/ckeditor5-basic-styles/src/underline.js";

import "./custom.css";

class Editor extends ClassicEditor {}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Autoformat,
  Bold,
  Essentials,
  Italic,
  Link,
  List,
  Markdown,
  Paragraph,
  RemoveFormat,
  Underline,
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      "bold",
      "italic",
      "underline",
      "link",
      "bulletedList",
      "numberedList",
      "alignment",
      "|",
      "undo",
      "redo",
      "removeFormat",
    ],
  },
  language: "en",
};

export default Editor;
