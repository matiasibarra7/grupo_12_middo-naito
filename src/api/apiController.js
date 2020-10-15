const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const {product, user} = require("../../database/models");



const productsController = {
  products: (req, res) => {
    product.findAndCountAll({
      include: ['category','sizes'],
      limit: 10 ,
      offset: req.query.page? req.query.page * 10 : 0})
      .then(productsData => {
        const productsList = productsData.rows
        /* El include de sizes hace que el count de 'findAndCountAll' devuelva la cantidad de productos * 5, por eso esta división >.<* Verificar el porqué */
        const realCount = productsData.count / 5
        const actualPage = Number(req.query.page)

        // Cuenta elementos por categoria
        const categories = {}
        for (let i = 0; i < productsList.length; i++) {
          categories[productsList[i].category.name] = 1 + (categories[productsList[i].category.name] || 0);
        }

        const products = {
          meta: {
            count: realCount, 
            countByCategories: categories,
          },
          data: productsList
        }

        // Paginado
        if (!actualPage || actualPage == 0) {
          if (realCount > 10) {
            products.meta.next = `http://localhost:3000/api/products?page=${1}` 
          }
        } else {
          if (realCount > actualPage * 10 + 10) {
            products.meta.next = `http://localhost:3000/api/products?page=${actualPage + 1}`;
          }
          products.meta.previous = `http://localhost:3000/api/products${actualPage - 1 > 0? `?page=${actualPage - 1}` : ""}`
        }


        res.json(products)

      })
      .catch(error => {
        res.send(error)
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
