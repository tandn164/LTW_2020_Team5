import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import BlogOverview from "./views/BlogOverview";
import UserProfileLite from "./views/UserProfileLite";
import AddNewPost from "./views/AddNewPost";
import Errors from "./views/Errors";
import ComponentsOverview from "./views/ComponentsOverview";
import Ranks from "./views/Ranks";
import BlogPosts from "./views/BlogPosts";
import TestProcessing from "./views/TestProcessing";
import RankDetail from "./views/RankDetail";
import Result from "./views/Result";
import ContestDashboard from "./views/ContestDashboard";
import ContestDetail from "./views/ContestDetail";
import NewContestPopup from "./components/common/NewContestPopupForm";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/blog-posts" />
  },
  {
    path: "/result",
    exact: true,
    layout: DefaultLayout,
    component: Result
  },
  {
    path: "/contest-dashboard",
    exact: true,
    layout: DefaultLayout,
    component: ContestDashboard
  },
  {
    path: "/test-processing",
    layout: DefaultLayout,
    component: TestProcessing
  },
  {
    path: "/blog-overview",
    layout: DefaultLayout,
    component: BlogOverview
  },
  {
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfileLite
  },
  {
    path: "/add-new-contest",
    layout: DefaultLayout,
    component: AddNewPost
  },
  {
    path: "/new-contest",
    layout: DefaultLayout,
    component: NewContestPopup
  },
  {
    path: "/contest-detail",
    layout: DefaultLayout,
    component: ContestDetail
  },
  {
    path: "/errors",
    layout: DefaultLayout,
    component: Errors
  },
  {
    path: "/components-overview",
    layout: DefaultLayout,
    component: ComponentsOverview
  },
  {
    path: "/rank",
    layout: DefaultLayout,
    component: Ranks
  },
  {
    path: "/rank-detail",
    layout: DefaultLayout,
    component: RankDetail
  },
  {
    path: "/blog-posts",
    layout: DefaultLayout,
    component: BlogPosts
  }
];
