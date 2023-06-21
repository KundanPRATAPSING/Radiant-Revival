# E-commerce

Precautions: 
If mongoose is suddenly shutting down then check if one of the program is already running:
        ps aux | grep mongod 
        pkill mongod
    This will kill the existing mongod and start a new one. To run use the command
        mongod --dbpath "./Path of the mongod directory"
