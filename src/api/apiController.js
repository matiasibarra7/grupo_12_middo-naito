const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {product, user} = require("../../database/models");



const apiController = {
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
          let productZip = {
            id: product.id,
            name: product.name,
            description: product.description,
            category: product.category,
            details: `${productUrl}/${product.id}`
          }
          return productZip
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
        // Metadata del paginado para la primer página
        if (!actualPage || actualPage == 0) {
          if (count > 10) {
            products.meta.next = `${productUrl}?page=${1}` 
          }
        } else {
          // Metadata del paginado para cualquier página, menos la última
          if (count > actualPage * 10 + 10) {
            products.meta.next = `${productUrl}?page=${actualPage + 1}`;
          }
          // Metadata del paginado para cualquier página, menos la primera
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
        res.json(response)
      })
  },

  users: (req, res) => {
    const actualPage = Number(req.query.page)
    const usersUrl = 'http://localhost:3000/api/users'
        
    if (actualPage < 0) {
      res.redirect(usersUrl)
    };

    user.findAndCountAll({
      limit: 10,
      offset: req.query.page? req.query.page * 10 : 0
    })
      .then(usersData => {
        // const usersList = usersData.rows
        
        const usersList = usersData.rows.map(
          user => {
            let userZip = {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
              details: `http://localhost:3000/api/users/${user.id}`
            }
            return userZip
          });

        let users = {
          meta: {
            count: usersData.count,
          },
          data: usersList
        }

        // Paginado
        // Metadata del paginado para la primer página
        if (!actualPage || actualPage == 0) {
          if (usersData.count > 10) {
            users.meta.next = `${usersUrl}?page=${1}` 
          }
        } else {
          // Metadata del paginado para cualquier página, menos la última
          if (usersData.count > actualPage * 10 + 10) {
            users.meta.next = `${usersUrl}?page=${actualPage + 1}`;
          }
          // Metadata del paginado para cualquier página, menos la primera
          users.meta.previous = `${usersUrl}${actualPage - 1 > 0? `?page=${actualPage - 1}` : ""}`
        }

        res.json(users)
      })
      .catch(error => {
        res.send(error)
      })
  },
  userDetails: (req, res) => {
    user.findOne({where: {id: req.params.id}})
    .then( usersData =>{
      if(usersData.image){
       usersData.dataValues.imageUrl = `http://localhost:3000/images/users/${usersData.image}`
      }
      res.json(usersData)
      })
  }
};

module.exports = apiController;
