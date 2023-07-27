import { FC, Suspense, useEffect } from "react";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Modal } from "shared/ui/Modal/Modal";
import { useDispatch } from "react-redux";
import { userActions } from "entities/User";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

const App: FC = () => {
    const { theme } = useTheme();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={`app ${theme}`}>
            <Suspense fallback="">
                <Navbar />
                <Modal />
                <div className="content-page">
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
};

export default App;
