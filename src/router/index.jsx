export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/home",
        Component: Home,
      },
      {
        path:"/policy",
        Component: Privacy,
      },
      {
        path:"/register",
        Component: Register,
      },
      {
        path:"/validation",
        Component:Validation,
      },
      {
        path:"/login",
        Component:Login,
      },
      {
        path:"/gallery",
        Component: Gallery,
      },
      {
        path:"/info",
        Component:Detail,
      },
      {
        path:"/regArticle",
        Component:RegArticle,
      },
      {
        path:"/contact",
        Component:Contact,
      },
      {
        path:"/faqs",
        Component:Faqs,
      }
    ],
  },
]);
