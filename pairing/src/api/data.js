// This can be hard-coded and served by Redux

function data () {
  return {
    mattresses: {
      classic: {
        name: 'Saatva Classic',
        description: '<p>Luxury Hybrid Innerspring</p>',
        price: 999,
        reviewRating: 4
      },
      loom: {
        name: 'Loom & Leaf',
        description: '<p>Ultra-Premium Memory Foam</p>',
        price: 1299,
        reviewRating: 4.7
      },
      zen: {
        name: 'Zenhaven',
        description: '<p>100% Pure Talalay Latex</p>',
        price: 1599,
        reviewRating: 4.8
      }
    }
  }
}

export default data
