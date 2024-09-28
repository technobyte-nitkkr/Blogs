## Important!

This readme will help you to understand what to do

### Steps to setup:

1. cd `client`
2. `npm i`
3. `npm run dev`
4. in file explorer navigate to `client/src/pages/Blog`. This is the folder containing files where we will mainly code
5. Now since server is running go to `localhost:5173/blog/id`. This is the page which will be visible on the website. Code changes --> this changes
6. In the `SingleBlog.jsx` file, put every component, container, div tag inside `HomeLayout`, just like how it is now.
7. You might see the ugly `Header` and `Footer` text surrounding your code in the browser but ignore it. Since it will be created in other prs by other contributors.
8. This is the link to the figma file: [https://www.figma.com/design/lFxvV1Xk3lCmcnpZqSdbDD/Untitled?node-id=53-26&node-type=canvas&t=1ur3pl3Y5ZmZoFcn-0](https://www.figma.com/design/lFxvV1Xk3lCmcnpZqSdbDD/Untitled?node-id=53-26&node-type=canvas&t=1ur3pl3Y5ZmZoFcn-0)
9. Open the above link and look at the rightmost component. You will see something wiht the tag `Blog-preview`. This is the component that we need to make.

> Great! Now your project is setup, you know what to do and where to do. Now i had detailed out the next plans for our project down below. Read them.

### Steps to complete the issue

- [ ] Create the view blogs page -- Static
  - all the data will be static so no need to worry about how and where it will be coming from.
  - No need to worry about the header and footer. They will be made in other prs
  - To get the font, color etc click on the component in figma and you will see the same on the right side of page
- [ ] Ensure responsiveness of the page
  - after the static part is done we will look into the responsiveness of the page
  - for the responsiveness We will have a small meet for the same.
- [ ] Use the backend route to fetch the blogs
  - I will explain this in a meet