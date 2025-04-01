import config from "~/config";
// Import Pages

// Import Public Page
import Home from "~/pages/PublicPages/Home";

// Import Private Page

// Public routes
const publicRouters = [{ path: config.routes.home, component: Home }];

// Private routes
const privateRouters = [];

export { publicRouters, privateRouters };
