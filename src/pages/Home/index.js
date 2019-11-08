import React from 'react';

import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

export default function Home() {
    return (
        <ProductList>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/chuteira-campo-juvenil-adidas-nemeziz-19-3-fg/10/COL-7813-010/COL-7813-010_detalhe1.jpg?resize=280:280"
                    alt="Chuteira"
                />
                <strong>Chuteira</strong>
                <span>R$ 200,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/chuteira-campo-juvenil-adidas-nemeziz-19-3-fg/10/COL-7813-010/COL-7813-010_detalhe1.jpg?resize=280:280"
                    alt="Chuteira"
                />
                <strong>Chuteira</strong>
                <span>R$ 200,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/chuteira-campo-juvenil-adidas-nemeziz-19-3-fg/10/COL-7813-010/COL-7813-010_detalhe1.jpg?resize=280:280"
                    alt="Chuteira"
                />
                <strong>Chuteira</strong>
                <span>R$ 200,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>
            <li>
                <img
                    src="https://static.netshoes.com.br/produtos/chuteira-campo-juvenil-adidas-nemeziz-19-3-fg/10/COL-7813-010/COL-7813-010_detalhe1.jpg?resize=280:280"
                    alt="Chuteira"
                />
                <strong>Chuteira</strong>
                <span>R$ 200,00</span>

                <button type="button">
                    <div>
                        <MdAddShoppingCart size={16} color="#FFF" /> 3
                    </div>
                    <span>Adicionar ao Carrinho</span>
                </button>
            </li>
        </ProductList>
    );
}
