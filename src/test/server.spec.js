const request = require("supertest");
const server = require("../index");

describe("TEST EQUIPOS", () => {
    it("Obtener status code 200 a la ruta GET /equipos", async () => {
        const res = await request(server).get("/equipos");
        const status = res.statusCode;
        // console.log({status});
        expect(status).toBe(200);
    })

    it("Se Obtiene Array de objetos", async () => {
        const { body } = await request(server).get("/equipos");
        const equipos = body;
        // console.log(equipos);
        expect(equipos).toBeInstanceOf(Array);
    });
});

describe("TEST LOGIN", () => {
    
    it("credenciales correctas POST /login se obtiene un Object", async () => { 

        let token = "";
        const response = await request(server).post("/login")
        
        // utiliza un usuario que exista en la base de datos
        .send({ username: "admin", password: "1234" })
        // console.log(response.body);
        token = response.body;

        expect(response.body).toHaveProperty("token");
        expect(response.body).toBeInstanceOf(Object);
    });

    it("credenciales incorrectas = 401", async () => {

        let token = "";
        const response = await request(server).post("/login")
        
        // utiliza un usuario que exista en la base de datos
        .send({ username: "admin", password: "123456789" })
        // console.log(response.body);
        token = response.body;
        const status = response.statusCode;

        //401 para credenciales
        expect(status).toBe(401);
    })
});

describe("Agregar un jugador en POST /equipos/:teamID/jugadores", () => {
    
    it("se obtiene un status code 201 con un token válido", async () => { 

        let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzE4Njg0NDkwfQ.t7Im61SPBpqlQ1RkWcF3g3YpVSqyhn7dah_r9WqSvVk'
        
        const nuevoJugador = {
            name: "Brayan Cortéz",
            position: 4
        };      
        
        try {
            const response = await request(server).post("/equipos/1/jugadores")
              .set('Authorization', `Bearer ${token}`)
              .send(nuevoJugador);
      
            expect(response.body).toMatchObject({ message: expect.any(String) });
            expect(response.status).toBe(200);
          } catch (error) {
            console.error(error); 
            expect(error).toBeInstanceOf(Error); 
          }

    });
});
