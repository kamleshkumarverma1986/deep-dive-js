import { useState, useEffect } from "react";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import { $insertNodes } from "lexical";

const HtmlPlugin = ({ initialHtml, onHtmlChange }) => {
  const [editor] = useLexicalComposerContext();

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (!initialHtml || !isFirstRender) return;

    setIsFirstRender(false);

    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(initialHtml, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);
      $insertNodes(nodes);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <OnChangePlugin
      onChange={(editorState) => {
        editorState.read(() => {
          onHtmlChange($generateHtmlFromNodes(editor));
        });
      }}
    />
  );
};

export default HtmlPlugin;
