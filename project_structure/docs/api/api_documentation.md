POST /api/auth/register { name, email, password }
POST /api/auth/login { email, password } -> { token }


POST /api/tickets (multipart/form-data) headers: Authorization: Bearer <token>
fields: title, description, latitude, longitude, address
files: media[] (até 5)


GET /api/tickets -> lista (opções: near_lat, near_lng, radius_km)
GET /api/tickets/:id -> detalhe
PUT /api/tickets/:id/status headers: Authorization: Bearer <token>
body: { status }