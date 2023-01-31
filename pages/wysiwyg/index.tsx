import { NextPage } from "next";
import { useEffect } from "react";

const Index: NextPage = () => {
  useEffect(() => {
    (async () => {
      // @ts-ignore
      const FroalaEditor = (await import('froala-editor/js/froala_editor.pkgd.min.js')).default;
      new FroalaEditor("#editor")
    })();
  }, [])

  return (
    <div id="editor" />
  )
}

export default Index;
 