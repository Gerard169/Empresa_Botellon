import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer/Footer";
import {
  Nosotros,
  Programas,
  Eventos,
  Blog,
  Galeria,
  Integracion,
  Faq,
  Help,
  Contacto,
  Donacion
} from "./pages";

import {
  Card,
  CardHeaderWithImage,
  CardBody,
  CardFooter
} from "./components/cards";
import { Counter } from "./components/counter/Counter";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/programas" element={<Programas />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/galeria" element={<Galeria />} />
          <Route path="/integracion" element={<Integracion />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/donacion" element={<Donacion />} />

        </Routes>
      </BrowserRouter>

      <main>
        <h1>hola</h1>
        <section className="flex gap-4">
          <Card>
            <CardHeaderWithImage
              imgUrl={"https://picsum.photos/id/40/200/300"}
              altText={"Demo de Imge Header"} />
            <CardBody>
              <strong>Esto es una descripcion</strong>
              <br />
              <p>Lorem Ipsum</p>
            </CardBody>
            <CardFooter>
              Voila
            </CardFooter>
          </Card>
        </section>
        <section className="flex flex-wrap gap-4">
          <Counter />
          <Counter />
          <Counter />
          <Counter />
          <Counter />
        </section>
      </main>
      <footer>
        derechos reservados
      </footer>
    </>
  )
}

export default App
