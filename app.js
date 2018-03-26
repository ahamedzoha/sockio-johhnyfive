const express = require('express');
const io = require('socket.io');
const five = require('johnny-five');

//Manually specified port, as five fails to detect correct port automatically
const board = new five.Board({port:"COM3"})

