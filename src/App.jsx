import Nav from "./components/nav/Nav";
import { 
  Card,
  CardHeaderWithImage,
  CardBody,
  CardFooter
 } from "./components/cards";
import { Counter } from "./components/counter/Counter";

const links = [
  {
    text: "Home",
    href: "",
    classNames: []
  },
  {
    text: "SignUp",
    href: "",
    classNames: []
  },
  {
    text: "SingOut",
    href: "",
    classNames: []
  }
];

function App() {


  return (
    <>
      <header>
        <div>
          <h1>Brand Name</h1>
          <Nav>links={links}</Nav>
        </div>
      </header>
      <main>
        <h1>hola</h1>
        <section className="flex gap-4">
          <Card>
            <CardHeaderWithImage
             imgUrl={"https://picsum.photos/id/40/200/300"}
             altText={"Demo de Imge Header"}/>
            <CardBody>
              <strong>Esto es una descripcion</strong>
              <br/>
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
