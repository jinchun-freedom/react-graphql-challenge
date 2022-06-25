import React from "react";

import { LaunchesView } from "views";

const routes = [
  {
    path: "/",
    renderer: (params = {}) => <LaunchesView {...params} />,
  },
];

export default routes;
