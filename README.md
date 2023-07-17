# uchile-bootcamp-backend

## Ayundantia-01

### Crear ambiente de trabajo

- Crear index.html
- Apuntar al archivo main.js
- Ejecutar en el terminal: `tsc --init`
- Crear carpeta ejercicios

### Modificar tsconfig.json

Modificar solo los valores de:

```json
{
  "compilerOptions": {
    :
    :
    "module": "AMD",
    :
    :
    "outFile": "./main.js",
    :
    :
  },
  include": [
    "./ejercicios/**/*"
  ],
  "exclude": []
}
```

### Iniciar servidor

- Ejecutar en el terminal: `tsc -w`
- Verificar que se haya creado el archivo main.js
- Abrir el archivo index.html en el navegador
- Abrir la consola del navegador
- Verificar que se haya impreso en consola la información

## Ejercicios

- En el archivo `ejercicios.txt` se encuentran los enunciados.
- Crear un archivo dentro de la carpeta `ejercicios` para cada uno de los enunciados de solicitados.
