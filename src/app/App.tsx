import { FC, Suspense, useEffect } from "react";

import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Modal } from "shared/ui/Modal/Modal";
import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";

const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    useEffect(() => {
        // throw new Error('');
    }, []);

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
