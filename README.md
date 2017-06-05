# expedientes-es6

Expedientes, ES6, MongoDB & Express

#### Ejecutar aplicación

    npm start

## API

##### Crear un expediente

    [POST] /api/expedientes

    {
      "deudor": "Luiz Gillermo Sarmiento Aguilar"
    }

    Respuesta (201) Created

    {
      "deudor": "Luiz Gillermo Sarmiento Aguilar",
      "_id": "5928dff7e5124a42682d4819"
    }

##### Consultar los expedientes

    [GET] /api/expedientes

    Respuesta (200) OK

    [
      {
        "_id": "5928e14a5ee53a4425f8d2a7",
        "deudor": "Luiz Gillermo Sarmiento Aguilar"
      }
    ]

##### Consultar un expediente

    [GET] /api/expedientes/5928dff7e5124a42682d4819

    Respuesta (200) OK

    {
      "_id": "5928dff7e5124a42682d4819",
      "deudor": "Luiz Gillermo Sarmiento"
    }


##### Eliminar un expediente

    [DELETE] /api/expedientes/5928dff7e5124a42682d4819

    Respuesta (204) No Content


##### Modificar un expediente

    [POST] /api/expedientes/5928dff7e5124a42682d4819

    {
      "deudor": "Elliot Alderson"
    }

    Respuesta (200) OK

    {
      "deudor": "Elloit Alderson"
    }
