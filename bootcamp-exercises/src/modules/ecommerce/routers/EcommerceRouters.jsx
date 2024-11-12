import { BrowserRouter, Routes, Route } from "react-router-dom";

import Ecommerce from "../pages/Ecommerce";
import NotFound from "../../../common/pages/NotFound";

export default function EcommerceRouter() {
  return (
    <Routes>
      <Route path="/" element={<Ecommerce />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
