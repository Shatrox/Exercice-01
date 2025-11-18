import style from './ListProduit.module.css'


function ProduitTableHeader() {

    return (
        <thead>
            <tr>
                <th>Name:</th>
                <th>Description:</th>
                <th>Price:</th>
                <th>On Sale:</th>
            </tr>
        </thead>
    )


}

function ProduitTableRows({ name, description, price, on_sale}) {

   

    return (
        <tr className={style['exercise-table']}>
            <td>{name}</td>
            <td>{description || '💥'}</td>
            <td className= {on_sale && style.red}>«{price.toFixed(2).toString().split(".").join(",")} €»</td>
            <td>{on_sale ? "Promo 🎊" : "💥"}</td>
        </tr>
    )

}








export default function ListProduit({ produits = [] }) {

    const produitJSX = produits.map(produit => (
    
    <ProduitTableRows key={produit.id} {...produit} />

    ));

    return (
        <table>
            <ProduitTableHeader />
            <tbody>{produitJSX}</tbody>
        </table>
    )

}