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
import Header from "../../components/Header";

export default function WriteBlog() {
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
			<Header />
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
