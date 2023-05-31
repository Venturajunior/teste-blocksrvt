import React from "react";
import { Route, Routes } from 'react-router-dom';
import { Home } from "../../pages/Home";
import { ROUTES_PATH } from "../../constants/routes";

export const RoutesApp: React.FC = () => {
    return (
        <Routes>
            <Route index path={ROUTES_PATH.HOME} Component={Home} />
        </Routes>
    )
}