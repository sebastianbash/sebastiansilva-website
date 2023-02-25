import React, { Suspense, lazy } from "react";
import "./home.css";
import Header from "../../components/ui/Header/Header";

// Lazy loads these components in
const DevPortfolio = lazy(() =>
  import("../../components/home/DevPortfolio/DevPortfolio")
);
// const HomeArticleContainer = lazy(() =>
//   import("../../components/home/HomeArticleContainer/HomeArticleContainer")
// );
// const DesignPortfolio = lazy(() =>
//   import("../../components/home/DesignPortfolio/DesignPortfolio")
// );

function Home() {
  return (
    <>
      <Header
        backWord="FRONT-END"
        title="¡Hola! Soy Sebastian Silva"
        subTitleOne={`Me apasiona crear páginas/aplicaciones rápidas y  únicas para internet.`}
      />

      <Suspense fallback={<div>Cargando…</div>}>
        <DevPortfolio />
      </Suspense>
    </>
  );
}

export default Home;
