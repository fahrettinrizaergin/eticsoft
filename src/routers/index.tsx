import {createHashRouter} from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout";
import DocsLayout from "../layouts/docsLayout";
import Index from "../pages";
//import Blogs from "../pages/blogs";
//import Blog from "../pages/blog";
//import News from "../pages/news";
//import NewsDetail from "../pages/newsDetail";
import Docs from "../pages/docs";
import About from "../pages/about";
import Contact from "../pages/contact";
import Products from "../pages/products";
import DocDetail from '../pages/docDetail';
import NotFound from "../pages/notfound";
import Partners from "../pages/partners";
import BlogsAndNews from "../pages/blogsAndNews.tsx";

// Define routes
const routes = [
 // { path: "/blogs", element: <Blogs /> },
 // { path: "/blogs/:id", element: <Blog /> },
 // { path: "/news", element: <News /> },
 // { path: "/news/:id", element: <NewsDetail /> },
  { path: "/", element: <Index /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/products", element: <Products /> },
  {path: "/partners", element: <Partners />},
  {path: "/content", element:<BlogsAndNews />},
  {path:"/:type/:id", element:<BlogsAndNews />}
];

const router = createHashRouter([
  {
    element: <DefaultLayout />,
    children: routes.map((route) => ({
      ...route,
      element: route.element,
    })),
    errorElement: <NotFound />
  },
  {
    path: "/docs",
    element: <DocsLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Docs />
      },
      {
        path: ":id",
        element: <DocDetail />
      }
    ]
  }
]);

export default router;
