import React from 'react';
import { connect } from 'react-redux';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';
import { removeFromCart } from '../../store/modules/cart/actions';

function Cart({ cart, dispatch }) {
    return (
        <Container>
            <ProductTable>
                <thead>
                    <tr>
                        <th />
                        <th>PRODUTO</th>
                        <th>QTD</th>
                        <th>SUBTOTAL</th>
                        <th />
                    </tr>
                </thead>
                <tbody>
                    {cart.map(product => (
                        <tr key={product.id}>
                            <td>
                                <img src={product.image} alt={product.title} />
                            </td>
                            <td>
                                <strong>{product.title}</strong>
                                <strong>{product.priceFormatted}</strong>
                            </td>
                            <td>
                                <div>
                                    <button type="button">
                                        <MdRemoveCircleOutline
                                            size={20}
                                            color="#7151c9"
                                        />
                                    </button>
                                    <input
                                        type="number"
                                        readOnly
                                        value={product.amount}
                                    />
                                    <button type="button">
                                        <MdAddCircleOutline
                                            size={20}
                                            color="#7151c9"
                                        />
                                    </button>
                                </div>
                            </td>
                            <td>
                                <strong>R$ 500,00</strong>
                            </td>
                            <td>
                                <button
                                    type="button"
                                    onClick={() =>
                                        dispatch(removeFromCart(product.id))
                                    }
                                >
                                    <MdDelete size={20} color="#7159c1" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </ProductTable>
            <footer>
                <button type="button">Finalizar Pedido</button>
                <Total>
                    <span>Total</span>
                    <strong>R$ 1000,00</strong>
                </Total>
            </footer>
        </Container>
    );
}

const mapStateToProps = state => ({
    cart: state.cart,
});

export default connect(mapStateToProps)(Cart);
