import React from 'react';
import {
    MdRemoveCircleOutline,
    MdAddCircleOutline,
    MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
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
                    <tr>
                        <td>
                            <img
                                src="https://static.netshoes.com.br/produtos/chuteira-campo-juvenil-adidas-nemeziz-19-3-fg/10/COL-7813-010/COL-7813-010_detalhe1.jpg?resize=280:280"
                                alt="Chuteira"
                            />
                        </td>
                        <td>
                            <strong>Chuteira</strong>
                            <strong>R$ 200,00</strong>
                        </td>
                        <td>
                            <div>
                                <button type="button">
                                    <MdRemoveCircleOutline
                                        size={20}
                                        color="#7151c9"
                                    />
                                </button>
                                <input type="number" readOnly value={1} />
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
                            <button type="button">
                                <MdDelete size={20} color="#7159c1" />
                            </button>
                        </td>
                    </tr>
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
