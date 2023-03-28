import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { isDarkState } from "store/atoms";
import { GlobalStyle, defaultTheme, darkTheme } from "styles/theme";
import Login from "routes/Login";
import Searched from "routes/Searched";
import Category from "routes/Category";
import MyPost from "routes/MyPost";
import Bookmark from "routes/Bookmark";
import Admin from "routes/Admin";
import AdminCategory from "routes/AdminCategory";
import Write from "routes/Write";
import Deatil from "routes/Detail";

const App = () => {
  const isDark = useRecoilValue(isDarkState);
  return (
    <>
      <ThemeProvider theme={isDark ? darkTheme : defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Routes>
            <Route path="/bookmark" element={<Bookmark />}>
              <Route path=":folderName" element={<Bookmark />} />
            </Route>
            <Route path="/mypage/posts" element={<MyPost />} />
            <Route path="/category/:categoryName" element={<Category />} />
            <Route path="/search" element={<Searched />} />
            <Route path="/login" element={<Login />} />
            <Route path="/write" element={<Write />} />
            <Route path="/detail" element={<Deatil />} />
            <Route path="/admin" element={<Admin />}>
              <Route path="category" element={<AdminCategory />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
