import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import { Results } from "./Results";
import Layout from "../Layout";

// export const Routes = () => {
//   return (
//     <div className="p-4">
//       <Switch>
//         <Route exact path="/">
//           {/* <Redirect to="/search" /> */}
//           <Results />
//         </Route>
//         <Route exact path="/search">
//           <Results />
//         </Route>
//         <Route path="/images">
//           <Results />
//         </Route>
//         <Route path="/news">
//           <Results />
//         </Route>
//         <Route path="/videos">
//           <Results />
//         </Route>
//       </Switch>
//     </div>
//   );
// };
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="/" element={<Results />} />
      <Route path="/search" element={<Results />} />
      <Route path="/images" element={<Results />} />
      <Route path="/news" element={<Results />} />
      <Route path="/videos" element={<Results />} />
    </Route>
  )
);

export default router;
