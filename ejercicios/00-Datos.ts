(() => {
  enum Categoria {
    TECNOLOGIA = 'Tecnologia',
    LIBROS = 'Libros',
    ROPA = 'Ropa',
    PERFUMES = 'Perfumes'
  }

  type Producto = {
    id: number,
    nombre: string,
    precio: number,
    stock: number,
    categoria: Categoria
  };

  const listaProductos: Producto[] = [
    {
      id: 1, nombre: 'Laptop Lenovo', precio: 12016, stock: 11, categoria: Categoria.TECNOLOGIA
    }, {
      id: 2, nombre: 'Mouse Logitech', precio: 17102, stock: 10, categoria: Categoria.TECNOLOGIA
    }, {
      id: 3, nombre: 'Teclado Logitech', precio: 16278, stock: 27, categoria: Categoria.TECNOLOGIA
    }, {
      id: 4, nombre: 'Audífonos Sony', precio: 13422, stock: 42, categoria: Categoria.TECNOLOGIA
    }, {
      id: 5, nombre: 'Camara Canon', precio: 10352, stock: 35, categoria: Categoria.TECNOLOGIA
    }, {
      id: 6, nombre: 'Libro de programacion', precio: 19484, stock: 48, categoria: Categoria.LIBROS
    }, {
      id: 7, nombre: 'Libro de cocina', precio: 18934, stock: 93, categoria: Categoria.LIBROS
    }, {
      id: 8, nombre: 'Libro de matematicas', precio: 15894, stock: 89, categoria: Categoria.LIBROS
    }, {
      id: 9, nombre: 'Libro de historia', precio: 11386, stock: 38, categoria: Categoria.LIBROS
    }, {
      id: 10, nombre: 'Camisa Tommy', precio: 18306, stock: 30, categoria: Categoria.ROPA
    }, {
      id: 11, nombre: 'Camisa Nike', precio: 13323, stock: 32, categoria: Categoria.ROPA
    }, {
      id: 12, nombre: 'Camisa Adidas', precio: 13358, stock: 35, categoria: Categoria.ROPA
    }, {
      id: 13, nombre: 'Camisa Puma', precio: 16894, stock: 89, categoria: Categoria.ROPA
    }, {
      id: 14, nombre: 'Camisa Umbro', precio: 17162, stock: 16, categoria: Categoria.ROPA
    }, {
      id: 15, nombre: 'Camisa Reebok', precio: 12012, stock: 61, categoria: Categoria.ROPA
    }, {
      id: 16, nombre: 'Perfume 212', precio: 16072, stock: 87, categoria: Categoria.PERFUMES
    }, {
      id: 17, nombre: 'Perfume Hugo Boss', precio: 14405, stock: 40, categoria: Categoria.PERFUMES
    }, {
      id: 18, nombre: 'Perfume Carolina Herrera', precio: 19828, stock: 82, categoria: Categoria.PERFUMES
    }, {
      id: 19, nombre: 'Perfume Paco Rabanne', precio: 11132, stock: 13, categoria: Categoria.PERFUMES
    }, {
      id: 20, nombre: 'Perfume Dolce & Gabbana', precio: 17614, stock: 61, categoria: Categoria.PERFUMES
    }
  ];
  console.log("Lista de Productos:");
  console.log(listaProductos);
})()