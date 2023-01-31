import { NextPage } from "next";
import { useEffect } from "react";

const Index: NextPage = () => {
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const FroalaEditor = (await import('froala-editor/js/froala_editor.pkgd.min.js')).default;
      new FroalaEditor("#editor", {
        toolbarButtons: ['bold', 'italic', 'textColor', 'backgroundColor'],
        colorsBackground: [
          '#15E67F', '#E3DE8C', '#D8A076', '#D83762', '#76B6D8', 'REMOVE',
          '#1C7A90', '#249CB8', '#4ABED9', '#FBD75B', '#FBE571', '#FFFFFF'
        ],
        colorsStep: 6,
        colorsText: [
          '#15E67F', '#E3DE8C', '#D8A076', '#D83762', '#76B6D8', 'REMOVE',
          '#1C7A90', '#249CB8', '#4ABED9', '#FBD75B', '#FBE571', '#FFFFFF'
        ]
      })
    })();
  }, [])

  return (
    <div id="editor" />
  )
}

export default Index;
