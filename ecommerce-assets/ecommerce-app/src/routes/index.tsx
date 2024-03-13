import { Routes as RoutesDom, Route, BrowserRouter } from 'react-router-dom';

import { Home, Cart, ConfirmedOrder } from './../pages';

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesDom>
          <Route path="/" Component={Home} />
          <Route path="/carrinho" Component={Cart} />
          <Route path="/pedido-confirmado" Component={ConfirmedOrder} />
          <Route path="*" Component={Home} />
      </RoutesDom>
    </BrowserRouter>
  );
};

export default Routes;