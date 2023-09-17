import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App.tsx";
import {
  ActionFunctionArgs,
  LoaderFunction,
  ParamParseKey,
  Params,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Post from "./components/Post/Post.tsx";
import Posts from "./components/Posts/Posts.tsx";
import axios from "./lib/axios";

export interface PostResponse {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export async function getPosts(id: string) {
  try {
    const { data } = await axios.get<PostResponse>("/posts/" + id);
    console.log(`post ${id} fetched`, data);
    return data;
  } catch (err) {
    console.log(`Error while fetching post ${id}`);
  }
}

const PathNames = {
  postDetail: "posts/:id",
} as const;

interface Args extends ActionFunctionArgs {
  params: Params<ParamParseKey<typeof PathNames.postDetail>>;
}

export async function postLoader({ params }: Args) {
  return await getPosts(params.id || "0");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>ERROR Root!</div>,
    children: [
      {
        index: true,
        element: <Posts />,
      },
      {
        path: "posts/:id",
        loader: postLoader as LoaderFunction,
        element: <Post />,
        errorElement: <div>ERROR post detail!</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
