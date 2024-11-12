fetch("card.json")
.then(response => response.json())
.then(data => displayCards(data))

const container = document.getElementById('card_1')

function displayCards(data){
    for (const card of data) {
        let cards = document.createElement('div')
        cards.classList.add('card')

        let title = document.createElement('h1')
        title.textContent = card.title
        cards.appendChild(title)

        let description = document.createElement('p')
        description.textContent = "description: " + card.description
        cards.appendChild(description)

        let cost = document.createElement('p')
        cost.textContent= 'cost: '+ card.cost
        cards.appendChild(cost)
        
        let discount = document.createElement('p')
        discount.textContent= "Discount: "+ card.discount
        cards.appendChild(discount)

        container.appendChild(cards)
    }
}