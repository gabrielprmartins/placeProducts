export const BASE_URL = "https://fakestoreapi.com";

export function USER_LOGIN(body) {
  return {
    url: BASE_URL + "/auth/login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
  };
}

export function USER_ADD(body) {
  return {
    url: BASE_URL + "/users",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: {
        email: body.email,
        username: body.username,
        password: body.password,
        name: {
          firstname: body.firstname,
          lastname: body.lastname
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496"
          }
        },
        phone: "1-570-236-7033"
      }
    }
  };
}

// export USER_GET() {

// }
