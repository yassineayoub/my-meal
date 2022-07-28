import './Section.css';

const Section = ({ children, title }) => {
  return (
    <section className="section__meal">
    <table >
    <thead className="section__header">
        <tr className="title">
          <th colSpan={4}>{title}</th>
        </tr>
        <tr>
          <th>Aliment</th>
          <th>Glucide</th>
          <th>Proteines</th>
          <th>Lipides</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>Carottes</td>
        <td>250</td>
        <td>10</td>
        <td>2</td>
      </tr>
      </tbody>
    </table>
      {children}
    </section>
  )
}

export default Section