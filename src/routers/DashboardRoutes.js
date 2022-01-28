import { Navbar } from "../components/ui/Navbar";

export const DashboardRoutes = () => {
  return <>
<Navbar/>
<Routes>
            <Route path="marvel" element={<MarvelScreen />} />
            <Route path="dc" element={<DcScreen />} />
            <Route path="search" element={<SearchScreen />} />
            <Route path="/" element={<MarvelScreen />} />
        </Routes>
  </>;
};