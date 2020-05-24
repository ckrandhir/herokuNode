1.Update your package.json section to:

"scripts": {
    "start": "node ./bin/www",
    "debug": "nodemon --inspect ./bin/www"
}

2.Replace content of the generated launch.json with the following two configurations:

{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "attach",
            "name": "Node: Nodemon",
            "processId": "${command:PickProcess}",
            "restart": true,
            "protocol": "inspector",
        },
    ]
}


3.