//Name: Thiri Lae Win
//Class: DIT/1B/10
//Admin No: 2340739
const priceTemplate = document.createElement('template');

priceTemplate.innerHTML = `
    <style>
        :host {
            display : block;
            border-style: solid black;
            font-family: Garamond, serif;
            background-color : white;
            
        }
        div {
            padding : 0px 30px;
        }
        h3 {
            font-size : 2rem;
        }
        h5 {
            font-size : 1rem;
        }
    </style>
    <div>
        <h3 id='flat_type'>Flat Type GOES HERE</h3>
        <hr>
        <h5>Highest Price: <span id='highestprice'>Highest Price</span></h5>
        <h5>Lowest Price: <span id='lowestprice'>Lowest Price</span></h5>
    </div>
`;
class PriceCard extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        let clone = priceTemplate.content.cloneNode(true);
        this.root.append(clone);
    }

    static get observedAttributes() {
        return ['flat_type', 'highestprice', 'lowestprice'];
    }

    get flat_type() {
        return this.getAttribute('flat_type');
    }
    set flat_type(value) {
        this.setAttribute('flat_type', value);
    }

    get highestprice() {
        return this.getAttribute('highestprice');
    }
    set highestprice(value) {
        this.setAttribute('highestprice', value);
    }

    get lowestprice() {
        return this.getAttribute('lowestprice');
    }
    set lowestprice(value) {
        this.setAttribute('lowestprice', value);
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        attrName = attrName.toLowerCase();
        let element;
        switch (attrName) {
            case 'flat_type':
                element = this.root.querySelector('#flat_type');
                element.textContent = newValue;
                break;
            case 'highestprice':
                element = this.root.querySelector('#highestprice');
                element.textContent = newValue;

                break;
            case 'lowestprice':
                element = this.root.querySelector('#lowestprice');
                element.textContent = newValue;
                break;
        }
    }

}

window.customElements.define('price-card', PriceCard);

const meanMedianTemplate = document.createElement('template');

meanMedianTemplate.innerHTML = ` 
    <style>
        :host {
            display : block;
            border-style: solid black;
            font-family: Garamond, serif;
            background-color : white;
        }
        div {
            padding : 0px 30px;
        }
        h3 {
            font-size : 2rem;
        }
        h5 {
            font-size : 1rem;
        }
    </style>
    <div>
        <h3 id='flat_type'>Flat Type GOES HERE</h3>
        <hr>
        <h5>Mean Price: <span id='meanprice'>Mean Price</span></h5> 
        <h5>Median Price: <span id='medianprice'>Median Price</span></h5> 
    </div>
`;

class PriceMeanMedianCard extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        let clone = meanMedianTemplate.content.cloneNode(true);
        this.root.append(clone);
    }

    static get observedAttributes() {
        return ['flat_type', 'meanprice', 'medianprice'];
    }

    get flat_type() {
        return this.getAttribute('flat_type');
    }
    set flat_type(value) {
        this.setAttribute('flat_type', value);
    }

    get meanprice() {
        return this.getAttribute('meanprice');
    }
    set meanprice(value) {
        this.setAttribute('meanprice', value);
    }

    get medianprice() {
        return this.getAttribute('medianprice');
    }
    set medianprice(value) {
        this.setAttribute('medianprice', value);
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        attrName = attrName.toLowerCase();
        let element;
        switch (attrName) {
            case 'flat_type':
                element = this.root.querySelector('#flat_type');
                element.textContent = newValue;
                break;
            case 'meanprice':
                element = this.root.querySelector('#meanprice');
                element.textContent = newValue;

                break;
            case 'medianprice':
                element = this.root.querySelector('#medianprice');
                element.textContent = newValue;
                break;
        }
    }

}

window.customElements.define('price-mean-median-card', PriceMeanMedianCard);

const detailsTemplate = document.createElement('template');

detailsTemplate.innerHTML = ` 
    <style>
        :host {
            display : block;
            border-style: solid black;
            font-family: Garamond, serif;
            background-color : white;
        }
        div {
            padding : 0px 30px;
        }
        h3 {
            font-size : 2rem;
        }
        h5 {
            font-size : 1rem;
        }
    </style>
    <div>
        <h3 id='flat_type'>Flat Type GOES HERE</h3>
        <hr>
        <h5>Largest Floor Area: <span id='largestfloorarea'>largestFloorArea</span></h5> 
        <h5>Smallest Floor Area: <span id='smallestfloorarea'>smallestfloorarea</span></h5> 
    </div>
`;
class DetailsCard extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: 'closed' });
        let clone = detailsTemplate.content.cloneNode(true);
        this.root.append(clone);
    }

    static get observedAttributes() {
        return ['flat_type', 'smallestfloorarea', 'largestfloorarea'];
    }

    get flat_type() {
        return this.getAttribute('flat_type');
    }
    set flat_type(value) {
        this.setAttribute('flat_type', value);
    }

    get smallestfloorarea() {
        return this.getAttribute('smallestfloorarea');
    }
    set smallestfloorarea(value) {
        this.setAttribute('smallestfloorarea', value);
    }

    get largestfloorarea() {
        return this.getAttribute('largestfloorarea');
    }
    set largestfloorarea(value) {
        this.setAttribute('largestfloorarea', value);
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        let element;
        switch (attrName) {
            case 'flat_type':
                element = this.root.querySelector('#flat_type');
                element.textContent = newValue;
                break;
            case 'smallestfloorarea':
                element = this.root.querySelector('#smallestfloorarea');
                element.textContent = newValue;
                break;
            case 'largestfloorarea':
                element = this.root.querySelector('#largestfloorarea');
                element.textContent = newValue;
                break;
        }
    }
}

window.customElements.define('details-card', DetailsCard);
