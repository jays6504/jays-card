import { LitElement, html, css } from 'lit';

export class JaysCard extends LitElement {

  static get properties() {
    return {
      version: { type: String, reflect: true },
    };
  }

  static get styles() {
    return css`
      .details
{
  visibility : hidden
}
.cardContainer
{
  display:flex;
  justify-content:space-between;
}
.card
{
  display : flex;
  flex-direction : column;
  justify-content: center;
  align-items : center;
  border: solid 5px;
  border-color : black;
  max-width:400px;
  background-color: #0E2B58;
  color : white;
}
h1
{
  text-align : center;
  margin : 10px;
}
a
{
  margin : auto;
  width : 100px;
}
img
{
  background-color : white;
  margin : 10px;
  margin-bottom: 0;
}
p
{
  margin-left: 15px
}
@media screen and (max-width:800px) and (min-width:500px)
{
  button
  {
    visibility : visible;
  }
}
@media screen and (max-width : 500px)
{
  #cardContainer
  {
    max-width:90%
  }
}

.newBackgroundColor
{
  background-color:red
}
    `;
  }

  constructor() {
    super();
    this.version = 'STARTING';
  }

  render() {
    return html`
     <div class="cardContainer"> 
  <div class="card">
    <div>
      <h1 class="heading">
        HAX THE WEB
      </h1>
    </div>
    <img src="https://hax.psu.edu/assets/HAXLogo.svg">
    <details>
    <summary>
      Image Source
  </summary>
  Hax logo taken directly from hax.psu.edu
  </details>
    <a href = "https://hax.psu.edu"><button class="details">
      Details
      </button></a>
   </div>
</div>
    `;
  }
}

customElements.define('jays-card', JaysCard);