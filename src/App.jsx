import { Post } from "./Post";

export function App() {
  return (
    < div>
      <h1>App</h1>
      <Post
        autor="João"
        content="Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Eius natus nisi assumenda possimus beatae omnis iure distinctio, 
          amet tempore quae corrupti totam, ad illum cumque perferendis eos 
          voluptate dignissimos id."
      />
    </div>
  )
}