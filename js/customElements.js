//Functions
function DefaultClickToLink(link)
{
  window.location.href = link;
}

//Elements
class EasyHeader extends HTMLElement
{
  constructor()
  {
    super();
  }

  connectedCallback()
  {
    if(this.getAttribute('eh-color') !== null)
    {
      this.style.color = this.getAttribute('eh-color');
    }
    else
    {
      this.style.color = "black";
    }
    if(this.getAttribute('eh-size') !== null)
    {
      this.style.fontSize = this.getAttribute('eh-size');
      if(this.getAttribute('eh-size') === "title")
      {
        this.style.fontSize = "80px";
      }
      else if(this.getAttribute('eh-size') === "subtitle")
      {
        this.style.fontSize = "30px";
      }
      else if(this.getAttribute('eh-size') === "header")
      {
        this.style.fontSize = "40px";
      }
    }
    else
    {
      this.style.fontSize = '50px';
    }
  }

  disconnectedCallback()
  {
    this.style.color = 'black';
    this.style.fontSize = '50px';
  }

  static get observedAttributes()
  {
    //eh-secret-text: Hidden text that is only accessible through the attribute 'eh-secret-text'
    //eh-size: Size of the EasyHeader, can be set to any acceptable CSS value or one of the predefined ones ("title", "subtitle", and "header").
    //eh-color: Color of EasyHeader, can be set to any acceptable CSS value.
    //eh-name: A non-necessary attribute that substitutes the "id" attribute.
    return ['eh-secret-text', 'eh-size', 'eh-color', 'eh-name'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    
  }

  adoptedCallback()
  {
    
  }
}
class EasyParagraph extends HTMLElement
{
  constructor()
  {
    super();
  }

  connectedCallback()
  {
    this.id = this.getAttribute('ep-name');
    if(this.getAttribute('ep-color') !== null)
    {
      this.style.color = this.getAttribute('eh-color');
    }
    else
    {
      this.style.color = "black";
    }
    if(this.getAttribute('ep-size') !== null)
    {
      this.style.fontSize = this.getAttribute('ep-size');
      if(this.getAttribute('ep-size') === "large-text")
      {
        this.style.fontSize = "30px";
      }
      else if(this.getAttribute('ep-size') === "regular-text")
      {
        this.style.fontSize = "20px";
      }
      else if(this.getAttribute('ep-size') === "small-text")
      {
        this.style.fontSize = "10px";
      }
    }
    else
    {
      this.style.fontSize = '20px';
    }
  }

  disconnectedCallback()
  {
    this.style.color = 'black';
    this.style.fontSize = '50px';
  }

  static get observedAttributes()
  {
    //eh-secret-text: Hidden text that is only accessible through the attribute 'eh-secret-text'
    //eh-size: Size of the EasyHeader, can be set to any acceptable CSS value or one of the predefined ones ("title", "subtitle", and "header").
    //eh-color: Color of EasyHeader, can be set to any acceptable CSS value.
    //eh-name: A non-necessary attribute that substitutes the "id" attribute.
    return ['ep-link', 'ep-size', 'ep-color', 'ep-name'];
  }

  attributeChangedCallback(name, oldValue, newValue)
  {
    //document.getElementById(this.id).onclick = new DefaultClickToLink(this.getAttribute('ep-link'));
  }

  adoptedCallback()
  {
    
  }
}

//Define Elements
customElements.define("easy-header", EasyHeader);
customElements.define("easy-paragraph", EasyParagraph);