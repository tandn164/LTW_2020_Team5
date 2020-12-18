import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import UserProfileLite from "./views/UserProfileLite";
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
import UserDashboard from "./views/UserDashboard";


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
    path: "/user-dashboard",
    exact: true,
    layout: DefaultLayout,
    component: UserDashboard
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
    path: "/user-profile",
    layout: DefaultLayout,
    component: UserProfileLite
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
