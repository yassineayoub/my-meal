import Aliment from './Aliment/Aliment';
import './Section.css';

const Section = ({ title, aliments }) => {
  const alimentsToDisplay = aliments.map((aliment) => <Aliment key={aliment.id}{...aliment} />)
  
  return (
    <section className="section__meal">
      <table className="table table-striped mw-80 caption-top">
      <caption className="fs-4 fw-bold">{title}</caption>
      <thead className="section__header table-light">
          <tr>
            <th>Aliment</th>
            <th>Proteines</th>
            <th>Glucide</th>
            <th>Lipides</th>
            <th>Quantité(g)</th>
          </tr>
        </thead>
        <tbody>
        {alimentsToDisplay}
        <tr>
          <td>Carottes</td>
          <td>250</td>
          <td>10</td>
          <td>2</td>
          <td>250g</td>
        </tr>
        <tr>
          <td>Carottes</td>
          <td>250</td>
          <td>10</td>
          <td>2</td>
          <td>250g</td>
        </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Section