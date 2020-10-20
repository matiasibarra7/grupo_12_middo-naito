const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {product, user} = require("../../database/models");



const productsController = {
  products: (req, res) => {
    const actualPage = Number(req.query.page)
    const productUrl = 'http://localhost:3000/api/products'
        
    if (actualPage < 0) {
      res.redirect(productUrl)
    }


    product.findAndCountAll({
      include: ['category'],
      limit: 10,
      offset: req.query.page? req.query.page * 10 : 0})
      .then(productsData => {
        const productsList = productsData.rows.map(product => {
          product.dataValues.details = `${productUrl}/${product.id}`;
          return product
        })

        const count = productsData.count
        
        // Cuenta elementos por categoria, solo esta funcionando con los 10 que trae
        const categories = {}
        for (let i = 0; i < productsList.length; i++) {
          categories[productsList[i].category.name] = 1 + (categories[productsList[i].category.name] || 0);
        }

        const products = {
          meta: {
            count: productsData.count, 
            countByCategories: categories,
          },
          data: productsList
        }

        // Paginado
        if (!actualPage || actualPage == 0) {
          if (count > 10) {
            products.meta.next = `${productUrl}?page=${1}` 
          }
        } else {
          if (count > actualPage * 10 + 10) {
            products.meta.next = `${productUrl}?page=${actualPage + 1}`;
          }
          products.meta.previous = `${productUrl}${actualPage - 1 > 0? `?page=${actualPage - 1}` : ""}`
        }

        res.json(products)

      })
      .catch(error => {
        res.send(error)
      })
  },

  productsDetails: (req, res) => {
    product.findOne({
      include: ['category','sizes'],
      where: {id: req.params.id}
    })
      .then(response => {
        response.dataValues.imageUrl = `http://localhost:3000/images/products/${response.image}`
        console.log(response)
        res.json(response)
      })
  },

  users: (req, res) => {
    user.findAndCountAll()
      .then(usersData => {
        const usersList = usersData.rows


        let users = {
          meta: {
            count: usersData.count,
          },
          data: usersList
        }

        res.json(users)
      })
      .catch(error => {
        res.send(error)
      })
  }
};

module.exports = productsController;
