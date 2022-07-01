import React from 'react'



const Content = () => {
  return (
    <div  style={{textAlign: "center", margin: "5rem auto"}}>
    <h2>Informacion general</h2>
    <p>Nullam quis risus eget  vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
    <p><small>This line of text is meant to be treated as fine print.</small></p>
    <p>The following is <strong>rendered as bold text</strong>.</p>
    <p>The following is <em>rendered as italicized text</em>.</p>
    <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>

    <figure>
        <blockquote className="blockquote">
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
        
        </blockquote>
        <figcaption className="blockquote-footer">
            Someone famous in <cite title="Source Title">Source Title</cite>
        </figcaption>

    </figure> 
<ul className="list-group">
    <li className="list-group-item d-flex justify-content-between align-items-center">
        Cras justo odio
        <span className="badge bg-primary rounded-pill">14</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
        Dapibus ac facilisis in
        <span className="badge bg-primary rounded-pill">2</span>
    </li>
    <li className="list-group-item d-flex justify-content-between align-items-center">
        Morbi leo risus
        <span className="badge bg-primary rounded-pill">1</span>
    </li>
</ul>
</div>
  )
}

export default Content