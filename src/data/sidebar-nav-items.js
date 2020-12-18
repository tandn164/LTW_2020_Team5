
export default function() {
  return [
    {
      title: "Contest Dashboard",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/contest-dashboard",
    },
    {
      title: "Take a test",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/blog-posts",
    },
    {
      title: "Add New Contest (only for admin)",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/add-new-contest",
    },
    {
      title: "Forms & Components (use for dev)",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "User Dashboard",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-dashboard",
    },
  ];
}
