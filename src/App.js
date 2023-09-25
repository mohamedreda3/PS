import { Route, Routes } from 'react-router-dom';
import { routes } from './data/routes';
import './themes.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch, useSelector } from 'react-redux';
import { Icon } from '@iconify/react';
import languagesIcon from '@iconify/icons-lucide/languages';
import { updateLanguage } from './store/languageReducer';

function App() {
  const language = useSelector((state) => state.language.lang);
  if (language == "ar") {
    document.body.classList.add("ar");
  } else {
    document.body.classList.remove("ar");
  }
  const dispatch = useDispatch();
  return (
    <div className={language == 'ar' ? "app rtl" : "app ltr"}>
      <div
        className="laguageConverter"
        onClick={() => dispatch(updateLanguage(language == "ar" ? "en" : "ar"))}
      >
        <Icon icon={languagesIcon} color="white" />
      </div>
      <Routes>
        {routes.map((item, index) => {
          return <Route path={item.path} element={item.comonent} key={index} />;
        })}
      </Routes>
    </div>
  );
}

export default App;
