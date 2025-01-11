import "./App.css";
import Categories from "./components/Categories";
import Header from "./components/Header";
import PizzaBlock from "./components/PizzaBlock";
import Sort from "./components/Sort";
import "./scss/app.scss";
import pizzas from "./assets/pizzas.json";

function App() {
  console.log(pizzas.imageUrl);
  return (
    <>
      <div className="wrapper">
        <Header></Header>
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories></Categories>
              <Sort></Sort>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((pizza) => (
                <PizzaBlock
                  types={pizza.types}
                  size={pizza.sizes}
                  price={pizza.price}
                  title={pizza.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
