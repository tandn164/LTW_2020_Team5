
export default function() {
  return [
    {
      title: "Main Dashboard (only for admin)",
      to: "/blog-overview",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
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
      title: "Rank",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/rank",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile",
    },
    {
      title: "Errors (use for dev)",
      htmlBefore: '<i class="material-icons">error</i>',
      to: "/errors",
    }
  ];
}
