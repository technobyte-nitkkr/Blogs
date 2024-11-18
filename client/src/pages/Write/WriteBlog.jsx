import { useRef, useState } from "react";
import "@mdxeditor/editor/style.css";
import {
  MDXEditor,
  headingsPlugin,
  quotePlugin,
  UndoRedo,
  BoldItalicUnderlineToggles,
  toolbarPlugin,
  BlockTypeSelect,
  CodeToggle,
  CreateLink,
  DiffSourceToggleWrapper,
  InsertCodeBlock,
  InsertFrontmatter,
  InsertImage,
  InsertSandpack,
  InsertTable,
  InsertThematicBreak,
  ListsToggle,
} from "@mdxeditor/editor";

import "@mdxeditor/editor/style.css";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

export default function WriteBlog() {
  // TODO: check of id in useParams. if id found, check the user if user have enough rights then allow the user to edit this blog send update/create request accordingly to the backend server

  // Declare a state to store the value of the editor
  const [md, setMd] = useState("Welcome to Techno Blogs");

  const ref = useRef(null);

  // Add key up event listener to the editor
  // This will help us to get the current value of the editor

  const handleChange = () => {
    setMd(ref.current.getMarkdown());
    // console.log(md)
    // TODO: Make a request to the server to save the blog content (add a Debounce function to avoid multiple requests)
  };

  return (
    <>
	  <Navbar />
      {/* TODO: Add A Header (I Dont know Which one) */}
      <div className="h-[80svh]">
        <MDXEditor
          className="bg-white h-full"
          ref={ref}
          markdown={md}
          plugins={[
            headingsPlugin(),
            quotePlugin(),
            toolbarPlugin({
              toolbarClassName: "my-classname",
              toolbarContents: () => (
                <>
                  {" "}
                  <UndoRedo />
                  <BoldItalicUnderlineToggles />
                  <BlockTypeSelect />
                  <CodeToggle />
                  <CreateLink />
                  <DiffSourceToggleWrapper />
                  <InsertCodeBlock />
                  <InsertFrontmatter />
                  <InsertImage />
                  <InsertSandpack />
                  <InsertTable />
                  <InsertThematicBreak />
                  <ListsToggle />
                </>
              ),
            }),
          ]}
          onChange={handleChange}
        />
      </div>
      <Footer />
    </>
  );
}
