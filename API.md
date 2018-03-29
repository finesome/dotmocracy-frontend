### BOARD API

```
Path: /api/boards 
Method: GET
Returns:
    if user authenticated: 200 OK, [Object boards]
    otherwise: 401 Unauthorized
```
```
Path: /api/ 
Method: GET
Returns:
    if user authenticated: 200 OK, [Object ideas]
    otherwise: 401 Unauthorized
```

### AUTH API

```
Path: /api/user  
Method: GET
Params: null  
Returns:  
    if user is authenticated: 200 OK, [Object user]  
    otherwise: 401 Unauthorized  
```
```
Path: /api/user/login  
Method: POST  
Params: {username, password}  
Returns:  
    if credentials are correct: 200 OK, [Object user]  
    otherwise: 401 Unauthorized  
```
```
Path: /api/user/logout  
Method: POST
Params: null  
Returns:  
    200 OK, 500 Internal Server Error
```
```
Path: /api/user/register
Method: POST
Params: {username, password}
Returns:
    if registration is correct: 201 Created, [Object user]
    otherwise: 401 Unauthorized
```


